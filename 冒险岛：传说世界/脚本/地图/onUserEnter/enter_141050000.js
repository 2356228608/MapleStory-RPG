/* 列娜海峡
Made by Jessefjxm
 */
var status = -1;
function action(mode, type, selection) {
	status++;
	if (ms.isQuestActive(32187)) {
		ms.forceCompleteQuest(32187);
	}
	ms.dispose();
}
