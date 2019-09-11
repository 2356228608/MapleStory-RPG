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
		// [2019/9/6 14:34:38] 之前所在地图: cm.warp(350150000) - 当前进入地图: cm.warp(350150300)
		cm.npc_ChangeController(1540839, "oid=481287336", -196, -130, 0);
		cm.npc_SetSpecialAction("oid=481287336", "summon", 0, 0);
		cm.npc_ChangeController(1540840, "oid=481287337", -196, -130, 0);
		cm.npc_SetSpecialAction("oid=481287337", "summon", 0, 0);
		cm.npc_ChangeController(1540788, "oid=481287338", -196, -130, 0);
		cm.npc_SetSpecialAction("oid=481287338", "summon", 0, 0);
		cm.npc_ChangeController(1540791, "oid=481287339", -196, -130, 0);
		cm.npc_SetSpecialAction("oid=481287339", "summon", 0, 0);
		cm.npc_ChangeController(1540804, "oid=481287340", -450, -80, 0);
		cm.npc_SetSpecialAction("oid=481287340", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287341", -500, -80, 0);
		cm.npc_SetSpecialAction("oid=481287341", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287342", -560, -80, 1);
		cm.npc_SetSpecialAction("oid=481287342", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287343", -620, -80, 0);
		cm.npc_SetSpecialAction("oid=481287343", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287344", -680, -80, 1);
		cm.npc_SetSpecialAction("oid=481287344", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287345", -760, -80, 1);
		cm.npc_SetSpecialAction("oid=481287345", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287346", -800, -8, 1);
		cm.npc_SetSpecialAction("oid=481287346", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287347", -840, -8, 1);
		cm.npc_SetSpecialAction("oid=481287347", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287348", 180, 8, 0);
		cm.npc_SetSpecialAction("oid=481287348", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287349", 240, 8, 1);
		cm.npc_SetSpecialAction("oid=481287349", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287350", 300, 8, 0);
		cm.npc_SetSpecialAction("oid=481287350", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287351", 360, 8, 1);
		cm.npc_SetSpecialAction("oid=481287351", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287352", 420, 8, 0);
		cm.npc_SetSpecialAction("oid=481287352", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287353", 480, 8, 1);
		cm.npc_SetSpecialAction("oid=481287353", "summon", 0, 0);
		cm.npc_ChangeController(1540798, "oid=481287354", 540, 8, 1);
		cm.npc_SetSpecialAction("oid=481287354", "summon", 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.npc_SetSpecialAction("oid=481287341", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287342", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287343", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287344", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287345", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287346", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287347", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287348", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287349", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287350", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287351", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287352", "die3", -1, 1);
		cm.npc_SetSpecialAction("oid=481287353", "die", -1, 1);
		cm.npc_SetSpecialAction("oid=481287354", "die3", -1, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -175, 20);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.forceStartQuest(33900, "6");
		cm.Hidden_background("HofM_03", 0);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("在最后的瞬间，封印了黑魔法师的魔法师。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("同时拥有光明与黑暗力量的他", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("为了得到内心的平静，隐居在森林中。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481287340", 1, 250, 120);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#夜光法师，等一等！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_ChangeController(1540807, "oid=481297434", -530, -80, 0);
		cm.npc_SetSpecialAction("oid=481297434", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 220);
		cm.npc_SetForceMove("oid=481297434", 1, 150, 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481287340", -1);
		cm.onScriptMessage(3, 0, 1, 0, "我已经没什么好多说的了。", 256, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#你为什么就不愿意和我们在一起呢？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我并不赞成弗里德的方式。\n我会用我的方式与黑魔法师一决高下。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#但是！", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我就开门见山地说了，弗里德的作战具有不确定性。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "第一，光靠抽象的预言就推断了未来的灾难；\r\n第二，我认为即便将同伴们都聚集到了一起结果也未可知，还有……", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "第三，最关键的是，将如此重要的事情交给你这么生疏的继承人，\r\n这是最为致命的。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#我和弗里德，是玛瑙龙的主人。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face5#玛瑙龙的大小与主人的力量成正比，\r\n将阿弗利埃和你的龙比较，就能够知晓力量的差别有多大了。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#额……", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "虽然这话说得没错，但我怎么这么上火呢。", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你说说看，你打算用什么来填补你和弗里德之间的力量悬殊？", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(来，该怎么办呢？)\r\n#b#L0#合作#l\r\n#L1#努力#l\r\n#L2#我自己的方式#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;p3=1;p4=1;x=3");
		cm.updateInfoQuest(33952, "a=2;p1=1;p2=1;p3=1;p4=1;p5=1;x=3");
		cm.onScriptMessage(3, 0, 1, 0, "夜光法师，你难道已经恢复了数百年前的所有力量了吗？我们全都是不完整的。\r\n双弩精灵和幻影也是如此。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "但是敌人也是如此，所以只要我们能够齐心协力，就能够获胜。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你那不过是狡辩，你看看周围。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -175, -120);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "额，什么时候这么……", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#至少弗里德还没有愚蠢到允许自己被别人跟踪。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#你甚至都没有发现自己什么时候触发了我的魔法陷阱，\r\n我说的有错吗？", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287341", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287342", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287343", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287344", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287345", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287346", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287347", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287348", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287349", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287350", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287351", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287352", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die1", 100);
		cm.npc_SetSpecialAction("oid=481287353", "die2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/die2", 100);
		cm.npc_SetSpecialAction("oid=481287354", "die4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -175, 20);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#……", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我不拦着你以弗里德的继承人的身份自居，\r\n毕竟你确实是玛瑙龙的主人。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "但是，你可千万不要以为你能够代替他，\r\n既然你听懂了，就请回……？！", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "光光？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481287340", 0);
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, "oid=481287340", 0, 0);
		cm.npc_ChangeController(1540828, "oid=481329554", 350, -8, 1);
		cm.npc_SetSpecialAction("oid=481329554", "summon", 0, 0);
		cm.npc_SetForceMove("oid=481329554", -1, 350, 100);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "拉尼娅，我不是让你里面待着嘛。", 256, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "哇！是有客人吗？幸会！你是光光的朋友吗？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#(……光光？)", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(刚刚是叫光光了吗……？)", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "辛苦你们远道而来，赶紧进来吧。", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "没这个必要了，拉尼娅。这些家伙现在就回去了。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "光光！这么久没来客人，你可不能怠慢了啊！", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#拉尼娅……", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "夜光法师你给我老实待着！这是我的家，我的客人，来，进来吧。", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "(来，该怎么办呢？)\r\n#b#L0#进入。#l\r\n#L1#结束和夜光法师的对话。#l", 0, 6, 37, 0, 1, 1540805); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(33952, "a=2;b=1;p1=1;p2=1;p3=1;p4=1;p5=1;x=3");
		cm.updateInfoQuest(33952, "a=2;b=1;p1=1;p2=1;p3=1;p4=1;p5=1;p6=1;x=3");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#那我就失礼了，光光。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#那我就不客气了，光光。", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481329554", 1, 400, 130);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 600);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481297434", 1, 400, 130);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……", 256, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -430, -1650);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm34.img/TheFairyForest", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "夜光法师，这么晚你在看什么呢？", 256, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/1", 128);
		cm.onScriptMessage(3, 0, 1, 0, "我在找弗里德留下了什么。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/2", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "他居然说是封印石难以比拟的重要物品……\r\n我实在是猜不到那到底是什么东西。", 256, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "既然你这么想知道，去帮助龙神不就好了吗？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "……", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/5", 128);
		cm.onScriptMessage(3, 0, 1, 0, "白天来的客人真有趣，\r\n不管是龙神还是米乐，他们看上去心地都很善良。", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/6", 128);
		cm.onScriptMessage(3, 0, 1, 0, "心地善良并不能造就出优秀的魔法师，拉尼娅。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/7", 128);
		cm.onScriptMessage(3, 0, 1, 0, "夜光法师难道讨厌龙神吗？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/8", 128);
		cm.onScriptMessage(3, 0, 1, 0, "我并不是讨厌，\r\n弗里德是我直到最后都没能企及的唯一的魔法师。\r\n他的空位并不是随随便便就能够填补的。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/9", 128);
		cm.onScriptMessage(3, 0, 1, 0, "呵呵……虽然你嘴上这么说，但你还是会帮他们的忙吧？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "……哎，我不想和那个毛贼一起作战。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/11", 128);
		cm.onScriptMessage(3, 0, 1, 0, "切，最终问题还出在这儿吗？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/12", 128);
		cm.onScriptMessage(3, 0, 1, 0, "不，最大的问题是我要丢下拉尼娅。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/13", 128);
		cm.onScriptMessage(3, 0, 1, 0, "嘿嘿……你不是很快就会回来的嘛？", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/14", 128);
		cm.onScriptMessage(3, 0, 1, 0, "恩，走之前我会将结界强化好的。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/15", 128);
		cm.onScriptMessage(3, 0, 1, 0, "呵呵，那我去准备便当咯。", 257, 0, 37, 0, 1, 1540828); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/INTERLUDE/LM2/16", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.updateInfoQuest(33907, "check0=1;check1=1;check2=1;check3=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(4033275);
		cm.gainExp(4033275);//得到奖励经验
		cm.forceCompleteQuest(33949);
		cm.updateInfoQuest(33961, "33947=1;33948=1;33949=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=481287336");
		cm.npc_LeaveField("oid=481287337");
		cm.npc_LeaveField("oid=481287338");
		cm.npc_LeaveField("oid=481287339");
		cm.npc_LeaveField("oid=481287340");
		cm.npc_LeaveField("oid=481287341");
		cm.npc_LeaveField("oid=481287342");
		cm.npc_LeaveField("oid=481287343");
		cm.npc_LeaveField("oid=481287344");
		cm.npc_LeaveField("oid=481287345");
		cm.npc_LeaveField("oid=481287346");
		cm.npc_LeaveField("oid=481287347");
		cm.npc_LeaveField("oid=481287348");
		cm.npc_LeaveField("oid=481287349");
		cm.npc_LeaveField("oid=481287350");
		cm.npc_LeaveField("oid=481287351");
		cm.npc_LeaveField("oid=481287352");
		cm.npc_LeaveField("oid=481287353");
		cm.npc_LeaveField("oid=481287354");
		cm.npc_LeaveField("oid=481297434");
		cm.npc_LeaveField("oid=481329554");
		// [2019/9/6 14:36:32] 当前所在地图: cm.warp(350150300) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350150000);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
