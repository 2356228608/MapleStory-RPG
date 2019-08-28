// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	im.playerMessage(5, "当前地图：" + im.getMapId() + " - " + im.getMap().getMapName());
	im.playerMessage(5, "当前坐标：" + im.getPlayer().getPosition());
	im.dispose();
}
