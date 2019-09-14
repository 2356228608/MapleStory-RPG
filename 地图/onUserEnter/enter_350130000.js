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
		// [2019/9/6 14:45:01] 之前所在地图: cm.warp(913050010) - 当前进入地图: cm.warp(350130000)
		cm.npc_ChangeController(1540799, "oid=58693", 1007, 97, 5);
		cm.npc_ChangeController(1540875, "oid=58694", 947, 97, 5);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(1540809, "oid=481761772", 2255, 40, 0);
		cm.npc_SetSpecialAction("oid=481761772", "summon", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "你正朝着毁灭而去。", 256, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/1", 128);
		cm.onScriptMessage(3, 0, 1, 0, "……", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "相信你也知道，黑魔法师所赐予的力量是需要付出代价的，希拉出卖了国家，而班·雷昂出卖了灵魂。", 257, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "越是沾染其他力量，你的力量就越壮大，但是长此以往下去，你的身体会支撑不住的。", 257, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face4#真是可笑，现在谁在担心谁呢？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/5", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#雪龟岛 #fs15##fnNanum Gothic#魔族阵营深处", 100, 1500, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "你现在可不是该担心别人的处境。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/6", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#你的计划实在是太鲁莽了，其他军团长知道你的计划吗？", 257, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/7", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face4#这怎么可能，如果阿卡伊勒那家伙知道了我的计划，绝对不会毫无动静的。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/8", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#阿卡伊勒虽然背叛了自己所供奉的时间超越者，但至少并没有打算去吸收她的力量，因为他知道自己能有多大的本事。", 257, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/9", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#……你今天还真是格外的烦人，你到底想说什么？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#现在还为时不晚，收手吧。", 257, 0, 37, 0, 1, 1540819); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/11", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.npc_SetForceMove("oid=481761772", -1, 3, 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "这已经不再是我一个人的问题。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/12", 128);
		cm.fieldEffect_PlayBGM("Bgm45/Army Of Fears Theme", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481761772", -1, 1100, 200);
		cm.inGameDirectionEvent_AskAnswerTime(9000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "报告吧。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/1", 128);
		cm.npc_SetSpecialAction("oid=481761772", "stand2", -1, 1);
		cm.onScriptMessage(3, 0, 1, 0, "前线无变化，依然在对峙。", 257, 0, 37, 0, 1, 1540799); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "我方的损失呢？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "精锐兵力的损失中，大部分都是那些英雄的家伙所为，更令人担忧的是补给，估计支撑不了太久。", 257, 0, 37, 0, 1, 1540799); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "别担心，这场战争不会持续太久的。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/5", 128);
		cm.npc_SetForceMove("oid=481761772", -1, 380, 250);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我知道你们一直在等待进攻的命令，也很怀疑为何要在这么寒冷的地方筑起前线。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/6", 128);
		cm.onScriptMessage(3, 0, 1, 0, "离开绯红的时候，我曾经许诺你们，要摆脱那些纯种魔族的魔掌，创造专属于我们的世界。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/7", 128);
		cm.npc_SetSpecialAction("oid=481761772", "sword", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_sword", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481761772", "sword_say", -1, 1);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我们虽然生来懦弱，但绝对不会懦弱地死去。\r\n现在我们的时代很快就会来到！", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/8", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#这次我会亲自出马，在我回来之前，把武器都准备好！", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/9", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
		cm.npc_SetSpecialAction("oid=481761772", "teleport", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_teleport", 100);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/birds_teleport", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481761772");
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		// [2019/9/6 14:46:34] 当前所在地图: cm.warp(350130000) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350130010);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
