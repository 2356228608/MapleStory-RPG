
        /*  This is mada by 娜娜    
         *  This source is made by BMS Team
         *  双色球领奖
         *  @Author 娜娜 
         */
        var status;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            //getlottery  玩家购买的号码 getlotteryAmount开奖号码
            text += head + icon2 + "#我这里是单选球奖励发放中心#b\r\n请选择你的功能,的呢？\r\n";
            text += "#L0#" + icon + "立即领取[单选球]奖励\r\n";
            text += "#L1#" + icon + "立即领取[双色球]奖励\r\n";
            cm.askMenu(text);
        } else {
            if (selection == 0) {//单选球
                if (cm.getlottery(1) == cm.getlotteryAmountssq(1, 0)) {
                    cm.gainNX(1, cm.getlotteryPrice(1));
                    cm.worldSpouseMessage(0x24, "『彩票系统』：恭喜[" + cm.getChar().getName() + "]领取了" + cm.getlotteryPrice(1) + "点卷,单选球奖池金额已纳入他的账户中.目前奖池空无一物!");
                    cm.sendOk("#e#r已领取");
                    cm.resultlotteryPrice(1);//重置奖池
                    cm.gainlottery(1, 0);//重置号码
                    cm.dispose();
                } else {
                    cm.sendOk("#e#您没有中奖,快去参加下一轮开奖吧!");
                    cm.dispose();
                }
            } else if (selection == 1) {//双色球 
                if (cm.getlottery(2) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(3) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(4) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(5) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(6) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(7) == cm.getlotteryAmountssq(2, 7) || cm.getlottery(8) == cm.getlotteryAmountssq(2, 7)) {//六等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 6);
                    cm.worldSpouseMessage(0x24, "『彩票系统六等奖』：恭喜[" + cm.getChar().getName() + "]买中了蓝球特码,领取了" + cm.getlotteryPricessq(2) / 5 + "点卷,奖励已纳入他的账户!");
                    cm.sendOk("#e#r已领取");
                    //cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else if (cm.getlotterycompare() == 3) {//五等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 5);
                    cm.worldSpouseMessage(0x24, "『彩票系统五等奖』：恭喜[" + cm.getChar().getName() + "]买中了3个码,领取了" + cm.getlotteryPricessq(2) / 5 + "点卷,奖励已纳入他的账户!");
                    cm.sendOk("#e#r已领取");
                    //cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else if (cm.getlotterycompare() == 4) {//四等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 4);
                    cm.worldSpouseMessage(0x24, "『彩票系统四等奖』：恭喜[" + cm.getChar().getName() + "]买中了4个码,领取了" + cm.getlotteryPricessq(2) / 4 + "点卷,奖励已纳入他的账户!");
                    cm.sendOk("#e#r已领取");
                    //cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else if (cm.getlotterycompare() == 5) {//三等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 4);
                    cm.worldSpouseMessage(0x24, "『彩票系统三等奖』：恭喜[" + cm.getChar().getName() + "]买中了5个码,领取了" + cm.getlotteryPricessq(2) / 4 + "点卷,奖励已纳入他的账户!");
                    cm.sendOk("#e#r已领取");
                    //cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else if (cm.getlotterycompare() == 6) {//二等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 4);
                    cm.worldSpouseMessage(0x24, "『彩票系统二等奖』：恭喜[" + cm.getChar().getName() + "]买中了6个码,领取了" + cm.getlotteryPricessq(2) / 4 + "点卷,奖励已纳入他的账户!");
                    cm.sendOk("#e#r已领取");
                    //cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else if (cm.getlotterycompare() == 7) {//一等奖
                    cm.gainNX(1, cm.getlotteryPricessq(2) / 4);
                    cm.worldSpouseMessage(0x24, "『彩票系统一等奖』：恭喜[" + cm.getChar().getName() + "]买中了所有码,领取了" + cm.getlotteryPricessq(2) + "点卷,奖励已纳入他的账户!,目前奖池空无一物");
                    cm.sendOk("#e#r已领取,你可以去现实中买彩票了!");
                    cm.resultlotteryPricessq(2);//重置奖池
                    cm.gainlotteryssq(0);//重置号码
                    cm.dispose();
                } else {
                    cm.sendOk("#e#您没有中奖,快去参加下一轮开奖吧!");
                    cm.dispose();
                }
            }
        }
    }
}



