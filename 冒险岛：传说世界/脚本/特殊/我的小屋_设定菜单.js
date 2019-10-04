/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var map = cm.readQuestInfo(500773);
		var manager = parseInt(map.getOrDefault("manager", "0"));
		var npc = 9400920 + manager;
		cm.onScriptMessage(3, 0, 0, 0, "#face0#我能帮你做什么？\r\n\r\n#L0##b查看我的小屋信息#k#l\r\n#L1##b变更我的小屋名称#k#l\r\n#L2##b变更访问权限设定#k#l\r\n#L99##b我的小屋说明#k#l", 0, 6, -124, 0, 1, npc); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0,  "#face0#我的小屋名称 : #b你的小屋#k\r\n访问人数 : #b 0位#k,\r\n收到的点赞数 : #b总共 0个#k\r\n最多访问人数 : #b10位#k\r\n\r\n#L0##r确认#k#l", 0, 6, -124, 0, 1, 9400921); // [类型] 选择菜单
			cm.dispose();
		}else if (selection == 1) {
		}else if (selection == 2) {
		}else if (selection == 99) {
		}
	} else {
		cm.dispose();
	}
}
