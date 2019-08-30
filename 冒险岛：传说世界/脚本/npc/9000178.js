var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(askMenu/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askMenu("呵呵……你知道#b灵魂武器#k吗？如果不知道，我也可以告诉你哦……\r\n\r\n#b#L0# 你是谁？#l \r\n#L1# 灵魂武器是什么东西呢？#l \r\n#L2# 我想把灵魂武器恢复成原来的武器。#l\r\n#L3# 我想把灵魂卷轴换成灵魂附魔石。#l \r\n#L4# 不用了，我没太大兴趣。#l", 9000178);
	} else {
		if (selectionLog[1] == 0) {
			action1(mode, type, selection, i);
		} else if (selectionLog[1] == 1) {
			action2(mode, type, selection, i);
		} else if (selectionLog[1] == 2) {
			action3(mode, type, selection, i);
		} else if (selectionLog[1] == 3) {
			action4(mode, type, selection, i);
		} else {
			action5(mode, type, selection, i);
		}
	}
}

function action1(mode, type, selection, i) {
	if (status === i++) {
		cm.sendNext("啊，我是一名研究者，负责开发将灵魂和武器进行结合的#b灵魂武器#k。我原本生活在其他世界，但因为一些事情而来到了这里。", 9000178);
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("其他世界？嗯……单看外表，感觉你就是个普通的大叔……");
	} else if (status === i++) {
		cm.sendNextPrev("外表？啊，其实这并不是我原来的外貌。虽然我也想以我原来的模样进入村庄，可村民们见到后都逃走了……所以我通过变身，变成了和他们相似的模样。", 9000178);
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("变身？你原来长什么样……");
	} else if (status === i++) {
		cm.sendNextPrev("你想知道我原来的模样？\r\n(犹豫了一下)好吧，那就让你稍微看一下吧。不过你别太吃惊。否则会伤我自尊……", 9000178);
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("好，你别担心。我的胆量可是很大的哟。");
	} else if (status === i++) {
		cm.sendNextPrevNoESC("呵呵……这就是我本来的模样。", 9000174);
	} else if (status === i++) {
		cm.sendOkSNoESC("呃啊！");
	} else {
		cm.dispose();
	}
}
function action2(mode, type, selection, i) {
	if (status === i++) {
		cm.sendNext("你想知道有关#b灵魂武器#k的事情？\r\n灵魂武器，其实就是#b灵魂和武器结合后的状态#k。而且，要想把普通武器制作成灵魂武器的话，就需要#b灵魂附魔石#k。", 9000178);
	} else if (status === i++) {
		cm.sendNextPrev("所谓#b灵魂附魔石#k，就是为了让武器能够吸收（保管）灵魂，而制作出的魔法道具。\r\n在武器上使用这种道具后，该武器就变成了灵魂武器。之后，#b每次吸收灵魂时，攻击力和魔力就会提高#k。", 9000178);
	} else if (status === i++) {
		cm.sendNextPrev("灵魂武器的能力还远不止如此。将强大生命体的#b灵魂结晶#k装备在灵魂武器上后，就能获得#b额外潜能#k，并且，#b集齐所有灵魂后，便可施展出召唤该生命体的强大技能#k。", 9000178);
	} else if (status === i++) {
		cm.sendOkSNoESC("哦，好神奇的技术啊！");
	} else {
		cm.dispose();
	}
}

function action3(mode, type, selection, i) {
	if (status === i++) {
		cm.askYesNo("你真的要将灵魂武器还原成原先的武器吗？#r进行还原时，当前灵魂武器上镶嵌的灵魂结晶将自动报废#k，你好好考虑下。", 9000178);
	} else if (status === i++) {
		cm.sendOk("装备中的武器好像不是灵魂武器啊。无法进行恢复。", 9000178);
	} else {
		cm.dispose();
	}
}

function action4(mode, type, selection, i) {
	if (status === i++) {
		cm.sendOk("你好像没有灵魂卷轴，再确认下吧。", 9000178);
	} else {
		cm.dispose();
	}
}

function action5(mode, type, selection, i) {
	if (status === i++) {
		cm.sendOk("嗯……那好吧。#b灵魂武器#k真的是个很不错的东西……可惜你不想听我的说明。等你改变主意再来找我吧。", 9000178);
	} else {
		cm.dispose();
	}
}
