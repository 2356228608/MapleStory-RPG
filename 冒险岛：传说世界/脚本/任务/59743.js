// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var text = "这是这段时间收集的笔记本页片。好像是侦探团的搜查日志。";
		if (cm.getQuestStatus(59703 - 1) == 2) {
			text += "\r\n#L1#第1页 - 嘟嘟失踪事件#l";
		}
		if (cm.getQuestStatus(59705 - 1) == 2) {
			text += "\r\n#L2#第2页 - 作战开始#l";
		}
		if (cm.getQuestStatus(59707 - 1) == 2) {
			text += "\r\n#L3#第3页 - 调查怪物#l";
		}
		if (cm.getQuestStatus(59709 - 1) == 2) {
			text += "\r\n#L4#第4页 - 丢失的动物#l";
		}
		if (cm.getQuestStatus(59713 - 1) == 2) {
			text += "\r\n#L5#第5页 - 新同伴！#l";
		}
		if (cm.getQuestStatus(59715 - 1) == 2) {
			text += "\r\n#L6#第6页 - 前往勇士部落#l";
		}
		if (cm.getQuestStatus(59717 - 1) == 2) {
			text += "\r\n#L7#第7页 - 赏金猎人#l";
		}
		if (cm.getQuestStatus(59720 - 1) == 2) {
			text += "\r\n#L8#第8页 - 寻找APORD#l";
		}
		if (cm.getQuestStatus(59722 - 1) == 2) {
			text += "\r\n#L9#第9页 - 东方勇士#l";
		}
		if (cm.getQuestStatus(59725 - 1) == 2) {
			text += "\r\n#L10#第10页 - 组成橡果侦探团！#l";
		}
		if (cm.getQuestStatus(59727 - 1) == 2) {
			text += "\r\n#L11#第11页 - APORD的秘密基地#l";
		}
		if (cm.getQuestStatus(59752 - 1) == 2) {
			text += "\r\n#L12#第12页 - 变样的嘟嘟#l";
		}
		if (cm.getQuestStatus(59753 - 1) == 2) {
			text += "\r\n#L13#第13页 - 变样的奈奈#l";
		}
		if (cm.getQuestStatus(59754 - 1) == 2) {
			text += "\r\n#L14#第14页 - 悲伤离别#l";
		}
		if (cm.getQuestStatus(59755 - 1) == 2) {
			text += "\r\n#L15#第15页 - 自由#l";
		}
		if (cm.getQuestStatus(59756 - 1) == 2) {
			text += "\r\n#L16#第16页 - 事件完结#l";
		}
		cm.askMenu(text, 9400031);
	} else if (status > 0) {
		if (selectionLog[1] == 1) {
			start1(mode, type, selection, i);
		} else if (selectionLog[1] == 2) {
			start2(mode, type, selection, i);
		} else if (selectionLog[1] == 3) {
			start3(mode, type, selection, i);
		} else if (selectionLog[1] == 4) {
			start4(mode, type, selection, i);
		} else if (selectionLog[1] == 5) {
			start5(mode, type, selection, i);
		} else if (selectionLog[1] == 6) {
			start6(mode, type, selection, i);
		} else if (selectionLog[1] == 7) {
			start7(mode, type, selection, i);
		} else if (selectionLog[1] == 8) {
			start8(mode, type, selection, i);
		} else if (selectionLog[1] == 9) {
			start9(mode, type, selection, i);
		} else if (selectionLog[1] == 10) {
			start10(mode, type, selection, i);
		} else if (selectionLog[1] == 11) {
			start11(mode, type, selection, i);
		} else if (selectionLog[1] == 12) {
			start12(mode, type, selection, i);
		} else if (selectionLog[1] == 13) {
			start13(mode, type, selection, i);
		} else if (selectionLog[1] == 14) {
			start14(mode, type, selection, i);
		} else if (selectionLog[1] == 15) {
			start15(mode, type, selection, i);
		} else if (selectionLog[1] == 16) {
			start16(mode, type, selection, i);
		} else {
			qm.dispose();
		}
	}
}

