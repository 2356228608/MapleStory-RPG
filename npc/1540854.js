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
		cm.onScriptMessage(3, 0, 0, 0, "我是M杂志科学板块的首席记者，可以给您一张名片吗？\r\n虽然说这种话听上去有点像自夸，不过我最近升职了呢，呵呵！", 256, 0, 37, 0, 1, 1540854); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "我最关心的事项当然还是世界上的#b神秘事件#k。\r\n原本我总是被埋怨找到了没用的花边新闻，可最近情况就不同了，超能力者大展身手的时代到来了。", 257, 0, 37, 0, 1, 1540854); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "话说回来，今天我的心情是最玄妙的！\r\n刚刚我就看到了超美的金发美女，这次又看到了你这样的超级大帅哥……那个，能不能和你拍张照啊？", 257, 0, 37, 0, 1, 1540854); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check=1");
		cm.onScriptMessage(3, 0, 0, 0, "好吧，这里能够收集的情报似乎已经都到手了，\r\n前往下一个地点吧？", 257, 0, 37, 0, 1, 1540879); // [类型] 普通对话
		cm.dispose();
	} else {
		cm.dispose();
	}
}
