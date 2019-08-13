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
			if (cm.getQuestStatus(32102) == 0) {
				cm.forceStartQuest(32102);
			}
			cm.warp(101070000, 0);
			cm.dispose();
		} else if (map == 101070000 || map == 101070001 || map == 101070010) {
			// 出去也要放动画
			cm.curNodeEventEnd(true);
			cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
			cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
			cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
			cm.inGameDirectionEvent_AskAnswerTime(2000);
		}
	} else if (status === i++) {
		cm.playerMessage(-1, "好似从梦中惊醒，妖精森林渐渐变远了。");
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //20E 0x15 取消遮布
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.warp(101030000, 5);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
