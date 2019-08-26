/*
Made by Jessefjxm
 */
var status = -1;
var item = [1032227, 1113089, 1122274];

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.askAcceptDecline("我还是不愿意放弃对雷昂的希望……能帮我找来#b10个#k我生前所制作的饰品吗？如果雷昂能够感受到我的存在，或许能够变好一些吧……");
	} else if (status == 1) {
		var text = "太感谢你了……关于饰品的话，会像是这样的：\r\n\r\n";
		for (var i = 0; i < item.length; i++) {
			text += "#b#i" + item[i] + "##z" + item[i] + "#\r\n";
		}
		text += "\r\n#k具体信息的话，#b塞希莉亚#k应该能给你更多的帮助的。";
		qm.sendNext(text);
	} else if (status == 2) {
		var count = [qm.getItemQuantity(item[0]), qm.getItemQuantity(item[1]), qm.getItemQuantity(item[2])];
		if (count[0] + count[1] + count[2] >= 10) {
			qm.sendNext("你已经找到足够多的饰品了吗？真是太感谢你了……拿着这个#b#i1113282##z1113282##k吧，这是含有我自己气息的戒指，希望有了它希望雷昂能够感受到我的存在……");
			var left = 10;
			for (var i = 0; i < item.length; i++) {
				if (left > 0) {
					left -= count[i];
					qm.gainItem(item[i], -count[i]);
				}
			}
		} else {
			qm.sendNextS("（去#r玫瑰花园#k问问#b塞希莉亚#k吧。）");
			qm.dispose();
		}
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.gainItem(1113282, 1);
		qm.dispose();
		qm.forceCompleteQuest();
	}
}

function end(mode, type, selection) {
	qm.dispose();
}
