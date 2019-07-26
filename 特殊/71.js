/**
 *Mary  140防具回收
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
        var selStr = "你好，请选择你需要回收的物品.\r\n#L0#狮心战斗锁子甲#v2431098#\r\n#L1#龙尾法师长袍#v2431098#\r\n#L3#鹰翼哨兵服#v2431098#\r\n#L4#渡鸦之魂追踪者盔甲#v2431098#\r\n#L5#鲨齿船长外套#v2431098#\r\n#L6#L7#龙尾法师手套#v2431098#\r\n#L8#鹰翼哨兵手套#v2431098#\r\n#L10#渡鸦之魂追踪者手套#v2431098#\r\n#L11#鲨齿船长手套#v2431098#\r\n#L12#狮心战斗护腕#v2431098#\r\n#L13#龙尾法师护肩#v2431098#\r\n#L14#鹰翼哨兵护肩#v2431098#\r\n#L15#6渡鸦之魂猎人护肩#v2431098#\r\n#L16#鲨齿船长护肩#v2431098#\r\n#L17#狮心战斗护肩#v2431098#\r\n#L18#狮心战斗披风#v2431098#\r\n#L19#龙尾法师披风#v2431098#\r\n#L20#鹰翼哨兵披风#v2431098#\r\n#L21#渡鸦之魂猎人披风#v2431098#\r\n#L22#鲨齿船长披风#v2431098#\r\n#L23#狮心战斗头盔#v2431098#\r\n#L24#龙尾法师帽子#v2431098#\r\n#L26#鹰翼哨兵便帽#v2431098#\r\n#L27#渡鸦之魂追踪者帽#v2431098#\r\n#L28#鲨齿船长帽#v2431098#\r\n#L29#狮心战斗鞋#v2431098#\r\n#L30#龙尾法师鞋#v2431098#\r\n#L31#鹰翼哨兵鞋#v2431098#\r\n#L32#渡鸦之魂追踪者鞋#v2431098#\r\n#L33#鲨齿船长鞋#v2431098#\r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (cm.itemQuantity(1052314) >= 1) {
                    cm.gainItem(1052314, -1);
                    cm.gainItem(2431098, 1);//狮心战斗锁子甲
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1052314#");
                    cm.dispose();
                }
                break;
            case 1:
                if (cm.itemQuantity(1052315) >= 1) {
                    cm.gainItem(1052315, -1);
                    cm.gainItem(2431098, 1);//龙尾法师长袍
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1052315#");
                    cm.dispose();
                }
                break;
            case 3:
                if (cm.itemQuantity(1052316) >= 1) {
                    cm.gainItem(1052316, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵服
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1052316#");
                    cm.dispose();
                }
                break;
            case 4:
                if (cm.itemQuantity(1052317) >= 1) {
                    cm.gainItem(1052317, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂追踪者盔甲
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1052317#");
                    cm.dispose();
                }
                break;
            case 5:
                if (cm.itemQuantity(1052318) >= 1) {
                    cm.gainItem(1052318, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长外套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1052318#");
                    cm.dispose();
                }
                break;
            case 7:
                if (cm.itemQuantity(1082296) >= 1) {
                    cm.gainItem(1082296, -1);
                    cm.gainItem(2431098, 1);//龙尾法师手套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1082296#");
                    cm.dispose();
                }
                break;
            case 8:
                if (cm.itemQuantity(1082297) >= 1) {
                    cm.gainItem(1082297, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵手套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1082297#");
                    cm.dispose();
                }
                break;
            case 10:
                if (cm.itemQuantity(1082298) >= 1) {
                    cm.gainItem(1082298, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂追踪者手套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1082298#");
                    cm.dispose();
                }
                break;
            case 11:
                if (cm.itemQuantity(1082299) >= 1) {
                    cm.gainItem(1082299, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长手套
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1082299#");
                    cm.dispose();
                }
                break;
            case 12:
                if (cm.itemQuantity(1082295) >= 1) {
                    cm.gainItem(1082295, -1);
                    cm.gainItem(2431098, 1);//狮心战斗护腕
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1082295#");
                    cm.dispose();
                }
                break;
            case 13:
                if (cm.itemQuantity(1152110) >= 1) {
                    cm.gainItem(1152110, -1);
                    cm.gainItem(2431098, 1);//龙尾法师护肩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1152110#");
                    cm.dispose();
                }
                break;
            case 14:
                if (cm.itemQuantity(1152111) >= 1) {
                    cm.gainItem(1152111, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵护肩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1152111#");
                    cm.dispose();
                }
                break;
            case 15:
                if (cm.itemQuantity(1152112) >= 1) {
                    cm.gainItem(1152112, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂猎人护肩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1152112#");
                    cm.dispose();
                }
                break;
            case 16:
                if (cm.itemQuantity(1152113) >= 1) {
                    cm.gainItem(1152113, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长护肩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1152113#");
                    cm.dispose();
                }
                break;
            case 17:
                if (cm.itemQuantity(1152108) >= 1) {
                    cm.gainItem(1152108, -1);
                    cm.gainItem(2431098, 1);//狮心战斗护肩
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1152108#");
                    cm.dispose();
                }
                break;
            case 18:
                if (cm.itemQuantity(1102275) >= 1) {
                    cm.gainItem(1102275, -1);
                    cm.gainItem(2431098, 1);//狮心战斗披风
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1102275#");
                    cm.dispose();
                }
                break;
            case 19:
                if (cm.itemQuantity(1102276) >= 1) {
                    cm.gainItem(1102276, -1);
                    cm.gainItem(2431098, 1);//龙尾法师披风
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1102276#");
                    cm.dispose();
                }
                break;
            case 20:
                if (cm.itemQuantity(1102277) >= 1) {
                    cm.gainItem(1102277, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵披风
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1102277#");
                    cm.dispose();
                }
                break;
            case 21:
                if (cm.itemQuantity(1102278) >= 1) {
                    cm.gainItem(1102278, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂猎人披风
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1102278#");
                    cm.dispose();
                }
                break;
            case 22:
                if (cm.itemQuantity(1102279) >= 1) {
                    cm.gainItem(1102279, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长披风
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1102279#");
                    cm.dispose();
                }
                break;
            case 23:
                if (cm.itemQuantity(1003172) >= 1) {
                    cm.gainItem(1003172, -1);
                    cm.gainItem(2431098, 1);//狮心战斗头盔
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1003172#");
                    cm.dispose();
                }
                break;
            case 24:
                if (cm.itemQuantity(1003173) >= 1) {
                    cm.gainItem(1003173, -1);
                    cm.gainItem(2431098, 1);//龙尾法师帽子
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1003173#");
                    cm.dispose();
                }
                break;
            case 26:
                if (cm.itemQuantity(1003174) >= 1) {
                    cm.gainItem(1003174, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵便帽
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1003174#");
                    cm.dispose();
                }
                break;
            case 27:
                if (cm.itemQuantity(1003175) >= 1) {
                    cm.gainItem(1003175, -1);
                    cm.gainItem(2431098, 1);// 渡鸦之魂追踪者帽
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1003175#");
                    cm.dispose();
                }
                break;
            case 28:
                if (cm.itemQuantity(1003176) >= 1) {
                    cm.gainItem(1003176, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长帽
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1003176#");
                    cm.dispose();
                }
                break;
            case 29:
                if (cm.itemQuantity(1072485) >= 1) {
                    cm.gainItem(1072485, -1);
                    cm.gainItem(2431098, 1);//狮心战斗鞋
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1072485#");
                    cm.dispose();
                }
                break;
            case 30:
                if (cm.itemQuantity(1072486) >= 1) {
                    cm.gainItem(1072486, -1);
                    cm.gainItem(2431098, 1);//龙尾法师鞋
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1072486#");
                    cm.dispose();
                }
                break;
            case 31:
                if (cm.itemQuantity(1072487) >= 1) {
                    cm.gainItem(1072487, -1);
                    cm.gainItem(2431098, 1);//鹰翼哨兵鞋
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1072487#");
                    cm.dispose();
                }
                break;
            case 32:
                if (cm.itemQuantity(1072488) >= 1) {
                    cm.gainItem(1072488, -1);
                    cm.gainItem(2431098, 1);//渡鸦之魂追踪者鞋
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1072488#");
                    cm.dispose();
                }
                break;
            case 33:
                if (cm.itemQuantity(1072489) >= 1) {
                    cm.gainItem(1072489, -1);
                    cm.gainItem(2431098, 1);//鲨齿船长鞋
                    cm.sendOk("兑换#v2431098#x1成功.请查看背包");
                    cm.dispose();
                } else {
                    cm.sendOk("你没有1个#v1072489#");
                    cm.dispose();
                }
                break;
        }
    }
}