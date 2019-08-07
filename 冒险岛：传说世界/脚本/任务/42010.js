/* [起源之塔]去起源之塔探险的方法
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNextNoESC("嗨#b#h ##k，你已经准备好出发进塔了吗？", 2540000);
	} else if (status === 1) {
		qm.sendNextSNoESC("嗯，我已经准备好了。");
	} else if (status == 2) {
		qm.sendNextNoESC("太好了。进去之前记得装备上#r朦胧石#k，以及一定别忘了我的#i2432461##b灵魂连接器#k！如果你不小心弄丢了，赶紧来我这里重新领一个。一路上我会通过#b灵魂连接器#k尽可能的给你帮助。", 2540000);
	} else if (status == 3) {
		qm.sendNextNoESC("另外还有件事情需要你帮忙……能帮我收集5000个丢失的#i4009233##b迷宫钥匙#吗？有了他们我一定可以更好的制作朦胧石……不对，是找到解开塔的封印的办法。", 2540000);
	} else if (status == 4) {
		qm.sendNextNoESC("就这些了，那么加油吧！", 2540000);
	} else if (status == 5) {
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// ????
function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
