/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64609
任务名称： [我的小屋]当我的管家吧，艾米！
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
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b艾米！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2##h0#~你是来表示感谢的吧？呼，你能有这种房屋都是因为我艾米哦！你可不能忘记这件事。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b没错，谢谢你让我来到了这里。 ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b所以说……我觉得如果以后装修房屋的事情也能和艾米一起完成，那就太好了。\r\n#b#L0# 请你成为我的管家。#l\r\n#L1#今后我们一起好好相处吧。#l\r\n#r(※只能雇佣1名管家，雇佣后可以通过管家菜单进行变更。)#l", 0, 6, 57, 0, 1, 0); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#管家？管家？嗯……听起来倒是很有趣，你会给我报酬的吧？ ", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#好啊！请多多指教~", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
			qm.dispose();
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#这样啊，好的！那我就答应你吧，#h0#。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#对了，这是给#h0#的礼物！因为你说想要用温馨的家装饰，我就准备了这个。它还有很厉害的功能，你可别被吓到了哦！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64608);
		cm.forceCompleteQuest(64609);
		cm.updateInfoQuest(64610, "hide=1");
		cm.updateInfoQuest(500773, "askR=0;manager=0;managerHide=0;s1=25;s2=14;s3=3;bonusTalk=0;s4=2;s5=3;resetDate=" + getCurDate() + ";affDown=" + getCurDate());
		qm.dispose();
	}
}

function getCurDate() {
	var date = new Date();
	var dateStr = (date.getYear() - 100) + "/" + (date.getMonth() + 1) + "/" + date.getDay();
	return dateStr;
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
