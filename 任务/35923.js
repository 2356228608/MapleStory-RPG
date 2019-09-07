// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext_Bottom("#face0#呃……真的要走了，感觉也有点迈不动步。\r\n因为我也一次都没去过那里。", 1013350);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#但是不能就此放弃。\r\n既然决定了要解决问题，就必须坚持到底。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6#要是敢碍我的事，我就一个人去好了。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#呃啊，我会努力的，绝对不会拖你的后腿！\r\n我一定要查明怪声的原因，拯救村子。快出发吧。", 1013350);
	} else if (status === i++) {
		qm.OnStartNavigation(100051040, 1, "1013319", 35923);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false, false);
		qm.setStandAloneMode(true);
		qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		qm.onTeleport(1, qm.getPlayer().getId(), -305, 80);
		qm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -200, 90);
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		qm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#呃啊……好像比我想象中还要阴森。\r\n感觉那个怪声会随时出现一样……", 1013350);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1");
		qm.userSetFieldFloating(100051040, 5, 5, 50);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.userSetFieldFloating(100051040, 0, 0, 0);
		qm.sendNextNoESC_Bottom("#face0#呃啊啊！！", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face1#……真的出现了。呃……怪声原来没这么频繁的……\r\n啊呀，是因为听到了我的话吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3##b（在茂密的森林中有个小小的入口。\r\n看上去好像是遗迹隐藏的入口。）#k", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
		qm.OverlapScreenDetail19(0, 1000, 3000, 1);
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		qm.fieldEffect_RemoveOverlapScreenDetail(1000);
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.setStandAloneMode(false);
		qm.setInGameDirectionMode(false, false, false);
		qm.sendNext_Bottom("#face0#好像是进入遗迹的入口。怪声和振动都非常强烈……\r\n好的，我们进去看看吧。\r\n\r\n #r ※ 自动移动到任务地图。#k", 1013350);
	} else if (status === i++) {
		qm.warp(910090311);
		//qm.forceCompleteQuest();
		qm.dispose();
	}
}
