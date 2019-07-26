var status = -1;
var beauty = 0;
var tosend = 0;
var sl;

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果您需要末日风暴币的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.askMenu("#r#v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##k#l\r\n点卷:#r " + cm.getPlayer().getCSPoints(1) + " #k点  末日风暴币:#r " + cm.getItemQuantity(4310057) + " #k个\r\n    #b#L0#我要兑换物品   (1000点卷=1个末日风暴币)#l  \r\n\r\n #e#d\r\n\r\n#r#v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057##v4310057#");
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换.");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) / 1000 == 0) {
                    cm.sendNext("您的点卷不足，无法兑换末日风暴币。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.askNumber("请输入点卷兑换末日风暴币的数量:\r\n兑换比例为 1000 : 1\r\n", 1, 1, cm.getPlayer().getCSPoints(1) / 1000);
                }
            } else if (selection == 1) {
                if (cm.getItemQuantity(4310057) == 0) {
                    cm.sendNext("您的末日风暴币不足，无法兑换点卷。");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.askNumber("请输入末日风暴币兑换点卷的数量:\r\n兑换比例为 1 : 1000\r\n", 1, 1, cm.getItemQuantity(4310057));
                }
            }
        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误.");
                    cm.dispose();
                } else if (selection >= 200) {
                    sl = (selection / 200) + 1;
                } else {
                    sl = 3;
                }
                if (cm.getSpace(4) < sl) {
                    cm.sendOk("你的背包“其它”空间不足!请至少有" + sl + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");
                    cm.dispose();

                } else if (cm.getPlayer().getCSPoints(1) >= selection * 1000) {
                    cm.gainNX(-selection * 1000);
                    cm.gainItem(4310057, selection);
                    cm.finishActivity(120112);
					cm.dispose();
                    cm.sendOk("您成功将#r " + (selection * 1000) + " #k点卷换为末日风暴币#v4310057# x #r" + selection + " #k")
                    cm.worldSpouseMessage(0x11, "[末日风暴币] 玩家 " + cm.getChar().getName() + " 成功将 " + (selection * 1000) + " 点卷换为 " + selection + " 个末日风暴币。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换末日风暴币。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4310057, selection)) {
                    cm.gainItem(4310057, -selection);
                    cm.gainNX(+1000 * selection);
                    cm.finishActivity(120113);
					cm.dispose();
                    cm.sendOk("您成功将末日风暴币#v4310057# x #r" + selection + " #k换为#r " + (1000 * selection) + " #k点卷。");
                    cm.worldSpouseMessage(0x20, "[风暴币证券] 玩家 " + cm.getChar().getName() + " 成功将" + selection + " 个末日风暴币 换为 " + (1000 * selection) + " 点卷。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点卷。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
