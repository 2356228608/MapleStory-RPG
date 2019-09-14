// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if (ms.getInfoQuest(33900) != "9") {
		ms.dispose();
		// [2019/9/6 14:58:05] 之前所在地图: cm.warp(350130300) - 当前进入地图: cm.warp(350130400)
		cm.npc_ChangeController(1540860, "oid=58733", 1847, 60, 1);
		cm.npc_ChangeController(1540855, "oid=58734", 883, 60, 1);
		cm.npc_ChangeController(1540862, "oid=58735", 616, 60, 1);
		cm.npc_ChangeController(1540863, "oid=58736", 533, 60, 1);
		cm.npc_ChangeController(1540864, "oid=58737", 455, 60, 1);
		cm.npc_ChangeController(1540868, "oid=58738", 1581, 60, 1);
		cm.npc_ChangeController(1540870, "oid=58739", 1142, 60, 1);
		cm.npc_ChangeController(1540872, "oid=58740", 1904, 60, 0);
		cm.npc_ChangeController(1540795, "oid=58741", -153, 60, 1);
		cm.npc_ChangeController(1540861, "oid=58742", 745, 60, 1);
		cm.npc_ChangeController(1540867, "oid=58743", 1514, 60, 0);
		cm.npc_ChangeController(1540869, "oid=58744", 2363, 60, 1);
		cm.npc_ChangeController(1540871, "oid=58745", 2114, 60, 0);
		cm.npc_ChangeController(1540856, "oid=58746", 2210, 60, 1);
		cm.npc_ChangeController(1540859, "oid=58747", 1042, 60, 1);
		cm.npc_ChangeController(1540858, "oid=58748", 2002, 60, 0);
		cm.npc_ChangeController(1540889, "oid=58749", 2480, 60, 1);
		cm.npc_ChangeController(1540890, "oid=58750", 2655, 60, 1);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130400;act4=350160000");
		cm.Hidden_background("HofM_pt", 0);
		cm.Hidden_background("HofM_pt2", 0);
		cm.Hidden_background("HofM_pt3", 0);
		cm.Hidden_background("HofM_pt4", 0);
		cm.Hidden_background("HofM_tuto5", 0);
		cm.npc_ChangeController(1540865, "oid=482364391", 1715, -20, 1);
		cm.npc_SetSpecialAction("oid=482364391", "summon", 0, 0);
		cm.npc_ChangeController(1540876, "oid=482364392", 2320, -20, 1);
		cm.npc_SetSpecialAction("oid=482364392", "summon", 0, 0);
		cm.npc_ChangeController(1540878, "oid=482364393", 1650, -24, 0);
		cm.npc_SetSpecialAction("oid=482364393", "summon", 0, 0);
		return;
	}

	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/6 14:50:02] 之前所在地图: cm.warp(350130300) - 当前进入地图: cm.warp(350130400)
		cm.npc_ChangeController(1540860, "oid=58733", 1847, 60, 1);
		cm.npc_ChangeController(1540855, "oid=58734", 883, 60, 1);
		cm.npc_ChangeController(1540862, "oid=58735", 616, 60, 1);
		cm.npc_ChangeController(1540863, "oid=58736", 533, 60, 1);
		cm.npc_ChangeController(1540864, "oid=58737", 455, 60, 1);
		cm.npc_ChangeController(1540868, "oid=58738", 1581, 60, 1);
		cm.npc_ChangeController(1540870, "oid=58739", 1142, 60, 1);
		cm.npc_ChangeController(1540872, "oid=58740", 1904, 60, 0);
		cm.npc_ChangeController(1540795, "oid=58741", -153, 60, 1);
		cm.npc_ChangeController(1540861, "oid=58742", 745, 60, 1);
		cm.npc_ChangeController(1540867, "oid=58743", 1514, 60, 0);
		cm.npc_ChangeController(1540869, "oid=58744", 2363, 60, 1);
		cm.npc_ChangeController(1540871, "oid=58745", 2114, 60, 0);
		cm.npc_ChangeController(1540856, "oid=58746", 2210, 60, 1);
		cm.npc_ChangeController(1540859, "oid=58747", 1042, 60, 1);
		cm.npc_ChangeController(1540858, "oid=58748", 2002, 60, 0);
		cm.npc_ChangeController(1540889, "oid=58749", 2480, 60, 1);
		cm.npc_ChangeController(1540890, "oid=58750", 2655, 60, 1);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130400;act4=350160000");
		cm.Hidden_background("HofM_pt", 0);
		cm.Hidden_background("HofM_pt2", 0);
		cm.Hidden_background("HofM_pt3", 0);
		cm.Hidden_background("HofM_pt4", 0);
		cm.Hidden_background("HofM_tuto5", 0);
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check=1");
		cm.forceStartQuest(33900, "9");
		cm.npc_ChangeController(1540878, "oid=481988546", 1360, 0, 1);
		cm.npc_SetSpecialAction("oid=481988546", "summon", 0, 0);
		cm.npc_ChangeController(1540857, "oid=481988547", 1280, 0, 0);
		cm.npc_SetSpecialAction("oid=481988547", "summon", 0, 0);
		cm.npc_ChangeController(1540876, "oid=481988549", 2150, -20, 1);
		cm.npc_SetSpecialAction("oid=481988549", "summon", 0, 0);
		cm.npc_ChangeController(1540865, "oid=481988550", 2320, 0, 1);
		cm.npc_SetSpecialAction("oid=481988550", "summon", 0, 0);
		cm.onTeleport(1, cm.getPlayer().getId(), 948, 7);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1330, 30);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你真漂亮啊，美女。", 256, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#啊，是。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "是真的，特别是耳朵特别漂亮，就像精灵一样呢？", 257, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#糟了，忘了耳朵的变装……！", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "是变装的吗？", 257, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face9#啊哈哈……我还有点忙，可以先行一步吗？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "不可以，我可不能就这么放你走了，\r\n我可是遇到了这辈子的梦中情人，怎么能轻易放你走。", 257, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "抱歉，那位姑娘已经有人陪了。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/8", 128);
		cm.inGameDirectionEvent_ForcedFlip10(2, 220);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "搞什么，你！不要来碍事！", 256, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481988547", -1);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#难道有什么问题吗？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "……额，颜值就输了！这个肮脏的世界！", 257, 0, 37, 0, 1, 1540857); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481988547", 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481988547", 1, 400, 120);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "谢谢，幻影，多亏了你我才能活下来。", 256, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/12", 128);
		cm.onScriptMessage(3, 0, 1, 0, "女王差点就要发脾气了呢？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/13", 128);
		cm.onScriptMessage(3, 0, 1, 0, "我差点就要兵刃出鞘了，不过你有没有新发现什么？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/14", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#我发现了一件非常重要的事情。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/15", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#！！说说看。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/16", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#礼服会更突显美女。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/17", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face9#……幻影，现在是开这种玩笑的时候吗？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT3/CON/18", 128);
		cm.onScriptMessage(3, 0, 1, 0, "请大家注意，现在就要开始重要的发表了。", 257, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481988547");
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 2130, 30);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "能够为各位被邀请而来的0.1%的贵宾主持是我的荣幸。\r\n没有被邀请的不速之客除了我，该不会还有别人吧？哈哈！", 256, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "大家也都知道，今天计划要发表一项全世界首个令人震惊的内容。", 257, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "现在就为大家介绍这个全城最炙手可热的地方，浩瀚博物馆的策划和主研究员林博士！", 257, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/camera", 100);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 100);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1330, 30);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=481988546", 1);
		cm.inGameDirectionEvent_ForcedFlip10(2, 30);
		cm.inGameDirectionEvent_AskAnswerTime(2300);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那个人就是林博士？", 256, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "看上去很厉害啊。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=481988549");
		cm.npc_LeaveField("oid=481988550");
		cm.npc_ChangeController(1540865, "oid=482033432", 2165, -20, 1);
		cm.npc_SetSpecialAction("oid=482033432", "summon", 0, 0);
		cm.npc_ChangeController(1540876, "oid=482033433", 2270, -20, 1);
		cm.npc_SetSpecialAction("oid=482033433", "summon", 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 2130, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我，我有舞台恐惧症，所以说话有可能结巴，还，还请各位谅解。", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "已经是好几年前的事情了，\r\n我发现其他次元世界的时候，\r\n大家伙都以为是阴谋论，纷纷表示不相信。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "但是在历经了数年的今天，大家都已经接受存在其他次元世界的事实，正如巨大陷坑现象等事件中大家能够感受到的，这明显是我们要直面的问题。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "咳咳……一句话说了太多，有点喘不过气来了……", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "博士，你冷静一点。", 257, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#哈哈，这位大叔挺有趣的。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "总……总之现如今大家都意识到了问题的严重性，我才能够领先一步，想出其他想法。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm43.img/Unknown Part Of City", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "会不会也许#b世界原本就是一个#k的？\r\n会不会在漆黑一片的太古时间……某个我们所不知道的力量强大的人将世界分裂了开来，最近世界才不断地合并呢？", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#他所说的……！", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "和有关阿布拉克萨斯的记录很相似。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "所以我接受了#b吴馆长#k的资助，游历全世界，对不可思议的事件进行了研究。并找到了能够证明世界也许从一开始就是一个的……那些痕迹。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我得以找到了无数有趣的遗物和物质。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "然后有一天！\r\n我找到了其中最为决定性的不可思议的物质，\r\n便是这个！", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 2130, -90);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("stone", "Map/Effect2.img/HofM/ACT3_stone", 0, 2500, 0, 0, 16, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "一旦靠近这个神秘的物质，不仅所有电波和磁场会发生扭曲，每次能观测到的质量也会有所不同。\r\n一言以蔽之，我们世界的物理定律，在这个物质附近是不成立的。", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("stone", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm45/Jazz For Dr Lim", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "我不禁开始想象，这个物质会不会就是从那个比我们世界还要巨大的某样东西上掉落下来的，同时我也开始明白，我们所坚信不疑的独一无二的物理定律其实也并非绝对真理，我做了一辈子的宇宙物理学家，这样神奇的物质却引发了我心中难以穷尽的谦虚。", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那个……博士，差不多该开始说结论了。", 257, 0, 37, 0, 1, 1540876); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "咳咳咳咳，不好意思，我一时激动就……", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我给这种物质取了个学名叫极限石，\r\n并且我打算今天在这里首次公开……", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "这种包含了世界根源之秘密的物质，\r\n现在就将作为世界首例，在浩瀚博物馆限时展示！", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/shout", 100);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/camera", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1330, 30);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.npc_setForceFlip("oid=481988546", 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你怎么看？", 256, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那块石头分明就是#b超越石#k，我有种强烈的感觉。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#一周之前，英雄们的会议。", 100, 1500, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/HofM/ACT3_remind", 0, 2500, 0, 0, 1, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "隐藏在其他次元的物质……这要怎么拿来呢？", 256, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "如果能够快速闯进去，快速夺走？", 257, 0, 37, 0, 1, 1540802); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "虽然这个方法最单纯也最好，但位置还不够准确。\r\n如果贸然行动，暴露了我们的行动路线，\r\n那可就不太妙了。", 257, 0, 37, 0, 1, 1540804); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "夜光法师说得没错，\r\n重要的是能够知道大概位置的，就只有手上有阿布拉克萨斯的我们而已，如果出手一次后失败……", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "就等同于是告诉了敌人我们的目的。", 257, 0, 37, 0, 1, 1540801); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "没错，想想尼哈沙漠的事件，\r\n敌人的情报网真的分布得很密集啊。", 257, 0, 37, 0, 1, 1540806); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "汉斯说过在和那边的世界交流吧，\r\n不知可否进行交涉呢？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "在我们无法提出任何提议的状态下\r\n进行交涉，本身就是毫无意义的。", 257, 0, 37, 0, 1, 1540806); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "不管是强取豪夺，还是协商，都有些勉强，那么剩下的方法就只有这个咯？", 257, 0, 37, 0, 1, 1540803); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.npc_ChangeController(1540865, "oid=482110544", 1715, -20, 1);
		cm.npc_SetSpecialAction("oid=482110544", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "看来只有靠偷的了。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face13#根据交涉组织的情报，为了到达建筑物的安保区域，需要#b两张门禁卡#k。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那个叫#b林博士#k的大叔和#b博物馆馆长#k人手一张，\r\n不管在什么地方，藏宝物的方法就只有一条。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "双弩精灵，准备好了吗？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "准备？？什么准备？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#美人计啊，那件漂亮的礼服可不是为了余兴节目准备的。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#等一下，这事情我可是头一次听说？！！", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#我说，龙神，这作战说明也进行得太草率了吧？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face12#对不起，双弩精灵，我认为你可能会反对，就没有事先告诉你。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#龙神你！！", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#双弩精灵，你该不会打算搞砸了计划吧？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face5#哎……知道了，我做不就行了嘛。\r\n不过等回到飞船有你们大家好看。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=481988546", 1, 250, 120);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 1710, 30);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face11#博士，您刚刚的发表实在是太帅了。", 256, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你……你是哪位？我好像第一次见你。", 257, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face10#这重要吗？重要的是，我们对相同的事情保持关注。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1330, 30);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face18#等下！她也做得太好了吧？！\r\n双弩精灵居然还有这样的一面？！", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "女人可是有千面的，\r\n你要是从前不知道，往后可得记牢了，龙神。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face14#总，总之这会儿双弩精灵负责林博士，幻影就#b变装成林博士#k吧。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "好的，我会去吴馆长那里拿到门卡的。\r\n(在记住#b林博士的外形#k后，前往#b左侧#k。)#k", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
