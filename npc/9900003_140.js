/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'鲁塔比斯
 *  脚本功能：鲁塔比斯
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
			cm.askAcceptDecline("#b#h ##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说情况非常紧急，请尽快过来。", 1101002);
		} else if (status === i++) {
			cm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到圣地。", 1101002);
        } else if (status === i++) {
			cm.forceStartQuest(30000);
			cm.warp(913080000, 0);
			cm.dispose();
        } else {
            cm.dispose();
        }
}
