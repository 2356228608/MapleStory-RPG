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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.onTeleport(1, cm.getPlayer().getId(), 270, -10);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 484, 100);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#今天又干了一票大的！哈哈！我不过是吓唬而已，竟然吓得屁滚尿流！干坏事就是刺激！", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#那个，别在这傻站着了，分完东西赶快解散！", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#……", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#喂，你直勾勾看什么？有什么不满吗？还不快滚开！", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face3#……我为什么要这样做？", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q1/Female/0", 128);
		cm.sendNextNoESC_Bottom("#face0#干、干什么？", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face3#哈，我特意到这来看看到底是谁这么厉害，没想到就是群草包！啧，枉我白跑一趟！", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q1/Female/1", 128);
		cm.sendNextNoESC_Bottom("#face3#有什么不满，先打赢我再说！你们很能打吗！？", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q1/Female/2", 128);
		cm.inGameDirectionEvent_OneTimeAction(1568, 0);
		cm.inGameDirectionEvent_Effect("Skill/6002.img/skill/60021279/effect", 0, 0, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
		cm.inGameDirectionEvent_Effect("Skill/6002.img/skill/60021279/hit", 0, 700, -90, 1, 0, 0, "oid=undefined", undefined, undefined);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Use", 100);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Hit", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#咦，刚刚过去的是什么？呃，难道是刚抢到的战利品！？", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#呼，这就是惹怒卡德娜大人的代价！有仇必报可是我的信条！", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q1/Female/3", 128);
		cm.sendNextNoESC_Bottom("#face3#想要东西就打赢我！……哈哈，不过可能你没这个机会了！", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q1/Female/4", 128);
		cm.sendNextNoESC_Bottom("#face0#呃、呃呃……气死我了，气死我了……小的们，给我干掉他们！", 3001260);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.sendNextNoESC_Bottom("#face3##b(吼吼，当然不能姑息这些不知死活的家伙。给我干掉他们。)#k", 3001270);
	} else if (status === i++) {
		cm.playerMessage(5, "需要消灭扑过来的怪物。");
		cm.warp(940200600);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
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
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
