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
		cm.Hidden_background("DL5_m", 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -275, 274);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#一周前", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(2560000, "oid=17052996", 225, 260, 1);
		cm.npc_SetSpecialAction("oid=17052996", "summon");
		cm.npc_ChangeController(2560001, "oid=17052997", 150, 260, 1);
		cm.npc_SetSpecialAction("oid=17052997", "summon");
		cm.npc_ChangeController(2560004, "oid=17052998", -100, 260, 0);
		cm.npc_SetSpecialAction("oid=17052998", "summon");
		cm.npc_ChangeController(2560006, "oid=17052999", -180, 260, 0);
		cm.npc_SetSpecialAction("oid=17052999", "summon");
		cm.npc_ChangeController(2560002, "oid=17053000", -260, 260, 1);
		cm.npc_SetSpecialAction("oid=17053000", "summon");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.effect_Text("#fn????##fs18#……影牙……", 100, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.effect_Text("#fn????##fs22#……影牙，快起来……", 50, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("BlackOut", "", 2, 4000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 700, 0);
		cm.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0);
		cm.sendNextNoESC_Bottom("#face0#影牙，喂，影牙，快起来。", 2560002);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("嗯……这是第几次了？");
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1, 180);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.sendNextNoESC_Bottom("#face0#起来了吗，影牙？这次是#b第八次轮回#k了。", 2560000);
	} else if (status === i++) {
		cm.sendNextSNoESC_Bottom("啊，是，是！队长。");
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=17053000", 1);
		cm.sendNextNoESC_Bottom("#face0##fs18#所有人好像都醒了，可以开始了。", 2560001);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#目标的名字是#r艾特#k。他的记忆和之前一样被初始化了。", 2560001);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#我们的任务表面上是守卫村子。\r\n但实际上是要阻止#r不洁者艾特#k接近神殿。", 2560001);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#在重复的时间和无意义的任务轮回中。", 2560001);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_ChangeController(2560005, "oid=17054132", -404, 211, 0);
		cm.npc_SetSpecialAction("oid=17054132", "summon");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#艾特好像马上就要醒了。", 2560005);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#那我就长话短说了。", 2560000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1##fs18#我们影子骑士团的使命非常确定。", 2560000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#为了阻止#b影子神殿的怪物#k苏醒，\r\n为了阻止巨大的混沌吞噬世界，", 2560000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#我们影子骑士团必须完成我们的任务。", 2560000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0##fs18#直到某一天回到#b外面的世界#k为止……", 2560000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=17052996");
		cm.npc_LeaveField("oid=17052997");
		cm.npc_LeaveField("oid=17052998");
		cm.npc_LeaveField("oid=17052999");
		cm.npc_LeaveField("oid=17053000");
		cm.npc_LeaveField("oid=17054132");
		cm.warp(307000000);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
