// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	var mapId = ms.getMapId();
	if (mapId == 867111015) {
		action15(mode, type, selection);
	} else if (mapId == 867111016) {
		action16(mode, type, selection);
	} else if (mapId == 867111017) {
		action17(mode, type, selection);
	} else {
		action18(mode, type, selection);
	}
}

function action15(mode, type, selection) {
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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1662636", 706, 1920, 0);
		ms.npc_SetSpecialAction("oid=1662636", "summon");
		ms.npc_ChangeController(9400032, "oid=1662637", 770, 1920, 1);
		ms.npc_SetSpecialAction("oid=1662637", "summon");
		ms.npc_ChangeController(9400033, "oid=1662638", 850, 1920, 1);
		ms.npc_SetSpecialAction("oid=1662638", "summon");
		ms.npc_ChangeController(9400034, "oid=1662639", 1500, 1920, 0);
		ms.npc_SetSpecialAction("oid=1662639", "summon");
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");
		ms.effect_Text("#fn黑体##fs18#寻找动物销售商而来到勇士部落的侦探团一行人……", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(7200);
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("好，到勇士部落了，那就开始吧？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，那我们是先去调查消息，还是先找动物商人呢？", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1662638", 1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("等等……你们看到那边那个人了吗？", 9400033);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1662637", 1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 200, 1000, 1878);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1882);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("谁……？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个人，他的穿着打扮和这个村子一点都不搭，应该是外地人。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("外地人……难道就是明明女士提到的那个商人？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我们先和他搭个话看看吧？", 9400033);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("那个人还在勇士部落吗？就算不在，我还是去那个位置看看吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1662637", 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1662638", 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1662636", 1, 600, 200);
		ms.npc_SetForceMove("oid=1662637", 1, 350, 200);
		ms.npc_SetForceMove("oid=1662638", 1, 350, 200);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个……我想问你点事情……？", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1662639", -1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("是的，请问你是在出售什么东西吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#(咳)……怎么？你为什么这么觉得？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你似乎不是这个村子的人。而且看你似乎有点焦急……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哎！？嗯……", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("(没找到小偷，倒是来了其他人……)", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("废话不多说了，我是赏金猎人。你们这些小鬼……还有奇怪的家伙……我不知道你们是谁，不过看来你们是听说了我散布的假消息而来的。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("赏金猎人？不是动物商人？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("贩卖动物什么的是我为了引出我在宇宙中追查的罪犯而设下的诱饵。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("宇宙……看来你来自很远的地方啊。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("宇宙中臭名昭著的罪犯身上有宇宙警察的悬赏金。警察们只凭自己的力量难以在这广阔的宇宙中找到罪犯，所以就有我这样的赏金猎人存在。 ", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("虽然……我被冤枉，也成了被悬赏的犯人，来到了这个冒险岛世界。但是我在这里并没有忘记自己的使命。那些家伙是我一直作为目标的一个组织。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那就是说，你也是罪犯？！啊啊啊", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#你说什么呢！我都说了是被冤枉的！被冤枉的！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("等等，你要抓的罪犯是什么人？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#你们的好奇心还真重啊……！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不过没关系，我就告诉你们吧。我现在正在寻找的罪犯是个巨大的组织。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("他们叫做“APORD”。我现在就是来这里寻找APORD的痕迹。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("APORD？", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("0", "Map/EffectPL.img/MDIllust/illust5", 0, 1500, 0, 0, 14, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(6200);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1300, 1980);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，说起APORD，他们是进行走私和绑架的犯罪组织，不过他们绑架的不只有人，还有动物。 ", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("特别是拥有特殊能力的动物，不管是哪里他们都会绑架回去。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("最近听说他们绑架动物进行各种活体实验。虽然得确认一下这个传言是不是真的，但活体实验……真是可怕。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("所以，如果得到出售珍稀动物的消息，他们应该就会找过来。没想到不是APORD而是你们找上门了，切。", 9400034);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("APORD……他们就是这样的组织啊！没错，我想起来了！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.updateInfoQuest(16157, "point=195");
		ms.forceCompleteQuest(59716);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.updateInfoQuest(18418, "B=196");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1662636");
		ms.npc_LeaveField("oid=1662637");
		ms.npc_LeaveField("oid=1662638");
		ms.npc_LeaveField("oid=1662639");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action16(mode, type, selection) {
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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1664856", 1354, 1920, 0);
		ms.npc_SetSpecialAction("oid=1664856", "summon");
		ms.npc_ChangeController(9400032, "oid=1664857", 1270, 1920, 0);
		ms.npc_SetSpecialAction("oid=1664857", "summon");
		ms.npc_ChangeController(9400033, "oid=1664858", 1140, 1920, 0);
		ms.npc_SetSpecialAction("oid=1664858", "summon");
		ms.npc_ChangeController(9400034, "oid=1664859", 1500, 1920, 1);
		ms.npc_SetSpecialAction("oid=1664859", "summon");
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");
		ms.inGameDirectionEvent_PushMoveInfo(0, 200, 1300, 1890);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.effect_Text("#fn黑体##fs18#与动物销售商见面的侦探团一行人……", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3375);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们的表情为什么这样？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("其实我们正在寻找失踪的动物。而且我们听说了勇士部落有人在出售珍稀动物的消息才来了这里。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#我们还以为我们的朋友被你抓了……", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, "oid=1664859", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哎呀，你们是弄错了啊……你们弄丢的都是拥有特殊能力的动物吗？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face3#是的，我的嘟嘟能够祈雨，奈奈，嗯……不知道有什么能力，反正也很重要。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("奈奈是一种灵物，应该嘟嘟也是如此。.", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("是不是这位赏金猎人所说的宇宙APORD绑架了嘟嘟和奈奈呢？", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那么你们的动物很有可能成为了那些家伙的目标。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个……赏金猎人。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#你能和我们一起寻找宇宙APORD吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#我干嘛要这么做？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("杰特在寻找宇宙APORD，我们在寻找嘟嘟和奈奈。.", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("如果我们一起调查，说不定你能快一点找到APORD的痕迹。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("而我们也能早日看到嘟嘟和奈奈了。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啧啧，我在追查悬赏犯人的时候不和别人合作。而且你们还这么业余。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("追查悬赏犯人时，需要比敌人更快的洞察力和严谨的推理能力，所以……", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#好极了！ 侦探团又有新的同伴了！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我的话还没说完呢！你这小鬼真是随着自己的意思说话啊！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("而且，就算成功了……我不是还得跟你们分悬赏金嘛，那我可不要。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#什么？！你不要帮我们吗？！就因为我们是业余的？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#我和这两位都是冒险岛世界的勇士哦，我们虽然是第一次追查罪犯，但是我们有信心。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们的信心又不能给我带来钱。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#真是个不可理喻的家伙，我才不要和这样的家伙合作呢。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("喂！我已经追查了这些家伙很久，好几年前就来了冒险岛世界。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我已经努力了这么久，才不要被你们这些小鬼耽误了。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们应该不会天真地以为我会无条件跟你们合作吧？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那我们要怎么做你才能帮我们呢？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我都说不会帮你们了！你有没有在听我说话啊？！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("赏金猎人当然因为“钱”才会有所行动。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("没错，都是些贪财的家伙。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不，等下……", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#好，那我们就应该找一下能够给他的值钱东西！我们要怎么做呢？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我不需要！喂！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我们能够找到的应该就是从怪物身上获得的战利品吧？", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("切，我才不要去迎合这种家伙。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#剑斗！侦探团就应该团结一心！我们不能互相讨厌。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们听我说啊！喂！", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那我们就各自尽自己所能，去搜集战利品吧。这样的话他应该就会满足了吧。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#OK！好极了！那侦探团暂时解散！", 9400031);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1664856", -1, 1000, 200);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetForceMove("oid=1664857", -1, 1000, 150);
		ms.npc_SetForceMove("oid=1664858", -1, 1000, 120);
		ms.inGameDirectionEvent_AskAnswerTime(5200);
	} else if (status === i++) {
		ms.npc_LeaveField("oid=1664856");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_LeaveField("oid=1664857");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_LeaveField("oid=1664858");
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, "oid=1664859", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#……这些家伙是怎么回事……", 9400034);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.forceStartQuest(59718, "");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1664859");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action17(mode, type, selection) {
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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1656473", 1354, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656473", "summon");
		ms.npc_ChangeController(9400032, "oid=1656474", 1270, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656474", "summon");
		ms.npc_ChangeController(9400033, "oid=1656475", 1140, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656475", "summon");
		ms.npc_ChangeController(9400034, "oid=1656476", 1500, 1920, 1);
		ms.npc_SetSpecialAction("oid=1656476", "summon");
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 1300, 1890);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_AskAnswerTime(1350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#好，这些应该够了吧？！赏金猎人！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.updateInfoQuest(16157, "point=227");
		ms.forceCompleteQuest(59718);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.updateInfoQuest(18418, "B=228");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1656473");
		ms.npc_LeaveField("oid=1656474");
		ms.npc_LeaveField("oid=1656475");
		ms.npc_LeaveField("oid=1656476");
		ms.warp(867111018);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action18(mode, type, selection) {
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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1656762", 1354, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656762", "summon");
		ms.npc_ChangeController(9400032, "oid=1656763", 1270, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656763", "summon");
		ms.npc_ChangeController(9400033, "oid=1656764", 1140, 1920, 0);
		ms.npc_SetSpecialAction("oid=1656764", "summon");
		ms.npc_ChangeController(9400034, "oid=1656765", 1500, 1920, 1);
		ms.npc_SetSpecialAction("oid=1656765", "summon");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_PushMoveInfo(0, 0, 1300, 1890);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1300, 1980);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("别那么叫我……我的名字叫“杰特”。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#代号杰特！太帅了！我叫代号BT，这边是代号剑斗和代号神那！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#还有帮助我们的代号#h0#！我们是冒险岛侦探团！现在代号杰特也和我们一起了！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, "oid=1656765", 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#不不，叫我的名字就行了……不要给我加上奇怪的称号……", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#我就说这个侦探团什么的很奇怪啊……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("所以，你要帮我们吗？请你快点决定吧，我们也有很多事情要做啊。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("知道了！你们的动物既然消失了，那你们肯定会非常努力的。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("但是！我帮你们的条件是不分给你们赏金。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们找到动物之后就乖乖回去，知道了吗？", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哼，我们本来就对那种东西没兴趣。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#话说回来，请你告诉我们更多关于那些敌人的消息吧，代号杰特！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好，我们来听一下报告吧！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#真是些……放肆的家伙……算了，我告诉你们吧。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们知道我为什么要在勇士部落等APORD吗？因为我的高级情报员说APORD盯上了这附近的动物。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("高级情报员？", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，有一个背叛了APORD的人一直在给我提供情报。但是，那家伙很贪心，每次只会给我这么点情报。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("如果要从他那里获得更多情报，那就得给他更多的东西。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("但是，我现在手上的钱不够了，所以就只能对你们进行一下试验了。", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你是说抓住怪物，带来战利品……吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("咳，别说得这么明显嘛，这不就让我显得太俗气了嘛~", 9400034);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("反正那个情报对我们来说也很重要，我们就帮你一下吧。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好，那我就在这里等着，说不定APORD会来购买动物。", 9400034);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		ms.forceStartQuest(59719, "");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1656762");
		ms.npc_LeaveField("oid=1656763");
		ms.npc_LeaveField("oid=1656764");
		ms.npc_LeaveField("oid=1656765");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
