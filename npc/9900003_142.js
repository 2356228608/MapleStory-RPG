/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'列娜海峡的邀请
 *  脚本功能：列娜海峡的邀请
 *  @Author 娜娜 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else if (status === i++) {
			cm.askAcceptDecline("#b#h ##k，里恩出了点问题。冰川正在融化, 我需要你的帮助！来看看我！\r\n\r\n#b#e(接受后移动到里恩.)。", 1201000);
		} else if (status === i++) {
			cm.sendNextNoESC("我在里恩见你。", 1201000);
        } else if (status === i++) {
			cm.forceStartQuest(32160);
			cm.warp(140000000, 0);
			cm.dispose();
        } else {
            cm.dispose();
        }
}
