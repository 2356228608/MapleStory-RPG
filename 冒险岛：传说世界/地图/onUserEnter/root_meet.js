/* Dawnveil
[Root Abyss] An Urgent Summons
Neinheart
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	if (mode == 0) {
		status--;
	} else {
		status++;
	}
	if (ms.isQuestActive(30000)) {
		ms.forceCompleteQuest(30000);
	}
	ms.dispose();
}