function start1(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("嘟嘟消失了！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("村民们说有坏人把嘟嘟绑架了！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("既然有人看见嘟嘟被带去了冒险岛世界……现在就该我出马了！哈哈！", 9400031);
	} else {
		qm.dispose();
	}
}
function start2(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("不能灰心！在这段时间里，嘟嘟……！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("既然如此……进入第2阶段！如果没有情报，那就得实地调查！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我得去村子里面到处搜查一下！", 9400031);
	} else {
		qm.dispose();
	}
}
function start3(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("按照长老的话调查了怪物……虽然它们全部都很凶残，但是有几个特别奇怪的家伙。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我仔细查看了那些倒下的家伙，在它们体内有着微小的宝石碎片，难道与这个有关？", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("希望嘟嘟能没事就好……！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我得按照长老所说，快点去向明明女士打听消息！", 9400031);
	} else {
		qm.dispose();
	}
}
function start4(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("这是大新闻啊！真是大新闻！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("根据明明女士的情报……有人在勇士部落贩卖珍稀动物！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("他应该不会要把我们的嘟嘟卖了吧，呜呜……", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("而且，在射手村有人像我一样丢了乌龟！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("既然玛亚知道，那我就去找她吧。", 9400031);
	} else {
		qm.dispose();
	}
}
function start5(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("同伴！新的同伴就是侦探团所需要的！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我遇到了叫做代号剑斗和代号神那的帅气同伴。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("剑斗和神那弄丢了乌龟朋友奈奈……我们得快点找到它。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("说不定嘟嘟也会和它在一起呢？！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("但是……我们现在应该从什么开始呢……？问问神那吧！", 9400031);
	} else {
		qm.dispose();
	}
}
function start6(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("找到了，找到了！奇怪的动物商人就在勇士部落的线索！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("代号神那真是个帅气的同伴啊。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("如果他真的把我的嘟嘟和奈奈卖了，那我一定要好好教训那个人！", 9400031);
	} else {
		qm.dispose();
	}
}
function start7(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("赏金猎人！虽然很帅……但是也太突然了！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我们本来是来找贩卖珍稀动物的人……这可怎么办呢？", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("叫做代号杰特的这个赏金猎人会成为我们的同伴吗？！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("如果是这样那就好了！那就真是太帅了！", 9400031);
	} else {
		qm.dispose();
	}
}
function start8(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("终于得知了偷窃动物的组织的真相！看来就快要找到嘟嘟了。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("叫APORD的坏家伙们……！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("根据代号杰特的情报员提供的消息，我们现在应该去魔法密林。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("有这么多可靠的同伴，我真是太开心了，嘿嘿！", 9400031);
	} else {
		qm.dispose();
	}
}
function start9(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("呀嚯！我们终于又找到了其他同伴！侦探团的乐趣就在于聚集同伴啊？！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("我们在魔法密林遇到了叫做陈的帅气同伴。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("但是，代号陈说自己重要的朋友，叫做灵灵的老虎似乎很久之前就被APORD抢走了……", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("真是太让人伤心了……我们一定要全力帮助他！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("有这么多可靠的同伴，我真是太开心了，嘿嘿！", 9400031);
	} else {
		qm.dispose();
	}
}
function start10(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("橡果侦探团!", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("代号剑斗和杰特虽然似乎不是很满意，不过我很喜欢！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("而且橡果真的很好吃，嘿嘿。", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("现在真的要去对付APORD了！跟着动物的毛发走吧！", 9400031);
	} else {
		qm.dispose();
	}
}
function start11(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("我们找到APORD的秘密基地了！就是他们的宇宙船！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("居然躲得这么严实……如果不是我们橡果侦探团……", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("他们就会永远消失在宇宙中，再也找不回来了……！", 9400031);
	} else if (status === i++) {
		cm.sendNextPrevNoESC("嘟嘟、奈奈、灵灵……！我们得快点找到我们的朋友！", 9400031);
	} else {
		qm.dispose();
	}
}
function start12(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else {
		qm.dispose();
	}
}
function start13(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else {
		qm.dispose();
	}
}
function start14(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else {
		qm.dispose();
	}
}
function start15(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else {
		qm.dispose();
	}
}
function start16(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNextNoESC("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 9400031);
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
