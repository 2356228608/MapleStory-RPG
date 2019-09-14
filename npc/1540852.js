// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

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
		cm.onScriptMessage(3, 0, 0, 0, "真的好酷啊！\r\n谁能想象得到我们市里能够建立起这么棒的博物馆？", 256, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "而且听说里面所展示的全都是世界各地都找不到的珍贵物品，\r\n我实在是太期待里面都有什么东西了！", 257, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "等这座#b博物馆#k开馆，肯定会成为这座城市的#b地标#k的，\r\n能被邀请参加免费开业派对实在是很荣幸啊。", 257, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "话说你是艺人吗？能不能留个号码……\r\n等一下，你这是要去哪儿啊？喂！留个号码嘛！", 257, 0, 37, 0, 1, 1540852); // [类型] 普通对话
	} else if (status === i++) {
		cm.addPopupSay(1540805, 2500, "#face18#第一次见面就要保险柜号码……这个世界真是可怕！");
		cm.addPopupSay(1540879, 2500, "#face6#就连阿里安特的舞姬都不会那么露骨。");
		cm.updateInfoQuest(33990, "check1=1;check=1");
		cm.Hidden_background("party_Tuto", 0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
