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
		qm.sendNextS("这里是哪？这个少女又是谁？先跟她说话看看。");
	} else if (status == 1) {
		qm.sendNext("救救我！带我出去，离开这个地方！", 1064001);
	} else if (status == 2) {
		qm.sendNextS("好……好吧，你不要激动，让我看看。");
	} else if (status == 3) {
		qm.sendNextS("#r这个少女真是奇怪，一上来就不由分说地让我带她出去，离开这个地方。我还没搞清楚状况就稀里糊涂地答应了。先来想想怎么带她出去吧。");
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
