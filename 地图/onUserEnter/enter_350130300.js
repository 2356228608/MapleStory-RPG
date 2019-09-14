// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {

	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if(!ms.getInfoQuest(33990) =="check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check=1"){
		ms.dispose();
		return;
	}
	
	
	
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.npc_ChangeController(1540795, "oid=58726", -180, 60, 1);
		cm.npc_ChangeController(1540884, "oid=58727", 547, 60, 1);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130300;act4=350160000");
		cm.Hidden_background("HofM_Case", 1);
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check11=1;check=1");
		cm.npc_ChangeController(1540879, "oid=482585333", 134, -880, 0);
		cm.npc_SetSpecialAction("oid=482585333", "summon", 0, 0);
		cm.forceStartQuest(33900, "9");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 210, 30);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "说不定会被人看到，还是先把变装卸掉……", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我说！大帅哥！", 256, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#哎哟。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=482585333", 1, 130, 120);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_ChangeController(1540852, "oid=482594319", 37, 0, 0);
		cm.npc_SetSpecialAction("oid=482594319", "summon", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "哎哟？刚刚就在这里的啊……", 256, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=482594319", 1, 150, 120);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "难道是去那里了吗？", 256, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "等一下嘛~大帅哥~", 257, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=482594319", 1, 350, 120);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=482585333", -1, 130, 120);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=482585333", 1);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#哎哟……这个姑娘可真够坚持的。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	}else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	}else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=482585333");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
