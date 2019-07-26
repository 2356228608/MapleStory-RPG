
        /*  This is mada by 娜娜    
         *  This source is made by BMS Team
         *  功能：彩票系统
         *  @Author 娜娜 
         */
        var status = 0;
var icon = "#fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#";
var iconl = "#fUI/UIWindow2.img/Megaphone/0#";
var kaihu = 3000;//点卷
var rihuan = 10000;//一次最多兑换的股票币

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
//" + cm.getClubMoney() + "
//获取货币数量
//图标： + icon + ;   + iconl + 
//\r\n#r#L1#我要兑换彩币!#l 
            if (cm.isRegistedlottery() == true) {
                var text = "#b亲爱的#r#h ##b你好，这里是彩票系统！最新上线的彩票系统，更多福利功能等待小伙伴们来体验！\r\n#r你当前[单选球]彩票号为:" + cm.getlottery(1) + "号\r\n#r你当前[双色球]彩票号为:" + cm.getlottery(2) + " " + cm.getlottery(3) + " " + cm.getlottery(4) + " " + cm.getlottery(5) + " " + cm.getlottery(6) + " " + cm.getlottery(7) + " " + cm.getlottery(8) + "号\r\n#b请选择你需要的功能：\r\n#r#L2#我要打开彩票系统!#l #L3#我要领取中奖#l\r\n";
            }
            if (cm.isRegistedlottery() != true) {
                var text = "#b亲爱的#r#h ##b你好，这里是彩票系统！最新上线的彩票系统，更多福利功能等待小伙伴们来体验！\r\n#r你当前还不是彩票用户哦！只有加入彩票用户才能使用彩票系统！\r\n#b请选择你需要的功能：#r\r\n#L0#我要成为" + cm.getServerName() + "彩票用户!\r\n";
            }
            cm.askMenu(text);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    typed = 2;
                    var text1 = "是否确定#r成为彩票用户#b？（开户费用：#r" + kaihu + "点卷#b）";
                    cm.askYesNo(text1);
                    break;
                case 1:
                    typed = 3;
                    cm.askNumber("请输入你要兑换的货币，兑换比例是#r100#k抵用卷=#r1股票币#k。每次最多可以兑换10000股票币。#k", 0, 0, 10000);
                    break;
                case 2:
                    typed = 11;
                    cm.askMenu("#b\r\n\r\n\t\t\t请选择你要的功能：\r\n\t#r#L11#购买彩票!#l\t\t\t");
                    //#r#L22#卖出彩票!\r\n\r\n
                    break;
                case 3:	//领取奖励
                    typed = 4;
                    cm.dispose();
                    cm.openNpc(9900004, 103);
                    break;
            }
        } else if (status == 2) {
            if (typed == 2) {
                //if(cm.getPlayer().getMeso() < (100000000) && typed != 3){
                if (cm.getPlayer().getCSPoints(1) < (kaihu) && typed != 3) {
                    cm.askMenu("对不起，您的点卷不足！");
                    cm.dispose();
                } else if (typed != 3) {
                    cm.gainNX(1, -kaihu);
                    cm.registlottery();
                    cm.worldSpouseMessage(0x24, "★★★★★★★『彩票系统』：【" + cm.getChar().getName() + "】 在" + cm.getServerName() + " 成功成为彩票用户!★★★★★★★");
                    cm.askMenu("您已开户成功！");
                    cm.dispose();
                }
            }
            if (typed == 3) {
                typed = 4;
                fee = selection;
                selectedpay = 100 * fee;
                cm.askYesNo("你确定要兑换 #r" + fee + "#k彩票币吗?\r\n这需要花费你#r" + selectedpay + "抵用卷！");
            }
            if (typed == 11) {
                switch (selection) {
                    case 11:
                        typed = 111;
                        cm.askMenu("\t\t\t\t#b请选择要购买的彩票:\r\n#L111#简单:单选球\r\n#L222#困难:双色球");

                        //cm.askMenu("\t\t\t\t#b请选择要购买的彩票:\r\n#L111#单选球：#r剩余" + cm.getStockAmount(1) + "#l\r\n#b#L222#喵喵有限公司:#r剩余" + cm.getStockAmount(2) + "#l\r\n#b#L333#婷婷有限公司：#r剩余" + cm.getStockAmount(3));
                        //cm.dispose();
                        //cm.openNpc(9900004,103);

                        break;
                    case 22:
                        typed = 222;
                        cm.askMenu("\t\t\t\t#b请选择要卖出股票:\r\n#L111#娜娜有限公司：#r拥有" + cm.getStock(1) + "#l\r\n#b#L222#喵喵有限公司:#r拥有" + cm.getStock(2) + "#l\r\n#b#L333#婷婷有限公司：#r拥有" + cm.getStock(3));
                        break;
                }
            }
        } else if (status == 3) {
            if (typed == 4) {
                if (fee <= 0 || fee > rihuan || fee % 1 != 0) {
                    cm.sendOk("请重新输入，一次最多兑换" + rihuan + "股票币。");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(2) < selectedpay) {
                    cm.sendOk("抱歉，你没足够的抵用卷！\r\n");
                    cm.dispose();
                } else {
                    cm.gainlotteryMoney(+fee);
                    cm.gainNX(0, -selectedpay);
                    cm.sendOk("恭喜您,兑换成功！");
                    cm.dispose();
                }
            }
            if (typed == 111) {
                switch (selection) {
                    case 111:
                        typed = 1111;
                        cm.askNumber("请输入你要买入的彩票号码1-20号，购买比例是1000点卷:1张彩票,目前每个角色只能买一张彩票哦,\r\n多次购买只会记录最后一次购买的号码#k。。#k", 0, 0, 30);
                        break;
                    case 222:
                        typed = 2222;
                        cm.dispose();
                        cm.openNpc(9900004, 104);
                        //cm.askNumber("请输入你要买入的股票，购买比例是#r" +cm.getStockPrice(2) + "#k股票币=#r1股喵喵有限公司#k。每次最多可以买入500股。#k", 0, 0, 30);
                        break;
                    case 333:
                        typed = 3333;
                        cm.askNumber("请输入你要买入的股票，购买比例是#r" + cm.getStockPrice(3) + "#k股票币=#r1股婷婷有限公司#k。每次最多可以买入500股。#k", 0, 0, 30);
                        break;
                }
            }
            if (typed == 222) {
                switch (selection) {
                    case 111:
                        typed = 11111;
                        cm.askNumber("请输入你要卖出的股票，卖出比例是1股娜娜有限公司=" + cm.getStockPrice(1) + "#k股票币#k。每次最多可以卖出500股。#k", 0, 0, 500);
                        break;
                    case 222:
                        typed = 22222;
                        cm.askNumber("请输入你要卖出的股票，卖出比例是1股喵喵有限公司=" + cm.getStockPrice(2) + "#k股票币#k。每次最多可以兑换500股。#k", 0, 0, 500);
                        break;
                    case 333:
                        typed = 33333;
                        cm.askNumber("请输入你要卖出的股票，卖出比例是1股婷婷有限公司=" + cm.getStockPrice(3) + "#k股票币#k。每次最多可以兑换500股。#k", 0, 0, 500);
                        break;
                }
            }
        } else if (status == 4) {
            if (typed == 11111) {
                fee = selection;
                selectedpay = cm.getStockPrice(1) * fee;
                if (fee <= 0 || fee > 500 || fee % 1 != 0) {
                    cm.sendOk("请重新输入，一次最多卖出500股娜娜有限公司。");
                    cm.dispose();
                } else if (cm.getStock(1) < fee) {
                    cm.sendOk("抱歉，你没足够的股票币！\r\n");
                    cm.dispose();
                } else {
                    cm.gainClubMoney(+selectedpay);
                    cm.gainStock(1, -fee);
                    cm.sendOk("恭喜您,卖出成功！");
                    cm.dispose();
                }
            }
            if (typed == 22222) {
                fee = selection;
                selectedpay = cm.getStockPrice(2) * fee;
                if (fee <= 0 || fee > 500 || fee % 1 != 0) {
                    cm.sendOk("请重新输入，一次最多卖出500股喵喵有限公司。");
                    cm.dispose();
                } else if (cm.getStock(2) < fee) {
                    cm.sendOk("抱歉，你没足够的股份！\r\n");
                    cm.dispose();
                } else {
                    cm.gainClubMoney(+selectedpay);
                    cm.gainStock(2, -fee);
                    cm.sendOk("恭喜您,卖出成功！");
                    cm.dispose();
                }
            }
            if (typed == 33333) {
                fee = selection;
                selectedpay = cm.getStockPrice(3) * fee;
                if (fee <= 0 || fee > 500 || fee % 1 != 0) {
                    cm.sendOk("请重新输入，一次最多卖出500股婷婷有限公司。");
                    cm.dispose();
                } else if (cm.getStock(3) < fee) {
                    cm.sendOk("抱歉，你没足够的股票币！\r\n");
                    cm.dispose();
                } else {
                    cm.gainClubMoney(+selectedpay);
                    cm.gainStock(3, -fee);
                    cm.sendOk("恭喜您,卖出成功！");
                    cm.dispose();
                }
            }
            if (typed == 1111) {
                fee = selection;
                selectedpay = 1000 * fee;
                if (fee <= 0 || fee > 30 || fee % 1 != 0) {
                    cm.sendOk("请重新输入，一次只能购买1个号码，号码为范围为1-20号。");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) < selection) {
                    cm.sendOk("抱歉，你没足够的点卷！\r\n");
                    cm.dispose();
                } else {
                    //cm.gainlotteryMoney(fee);
                    cm.gainlottery(1, fee);
                    cm.gainlotteryPrice(1, -1000);
                    cm.gainNX(1, -1000);
                    cm.worldSpouseMessage(0x24, "『彩票系统』：[" + cm.getChar().getName() + "]购买了单选球" + fee + "号,彩池中增加1000点卷! 目前彩池" + cm.getlotteryPrice(1) + "点卷");
                    cm.sendOk("恭喜您,购买成功！你的单选球号码为" + fee + ",请等待系统为开奖,祝您好运!");
                    cm.dispose();
                }
            }
            if (typed == 2222) {
                fee = selection;
                selectedpay = cm.getStockPrice(2) * fee;
                if (fee <= 0 || fee > 500 || fee % 1 != 0 || cm.getStockAmount(2) - fee < 0 || cm.getStockPrice(2) < 1) {
                    cm.sendOk("请重新输入，一次最多兑换500股喵喵有限公司，或股票数量不足，或该股票已经破产。");
                    cm.dispose();
                } else if (cm.getClubMoney() < selectedpay) {
                    cm.sendOk("抱歉，你没足够的股票币！\r\n");
                    cm.dispose();
                } else {
                    cm.gainClubMoney(-selectedpay);
                    cm.gainStock(2, fee);
                    cm.sendOk("恭喜您,购买成功！");
                    cm.dispose();
                }
            }
            if (typed == 3333) {
                fee = selection;
                selectedpay = cm.getStockPrice(3) * fee;
                if (fee <= 0 || fee > 500 || fee % 1 != 0 || cm.getStockAmount(3) - fee < 0 || cm.getStockPrice(3) < 1) {
                    cm.sendOk("请重新输入，一次最多兑换500股婷婷有限公司，或股票数量不足，或该股票已经破产。");
                    cm.dispose();
                } else if (cm.getClubMoney() < selectedpay) {
                    cm.sendOk("抱歉，你没足够的股票币！\r\n");
                    cm.dispose();
                } else {
                    cm.gainClubMoney(-selectedpay);
                    cm.gainStock(3, fee);
                    cm.sendOk("恭喜您,购买成功！");
                    cm.dispose();
                }
            }
        }
    }
}