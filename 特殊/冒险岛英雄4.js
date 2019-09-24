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
		cm.onScriptMessage(3, 0, 0, undefined, "要开始‘Final Act.世界树’吗？\r\n\r\n#b   - 进场时角色的技能增益会全部消失。#k\r\n#b   - 分辨率1024*768以上可以正常进行。#k\r\n#b   - 处理黑色天堂之后的剧情。#k\r\n#b   - 以剧情上的主人公进行游戏。#k\r\n", 0, 3, 4, 0, 0, 1540446); // [类型] 是/否
	} else if (status === i++) {
		cm.forceStartQuest(33914, "");
		// [2019/9/6 15:40:50] 当前所在地图: cm.warp(913050010) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350140000);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
