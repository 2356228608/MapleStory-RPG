/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64607
任务名称： [我的小屋]2层蘑菇屋的生活
任务开始NPC ID： 0
任务开始NPC 名称：
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
		var map = cm.getMapId();
		if (map < 871200001 || map > 871200001) {
			cm.onScriptMessage(3, 0, 0, 0, "#b似乎已经完成建造了，回家看看吧。\r\n(※该任务只能在我的小屋内进行。)", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
			qm.dispose();
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#b这真的是我的房子……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b今后我就能随心所欲地装饰这个房屋了吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#b太棒了！真是太帅了！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b但是……应该从哪里开始呢？……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b之前都是因为有埃尔宾和艾米的帮助，我才能轻松地享受装修的乐趣……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b他们……以后还会帮助我吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b请埃尔宾和艾米来当我的管家吧！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64607);
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
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
