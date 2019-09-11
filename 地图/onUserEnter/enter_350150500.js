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
		// [2019/9/6 14:37:24] 之前所在地图: cm.warp(350150400) - 当前进入地图: cm.warp(350150500)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.npc_ChangeController(1540837, "oid=481412353", 210, 45, 1);
		cm.npc_SetSpecialAction("oid=481412353", "summon", 0, 0);
		cm.npc_ChangeController(1540808, "oid=481412354", 35, 45, 0);
		cm.npc_SetSpecialAction("oid=481412354", "summon", 0, 0);
		cm.npc_SetSpecialAction("oid=481412353", "special2", -1, 1);
		cm.npc_SetSpecialAction("oid=481412354", "stand3", -1, 1);
		cm.npc_ChangeController(1540798, "oid=481412355", -900, 40, 1);
		cm.npc_SetSpecialAction("oid=481412355", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412356", -800, 40, 0);
		cm.npc_SetSpecialAction("oid=481412356", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412357", -720, 40, 1);
		cm.npc_SetSpecialAction("oid=481412357", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412358", -600, 40, 1);
		cm.npc_SetSpecialAction("oid=481412358", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412359", -400, 40, 1);
		cm.npc_SetSpecialAction("oid=481412359", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412360", -250, 40, 1);
		cm.npc_SetSpecialAction("oid=481412360", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412361", -1000, 40, 0);
		cm.npc_SetSpecialAction("oid=481412361", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412362", -540, 40, 1);
		cm.npc_SetSpecialAction("oid=481412362", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481412363", -300, 40, 0);
		cm.npc_SetSpecialAction("oid=481412363", "summon", 0, 0);
		cm.npc_SetSpecialAction("oid=481412355", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481412356", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481412357", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481412358", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481412359", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481412360", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481412361", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481412362", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481412363", "die", -1, 1);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -500, -60);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#另一方面，同一时刻    #fs15##fnNanum Gothic#神木村南部一处废宅", 100, 1500, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -100, -60);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#……你果然强大啊。\r\n居然一击就制服了那么多人。", 256, 0, 37, 0, 1, 1540837); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "这是我们家族的私人领地。你到这里来有什么目的？", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 78);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我知道你是魔族，\r\n即便在纯种魔族中，我也没有见过有人能有你这样强大的力量。", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#……", 257, 0, 37, 0, 1, 1540837); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412354", "special", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(980);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你别想再躲了，军团长。\r\n我现在就要知道你到底是什么人。", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412353", "special1", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412354", "stand4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412354", "stand2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face2#戴米安……？", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm30.img/thePhoto", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face5#……哥。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#你还活着啊！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481412354", 1, 50, 100);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412353", "special3", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481412354", "stand5", -1, 1);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 200, 78);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#……你为什么要避开我，戴米安？\r\n我该不会看到的是幻觉吧？", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#……我还没有来见哥的资格。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#那是什么意思？", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#数百年前，杀死母亲的不是别人，就是我。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#……！！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("home", "Effect/Direction6.img/effect/tuto/backToHome/0", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#那一天……所有的事情都是你做的？", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#数百年前，哥哥去打仗……有一天我的力量就突然觉醒。\r\n我就被那股力量所吞噬，最终杀死了母亲。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#！！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#但是你大可不必担心，哥！\r\n我会将所有的一切重归原位的。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#……所以你成为了黑魔法师的军团长，获得了力量？\r\n为了挽回那天的失误？", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#好吧，没错，现在的我没有资格说三道四……", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#再次回到我们这边吧，哥，和我一起战斗！\r\n不要再和那些傻瓜人类待在一起了。\r\n我们一起救出妈妈，创造魔族的世界！", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("home", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……不管是你，还是我，原来都被过去所束缚着啊。", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/17", 128);
		cm.fieldEffect_PlayBGM("Bgm45/Heroes Of Maple Theme Piano", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face5#……哥？", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/18", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#该收手的人是你，戴米安。", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/19", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#虽然我难以猜测这数百年来你到底经历了什么，但是……", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/20", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#接受黑魔法师的力量，结局只有毁灭或者发疯。\r\n你选择了错误的道路。", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/21", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face5#你为什么……要说这些？哥也曾经是军团长啊。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/22", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#我虽然协助了黑魔法师，但绝不是因为想要得到禁断的力量。", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/23", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#……应该是吧，毕竟哥哥是天生的。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/24", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#戴米安，懦弱并不是错，你不必因负罪感而将自己陷入窘境。", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/25", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我不再懦弱了。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/26", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#戴米安，你听我说。", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/27", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#自从哥战败了之后，你到底知不知道我们遭受了什么样的羞辱？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/28", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 100, 108);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#！！", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/29", 128);
		cm.inGameDirectionEvent_PushScaleInfo(3000, 2500, 3000, 300, 108);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我之所以协助黑魔法师，\r\n是因为必须把神木村的魔族们全部赶到绯红去。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/30", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#你还记得吗？绯红的规矩就是力量法则。\r\n#r‘只有强者才能活下来。’", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/31", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我们受到同族的压迫，饱受痛苦折磨。\r\n我们整日被鞭子鞭打，干活干到四肢颤抖！\r\n我们生了瘟疫，还得被像垃圾一样抛弃，\r\n我们得用指甲片大的面包熬过一个星期！", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/32", 128);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 200, 78);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#……那都是我的错。\r\n这些都该由我来承担的，不该是你。", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/33", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#不！如果你知道我在过去数百年间做了什么，一定会非常吃惊。\r\n哥哥没有实现的东西，现在该由我去实现。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/34", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#黑魔法师的力量最终会毁了你！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/35", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我的身体会毁掉，我一点都不在乎。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/36", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#戴米安！！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/37", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.fieldEffect_ProcessOnOffLayer("Demi", "Map/Effect2.img/HofM/ACT1_5/3", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#纠正过去的错误，有我一个就够了，所以你……", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/38", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我只知道这个方法，哥。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/39", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#现在还不迟，现在就收手吧！", 257, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/40", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#已经迟了，哥，一切都已经迟了。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/41", 128);
		cm.fieldEffect_InsertCanvas(1, 240, 0, 0, 0, 1300, 0);
		cm.fieldEffect_ProcessOnOffLayer("Demi1", "Map/Effect2.img/HofM/ACT1_5/3_1", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#对我而言，我就只有这一个方法。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/42", 128);
		cm.fieldEffect_ProcessOnOffLayer("Demi2", "Map/Effect2.img/HofM/ACT1_5/3_2", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#！！你的……身体？", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/43", 128);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "Map/Effect2.img/WhiteOut", 0, 1000, 0, 0, 2000000, 4, 1);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#额啊啊！！", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/45", 128);
		cm.npc_SetSpecialAction("oid=481412354", "special2", 1, 1);
		cm.fieldEffect_ProcessOnOffLayer("Demi", "", 2, 10, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("Demi1", "", 2, 10, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("Demi2", "", 2, 10, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 200, 78);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "", 2, 3000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#魔族的法则，不干涉对方的战斗。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/46", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#这是我的战斗，哥就不要干涉这场战争了。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/47", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 288, 100, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.npc_LeaveField("oid=481412353");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "戴米安……！", 256, 0, 37, 0, 1, 1540808); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/48", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我一直都很想你，哥。\r\n不要太恨我。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/DM/44", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(4033275);
		cm.gainExp(4033275);//得到奖励经验
		cm.forceCompleteQuest(33951);
		cm.updateInfoQuest(33961, "33950=1;33951=1;33947=1;33948=1;33949=1");
		cm.updateInfoQuest(33909, "1_5=3;1=2;2=2;3=1;4=1");
		cm.updateInfoQuest(33933, "got=4");
		cm.forceCompleteQuest(33911);
		//cm.finishAchievement(1198, 2);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=481412354");
		cm.npc_LeaveField("oid=481412355");
		cm.npc_LeaveField("oid=481412356");
		cm.npc_LeaveField("oid=481412357");
		cm.npc_LeaveField("oid=481412358");
		cm.npc_LeaveField("oid=481412359");
		cm.npc_LeaveField("oid=481412360");
		cm.npc_LeaveField("oid=481412361");
		cm.npc_LeaveField("oid=481412362");
		cm.npc_LeaveField("oid=481412363");
		// [2019/9/6 14:39:47] 当前所在地图: cm.warp(350150500) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150600);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
