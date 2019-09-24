/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 350140100
地图名称： 建筑屋顶
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

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
		// [2019/9/6 15:43:03] 之前所在地图: cm.warp(350140000) - 当前进入地图: cm.warp(350140100)
		cm.npc_ChangeController(1540795, "oid=59682", -628, 354, 1);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350122400;act3=350130800;act4=350140100");
		cm.forceStartQuest(33900, "7");
		cm.npc_ChangeController(1540896, "oid=484427198", -215, 300, 0);
		cm.npc_SetSpecialAction("oid=484427198", "summon", 0, 0);
		cm.npc_ChangeController(1540897, "oid=484427199", -135, 300, 0);
		cm.npc_SetSpecialAction("oid=484427199", "summon", 0, 0);
		cm.npc_ChangeController(1540898, "oid=484427200", -340, 300, 0);
		cm.npc_SetSpecialAction("oid=484427200", "summon", 0, 0);
		cm.npc_ChangeController(1540899, "oid=484427201", -230, 150, 0);
		cm.npc_SetSpecialAction("oid=484427201", "summon", 0, 0);
		cm.npc_ChangeController(1540900, "oid=484427202", -310, 150, 0);
		cm.npc_SetSpecialAction("oid=484427202", "summon", 0, 0);
		cm.updateInfoQuest(34020, "check1=1;check4=1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 400, 0);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 400, 200);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#另一方面，#fs15##fnNanum Gothic#陌生世界的城市", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 500, 500, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -160, 270);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_ChangeController(1540807, "oid=484432877", 100, 347, 0);
		cm.npc_SetSpecialAction("oid=484432877", "summon", 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -140, 270);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 500, 500, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 195, 349);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 105, 349);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "主人，你没事吗？", 256, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#恩，米乐，倒是你有没有受伤？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#不，我的意思是弗里德所留下的阿布拉克萨斯就那么坠入江水之中……", 257, 0, 37, 0, 1, 1540807); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#为了不让大家伙受伤，那是最好的办法，更重要的是……", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 90);
		cm.npc_SetForceMove("oid=484432877", -1, 0, 300);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -70, 349);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face9#额……", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "我真是惭愧啊。", 257, 0, 37, 0, 1, 1540880); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#抱歉，我该劝阻住的，我也一时生气就。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "事情已经过去了，这也是没办法的，既然戴米安打定了主意，就一定会想办法夺走的。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#虽然我很气愤这么容易就被抢走了，但正因如此，我们就更应该找回被夺走的超越石。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#不过，戴米安现在拥有了太过强大的力量，估计很快就会吸收世界树的力量了。", 257, 0, 37, 0, 1, 1540806); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "那把会释放出奇怪气息的剑也会变得更强吧。", 257, 0, 37, 0, 1, 1540802); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#这是我们农场抓老鼠时的事情。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Field.img/flowervioleta/wink", 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#每次都会有老鼠来偷吃粮食，\r\n但是有一天有一只老鼠吃了太多，自己的身体都负荷不了，结果就没法从钻进来的洞逃出去了。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#！你的意思是戴米安会自取灭亡吗？", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#戴米安吸收了自己难以承受的力量，现在的状态肯定很不稳定。\r\n想要阻止戴米安，找回超越石，就只有现在了。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#正如夜光法师所言，超越石是一种很危险的物质，但……", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#超越石拥有的力量就像是一把双刃剑。应该可以用来对付黑魔法师。\r\n绝对不能让戴米安用它来满足自己的欲望。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#龙神说得没错。", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "既然那个危险的石头已经来到了冒险岛世界，就不能放任被坏人所用。", 257, 0, 37, 0, 1, 1540880); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "大家都想的一样吧？", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#龙神，我们都会追随你的。", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#得快点行动起来，\r\n等到了敌人面前，最好是一分为二，一部分负责后方，一部分负责冲锋。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.npc_LeaveField("oid=484432877");
		cm.setInGameDirectionMode(false, false, false);
		cm.getTopMsgFont("请选择两位参与最后之战的英雄。", 3, 20, 4, 0);
		cm.playerMessage(-1, "通过对话选择要同行的两位英雄。");
		
		ms.dispose();
	} else {
		ms.dispose();
	}
}
