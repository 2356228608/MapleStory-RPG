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
		ms.npc_ChangeController(1013326, 134, 26, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 134, -20);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 330);
		ms.inGameDirectionEvent_PushScaleInfo(2500, 1500, 2500, 134, 20);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1#哦，这就是那个传说中的工具啊。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1##b（虽然覆盖着苔藓，但这确实是古代的东西。\r\n看来他们并不知道这是遗物。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1##b（这个还让人稍微有点期待。\r\n那个小孩说，最后会把灵药分给大家喝，对吧？）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#……感觉到了村民们的气息。\r\n先离开这里，装作自然地跟他们汇合吧。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.onTeleport(1, ms.getPlayer().getId(), -371, -41);
		ms.npc_ChangeController(1013352, 220, -81, 1);
		ms.npc_SetSpecialAction(1013352, "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#片刻之后，石臼森林", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.sendNextNoESC_Bottom("#face0#呵呵……那就从制作传说中的卡鲁帕灵药开始吧。\r\n希望今年治愈之力能保佑我们村……", 1013352);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1013352, "special1");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_doldol");
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哦，灵验的力量渗入了石臼！", 1013353);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#在这次的节日里，来了一位特殊的客人。\r\n我想让他先来尝尝我们的灵药。", 1013352);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#过来喝下灵药吧，冒险家。", 1013352);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -352, -20);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6#好，那我就不客气了。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 330);
		ms.inGameDirectionEvent_PushScaleInfo(2500, 1500, 2500, 134, 20);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（走近并喝下了灵药。感觉不祥的气息变得更强了。\r\n和触碰遗物时类似的感觉，瞬间击穿了我的身体。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2300);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
		ms.fieldEffect_PlayFieldSound("Ambience.img/WSappear_loop")
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#！？", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar2");
		ms.userSetFieldFloating(910090307, 10, 10, 50);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090307, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1");
		ms.userSetFieldFloating(910090307, 5, 5, 50);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#咦，咦……这个声音是！？", 1013353);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#村外那个凶物发出的声音，为什么……", 1013352);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 2);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（诅咒依旧未变，但身体感觉到了某种奇妙的反应。\r\n这个村子一定和遗物有着某种联系。）#k", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1");
		ms.sendNextNoESC_Bottom("#face1#呃……感觉头都要裂开了……", 1013353);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090307, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar2");
		ms.sendNextNoESC_Bottom("#face1#紧，紧急情况！大，大家马上躲到村里去！", 1013352);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（听到怪声之后，村民们几乎全都向村子逃去。\r\n除了村长和那个唠叨鬼之外。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#真是咄咄怪事……\r\n冒险家，为什么在你身上会听到废墟中的那种怪声呢？", 1013352);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6##b（没想到喝下灵药之后，竟然会出现这种效果……看来和他们搞好关系的愿望落空了。\r\n既然这样，就不必再遮遮掩掩了。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#我想先问一个问题。这个遗物……到底是什么东西？", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（从腰间拿出遗物给他们看。\r\n两人好像非常害怕，脸色一下子变得煞白。）#k", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#呃……冒险家，你为什么会带着那种凶物呢？\r\n快把它拿走。我马斯卡波……看错人了。", 1013353);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#把不祥之物带进村子，玷污了神圣的祭典……\r\n发出恐怖的声音，让村民们陷入了恐惧。", 1013352);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#这是绝对不可原谅的事情。我们不想再跟你有任何牵连。\r\n马上离开这里。", 1013352);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1013352, "special2");
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.npc_LeaveField(1013352);
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 90);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#啧……这可难办了。\r\n既然这样，就只能看看是否有别的办法了。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
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
		//ms.forceCompleteQuest(35911);
		ms.dispose();
		ms.warp(100051020, 0);
	} else {
		ms.dispose();
	}
}
