/* 鲁塔比斯 逃出巨大的树根2
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 收尾		
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("确认了吗？", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("这次的卷轴也什么问题都没有。");
	} else if (status === i++) {
		qm.sendNextNoESC("这次又失败了……我真的没办法出去吗……？", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
