/* Dawnveil
 [Root Abyss] An Urgent Summons
 Neinheart
 Made by Daenerys, jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
		qm.askAcceptDecline("#b#h ##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说情况非常紧急，请尽快过来。", 1101002);
    } else if (status == 1) {
		qm.sendNextNoESC("#b#h ##k，我会用神兽的力量立刻把你传送到圣地。", 1101002);
    } else if (status == 2) {
        qm.forceStartQuest(30000);
        qm.warp(913080000, 0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}
