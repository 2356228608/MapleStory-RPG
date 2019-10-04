/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64598
任务名称： [我的小屋]米兰达的跳蚤市场
任务开始NPC ID： 9400924
任务开始NPC 名称： 米兰达
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
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b那个……你好！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#你好！米兰达 ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#…? ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b现在跳蚤市场还没开吗？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#正如你所见，我正在思考新的商品。", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#嗯~~这下可麻烦了，为了庆祝#h0#搬来，我们正打算办搬家聚会呢，可是墙上实在太空了呢！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#如果能将米兰达的特别~作品装饰在墙上，肯定会很棒的，所以我们才来到了这里呢！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#… ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceStartQuest(64598, "");
		cm.onScriptMessage(3, 0, 0, 0, "#face0#好吧，不过现在没多少商品可供挑选。", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.openShop(9400952);
		qm.dispose();
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
		if (!cm.haveItem(2671002)) {
			cm.openShop(9400952);
			qm.dispose();
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face0#怎么样？ ", 256, 0, 37, 0, 1, 9400924); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#b嗯……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#米兰达！这真是太帅了，这个完全表现出了木头原本的味道呢？你的实力好像越来越出色了。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#呼。\r\n(似乎在看我。) ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b很……很帅气！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#以后如果有了新商品，你们再来看看吧。", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b谢谢，那就下次见吧！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1##h0#，现在回家吧。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64598);
		cm.OnStartNavigation(871000000, 0, "goHome", 0);
		qm.dispose();
	}
}
