var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askMenu("\r\n你有什么问题吗，年轻的朋友！\r\n\r\n#L0# #b请介绍一下<大冒险等级>。#k#l\r\n#L1# #b请介绍一下<大冒险等级>升级。#k#l\r\n#L2# #b请介绍一下<大冒险等级>福利。#k#l\r\n", 9062143);
	} else if (status >0) {
		if (selectionLog[1] == 0) {
			start0(mode, type, selection, i);
		} else if (selectionLog[1] == 1) {
			start1(mode, type, selection, i);
		} else {
			start2(mode, type, selection, i);
		}
	} else {
		qm.dispose();
	}
}

function start0(mode, type, selection, i) {
	if (status === i++) {
		qm.sendNext("\r\n#b#e你想了解<大冒险等级>#k#n吗？", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n其实<大冒险等级>不是为了什么崇高的理想\r\n而创造出来的东西。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n过去我以为真正的冒险就是到新的地方去\r\n打败更强的怪物。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n但是当我出去冒险的时候，村子却\r\n受到了怪物的袭击……", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n那时我终于明白了。\r\n\r\n冒险不光是为了打败更强的敌人，\r\n也不光是为了消灭怪物……", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n为某人进行#e表演#n、#e消灭#n怪物\r\n、跟朋友#e一起玩#n、#e积累财富#n，\r\n这些#e#b全都是冒险#n#k。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n我想对于#e#b什么才是冒险#k#n，\r\n每个人的心中都有属于自己的答案。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n而这个岛就是寻找那个答案的人聚集的地方。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n所以把#b#e<大冒险币>#k#n作为冒险的证据交给我，\r\n并跟我畅谈冒险故事的话，我就会送他\r\n一份礼物作为报答。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n不知从什么时候开始，那个就成了这座岛上冒险家们的等级，\r\n也就是#b#e<大冒险等级>#k#n。", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n你也去参加各种冒险，\r\n然后把#b#e<大冒险币>#k#n作为证据给我看吧！", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n那样我也会送你#b#e各种礼物#k#n，还会把\r\n我领悟的#b#e特殊技能#k#n传授给你。", 9062143);
	} else if (status === i++) {
		qm.sendOk("\r\n祝你在#b#e<大冒险岛>#n#k玩得愉快！", 9062143);
	} else {
		qm.dispose();
	}
}

function start1(mode, type, selection, i) {
	if (status === i++) {
	//	qm.sendNext("\r\n#b#e<大冒险等级>可升级日期#n#k\r\n\r\n- 中级（5级）：#b2019年8月14日上午10点之后可以#k\r\n- 高级（4级）：#b2019年8月28日上午10点之后可以#k\r\n- 资深（3级）：#b2019年9月11日上午10点之后可以#k\r\n- 精英（2级）：#b2019年9月25日上午10点之后可以#k\r\n- 大师（1级）：#b2019年10月9日上午10点之后可以#k", 9062143);
	//} else if (status === i++) {
		qm.sendOk("\r\n#b#e<大冒险等级>升级费用#n#k\r\n\r\n- 中级（5级）：#b大冒险币 500个#k\r\n- 高级（4级）：#b大冒险币 1,000个#k\r\n- 资深（3级）：#b大冒险币 1,500个#k\r\n- 精英（2级）：#b大冒险币 2,000个#k\r\n- 大师（1级）：#b大冒险币 3,000个#k", 9062143);
	} else {
		qm.dispose();
	}
}

function start2(mode, type, selection, i) {
	if (status === i++) {
		qm.sendNext("\r\n#b#e<大冒险点数>升级#n#k\r\n\r\n- 初级（6级）：#b每天获得上限20,000点#k\r\n- 中级（5级）：#b每天获得上限25,000点#k\r\n- 高级（4级）：#b每天获得上限30,000点#k\r\n- 资深（3级）：#b每天获得上限35,000点#k\r\n- 精英（2级）：#b每天获得上限40,000点#k\r\n- 大师（1级）：#b每天获得上限50,000点#k", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n#b#e<大冒险币商店>升级#n#k\r\n\r\n- 中级（5级）：#b可以购买<中级>物品#k\r\n- 高级（4级）：#b可以购买<高级>物品#k\r\n- 资深（3级）：#b可以购买<资深>物品#k\r\n- 精英（2级）：#b可以购买<精英>物品#k\r\n- 大师（1级）：#b可以购买<大师>物品#k", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n#b#e<大冒险属性>升级#n#k\r\n\r\n- 中级（5级）：#b技能等级1#k\r\n- 高级（4级）：#b技能等级2#k\r\n- 资深（3级）：#b技能等级3#k\r\n- 精英（2级）：#b技能等级4#k\r\n- 大师（1级）：#b技能等级5 (MAX)#k\r\n\r\n#b※ 详细效果可以在0转技能窗中查看#k", 9062143);
	} else if (status === i++) {
		qm.sendNextPrev("\r\n#b#e<大冒险技能>升级#n#k\r\n\r\n- 初级（6级）：#b可以使用<大冒险技能 : 初级>#k\r\n- 中级（5级）：#b可以使用<大冒险技能 : 中级>#k\r\n- 高级（4级）：#b可以使用<大冒险技能 : 高级>#k\r\n- 资深（3级）：#b可以使用<大冒险技能 : 资深>#k\r\n- 精英（2级）：可以使用#b<大冒险技能：精英>#k\r\n- 大师（1级）：可以使用#b<大冒险技能：大师>#k\r\n\r\n#b※ 详细效果可以在0转技能窗中查看#k", 9062143);
	} else if (status === i++) {
		qm.sendOk("\r\n#b#e<大冒险等级> 每周奖励升级#n#k\r\n\r\n- 中级（5级）：#b2个#k\r\n- 高级（4级）：#b4个#k\r\n- 资深（3级）：#b6个#k\r\n- 精英（2级）：#b8个#k\r\n- 大师（1级）：#b10个#k", 9062143);
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
