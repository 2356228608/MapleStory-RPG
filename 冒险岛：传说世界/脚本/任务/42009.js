/* [起源之塔]发现可疑的海底建筑？！
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
		qm.askAcceptDecline("#b#h ##k，你现在能来圣地一趟吗？有件紧急的事情与你前阵子解救的世界树有关。", 1101002);
    } else if (status == 1) {
		qm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到圣地。", 1101002);
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.warp(913080000, 0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
