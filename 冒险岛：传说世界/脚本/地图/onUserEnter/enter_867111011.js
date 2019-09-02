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
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400032, "oid=1810455", -456, 17, 0);
		ms.npc_SetSpecialAction("oid=1810455", "summon");
		ms.npc_ChangeController(9400033, "oid=1810456", -581, 17, 0);
		ms.npc_SetSpecialAction("oid=1810456", "summon");
		ms.npc_ChangeController(9400049, "oid=1810457", -190, 17, 1);
		ms.npc_SetSpecialAction("oid=1810457", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("#face0#走得那么慢的家伙能跑哪儿去了呢！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("奈奈消失后我查看了周围，有外人入侵的痕迹。", 9400049);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("看来他可能是盯上了奈奈。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你说什么呢？谁会要那种没用的乌龟啊。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那人肯定有别的目的！没什么别的东西被偷吗？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("是的，消失的只有奈奈。", 9400049);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("反正奈奈消失了，我们都有责任，剑斗。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我也会和你一起去寻找的。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我为什么要去找那家伙啊？有那个时间我还不如多消灭个敌人呢！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("反正是乌龟，找个一样的不就行了吗。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……剑斗。", 9400033);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_setForceFlip("oid=1810455", -1);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("?", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("其实，奈奈不是普通的乌龟。它是拥有特殊魔力的一种“灵物”。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("如果它得到进一步成长，遇到能够提高它能力的人，它就能发挥出巨大的力量。它是个非常珍贵的生物。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("如果有人故意偷走了奈奈……那这件事就比剑斗你想的要严重多了。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("而且，剑斗肯定不擅长照看别的东西，我接到了在旁边密切注视你的任务。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#什么？！这种事情为什么现在才告诉我？！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("如果我先告诉了你，那剑斗肯定会努力让奈奈觉醒。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我说的没错吧。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("让灵物顺其自然是非常重要的。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("所以，它现在不知道正在受什么样的苦，请你快点去找到它吧。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("切……", 9400032);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("有人丢了青蛙，还有人丢了乌龟，接下来是什么呢？");
	} else if (status === i++) {
		ms.updateInfoQuest(16157, "point=165");
		ms.forceCompleteQuest(59711);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1;2=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.updateInfoQuest(18418, "B=166");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1810455");
		ms.npc_LeaveField("oid=1810456");
		ms.npc_LeaveField("oid=1810457");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
