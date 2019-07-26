/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：冒险联盟
 *  
 *  @Author Jackson 
 */

/* global qm */

﻿var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case - 1://结束对话
            qm.dispose();
            return;
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.checkMapleUnion() && !qm.isQuestFinished(16013)) {
                qm.sendOk("你好，#b勇士#k~见到你很高兴~你现在可以开始使用<冒险岛联盟>啦！");
            } else if (qm.isQuestFinished(16013)) {
                qm.askMenu("今天可是个适合去屠龙的好日子！\r\n关于#b冒险岛联盟#k的工作，有什么我可以帮忙的吗？\r\n\r\n\r\n#L0##b<查看我的冒险岛联盟信息。>#l\r\n#L1##b<提升冒险岛联盟级别。>#l\r\n#L2##b<了解有关冒险岛联盟的说明。>#k#l\r\n#L3##b<每周获得联盟币排名>#k#l");
            } else {
                qm.sendOk("你好，#b勇士#k~见到你很高兴~，你现在的能力还不够使用<冒险岛联盟>！");
                qm.dispose();
            }
            break;
        case 1:
            switch (selection) {
                case - 1:
                case 0:
                    qm.openUI(1148);
                    qm.dispose();
                    break;
                case 1:
                    var str = qm.getUnionUpdateInfo();
                    qm.askYesNo(str);
                    break;
                case 2:
                    qm.dispose();
                    qm.openNpc(9010106, "MapleUnionHelp");
                    break;
                default:
                    qm.dispose();
            }
            break;
        default:
            qm.dispose();
            break;
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case - 1://结束对话
            qm.dispose();
            return;
        case 0://上一步
            status--;
            break;
        case 1://下一步
            status++;
            break;
    }
    qm.dispose();
}