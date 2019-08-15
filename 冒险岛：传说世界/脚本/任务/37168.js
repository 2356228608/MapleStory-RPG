/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("好久没有异邦人到艾洛丁来了。\r\n异邦人，你到这里来千什么？");
	} else if (status === i++) {
		qm.sendNextS("是妖精鲁安让我来的。");
	} else if (status === i++) {
		qm.sendNext("魯安…可爱的小姑娘。和其他妖精不同，她真的很喜欢艾洛丁。");
	} else if (status === i++) {
		qm.sendNext("以前她有时会来这里找我，但是最近却完全没了消息……");
	} else if (status === i++) {
		qm.sendNextS("因为出了点事情……");
	} else if (status === i++) {
		qm.sendNext("哈哈……我也有所耳闻。听说她最近遇到了一点麻烦。虽然不知道到底是怎么回事，但大家好像都对鲁安有点不满。");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}
