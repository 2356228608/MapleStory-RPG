/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	var mapId = cm.getMapId();
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (mapId == 993080500) {
			cm.askYesNo("看到你努力练习的样子，我很欣慰！\r\n你想现在退出吗？", 9062152);
		} else if (mapId == 993080200) {
			cm.askYesNo("还有时间！\r\n你想就这样退出吗？", 9062152);
		} else {
			var kill = parseInt(cm.getInfoQuest(100188).substr(6));
			if (kill == 0) {
				cm.sendOk("……怎么，#b一个稻草人#k都没能消灭掉吗？要多加努力啊！", 9062152);
			} else {
				cm.sendOk("你消灭掉了#e#b" + kill + "个#k#n稻草人！\r\n可以领取#e#b" + Math.ceil(kill / 4) + "个大冒险币#k#n。\r\n\r\n怎么样，感受到狩猎的气息了吗？", 9062152);
				cm.gainItem(4310266, Math.ceil(kill / 4));
				cm.updateInfoQuest(100188, "start;0");
			}
		}
	} else if (status == i++) {
		if (mapId == 993080200) {
			cm.warp(993080400);
		} else {
			cm.warp(993080000, 15);
		}
		cm.dispose();
	}
}
