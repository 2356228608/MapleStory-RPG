/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else {
		switch (selectionLog[1]) {
		case 1:
			我不想再待在这里了();
			break;
		case 2:
			掉下来了();
			break;
		default:
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "有什么事？快点说，#b#h ##k。\r\n\r\n";
	text += "#L1##b我不想再待在这里了。#l\r\n";
	text += "#L2##b掉下来了，请送我上去。#l\r\n";
	cm.askMenu(text);
}

function 我不想再待在这里了() {
	if (status == 1) {
		text = "确定要提前离开这里吗？#b朦胧石#k的力量还没耗尽呢。";
		cm.askYesNo(text);
	} else if (status == 2) {
		cm.warp(992000000, 0);
		cm.dispose(); // 结束
	} else {
		cm.dispose(); // 结束
	}
}

function 掉下来了() {
	var mapId = cm.getMapId();
	switch (cm.getMapId()) {
	case 992023000:
		var fails = em.getProperty("stage23_fail");
		em.setProperty("stage23_fail", (fails == null ? 0 : fail) + 1);
		cm.warp(992023000, 1);
		break;
	}
	cm.dispose(); // 结束
}
