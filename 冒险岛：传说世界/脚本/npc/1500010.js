/* Dawnveil
Enter Ellinel Fairy Academy Theme Dungeon
Fanzy
Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var map = cm.getMapId();
	var i = -1;
	if (cm.getQuestStatus(32100) == 0 && cm.getQuestStatus(32101) == 0 && cm.getQuestStatus(32156) == 0) {
		cm.sendOkS("这里好像通往不欢迎人类的妖精们居住的地方。没有得到许可的话，还是不要乱闯了。");
		cm.dispose();
		return;
	}
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (map == 101030000) {
			cm.askYesNo("你要进入#e#b[主题副本:妖精学院艾利涅]#k#n吗，喵？", 1040002);
		} else if (map == 101070000 || map == 101070001 || map == 101070010) {
			cm.askYesNo("你要回到魔法密林：巨大的树吗，喵？", 1040002);
		} else {
			cm.dispose();
		}
	} else if (status === i++) {
		if (map == 101030000) {
			var newStatus = cm.getQuestRecord(32100);
			newStatus.setStatus(2);
			var newStatus = cm.getQuestRecord(32101);
			newStatus.setStatus(2);
			cm.warp(101074000, 0);
		} else if (map == 101070000 || map == 101070001 || map == 101070010) {
			cm.warp(101074001, 0);
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
