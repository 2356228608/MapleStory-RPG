var iconA = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var iconB = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var iconC = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var iconD = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var iconE = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var iconF = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var iconG = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑
var iconH = "#fUI/UIWindow2/ToolTip/Equip/Star/Star2#";//星星
var iconI = "#fUI/UIWindow2/MobGage/Mob/2510200#";//蓝色水晶
var iconJ = "#fUI/UIWindow3/Scenario/list/icon/icon7/11#";
var iconK = "#fUI/UIWindow3/Study/Fever/1#";//狂热
var iconL = "#fUI/UIWindowBT/MonsterBattleCollection2/Btstart/normal/0#";//开始战斗
var iconM = "#fUI/RunnerGame/RunnerGameUI/UI/BtHowto/mouseOver/0#";//任务提示
var IconO = "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#";//女神
var IconP = "#fUI/UIMiniGame/starPlanetRPS/heart#";//红心桃心
var status;
var txt;
var PropItem;
var Rm;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            txt = "\t\t\t\t" + IconO + "#k#n\r\n";
            txt += " " + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + "\r\n";
            txt += "\t\t\t\t　#d - 功能说明 -\r\n";
            txt += "#r　#L0#开放 [ 2 ] 卡槽#l　　　#L1#开放 [ 3 ] 卡槽#l\r\n";
            txt += "#b　#L2#卸载 [ 2 ] 卡槽#l　　　#L3#卸载 [ 3 ] 卡槽#l#k\r\n\r\n";
            txt += "#b　告别#r星岩#b一个卡槽 开放 2 3 位置卡槽 让您属性爆炸\r\n";
            txt += "#b　星岩卡槽设置仅支持 [ #rS#b ] 类型 可镶嵌且卸下存背包\r\n";
            txt += "#b　两个卡槽的标价亦不同 且镶且珍惜 土豪成神必选通道\r\n\r\n";
            txt += " " + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + IconP + "\r\n";
            cm.askMenu(txt);
        } else if (status == 1) {
            if (selection == 0) {
                s = 1;
            } else if (selection == 1) {
                s = 2;
            } else if (selection == 2) {
                var item = cm.getInventory(1).getItem(1);
                var ii = cm.getItemInfo();
                var toDrop = item.copy();

                if (toDrop.getSocket2() <= 0) {
                    cm.playerMessage(1, "此道具没有星岩 无需卸下");
                    cm.dispose();
                    return;
                }

                if (cm.getPlayer().getCSPoints(1) <= 100000) {
                    cm.playerMessage(1, "抱歉 您的点卷不足");
                    cm.dispose();
                    return;
                }

                item = cm.getInventory(1).getItem(1);
                if (item == null) {
                    cm.playerMessage(1, "请确认您的背包内 [ 1 ] 号栏窗是否有道具");
                    cm.dispose();
                    return;
                }

                if (cm.isCash(item.getItemId())) {
                    cm.playerMessage(1, "抱歉 - 现金道具不可强化");
                    cm.dispose();
                    return;
                }
                cm.gainItem(toDrop.getSocket2(), 1);
                toDrop.setSocket2(0);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), toDrop, false);
                cm.gainNX(1, -100000);
                cm.playerMessage(1, "恭喜您 - 卸载完毕");
                cm.dispose();
                return;
            } else if (selection == 3) {
                var item = cm.getInventory(1).getItem(1);
                var ii = cm.getItemInfo();
                var toDrop = item.copy();

                if (toDrop.getSocket3() <= 0) {
                    cm.playerMessage(1, "此道具没有星岩 无需卸下");
                    cm.dispose();
                    return;
                }

                if (cm.getPlayer().getCSPoints(1) <= 100000) {
                    cm.playerMessage(1, "抱歉 您的点卷不足");
                    cm.dispose();
                    return;
                }

                item = cm.getInventory(1).getItem(1);
                if (item == null) {
                    cm.playerMessage(1, "请确认您的背包内 [ 1 ] 号栏窗是否有道具");
                    cm.dispose();
                    return;
                }

                if (cm.isCash(item.getItemId())) {
                    cm.playerMessage(1, "抱歉 - 现金道具不可强化");
                    cm.dispose();
                    return;
                }
                cm.gainItem(toDrop.getSocket3(), 1);
                toDrop.setSocket3(0);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), toDrop, false);
                cm.gainNX(1, -100000);
                cm.playerMessage(1, "恭喜您 - 卸载完毕");
                cm.dispose();
                return;
            }
            var i = 0;
            var list = cm.getInventory(3).list();
            var itemList = list.iterator();
            var text = "#d\t\t  - 请选择您需镶嵌的 #r星岩#d 类型 -#k\r\n#b";
            position = -1;
            PropItem = Array();
            while (itemList.hasNext()) {

                var item = itemList.next();
                if (item.getItemId() >= 3064000 && item.getItemId() <= 3064490) {
                    PropItem[item.getPosition()] = item.getItemId();
                    i++;
                }

            }
            if (i == 0) {
                cm.playerMessage(1, "抱歉 - 您的背包内没有星岩");
				cm.dispose();
                return;
            } else {
                for (var key in PropItem) {
                    text += "　#L" + key + "# #i" + PropItem[key] + "#　#z" + PropItem[key] + "##l";
                    if (key != 0 && (key + 1) % 1 == 0) {
                        text += "\r\n";
                    }
                }
            }
            cm.askMenu(text);

        } else if (status == 2) {
            Rm = PropItem[selection];
            if (cm.getPlayer().getCSPoints(1) <= 100000) {
                cm.playerMessage(1, "抱歉 您的点卷不足");
                cm.dispose();
                return;
            }

            item = cm.getInventory(1).getItem(1);
            if (item == null) {
                cm.playerMessage(1, "请确认您的背包内 [ 1 ] 号栏窗是否有道具");
                cm.dispose();
                return;
            }
            var item = cm.getInventory(1).getItem(1);
            var ii = cm.getItemInfo();
            var toDrop = item.copy();

            if (cm.isCash(item.getItemId())) {
                cm.playerMessage(1, "抱歉 - 现金道具不可强化");
                cm.dispose();
                return;
            }

            if (s == 1) {
                if (toDrop.getSocket2() > 0) {
                    cm.playerMessage(1, "请先卸下已有 星岩 再进行镶嵌");
                    cm.dispose();
                    return;
                }
                toDrop.setSocket2(Rm);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), toDrop, false);
                cm.gainItem(Rm, -1);
                cm.gainNX(1, -100000);
                cm.playerMessage(1, "恭喜您 - 提升成功");
                cm.worldSpouseMessage(0x20, "[ 星岩系统 ] 玩家 " + cm.getChar().getName() + " 给予 [ 2 ] 号卡槽镶嵌了 星岩 恭喜 Ta 吧 ");
                cm.dispose();
            }

            if (s == 2) {
                if (toDrop.getSocket3() > 0) {
                    cm.playerMessage(1, "请先卸下已有 星岩 再进行镶嵌");
                    cm.dispose();
                    return;
                }
                toDrop.setSocket3(Rm);
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(cm.getClient(), toDrop, false);
                cm.gainItem(Rm, -1);
                cm.gainNX(1, -100000);
                cm.playerMessage(1, "恭喜您 - 提升成功");
                cm.worldSpouseMessage(0x20, "[ 星岩系统 ] 玩家 " + cm.getChar().getName() + " 给予 [ 3 ] 号卡槽镶嵌了 星岩 恭喜 Ta 吧 ");
                cm.dispose();
            }
        }
    }
}