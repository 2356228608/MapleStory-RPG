/* 列娜海峡 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.askYesNo("我听说了你的出色表现，便来见见你。你在这地方立了大功呢？");
	} else if (status == 1) {
		qm.sendNext("你对这地方有什么感想？\r\n\r\n企鵝族、阿拉斯加犬族、海象族它们曾经彼此憎恨。尽管现在它们已经一笑泯恩仇，可要是它们从一开始就没有互相争斗，维持着合作关系，也许就可以阻止今天这样的事情发生。");
	} else if (status == 2) {
		qm.fieldEffect_ScreenMsg("Effect/Direction1.img/effect/aran/finishLilin/0");
		qm.sendNext("大家没必要非得思想一致，可如果在共同的敌人面前，有想要守护的东西的话，至少就应该齐心协力来和敌人对抗。作为冒险岛世界的一员，希望你要牢牢记住这句话。\r\n\r\n#r#e获得！\r\n\r\n#n#b#i1142629# #z1142629#");
	} else if (status == 3) {
		qm.gainExp(28800);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	qm.dispose();
}
