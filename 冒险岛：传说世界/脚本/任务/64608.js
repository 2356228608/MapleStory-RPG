/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64608
任务名称： [我的我的小屋]当我的管家吧，埃尔宾！
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
		cm.onScriptMessage(3, 0, 0, 0, "#b埃尔宾！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2##h0#，这比之前要宽敞很多啊！还有2楼！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b是的，太好了！想到以后装修的事情，我就很激动呢。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b所以说……我觉得如果以后装修房屋的事情也能和埃尔宾一起完成，那就太好了。\r\n#b#L0# 请你成为我的管家。#l\r\n#L1#今后我们一起好好相处吧。#l\r\n#r(※只能雇佣1名管家，雇佣后可以通过管家菜单进行变更。)#l", 0, 6, 57, 0, 1, 0); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#……我一直梦想着这个瞬间的到来！装修和管理房屋可是我的特长。请交给我吧！ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#今后就请多多指教了，#h0#！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			qm.dispose();
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#今后就请多多指教了，#h0#！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#这是给#h0#的礼物。因为你说要用高级的家装饰，我就准备了这个！它还有特别功能，你可别被吓到了！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64608);
		cm.forceCompleteQuest(64609);
		cm.updateInfoQuest(64610, "hide=1");
		cm.updateInfoQuest(500773, "askR=0;manager=1;managerHide=0;s1=25;s2=14;s3=3;bonusTalk=0;s4=2;s5=3;resetDate=" + getCurDate() + ";affDown=" + getCurDate());
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
