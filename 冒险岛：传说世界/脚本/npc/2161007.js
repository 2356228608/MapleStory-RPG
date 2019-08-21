var status = -1;

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNext("抽泣……我，我想回家。");
	} else if (status == i++) {
		cm.sendNext("嗯？你，你是谁？是来帮我的吗？请你一定要让我离开这里！我好害怕！");
	} else {
		cm.gainItem(4032831, 1);
		cm.warp(211060200, 3);
		cm.dispose();
	}
}
