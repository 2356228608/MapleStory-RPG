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
	em.setProperty("stage" + level, "start");
	ms.addPopupSay(2540000, 6000, "这里……呃，我的力量……知道路线……的话……死……看不……");
	ms.playerMessage(5, "阿丽莎的思念体的力量似乎到不了这里。你自己找出通往下一层的路吧。");
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	ms.dispose();
}
