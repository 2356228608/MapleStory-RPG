/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	if (!ms.isQuestActive(42009) && !ms.isQuestFinished(42009)) {
		ms.warp(130000000, 0);
		ms.addPopupSay(0, 2000, "怎么回事？被一股奇怪的力量送出来了！");
		ms.dispose();
	} else {
		ms.dispose();
	}
}