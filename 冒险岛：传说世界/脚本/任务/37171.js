/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("艾洛丁的鸟在哭……？嗯……一定是发生了什么事……");
	} else if (status === i++) {
		qm.sendNext("总之，你说过会教它唱歌的！");
	} else if (status === i++) {
		qm.sendNext("你必须把小鸟一起带走，对吧？");
	} else if (status === i++) {
		qm.askYesNo("那你们一起去就行了！");
	} else if (status === i++) {
		qm.sendNext("再见！");
	} else if (status === i++) {
		qm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2");
		// 跟随玩家
		qm.setPartner(1, 1501010, 80002688, 0);
		qm.sendNext("嘿嘿，真让人期待！你会比鲁安教得更好吗？那样我的歌声定能得到人们的认可！", 1501003);
	} else if (status === i++) {
		qm.sendNext("哼，小心我……");
	} else if (status === i++) {
		qm.sendNextS("哈哈……那就快出发吧。还有很长的路要走。");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("终于来了吗？啊！");
	} else if (status === i++) {
		// 取消跟随
		qm.setPartner(0, 1501010, 80002688, 0);
		qm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1")
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
