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
		// [2019/9/6 14:30:00] 之前所在地图: cm.warp(350150000) - 当前进入地图: cm.warp(350150200)
		cm.npc_ChangeController(2110000, "oid=60103", 417, 183, 1);
		cm.npc_ChangeController(2110001, "oid=60104", 1333, 192, 1);
		cm.npc_ChangeController(9000124, "oid=60105", 222, 372, 1);
		cm.npc_ChangeController(9000123, "oid=60106", 119, 372, 1);
		cm.npc_ChangeController(2010011, "oid=60107", -1353, 372, 1);
		cm.npc_ChangeController(9000090, "oid=60108", -20, 372, 1);
		cm.npc_ChangeController(9071003, "oid=60109", 1321, 372, 1);
		cm.npc_ChangeController(2111007, "oid=60110", 804, 192, 1);
		cm.npc_ChangeController(9000178, "oid=60111", -268, 372, 1);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.forceStartQuest(33900, "6");
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.npc_ChangeController(1540803, "oid=481071296", -346, -300, 0);
		cm.npc_SetSpecialAction("oid=481071296", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=481071297", 70, 130, 1);
		cm.npc_SetSpecialAction("oid=481071297", "summon", 0, 0);
		cm.npc_ChangeController(1540824, "oid=481071298", 2550, 100, 1);
		cm.npc_SetSpecialAction("oid=481071298", "summon", 0, 0);
		cm.npc_ChangeController(1540825, "oid=481071299", 2480, 130, 1);
		cm.npc_SetSpecialAction("oid=481071299", "summon", 0, 0);
		cm.npc_ChangeController(1540826, "oid=481071300", 1800, 160, 1);
		cm.npc_SetSpecialAction("oid=481071300", "summon", 0, 0);
		cm.npc_ChangeController(1540824, "oid=481071301", -1900, 160, 1);
		cm.npc_SetSpecialAction("oid=481071301", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=481071302", 3100, 130, 1);
		cm.npc_SetSpecialAction("oid=481071302", "summon", 0, 0);
		cm.npc_ChangeController(1540807, "oid=481071303", -1950, 156, 1);
		cm.npc_SetSpecialAction("oid=481071303", "summon", 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, -750);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("据传不管想要什么都能得手的传说中的怪盗", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("历经数百年再次出现在了人们的面前，", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("为了寻找珍贵的宝物，在世间流浪。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -350, -250);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "这可真是麻烦啊……", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "在那边！！幻影！！", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#切！", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -340, -283, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.npc_LeaveField("oid=481071296");
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -150, 180);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#幻影！等一下！！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 1000);
		cm.npc_SetForceMove("oid=481071297", -1, 1000, 120);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=60104");
		cm.npc_LeaveField("oid=60109");
		cm.npc_LeaveField("oid=481071300");
		cm.onTeleport(1, cm.getPlayer().getId(), 3044, 91);
		cm.npc_LeaveField("oid=481071297");
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2550, 150);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=60103");
		cm.npc_LeaveField("oid=60105");
		cm.npc_LeaveField("oid=60106");
		cm.npc_LeaveField("oid=60107");
		cm.npc_LeaveField("oid=60108");
		cm.npc_LeaveField("oid=60110");
		cm.npc_LeaveField("oid=60111");
		cm.npc_LeaveField("oid=481071301");
		cm.npc_LeaveField("oid=481071303");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 350);
		cm.npc_SetForceMove("oid=481071302", -1, 350, 120);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "嘿，姑娘~姑娘，你那美丽的眼睛里有个圆月呢？", 256, 0, 37, 0, 1, 1540824); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#咳咳……上哪儿去了？我看分明就是往这边逃的啊。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "该不会是你看错了吧？", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "不可能，\r\n既然他已经预告过会偷取玛加提亚的宝石，现在肯定就在附近。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#可是再这样下去，就算熬夜也找不到啊。", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(来，该怎么办呢？)\r\n#b#L0#藏在附近，制定作战计划。#l\r\n#L1#询问他人。#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;x=1");
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;p3=1;x=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这个想法不错，主人。我们实在是太显眼了。", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, 1900, 180);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 700);
		cm.npc_SetForceMove("oid=481071302", -1, 600, 120);
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481071300", 1);
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, "oid=481071300", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481071298");
		cm.onScriptMessage(3, 0, 1, 0, "……等一下，我想了想，幻影不是变装高手吗？\r\n刚刚那位大叔有点奇怪啊？", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#米乐，你就像是个名侦探！", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "赶紧追过去确认一下吧！", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 2500, 200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#已经消失不见了！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2200, 170);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481071301", -1, 250, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481071302");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onTeleport(1, cm.getPlayer().getId(), -2364, 155);
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -2364, 195, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=60104");
		cm.npc_LeaveField("oid=60109");
		cm.npc_LeaveField("oid=481071299");
		cm.npc_LeaveField("oid=481071300");
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, "oid=481071301", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481071301", 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481071301", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, "oid=481071301", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_OneTimeAction(62, 600000);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#就现在！上前攻击，让他无处可逃！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#好的！", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481071303", "special4", 1, 1);
		cm.npc_SetSpecialAction("oid=481071301", "special", -1, 1);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/22101000/Use", 100);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=481071301", "special2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你……你们为什么要这么对我。", 256, 0, 37, 0, 1, 1540843); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#咳咳，不是呢，对不起！！", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "如果是幻影，应该能够瞬间避开这样的攻击。", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#你也得注意分寸才是啊，米乐！", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#我出于惯性就……不过幻影到底去哪儿了啊？", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481071303", 1);
		cm.onScriptMessage(3, 0, 1, 0, "主人，这次我们去那里看看吧？", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_ChangeController(1540803, "oid=481142354", -2400, 170, 0);
		cm.npc_SetSpecialAction("oid=481142354", "summon", 0, 0);
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -2400, 195, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/blackHeaven/PhantomS", 0, 0, 0, 1, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("#face2#额啊？！", 0, 0, 0, 500, 0, 9031062);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/blackHeaven/PhantomS", 0, -2400, 195, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481142354");
		cm.npc_setForceFlip("oid=481071303", 0);
		cm.onTeleport(1, cm.getPlayer().getId(), -2633, -542);
		cm.onScriptMessage(3, 0, 1, 0, "恩？主人？你去哪儿了？", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=60107");
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.npc_ChangeController(1540803, "oid=481144686", -2575, -700, 1);
		cm.npc_SetSpecialAction("oid=481144686", "summon", 0, 0);
		cm.onTeleport(1, cm.getPlayer().getId(), -2633, -542);
		cm.OverlapScreenDetail19(0, 1000, 1000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2590, -515);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#我的天啊……麻烦精驾到。", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#幻影，你为什么要这么逃啊？我来是有重要的事情要说。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#虽然不知道你要说的事情有多重要，\r\n可你现在正在妨碍我完美的计划。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#我打算带着难以忘怀的记忆，如风一般在玛加提亚销声匿迹，\r\n可就因为你，从一开始气氛就被搞砸了啊。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#现在重要的不是这个，那个……\r\n#b(得在幻影再次逃跑之前赶紧说明事情的来龙去脉。)", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "……原来是这样，弗里德啊，好怀念这个名字。", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "弗里德认为我独自一人是没法解决这个问题的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "他说的没错，你一个人是不可能的。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那你愿意帮忙吗？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#不，这就不该归我管了。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#哎？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我明白你想要继承弗里德的意志，\r\n但是那是你的状况，我并没有必要为此行动吧？", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#额……(虽然曾经预想过，但他果然不容易答应啊。)", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我为什么要对此事产生兴趣呢？你只要说出一点。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(来，该怎么办呢？)\r\n#b#L0#我是弗里德的继承人。#l\r\n#L1#拯救世界的义务。#l\r\n#L2#怪盗幻影的荣耀#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;p3=1;x=2");
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;p3=1;p4=1;x=2");
		cm.onScriptMessage(3, 0, 1, 0, "我知道幻影不愿意与其他人为伍，\r\n之所以幻影会愿意在数百年前与其他英雄并肩作战，都是因为有弗里德这个领袖在。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我虽然还没有那么出色，但俨然也是弗里德的继承人，你难道就不会对此产生兴趣吗？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "来不来是幻影你的自由，总之我们说好了大家一起到我告诉你的地点，我会等着你的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, -2630, -500, 1, 0, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "真是的，这么不按常理出牌的家伙我还是头一次见到。", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/1", 128);
		cm.fieldEffect_PlayBGM("Bgm19.img/DancingWitnTheMoon", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "这么看来，这段时间我应该不会无聊了，是不是？克莉丝汀，马奥。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "你该不会这次也打算弄飞一整艘船吧？", 257, 0, 37, 0, 1, 1401002); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "要是这样还请你提前告诉我们，我们也好有个心理准备。", 257, 0, 37, 0, 1, 1401001); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "姑娘们胆子怎么能这么小呢，\r\n想要获得高收益，就得懂得下点大的赌注。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/5", 128);
		cm.onScriptMessage(3, 0, 1, 0, "主人，传送装置已经准备好了，您要回去了吗？", 257, 0, 37, 0, 1, 1401000); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/6", 128);
		cm.onScriptMessage(3, 0, 1, 0, "等着，在此之前得先了结了玛加提亚的事情。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/7", 128);
		cm.onScriptMessage(3, 0, 1, 0, "都这样了还想着要偷东西啊。", 257, 0, 37, 0, 1, 1401000); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/8", 128);
		cm.onScriptMessage(3, 0, 1, 0, "这当然，怪盗幻影得遵守约定。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/9", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -550, 1580);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "时隔数百年的再次相聚啊。", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "虽然一群人聚在一起不是我的风格……\r\n但既然这是弗里德所留下的最后一张底牌，实在是让人忍不住好奇啊。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/11", 128);
		cm.onScriptMessage(3, 0, 1, 0, "那就去看看吧？\r\n那小子到底是英雄，还是狗熊。", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/PH/12", 128);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/PhantomS", 100);
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(5377700);
		cm.gainExp(5377700);//得到奖励经验
		cm.forceCompleteQuest(33948);
		cm.updateInfoQuest(33961, "33947=1;33948=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		cm.setInGameDirectionMode(false, false, false);
		cm.updateInfoQuest(33907, "check0=1;check1=1;check2=1");
		cm.npc_LeaveField("oid=481071301");
		cm.npc_LeaveField("oid=481071303");
		cm.npc_LeaveField("oid=481144686");
		// [2019/9/6 14:33:30] 当前所在地图: cm.warp(350150200) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150000);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
