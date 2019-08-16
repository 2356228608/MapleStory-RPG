/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var map = cm.getMapId();
	if (map < 101082100 || map > 101082300) {
		cm.sendOkS("在打扫#b鲁安的屋子#k时才用得上它们。");
		cm.dispose();
		return;
	}
	var i = -1;
	var item = Math.floor(cm.getItemQuantity(2630159) / 10);
	if (item <= 0) {
		cm.sendOkS("得收集#b10个草屑#k才能制作一把扫帚。");
		cm.dispose();
		return;
	}
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		var em = cm.getEventManager("副本_艾洛丁_阁楼");
		var count = parseInt(em.getProperty(cm.getPlayer().getId() + "kill"));
		var req = Math.max(0, Math.floor((50 - count) / 10) - cm.getItemQuantity(4036502));
		var text = "要用草屑再制作几个扫帚呢？\r\n\r\n";
		text += "（额外需要的扫帚数量：#r" + req + "把#k）\r\n";
		text += "（最多可以制作的扫帚数量：#b" + item + "把#k）";
		cm.askNumber(text, 1, 1, item);
	} else if (status === i++) {
		cm.gainItem(2630159, -selection * 10);
		cm.gainItem(4036502, selection);
		cm.playerMessage(5, "消耗" + selection + "个草屑，制作了" + selection + "把简陋的扫帚。");
		cm.dispose();
	} else if (status === i++) {
		cm.dispose();
	}
}
