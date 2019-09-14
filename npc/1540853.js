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
		cm.onScriptMessage(3, 0, 0, 0, "年轻人，你对最近发生的#b陷坑事件#k是怎么看的？\r\n虽然都藏着掖着，但这个世界之外还有其他世界存在的事情，现在已经是明摆着的事实了。", 256, 0, 37, 0, 1, 1540853); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "也许那个其他世界就是只有理论上所提及的半粒子世界。\r\n按照原先的情况，当我们的世界和半粒子世界发生碰撞之时，应该双双被消灭才是……但谁能知道真相如何呢？ ", 257, 0, 37, 0, 1, 1540853); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "即便是现在这一刻，科学的理论还在因为观察而不断改变。", 257, 0, 37, 0, 1, 1540853); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "基于此，我认为这座博物馆的开馆意义深刻，\r\n#b林博士#k想要集齐与所有尚未解开谜团的未知科学相关物质的野心勃勃的计划终于要付诸实践了！", 257, 0, 37, 0, 1, 1540853); // [类型] 普通对话
	} else if (status === i++) {
		cm.addPopupSay(1540805, 2500, "#face18#我一点都不明白到底是怎么一回事。");
		cm.addPopupSay(1540879, 2500, "#face6#不管去哪里，派对上总是会出现一个超认真的人。");
		cm.updateInfoQuest(33990, "check1=1;check2=1;check=1");
		cm.Hidden_background("party_Tuto2", 0);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
