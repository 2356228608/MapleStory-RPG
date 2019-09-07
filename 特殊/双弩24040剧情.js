// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.forceStartQuest(24093, "1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false, false);
		cm.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextSNoESC("等等……好像有点奇怪？我的等级是多少？");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("10……级？！");
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
	} else {
		cm.dispose();
	}
}
