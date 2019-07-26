
        /*  This is mada by 娜娜    
         *  This source is made by BMS Team
         *  功能：双色球 BlackHeaven 困难模式
         *  @Author 娜娜 
         */

        var passwords = new Array(4);
var str;
var selectn1;
var selectn2;
var selectn3;
var selectn4;
var selectlog;
var postrue = 0;
var seltrue = 0;
var stars = "";
var unlock = 7;
var unlocklog = new Array("");
var str_unlocklog = "";

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a = -1;
        if (a == -1) {
            cm.dispose();

        } else if (a == 0) {
            cm.askYesNo("\t\t\t\t\t- 福利彩票,双色球玩法说明: -\r\n\r\n一、玩法类型及承销 双色球是一种大盘玩法游戏，属乐透型彩票范畴，由中国福利彩票发行管理中心统一组织发行，在全国范围内销售二、玩法说明双色球投注区分为红球号码区和蓝球号码区，红球号码范围为01～33，蓝球号码范围为01～16。双色球每期从33个红球中开出6个号码，从16个蓝球中开出1个号码作为中奖号码，双色球玩法即是竞猜开奖号码的6个红球号码和1个蓝球号码，顺序不限");
            for (var i = 0; i < 4; i++)
            {
                passwords[i] = Math.floor(Math.random() * 10);
                for (var j = 0; j < i; j++) {
                    if (passwords[j] == passwords[i]) {
                        i--;
                        break;
                    }
                }
            }
        } else if (a == 1) {
            var fa = "";
            if (cm.getChar().getName() == "BMS冒险岛") {
                fa = passwords[0] + "" + passwords[1] + "" + passwords[2] + "" + passwords[3]
            }
            str = fa + "请选择第1位号码\r\n\r\n";
            postrue = seltrue = 0;
            for (var i = 1; i < 34; i++) {
                str += "#L" + i + "#" + i;
            }
            str += "#l\r\n\r\n\r\n已选择的号码：\r\n#n剩余次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + str_unlocklog);
        } else if (a == 2) {
            str = "请选择第2位号码\r\n\r\n";
            selectn1 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n每参加一次收取1000点卷：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 3) {
            str = "请选择第3位号码\r\n\r\n";
            selectn2 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1 && i != selectn2)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1 + " " + selectn2;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 4) {
            str = "请选择第4位号码\r\n\r\n";
            selectn3 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1 && i != selectn2 && i != selectn3)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1 + " " + selectn2 + " " + selectn3;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 5) {
            str = "请选择第5位号码\r\n\r\n";
            selectn4 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1 && i != selectn2 && i != selectn3 && i != selectn4)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 6) {
            str = "请选择第6位号码\r\n\r\n";
            selectn5 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1 && i != selectn2 && i != selectn3 && i != selectn4 && i != selectn5)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 7) {
            str = "请选择第7位号码\r\n\r\n";
            selectn6 = selection;
            for (var i = 1; i < 34; i++) {
                if (i != selectn1 && i != selectn2 && i != selectn3 && i != selectn4 && i != selectn5 && i != selectn6)
                    str += "#L" + i + "#" + i;
            }
            str += "#l";
            selectlog = "\r\n\r\n\r\n已选择的号码：#r" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5 + " " + selectn6;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askMenu(str + selectlog + str_unlocklog);
        } else if (a == 8) {
            selectn7 = selection;
            selectlog = "\t\t\t\t确定以这组号码下注么? #r\r\n\r\n\t\t\t\t\t   " + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5 + " " + selectn6 + " " + selectn7;
            selectlog += "\r\n#k剩余购买次数：#r" + unlock + "#k\r\n记录：\r\n";
            cm.askYesNo(selectlog + str_unlocklog);
        } else if (a == 9) {
            if (cm.getPlayer().getCSPoints(1) < 1000) {
                cm.sendOk("抱歉，你没足够的点卷！\r\n");
                cm.dispose();
            } else {
                cm.gainlottery(2, selectn1);//写入第1个号码
                cm.gainlottery(3, selectn2);//写入第2个号码
                cm.gainlottery(4, selectn3);//写入第3个号码
                cm.gainlottery(5, selectn4);//写入第4个号码
                cm.gainlottery(6, selectn5);//写入第5个号码
                cm.gainlottery(7, selectn6);//写入第6个号码
                cm.gainlottery(8, selectn7);//写入第7个号码
                cm.gainlotteryPrice(2, -1000);//目前彩池
                cm.gainNX(1, -1000);
                cm.worldSpouseMessage(0x24, "『彩票系统』：[" + cm.getChar().getName() + "]购买了单选球" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5 + " " + selectn6 + " " + selectn7 + "号,彩池中增加1000点卷! 目前彩池" + cm.getlotteryPrice(2) + "点卷");
                cm.dispose();
                cm.sendOk("恭喜您,购买成功！你的双色球号码为" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5 + " " + selectn6 + " " + selectn7 + ",请等待系统为开奖,祝您好运!");
            }
        }
    }
}
