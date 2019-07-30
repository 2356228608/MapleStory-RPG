/* 鲁塔比斯 逃出巨大的树根1
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("怎么才能从这里出去呢？", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("那边有个通往外面的出口。只要通过出口出去就行。");
	} else if (status === i++) {
		qm.sendNextNoESC("我已经试过好几次了，但是没办法出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("没办法出去？出口堵住了吗？知道了，我去试试看。");
	} else if (status === i++) {
		qm.sendOkNoESC("快去帮我确认一下。我真的很想出去……", 1064001);
	} else if (status === i++) {
		// 收尾		
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 说不定不需要？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("确认了吗？", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("嗯，没问题，可以通往外面。");
	} else if (status === i++) {
		qm.sendNextNoESC("真的吗？看来只有我没办法出去……", 1064001);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
