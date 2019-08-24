var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.sendOk("现在该去救我们堕落的王了。但是……冒险家，你还需要再多锻炼一下。至少要达到#r125级#k才行吧……虽然我认为你目前为止的表现已经足够出色，但面对那位成为黑魔法师的军团长，接受了黑魔法师的邪恶魔法的敌人，还是会很吃力的。");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
