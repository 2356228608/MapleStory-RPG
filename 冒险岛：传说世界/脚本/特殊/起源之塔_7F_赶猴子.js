/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	if (cm.getNpc() == 2540001) {
		cm.getMap().getWeatherEffectNotice("左侧，它们开始从左侧涌过来啦！！", 150, 60000, 1);
	} else if (cm.getNpc() == 2540002) {
		cm.getMap().getWeatherEffectNotice("右侧，它们开始从右侧涌过来啦！！", 150, 60000, 1);
	}else if (cm.getNpc() == 2540003) {
		cm.getMap().getWeatherEffectNotice("它们开始从两侧一起涌过来啦！请千万要守护我！", 150, 60000, 1);
	}else if (cm.getNpc() == 2540004) {
		cm.getMap().getWeatherEffectNotice("现在就要接近尾声了。请和我说话，我会为你将门打开。", 150, 60000, 1);
	}
	cm.dispose();
}
