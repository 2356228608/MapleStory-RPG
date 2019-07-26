/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：e高级检索工具 GM角色在游戏用命令 !搜索   可以调用此脚本
 *  @Author 娜娜 
 */

        var status, str, select, list;

function start() {
    status = -1;
    str = "";
    select = -1;
    str += "================#eBMS高级检索工具#n================";
    str += "\r\n#L1#道具#l";
    str += "\r\n#L2#NPC#l";
    str += "\r\n#L3#地图#l";
    //str += "\r\n#L4#怪物#l";
    str += "\r\n#L5#任务#l";
    //str += "\r\n#L6#技能#l";
    str += "\r\n#L7#职业#l";
    //str += "\r\n#L10#发型#l";
    //str += "\r\n#L11#脸型#l";
//    str += "\r\n#L12#肤色#l";
    cm.askMenu(str);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            str = selection;
            cm.askText("请输入需要查找的信息(支持中文名称和ID):");
            break;
        case 1:
            switch (str) {
                case 10:
                case 11:
                case 12:
                    list = cm.getSearchData(str, cm.getText());
                    if (list == null) {
                        cm.sendOk("搜索不到信息");
                        cm.dispose();
                        return;
                    }
                    cm.sendStyle("", list, 0);
                    break;
                default:
                    cm.sendOk(cm.searchData(str, cm.getText()));
            }
            break;
        case 2:
            if (!cm.foundData(str, cm.getText())) {
                cm.dispose();
                return;
            }
            if (select == -1) {
                select = selection;
            }
            switch (str) {
                case 1:
                    if (select < 2000000) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1);
                        }
                        cm.dispose();
                    } else if (select >= 5000000 && select < 5010000) {
                        cm.askNumber("选中的宠物为#i" + select + ":# #z" + select + "#\r\n请输入生命时间(天)：", 1, 1, 300);
                    } else {
                        cm.askNumber("选中的道具为#i" + select + ":# #z" + select + "#\r\n请输入制作数量：", 1, 1, 300);
                    }
                    break;
                case 2:
                    cm.dispose();
                    cm.playerMessage(5, "打开NPC，ID：" + select);
                    cm.openNpc(select);
                    break;
                case 3:
                    cm.playerMessage(5, "传送到地图，ID：" + select);
                    cm.warp(select, 0);
                    cm.dispose();
                    break;
                case 4:
                    cm.askNumber("选中的怪物为#o" + select + "#\r\n请输入召唤数量：", 1, 1, 100);
                    break;
                case 5:
                    cm.askMenu("选中的任务ID为" + select + "\r\n请选择需要执行的操作:\r\n#L0#开始任务#l\r\n#L1#完成任务#l");
                    break;
                case 6:
                    cm.askNumber("选中的技能ID为" + select + "\r\n请输入使用等级：", 1, 1, 30);
                    break;
                case 7:
                    cm.playerMessage(5, "转职，职业代码:" + select);
                    cm.changeJob(select);
                    cm.dispose();
                    break;
                case 8:
                case 9:
                    cm.dispose();
                    break;
                case 10:
                    cm.playerMessage(5, "改变发型，发型代码：" + list[select]);
                    cm.setHair(list[select]);
                    cm.dispose();
                    break;
                case 11:
                    cm.playerMessage(5, "改变脸型，脸型代码：" + list[select]);
                    cm.setFace(list[select]);
                    cm.dispose();
                    break;
                case 12:
                    cm.playerMessage(5, "改变肤色，肤色代码：" + list[select]);
                    cm.setSkin(list[select]);
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 3:
        switch (str) {
            case 1:
                if (select < 2000000) {
                    if (cm.canHold(select)) {
                        cm.gainItem(select, 1);
                    }
                } else if (select >= 5000000 && select < 5010000) {
                    if (cm.canHold(select)) {
                        cm.gainItem(select, 1, selection);
                    }
                } else {
                    for (var i = 0; i < selection; i++) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1);
                        }
                    }
                }
                cm.dispose();
                break;
            case 4:
                cm.spawnMonster(select, selection);
                cm.dispose();
                break;
            case 5:
                cm.dispose();
                switch (selection) {
                    case 0:
                        cm.startQuest(select);
                        break;
                    case 1:
                        cm.completeQuest(select);
                        break;
                }
                break;
            case 6:
                cm.teachSkill(select, selection);
                cm.useSkill(select, selection);
                cm.dispose();
                break;
            default:
                cm.dispose();
        }
        default:
            cm.dispose();
    }
}