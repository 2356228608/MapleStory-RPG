/* Dawnveil
Enter Ellinel Fairy Academy Theme Dungeon
Fanzy
Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (status == 0) {
		cm.sendNextS("开始传送了。", 5);
		cm.dispose();
		status--;
	}
	if (status == 0) {
		cm.askYesNo("你要进入#e#b[主题副本:妖精学院艾利涅]#k#n吗，喵？", 1040002);
	} else if (status == 1) {
		if (cm.getQuestStatus(32102) == 0) {
			cm.forceStartQuest(32102);
		}
		cm.warp(101070000, 0);
		cm.dispose();
	}
}
