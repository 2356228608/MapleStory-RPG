// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/19 18:58:51] 之前所在地图: cm.warp(743020103) - 当前进入地图: cm.warp(743020402)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, false);
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_OneTimeAction(379, 0);
		cm.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/illustration/kairin/0", 5000, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(743000600);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
