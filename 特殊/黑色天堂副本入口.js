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
		cm.askMenuNoESC_Bottom("队长, 要不要冲上去?\r\n#b#L0#出发. #l\r\n#L1#等待. #l", 1540502);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence");
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Voice("SoundEff.img/blackHeaven/secretmission3");
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(1540502, "oid=8205777", 157, 21, 0);
		cm.npc_SetSpecialAction("oid=8205777", "summon");
		cm.npc_ChangeController(1540503, "oid=8205778", 108, 21, 0);
		cm.npc_SetSpecialAction("oid=8205778", "summon");
		cm.npc_ChangeController(1540504, "oid=8205779", 50, 21, 0);
		cm.npc_SetSpecialAction("oid=8205779", "summon");
		cm.npc_SetForceMove("oid=8205777", 1, 600, 300);
		cm.npc_SetForceMove("oid=8205778", 1, 600, 300);
		cm.npc_SetForceMove("oid=8205779", 1, 600, 300);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=8205777");
		cm.npc_LeaveField("oid=8205778");
		cm.npc_LeaveField("oid=8205779");
		cm.fieldEffect_InsertCanvas(1, 155, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/blackHeaven/title1", 0, 1500, 0, 0, 12, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 0, 0);
		cm.effect_Voice("SoundEff.img/blackHeaven/signal_s");
		cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
		cm.playerMessage(5, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		
		cm.dispose();
		
		cm.openNpc(1540502,"黑色天堂副本事件");
	} else {
		cm.dispose();
	}
}
