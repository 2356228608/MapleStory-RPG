/**
 *Mary  140武器回收
 */
        var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "你好，请选择你需要回收的物品.\r\n#L0#狮心痛苦命运#v2431098#\r\n#L1#狮心弯刀#v2431098#\r\n#L3#狮心勇士斧#v2431098#\r\n#L4#狮心震雷钉#v2431098#\r\n#L5#狮心战斗弯刀#v2431098#\r\n#L7#狮心战斗斧#v2431098#\r\n#L8#狮心巨锤#v2431098#\r\n#L10#狮心长枪#v2431098#\r\n#L11#狮心矛#v2431098#\r\n#L12#狮心 狮子王丸#v2431098#\r\n#L13#龙尾黑甲凶灵#v2431098#\r\n#L14#龙尾精灵短杖#v2431098#\r\n#L15#6龙尾战斗长杖#v2431098#\r\n#L16#龙尾ESP限制器#v2431098#\r\n#L17#龙鳞 狮子王扇#v2431098#\r\n#L18#鹰翼组合弓#v2431098#\r\n#L19#鹰翼重弩#v2431098#\r\n#L20#龙翼巨弩枪#v2431098#\r\n#L21#渡鸦之魂女王意志之剑#v2431098#\r\n#L22#渡鸦之魂短刀#v2431098#\r\n#L23#渡鸦之魂真红手杖#v2431098#\r\n#L24#渡鸦之魂钢铁拳套#v2431098#\r\n#L26#精灵角暗影刀#v2431098#\r\n#L27#鲨齿灵魂汲取者#v2431098#\r\n#L28#鲨齿女王意志之剑#v2431098#\r\n#L29#鲨齿巨鹰爪#v2431098#\r\n#L30#鲨齿锐利手铳#v2431098#\r\n#L31#鲨齿火焰炮#\r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.itemQuantity(1232014) >= 1) {
                    cm.gainItem(1232014, -1);
                    cm.gainItem(2431098, 1);//狮心痛苦命运
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1232014#");
                    cm.dispose();
                }
                break;
            case 1:
                if (cm.itemQuantity(1302152) >= 1) {
                    cm.gainItem(1302152, -1);
                    cm.gainItem(2431098, 1);//狮心弯刀
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1302152#");
                    cm.dispose();
                }
                break;
            case 3:
                if (cm.itemQuantity(1312065) >= 1) {
                    cm.gainItem(1312065, -1);
                    cm.gainItem(2431098, 1);//狮心勇士斧
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1312065#");
                    cm.dispose();
                }
                break;
            case 4:
                if (cm.itemQuantity(1322096) >= 1) {
                    cm.gainItem(1322096, -1);
                    cm.gainItem(2431098, 1);//狮心震雷钉
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1322096#");
                    cm.dispose();
                }
                break;
            case 5:
                if (cm.itemQuantity(1402095) >= 1) {
                    cm.gainItem(1402095, -1);
                    cm.gainItem(2431098, 1);//狮心战斗弯刀
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1402095#");
                    cm.dispose();
                }
                break;
            case 7:
                if (cm.itemQuantity(1412065) >= 1) {
                    cm.gainItem(1412065, -1);
                    cm.gainItem(2431098, 1);//狮心战斗斧
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1412065#");
                    cm.dispose();
                }
                break;
            case 8:
                if (cm.itemQuantity(1422066) >= 1) {
                    cm.gainItem(1422066, -1);
                    cm.gainItem(2431098, 1);//狮心巨锤
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1422066#");
                    cm.dispose();
                }
                break;
            case 10:
                if (cm.itemQuantity(1432086) >= 1) {
                    cm.gainItem(1432086, -1);
                    cm.gainItem(2431098, 1);//狮心长枪
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1432086#");
                    cm.dispose();
                }
                break;
            case 11:
                if (cm.itemQuantity(1442116) >= 1) {
                    cm.gainItem(1442116, -1);
                    cm.gainItem(2431098, 1);//狮心矛
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1442116#");
                    cm.dispose();
                }
                break;
            case 12:
                if (cm.itemQuantity(1542015) >= 1) {
                    cm.gainItem(1542015, -1);
                    cm.gainItem(2431098, 1);//狮心 狮子王丸
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1542015#");
                    cm.dispose();
                }
                break;
            case 13:
                if (cm.itemQuantity(1212014) >= 1) {
                    cm.gainItem(1212014, -1);
                    cm.gainItem(2431098, 1);//龙尾黑甲凶灵
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1212014#");
                    cm.dispose();
                }
                break;
            case 14:
                if (cm.itemQuantity(1372084) >= 1) {
                    cm.gainItem(1372084, -1);
                    cm.gainItem(2431098, 1);//龙尾精灵短杖
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1372084#");
                    cm.dispose();
                }
                break;
            case 15:
                if (cm.itemQuantity(1382104) >= 1) {
                    cm.gainItem(1382104, -1);
                    cm.gainItem(2431098, 1);//龙尾战斗长杖
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1382104#");
                    cm.dispose();
                }
                break;
            case 16:
                if (cm.itemQuantity(1262015) >= 1) {
                    cm.gainItem(1262015, -1);
                    cm.gainItem(2431098, 1);//龙尾ESP限制器
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1262015#");
                    cm.dispose();
                }
                break;
            case 17:
                if (cm.itemQuantity(1552015) >= 1) {
                    cm.gainItem(1552015, -1);
                    cm.gainItem(2431098, 1);//龙鳞 狮子王扇
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1552015#");
                    cm.dispose();
                }
                break;
            case 18:
                if (cm.itemQuantity(1452111) >= 1) {
                    cm.gainItem(1452111, -1);
                    cm.gainItem(2431098, 1);//鹰翼组合弓
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1452111#");
                    cm.dispose();
                }
                break;
            case 19:
                if (cm.itemQuantity(1462099) >= 1) {
                    cm.gainItem(1462099, -1);
                    cm.gainItem(2431098, 1);//鹰翼重弩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1462099#");
                    cm.dispose();
                }
                break;
            case 20:
                if (cm.itemQuantity(1522018) >= 1) {
                    cm.gainItem(1522018, -1);
                    cm.gainItem(2431098, 1);//龙翼巨弩枪
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1522018#");
                    cm.dispose();
                }
                break;
            case 21:
                if (cm.itemQuantity(1242042) >= 1) {
                    cm.gainItem(1242042, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂女王意志之剑
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1242042#");
                    cm.dispose();
                }
                break;
            case 22:
                if (cm.itemQuantity(1332130) >= 1) {
                    cm.gainItem(1332130, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂短刀
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1332130#");
                    cm.dispose();
                }
                break;
            case 23:
                if (cm.itemQuantity(1362019) >= 1) {
                    cm.gainItem(1362019, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂真红手杖
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1362019#");
                    cm.dispose();
                }
                break;
            case 24:
                if (cm.itemQuantity(1472122) >= 1) {
                    cm.gainItem(1472122, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂钢铁拳套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1472122#");
                    cm.dispose();
                }
                break;
            case 26:
                if (cm.itemQuantity(1342036) >= 1) {
                    cm.gainItem(1342036, -1);
                    cm.gainItem(2431098, 1);//精灵角暗影刀
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1342036#");
                    cm.dispose();
                }
                break;
            case 27:
                if (cm.itemQuantity(1222014) >= 1) {
                    cm.gainItem(1222014, -1);
                    cm.gainItem(2431098, 1);// 鲨齿灵魂汲取者
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1222014#");
                    cm.dispose();
                }
                break;
            case 28:
                if (cm.itemQuantity(1242014) >= 1) {
                    cm.gainItem(1242014, -1);
                    cm.gainItem(2431098, 1);//鲨齿女王意志之剑
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1242014#");
                    cm.dispose();
                }
                break;
            case 29:
                if (cm.itemQuantity(1482084) >= 1) {
                    cm.gainItem(1482084, -1);
                    cm.gainItem(2431098, 1);//鲨齿巨鹰爪
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1482084#");
                    cm.dispose();
                }
                break;
            case 30:
                if (cm.itemQuantity(1492085) >= 1) {
                    cm.gainItem(1492085, -1);
                    cm.gainItem(2431098, 1);//鲨齿锐利手铳
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1492085#");
                    cm.dispose();
                }
                break;
            case 31:
                if (cm.itemQuantity(1532018) >= 1) {
                    cm.gainItem(1532018, -1);
                    cm.gainItem(2431098, 1);//鲨齿火焰炮
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1532018#");
                    cm.dispose();
                }
                break;
        }
    }
}