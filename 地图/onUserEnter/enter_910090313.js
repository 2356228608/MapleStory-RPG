// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if(!ms.getQuestStatus(35926)==1){
		ms.dispose();
		return;
	}
	
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_ForcedFlip10(2, 1);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_OneTimeAction(27, 999999);
		ms.npc_ChangeController(1013350, -182, 78, 1);
		ms.npc_SetSpecialAction(1013350, "summon");
		ms.npc_SetForceMove(1013350, 1, 10, 80);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1013350, "special2");
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 230);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090313, 2, 30, 1000);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#啊，勇士，看那个！\r\n那下面好像是通往出口的路！", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 10);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#但是，闪光石就要熄灭了。\r\n快换个新的……啊，这是最后一个了吗？", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#!?", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#勇士，勇士！", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#闪光石……", 1013350);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 1300, 0);
		ms.sendNext_Bottom("#face3##b（就算以最快的速度游过去也来不及了。必须……想想办法。\r\n怎么才能更快地到达那里呢？）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（更快地……到下面去的方法……更快。\r\n……现在能用身边的东西，做些什么呢？）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6##b（现在只剩下炸药、绳子、弓和箭。\r\n其中有可以突破眼下困境的东西吗？）#k", 1013358);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090313, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(500, 1600, 500, 85, 230);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（在水里制造爆炸怎么样？\r\n……不，那样不会有任何变化。再想想其他办法。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(500, 1700, 500, 85, 260);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（把绳子拴在什么地方，一下子拉过去？\r\n周围都是光滑的石头。这个方法好像不行。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 85, 280);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（弓和箭只需一点力量，就可以快速地飞出很远，发挥威力。\r\n射箭……向底下……）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
		ms.fieldEffect_PlayBGM("Bgm51.img/Pathfinder");
		ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		ms.userSetFieldFloating(910090313, 2, 30, 1000);
		ms.sendNext_Bottom("#face3#好，我来试一下。如果是这个方法……", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#小孩，我要往那边去了。抓紧我。", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#射出箭的同时，全力开始游泳。\r\n怎么样？能做到吗？", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(1, 120);
		ms.userSetFieldFloating(910090313, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -113, 210);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090313, 2, 30, 1000);
		ms.sendNext_Bottom("#face0##b（小孩什么都没说，只是紧紧地抓住了我的衣角。\r\n好像在努力压制着内心的恐惧。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#……好，要上了。", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 170, 0, 0, 0, 1300, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090313, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(2500, 3000, 2500, 0, 600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_light/0", 0, 0, 0, -80, -12, 4, 1);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble");
		ms.inGameDirectionEvent_AskAnswerTime(1800);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/job");
		ms.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（箭矢准确地命中了闪光石，带着光的残像迅速沉入了水中。\r\n沿着光开辟的道路，到外面去吧。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.forceCompleteQuest(35926);
		ms.forceStartQuest(35927);
		ms.npc_LeaveField(1013350);
		ms.warp(100051044);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
