/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64593
任务名称： [我的小屋]要躺会儿吗？
任务开始NPC ID： 9400921
任务开始NPC 名称： 埃尔宾
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
		cm.onScriptMessage(3, 0, 0, 0, "#face1#要不要试着躺在床上？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceStartQuest(64593, "");
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
		if ("ok".equals(cm.getInfoQuest(64593))) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#怎么样？是不是很舒服？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#要不要试着躺在床上？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status == i++) {
		if ("ok".equals(cm.getInfoQuest(64593))) {
			cm.onScriptMessage(3, 0, 0, 0, "#b好像是……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			qm.dispose();
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#哈哈，既然躺下了，那就顺便休息一下吧？我想起来可以给你个小礼物！请等一下。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64593);
		cm.updateInfoQuest(500767, "2=1;3=1;7=1;entrance=0;managerXpos=100;managerYpos=100");
		cm.forceStartQuest(64594, "");
		qm.dispose();
	}
}
