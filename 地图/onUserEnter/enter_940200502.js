/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]魔链影士系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var PQname = ["荒蛮终点站_后巷"];
var chs = 0;
var status = -1;

function action(mode, type, selection) {
	status++;

	if (ms.isQuestFinished(34600) || !ms.isQuestFinished(34600)) {
		action1(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(3001221, "oid=257940", 692, 41, 1);
		ms.npc_ChangeController(3001260, "oid=257941", 813, 41, 1);
		ms.npc_ChangeController(3001260, "oid=257942", 872, 33, 1);
		ms.npc_ChangeController(3001260, "oid=257943", 554, 26, 0);
		ms.npc_ChangeController(3001260, "oid=257944", 996, 13, 1);
		ms.forceCompleteQuest(34600);
		ms.onTeleport(1, ms.getPlayer().getId(), -373, -47);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -374, 43);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 300);
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -50, 43);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001270, "#face0#今天城市里……也充斥了一股臭味。没办法，只能忍忍了。我到底在期待什么……\r\n", 256, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 350, 43);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 770, 43);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#呜哈哈，看到了吗？我这出神入化的身手！咻-咻-几下子就能把对手打趴下！\r\n", 256, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#哈哈，你们这些家伙。跟我一伙是你们的光荣，知道吗？\r\n", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 43);
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001270, "#face1#喂，那边之所以这么吵……是有人在打架吗？呃，该不会有什么高手吧？\r\n", 256, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		ms.inGameDirectionEvent_ForcedFlip10(2, 420);
		ms.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 420, 43);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
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
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.onTeleport(1, ms.getPlayer().getId(), 270, -10);
		ms.inGameDirectionEvent_ForcedFlip(1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 484, 100);
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#今天又干了一票大的！哈哈！我不过是吓唬而已，竟然吓得屁滚尿流！干坏事就是刺激！", 256, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#那个，别在这傻站着了，分完东西赶快解散！", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#……", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#喂，你直勾勾看什么？有什么不满吗？还不快滚开！", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001270, "#face3#……我为什么要这样做？", 257, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.effect_Voice("Voice3.img/cadena/Q1/Female/0", 128);
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#干、干什么？", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001270, "#face3#哈，我特意到这来看看到底是谁这么厉害，没想到就是群草包！啧，枉我白跑一趟！", 257, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.effect_Voice("Voice3.img/cadena/Q1/Female/1", 128);
		ms.onScriptMessage(3, 0, 1, 3001270, "#face3#有什么不满，先打赢我再说！你们很能打吗！？", 257, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.effect_Voice("Voice3.img/cadena/Q1/Female/2", 128);
		ms.inGameDirectionEvent_OneTimeAction(1568, 0);
		ms.inGameDirectionEvent_Effect("Skill/6002.img/skill/60021279/effect", 0, 0, 0, 1, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_Effect("Skill/6002.img/skill/60021279/hit", 0, 700, -90, 1, 0, 0, 0, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Use", 100);
		ms.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Hit", 100);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#咦，刚刚过去的是什么？呃，难道是刚抢到的战利品！？", 256, 0, 37, 0, 1, 3001260); // [类型] 普通对话
	} else if (status === i++) {
		ms.onScriptMessage(3, 0, 1, 3001270, "#face2#呼，这就是惹怒卡德娜大人的代价！有仇必报可是我的信条！", 257, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.effect_Voice("Voice3.img/cadena/Q1/Female/3", 128);
		ms.onScriptMessage(3, 0, 1, 3001270, "#face3#想要东西就打赢我！……哈哈，不过可能你没这个机会了！", 257, 0, 37, 0, 1, 3001270); // [类型] 普通对话
	} else if (status === i++) {
		ms.effect_Voice("Voice3.img/cadena/Q1/Female/4", 128);
		ms.onScriptMessage(3, 0, 1, 3001260, "#face0#呃、呃呃……气死我了，气死我了……小的们，给我干掉他们！", 257, 0, 37, 0, 1, 3001260); // [类型] 普通对话
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
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		var em = qm.getEventManager(PQname[chs]);
		em.startInstance(qm.getPlayer(), qm.getMap());
		//ms.warp(940200600);
		ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
		while (ms.getLevel() < 10) {
			ms.levelUp();
		}
		ms.dispose();

	} else {
		ms.dispose();
	}
}

function action2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		ms.warp(992000000, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}
