/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "47";
var header = "#fn黑体##fs42#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "这里……？我的力量……就……到……这……可能要……死了……");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
