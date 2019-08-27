/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = Math.round((ms.getMapId() - 993001000) / 10);
	var data = getData(ms, 18838 + level, ["isClear", "br", "cs", "first"]);
		ms.playerMessage(5, "level"+level);
	if (level == 6) {
		actionMoveCamera(mode, type, selection, level, -4000, -3200);
	} else if (level == 9) {
		actionMoveCamera(mode, type, selection, level, -4000, -400);
	} else if (level == 15) {
		action15(mode, type, selection, level);
	} else {
		startGame(level);
	}
}

function actionMoveCamera(mode, type, selection, level, x, y) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.inGameDirectionEvent_PushMoveInfo(0, 0, x, y);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.dispose();
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action15(mode, type, selection, level) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.inGameDirectionEvent_PushScaleInfo(500, 800, 500, -3300, -130);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0,0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, -3400, -130);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.dispose();
		startGame(level);
	} else {
		ms.dispose();
	}
}

function startGame(level) {
	ms.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start");
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	if (level - 10 < startInfo.length && startInfo[level - 10].length == 4) {
		if(!startInfo[level - 10][1].isEmpty())
			ms.getWeatherEffectNotice(startInfo[level - 10][1], startInfo[level - 10][0], 5000, 1);
		if(!startInfo[level - 10][3].isEmpty())
			ms.addPopupSay(startInfo[level - 10][2], 2000, startInfo[level - 10][3]);
	}

	var em = ms.getEventManager("小游戏_控制之神");
	var eim = em.getInstance("小游戏_控制之神");
	eim.startEventTimer(10 * 60 * 1000);
	ms.dispose();
}

// 212-9070200 猫 213-9070202 兔 214-9070201 熊  215-9070203 树懒
var startInfo = [[212, "避开上升的踏板上的脏东西", 9070200, "先爬上下面能看到的那块长踏板，然后就会动了。"],
	[214, "试着灵活运用跳跃技能达到目的地~", 9070201, "跳跃过程中灵活运用向上的方向键，说不定会有捷径，好好找找看"],
	[214, "在第三块踏板处尽可能往远处跳", 9070201, "在第三块踏板处尽可能往远处跳，超过15米就合格！"],
	[212, "灵活运用跳跃技能，避开脏物往前走。", 9070200, "试试在障碍物和障碍物中间点跳跃。"],
	[212, "避开上升的踏板上的脏东西。", 9070200, "知道吧？用下面的长踏板往下走"],
	[215, "用连续冲锋跳到达目的地！", 9070203, "用冲锋跳越过去！和连续的跳跃，偶尔中途暂停一下会更有利！"],
	[213, "试着利用上下移动的踏板到达目的地，嘿嘿。", 9070202, "当踏板位于合适位置时再跳会比较好。\r\n可不能随便什么状态就跳。"],
	[215, "避开坠落的陨石，到达终点！", 9070203, "这个地方你应该很熟悉！偶尔挨几下再往前冲也很有男子气概"],
	[215, "要反复碰触左右的熊30次！", 9070203, "反复碰触左右沉睡的熊！总共30次！"],
	[215, "试着利用树木到达目的地~", 9070203, "小心大树，撞到了会很疼……记住你还可以爬到树上去。"],
	[215, "试着穿过踏板消失的森林~", 9070203, "听说人类会在名叫忍苦树林的地方修炼啊？不过那实在是太简单了，嘿嘿。要是没了踏板，一定会很有趣吧？"],
	[213, "避开障碍物，痛快地奔跑！嘿嘿", 9070202, "大树是没法直接经过的，但是可以通过跳跃爬上去，往高处跳跃的时候得小心鸟。"],
	[213, "灵活运用空中操控，试着爬上踏板，嘿嘿。", 9070202, "给你个提示吧……当跳得又高又远差不多用尽力气的时候就往跳的反方向走，会很困难的。"],
	[212, "考验一下你的综合移动能力", 9070200, "来看看你修炼的有多好吧，说不定你会被难到哭哦。"],
	[213, "试着迅速通过一碰到就会消失的踏板，嘿嘿", 9070202, "在踏板上待一秒踏板就会消失，要小心，嘿嘿"],
	[214, "试着连续冲锋跳，越过障碍物~", 9070201, "别跑得太心急，该调整速度的时候就得调整~"],
	[215, "灵活运用所有跳跃技能，避开脏东西！", 9070203, "与其碰到脏东西，不如一边慢慢思考一边走！"],
	[215, "", 9070203, "我认为你可以做到，估计可以……"],
	[215, "", 9070203, "我认为你可以做到，估计可以……"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],	// 29F
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
	[213, "", 9070202, "虽然不能笑但……嘿嘿嘿"],
];

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}
