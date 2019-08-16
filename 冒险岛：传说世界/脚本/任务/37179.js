/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.warp(101000000, 0);
	qm.forceStartQuest();
	qm.dispose();
}


function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var info = qm.getInfoQuest(37179);
	if(info==null || info.isEmpty() || info.equals("")){
		end1(mode, type, selection);
	}else if(info.equals("NpcSpeech=10321001")){
		end2(mode, type, selection);
	}else{
		end3(mode, type, selection);
	}
}

function end1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("有什么事吗？", 1032100);
	} else if (status === i++) {
		qm.sendNext("啊……鲁安让你向我问好？", 1032100);
	} else if (status === i++) {
		qm.sendNext("看来你已经去过艾洛丁。 ", 1032100);
	} else if (status === i++) {
		qm.sendNext("鲁安……有点特别。在我们之中也很特别。", 1032100);
	} else if (status === i++) {
		qm.sendNext("要是她能到魔法密林来，晒晒这温暖的阳光该有多好。", 1032100);
	} else if (status === i++) {
		qm.sendNextS("（向艾温转达了鲁安的问候。去向罗雯转达鲁安的问候吧。）");
	} else if (status === i++) {
		qm.updateInfoQuest(37179, "NpcSpeech=10321001");
		qm.dispose();
	}
}

function end2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("嗯？鲁安让你向我问好？", 1032101);
	} else if (status === i++) {
		qm.sendNext("啊……看来你已经去过艾洛丁了。那里怎么样？", 1032101);
	} else if (status === i++) {
		qm.sendNext("那也是一片美丽的森林。充满静谧，可以让人内心变得平静。", 1032101);
	} else if (status === i++) {
		qm.sendNext("不过看上去好像没什么大问题。以鲁安的性格……你一定受累了吧？", 1032101);
	} else if (status === i++) {
		qm.sendNext("看来我得抽空去趟鲁安家。不知道她最近过得怎么样。", 1032101);
	} else if (status === i++) {
		qm.sendNext("谢谢你特地过来转达她的问候。", 1032101);
	} else if (status === i++) {
		qm.sendNextS("（向罗雯转达了鲁安的问候。现在去找桉，把艾洛丁的秘密告诉她吧。)");
	} else if (status === i++) {
		qm.updateInfoQuest(37179, "NpcSpeech=10321001/10321012");
		qm.dispose();
	}
}

function end3(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("啊！终于回来了吗？我一直都在等你。", 1012110);
	} else if (status === i++) {
		qm.sendNextS("（把在秘密森林艾洛丁中发生的事情告诉桉。)");
	} else if (status === i++) {
		qm.sendNext("原来是这样啊。看来是我在瞎担心……什么时候我才能鼓起勇气，不再害怕呢……", 1012110);
	} else if (status === i++) {
		qm.sendNext("谢谢你……为了我大老远跑这一趟。\r\n作为报答，我要送你一份小礼物。", 1012110);
	} else if (status === i++) {
		qm.updateInfoQuest(37179, "NpcSpeech=10321001/10321012/10121103");
		qm.forceCompleteQuest();
		qm.forceCompleteQuest(37180);
		qm.gainItem(1143157, 1);
		qm.gainMeso(1000000);
		qm.gainExp(13240);
		qm.dispose();
	}
}
