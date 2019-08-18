/* Dawnveil
[Root Abyss] An Urgent Summons
Neinheart
Made by Daenerys, jessefjxm
 */
var status = -1;
var quest = 30056;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var info = qm.getInfoQuest(quest);
	if (info == null || info.isEmpty() || info.equals("")) {
		end1(mode, type, selection);
	} else if (info.equals("NpcSpeech=13020111")) {
		end2(mode, type, selection);
	} else if (info.equals("NpcSpeech=13020111/13020072")) {
		end3(mode, type, selection);
	} else {
		qm.dispose();
	}
}

function end1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("蘑，蘑，蘑，蘑菇大臣回来了？！这可糟了！他不会是又想发动叛乱吧？在事情还没发生之前，必须马上抓住他……！嗯？那个蘑菇就是蘑菇大臣？我看着一点都不像啊。我可以肯定，那个蘑菇不是蘑菇大臣。", 1302115);
	} else if (status === i++) {
		qm.updateInfoQuest(quest, "NpcSpeech=13020111");
		qm.dispose();
	}
}

function end2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("蘑菇大臣，看上去确实有点像。蘑菇盖的颜色和大小都很相似……所以你才会弄错。也许在人类看来，蘑菇们都长得差不多。", 1302107);
	} else if (status === i++) {
		qm.updateInfoQuest(quest, "NpcSpeech=13020111/13020072");
		qm.dispose();
	}
}

function end3(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("蘑菇大臣回来了？警卫队长现在到底在干什么？必须马上把他抓起来……嗯？那个眼睛旁边有一颗痣的蘑菇？你是想逗我笑，所以在跟我讲笑话吗？那种事情一点都不好笑。", 1302101);
	} else if (status === i++) {
		qm.updateInfoQuest(quest, "NpcSpeech=13020111/13020072/13020013");
		qm.forceCompleteQuest();
		qm.gainExp(51455);
		qm.warp(106031000, 0);
		qm.dispose();
	}
}
