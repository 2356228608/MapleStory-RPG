/**
-- BMS NPC脚本空白模板 ----------------------------------------------------------------------------
NPC ID： 9400922
NPC名称： 凯尼斯
所在地图ID： 871000001
所在地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
%创建日志%
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}
var talks = ["#face1#有像你这样伟大的勇士在我们村子，真是让人放心啊。", "#face1#你就当作在自己家一样待着就可以了。", "#face1#我很喜欢凯兰西亚。无论是温暖的阳光，还是亲切的邻居，还有孩子们的歌声。"];
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var text = talks[randomNum(0, talks.length - 1)] + "\r\n#b#L0#问好#l\r\n#L1#谈论关于家的事情#l";
		if (cm.isQuestFinished(64607)) {
			text += "\r\n#L2#购买建筑图纸#l\r\n#L3#询问关于#t4310273:#的事情#l";
		}
		cm.onScriptMessage(3, 0, 0, 0, text, 0, 6, 36, 0, 1, 9400922); // [类型] 选择菜单
	} else if (status === i++) {
		if (selectionLog[1] == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#噢，#h0#！早上好，你睡得怎么样？今天一天也要开开心心哦。", 256, 0, 36, 0, 1, 9400922); // [类型] 普通对话
			cm.dispose();
		} else if (selectionLog[1] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#呵呵，家嘛……\r\n小时候，家对我来说只是单纯的睡觉的地方，只要能有地方让疲惫的身体休息一下就行了。", 256, 0, 36, 0, 1, 9400922); // [类型] 普通对话
		} else if (selectionLog[1] == 2) {
			cm.dispose();
			cm.openShop(9400953);
		} else if (selectionLog[1] == 3) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1##t4310273:#能够将你不需要的家具转卖出去。那些对你来说已经不需要，但可能对其他人来说就是帅气又有用的东西。", 256, 0, 36, 0, 1, 9400922); // [类型] 普通对话
		}
	} else if (status === i++) {
		if (selectionLog[1] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#但是，在遇到我爱妻后，我的想法就改变了。家是和家人一起度过最多时间的地方，也是充满了回忆的地方，成为了对我来说最珍贵的地方。", 257, 0, 36, 0, 1, 9400922); // [类型] 普通对话
		} else if (selectionLog[1] == 3) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#在你的[家具保管箱]点击垃圾桶按键就能出售家具，记住了，一旦出售后，你就无法恢复家具了，请慎重地做出决定哦。", 257, 0, 36, 0, 1, 9400922); // [类型] 普通对话
		}
	} else if (status === i++) {
		if (selectionLog[1] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#每个人对于家的想法都不一样，如果你问十个凯兰西亚居民，就会得到十种不同的回答。", 257, 0, 36, 0, 1, 9400922); // [类型] 普通对话
		} else if (selectionLog[1] == 3) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#此外，偶尔还会有能获得#t4310273:#的特别机会，如果得到了的话，一定要小心收集起来。", 257, 0, 36, 0, 1, 9400922); // [类型] 普通对话
			cm.dispose();
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#对你来说，家是什么呢？", 257, 0, 36, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
