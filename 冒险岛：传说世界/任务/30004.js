/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("出口真的没有问题了吗？", 1064001);
	} else if (status == 1) {
		qm.sendNext("你能带我离开这里了吗？", 1064001);
	} else if (status == 2) {
		qm.sendNextS("我找到附近的出口了，你看（指）。");
	} else if (status == 3) {
		qm.sendNext("太好了！但是……那个地方该不会被堵住了吧？", 1064001);
	} else if (status == 4) {
		qm.sendNextS("好吧，我先自己过去看看。");
	} else if (status == 5) {
		qm.sendNextS("#r嗯，看上去这个出口完全没有问题嘛。");
	} else if (status == 6) {
		qm.sendNextS("嘿，这个出口是安全的，完全可以从这里离开鲁塔比斯。");
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
