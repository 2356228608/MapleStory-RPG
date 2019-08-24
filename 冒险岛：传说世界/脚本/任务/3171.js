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
		qm.sendNext("这一切全都是因为黑魔法师。拥有黑魔法师的力量的国王虽然被你打败了，但只是暂时变弱了而已，并没有完全消失。因为他的灵魂和黑魔法师捆绑在一起。请你不断地杀死他……直到他灵魂深处残留的黑魔法师的影响力全部消失为止。");
	} else if (status == i++) {
		qm.dispose();
		qm.forceCompleteQuest();
	}
}
