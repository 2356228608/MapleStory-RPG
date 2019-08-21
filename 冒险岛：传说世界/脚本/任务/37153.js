/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var info = qm.getInfoQuest(37153);
	if(info==null || info.isEmpty() || info.equals("")){
		end1(mode, type, selection);
	}else if(info.equals("NpcSpeech=10321061")){
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
		qm.sendNext("南部森林？嗯……没想过要去那里，所以不知道。\r\n怎么？有什么好玩的东西吗？", 1032106);
	} else if (status === i++) {
		qm.sendNextS("（维英好像不怎么感兴趣。去问问艾温吧。）");
	} else if (status === i++) {
		qm.updateInfoQuest(37153, "NpcSpeech=10321061");
		qm.OnStartNavigation(101000000,1,"1032100",37153);
		qm.dispose();
	}
}

function end2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("南部森林……你为什么会对那里感兴趣呢？\r\n好奇心太强有时也不是什么好事。", 1032100);
	} else if (status === i++) {
		qm.sendNextS("但是……");
	} else if (status === i++) {
		qm.sendNext("我跟你没什么好说的了。", 1032100);
	} else if (status === i++) {
		qm.sendNextS("（艾温好像不想再说了。去问问罗雯吧。）");
	} else if (status === i++) {
		qm.updateInfoQuest(37153, "NpcSpeech=10321061/10321002");
		qm.OnStartNavigation(101000000,1,"1032101",37153);
		qm.dispose();
	}
}

function end3(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("嗯？你是？", 1032101);
	} else if (status === i++) {
		qm.sendNext("南部森林？嗯……你去那里有什么事吗？", 1032101);
	} else if (status === i++) {
		qm.updateInfoQuest(37153, "NpcSpeech=10321061/10321002/10321013");
		qm.forceCompleteQuest();
		qm.gainExp(3700);
		qm.dispose();
	}
}
