/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	if (ms.isQuestActive(3143)) {
		ms.sendNextS("比斯特委托的对狮子王之城的调查完成了。回去向他报告吧。");
		ms.playerMessage(-1, "狮子王之城调查完成");
		ms.forceCompleteQuest(3143);
	}
	ms.dispose();
}
