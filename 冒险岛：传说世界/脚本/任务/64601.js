/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64601
任务名称： [我的小屋]开心的搬家聚会
任务开始NPC ID： 9400920
任务开始NPC 名称： 艾米
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face3#啊！看来已经有人到了！", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.forceStartQuest(64601, "");
		cm.npc_ChangeController(9400929, "oid=11112416", -260, 100, 0);
		cm.npc_SetSpecialAction("oid=11112416", "summon", 0, 0);
		cm.npc_ChangeController(9400928, "oid=11112417", -210, 100, 0);
		cm.npc_SetSpecialAction("oid=11112417", "summon", 0, 0);
		cm.npc_ChangeController(9400923, "oid=11112418", -160, 100, 0);
		cm.npc_SetSpecialAction("oid=11112418", "summon", 0, 0);
		cm.onTeleport(1, cm.getPlayer().getId(), -110, 100);
		cm.npc_ChangeController(9400922, "oid=11112419", -60, 100, 1);
		cm.npc_SetSpecialAction("oid=11112419", "summon", 0, 0);
		cm.npc_ChangeController(9400924, "oid=11112420", -10, 100, 1);
		cm.npc_SetSpecialAction("oid=11112420", "summon", 0, 0);
		cm.npc_ChangeController(9400935, "oid=11112421", 40, 100, 1);
		cm.npc_SetSpecialAction("oid=11112421", "summon", 0, 0);
		cm.npc_ChangeController(9400936, "oid=11112422", 90, 100, 1);
		cm.npc_SetSpecialAction("oid=11112422", "summon", 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("#fs15##b谢谢大家能来。 ", 1, 0, 0, 2000, 0, 9897148);
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("这间房子已经空了很久了，能有新人进来真是太好了。", 1, 0, 0, 2000, 9400931, 9897148);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("是吧？村子里似乎也焕发了活力呢！", 1, 0, 0, 2000, 9400929, 9897148);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("有点小啊。", 1, 0, 0, 2000, 9400933, 9897148);
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("啊？这是我做的桌子！真是不错啊！哈哈", 1, 0, 0, 2000, 9400932, 9897148);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("勇士大人，我会经常来玩的！", 1, 0, 0, 2000, 9400935, 9897148);
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("特鲁迪~~你不和姐姐玩，只和勇士大人玩吗？", 1, 0, 0, 2000, 9400928, 9897148);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=11112416");
		cm.npc_LeaveField("oid=11112417");
		cm.npc_LeaveField("oid=11112422");
		cm.forceCompleteQuest(64601);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.setInGameDirectionMode(false, true, false);
		cm.forceCompleteQuest(64602);
		cm.onScriptMessage(3, 0, 0, 0, "#face0#[#i2672018:##t2672018#]\r\n这是搬家礼物。", 256, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.gainItem(2672018, 1);
		cm.updateInfoQuest(18418, "B=61303");
		cm.onScriptMessage(3, 0, 0, 0, "#b哇！这是你亲自做的吗？真是太帅了，怎么能养得这么漂亮呢？连叶子都在闪闪发光呢！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#……这是我买来的。 ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#b啊……谢谢你，米兰达，我会好好养的。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=11112420");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#桌子怎么样？是不是很坚固？", 256, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b是的，太谢谢你了。 ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#嗯嗯，这是我特！别！给你做的，你当然要感谢我了。", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#如果弄坏了，就拿来找我。我会给你特！别！售后服务的。 ", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b那正好，现在这个似乎有点歪……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face2#哪里？哪里？明明就很平啊！", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64603);
		cm.npc_LeaveField("oid=11112418");
		cm.updateInfoQuest(18418, "B=61304");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#我还没来得及自我介绍呢，我是这个村子的建筑家，我叫凯尼斯，很高兴见到你！ ", 256, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b我也很高兴见到你，请多多指教！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#没想到居然会有这么有名的勇士来到我们村子，真让人感到神奇又安心。 ", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face0#我在定居这里之前，也是冒险岛世界的冒险家。虽然已经是很久之前的事情了……", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#以前的事情之后再说，你怎么会搬到这里来？这个房屋已经空了很久了，没想到会有人搬来呢。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face3#哈哈，我们村子还是挺有名的吧？是吧？哈哈哈", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b是啊，是的……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#这个房屋看起来有点窄啊，你住得还习惯吗？", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#如果需要我的帮助，你可以随时来找我。别看我这样，这村子里的房屋大部分都是我建的呢！ ", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b真的吗？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#当然是真的了，呵呵", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b谢谢！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face0#那就下次再见吧。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=11112419");
		cm.updateInfoQuest(18418, "B=61305");
		cm.onScriptMessage(3, 0, 0, 0, "#b埃尔宾！艾米！你们听到凯尼斯的话了吗？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b难道……他能帮我建个更大的房屋吗？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face3##h0#……你的眼睛怎么突然开始放光了……？", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#虽然我没听到详细的内容，不过如果你想要更大的房屋，那在这个村子里能够帮你的人就只有凯尼斯了。 ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#凯尼斯的家一直对居民们敞开，你要是好奇，就去找他吧？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b你能和我一起去吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#当然了！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#当然了~只要你给我小费，呵呵", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#我开玩笑的，#h0#，快走吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceStartQuest(64605, "");
		cm.OnStartNavigation(871200197, 0, "out00", 0);
		qm.dispose();
		cm.forceCompleteQuest(64604);
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
