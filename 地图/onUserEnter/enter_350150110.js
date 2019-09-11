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
		// [2019/9/6 14:28:08] 之前所在地图: cm.warp(350150100) - 当前进入地图: cm.warp(350150110)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.forceStartQuest(33900, "6");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -530, -600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.npc_ChangeController(1540780, "oid=480986246", -558, -997, 0);
		cm.npc_SetSpecialAction("oid=480986246", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=480986247", -394, -997, 1);
		cm.npc_SetSpecialAction("oid=480986247", "summon", 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -530, -850);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "这里应该能够安静说会儿话了。", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -530, -900);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "所以，你来找我是有什么事？", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(额……好紧张啊，到底该怎么提起呢？)\r\n#b#L0#开门见山地说。#l\r\n#L1#婉转地打开话题。#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=1");
		cm.updateInfoQuest(33952, "a=1;p1=1");
		cm.onScriptMessage(3, 0, 1, 0, "真漂亮啊，埃欧雷的风景尽收眼底。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#这可是人类一辈子都欣赏不到的风景。\r\n作为从你那拿了土豆吃的报酬，这也算很丰厚了吧。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b(将弗里德的话转告给双弩精灵)", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -530, -900);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#是这样啊，弗里德他……", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/1", 128);
		cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 99, 20, 1, 1);
		cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, -100, 20, 7, 1);
		cm.fieldEffect_ProcessOnOffLayer("Mer", "Map/Effect2.img/HofM/ACT1_5/0", 0, 1500, 0, 0, 10, 4, 0);
		cm.fieldEffect_Unew150("Map/Effect2.img/HofM/ACT1_5/5/main_001", "animation", "", 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这段时间以来，我在外面经历了太多的战斗。\r\n我原以为这样就可以找到一点线索。", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#但终究我却什么都给不了我的百姓。\r\n是我的自私让他们依然困顿于寒冰之中。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#作为精灵之王，我也是时候该去照顾我的同族了。\r\n很抱歉，看样子我得拒绝你的提议了。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "(……双弩精灵似乎在犹豫，该怎么说服呢？)\r\n#b#L0#我们需要你的力量。#l\r\n#L1#日后我会帮助你的。#l\r\n#L2#这件事终究会对你的目的有所帮助的。#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=1;p1=1;x=1");
		cm.updateInfoQuest(33952, "a=1;p1=1;p2=1;x=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face3#弗里德一直坚信，只有集齐所有英雄，才能够突破难关。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#虽然我们有战士也有魔法师，\r\n但任何东西都替代不了王之弓箭。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#我们真的很需要你，双弩精灵。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Mer", "", 2, 2000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -480, -900);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("masking_up", "", 2, 100, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("masking_down", "", 2, 100, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你只要来我告诉你的地方就好，\r\n我们说好在同一天同一个时间集合，\r\n我们就到时候见。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/13", 128);
		cm.updateInfoQuest(49010, "QET=kN+9m8Nk1QE$");
		cm.updateInfoQuest(49000, "count=0;Quest=49010;day=152919;QET=MFM6sYld1QE$;state=1");
		cm.updateInfoQuest(49000, "count=0;Quest=49010;day=152919;QET=MFM6sYld1QE$;state=2");
		cm.updateInfoQuest(49000, "count=0;Quest=49010;day=152919;QET=oNLbar9k1QE$;state=2");
		cm.updateInfoQuest(49010, "QET=kN+9m8Nk1QE$");
		cm.updateInfoQuest(49010, "QET=kN+9m8Nk1QE$");
		cm.forceStartQuest(49010, "");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_LeaveField("oid=480986247");
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -431, -974, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -393, -1000, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -530, -900);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "好奇怪，分明语气和行动都大相径庭……\r\n可我却好像能看到你的样子，弗里德。", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/14", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "好吧，果然坐着苦恼问题不符合我的性格。", 256, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/15", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(5377700);
		cm.gainExp(5377700);//得到奖励经验
		cm.forceCompleteQuest(33947);
		cm.updateInfoQuest(33961, "33947=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		cm.setInGameDirectionMode(false, false, false);
		cm.updateInfoQuest(33907, "check0=1;check1=1");
		cm.npc_LeaveField("oid=480986246");
		// [2019/9/6 14:29:38] 当前所在地图: cm.warp(350150110) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150000);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
