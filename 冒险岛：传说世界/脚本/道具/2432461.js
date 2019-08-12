/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var NPC = 2540005;

// 开头
function start() {
	action(1, 0, 0);
}
// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		im.dispose();
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
		case 3:
			钥匙全部用完了();
			break;
		default:
			im.askMenu("啊你说什么？没听清楚。", NPC);
			im.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "有什么事？快点说，#b#h ##k。\r\n\r\n";
	text += "#L1##b我不想再待在这里了。#l\r\n";
	var mapId = im.getMapId();
	if (mapId == 992023000) {
		text += "#L2##b掉下来了，请送我上去。#l\r\n";
	}
	if (mapId == 992033000) {
		text += "#L3##b钥匙全部用完了。#l\r\n";
	}
	im.askMenu(text, NPC);
}

function 我不想再待在这里了() {
	if (status == 1) {
		var map = im.getMapId();
		if (map >= 992001000 && map <= 992050000) {
			text = "确定要提前离开这里吗？#b朦胧石#k的力量还没耗尽呢。";
			im.askYesNo(text, NPC);
		} else {
			im.askMenu("你并不在塔里啊？", NPC);
			im.dispose(); // 结束
		}
	} else if (status == 2) {
		im.warp(992000000, 0);
		im.dispose(); // 结束
	} else {
		im.dispose(); // 结束
	}
}

function 掉下来了() {
	var mapId = im.getMapId();
	var em = im.getEventManager("Map_TowerOfOz");
	switch (mapId) {
	case 992023000:
		var fails = parseInt(em.getProperty("stage23_fail")) + 1;
		var portal = parseInt(em.getProperty("stage23_stage"));
		em.setProperty("stage23_fail", fails);
		im.warp(992023000, portal + 1);
		break;
	default:
		im.askMenu("这里什么问题也没有啊？你是不是走错路了。", NPC);
		break;
	}
	im.dispose(); // 结束
}

function 钥匙全部用完了() {
	var mapId = im.getMapId();
	if (mapId != 992033000) {
		return;
	}
	if (status == 1) {
		text = "钥匙都已经用完了，还没能找到出口吗？";
		im.askYesNo(text, NPC);
	} else if (status == 2) {
		if (im.haveItem(4009231) || im.haveItem(4009233)) {
			text = "你的背包里不是还有钥匙吗？再试试吧。";
			im.sendOk(text, NPC);
			im.dispose(); // 结束
		} else
			text = "哎呀。看来这次真的走错路了。要重新回到迷宫的起点吗？";
		im.askYesNo(text, NPC);
	} else if (status == 3) {
		im.warp(992033000, 0);
		im.gainItem(4009233, 2);
		im.gainItem(4009231, 2);
		im.dispose(); // 结束
	} else {
		im.dispose(); // 结束
	}
}
