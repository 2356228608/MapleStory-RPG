var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

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
	} else if (status === i++) {
		qm.sendNext_Bottom("汉斯说只要打开笔记本里想要复原的那一页就行……让我来看看……！", 9400031);
	} else if (status === i++) {
		qm.askMenu_Bottom("要不要读一读？\r\n#b#L0#打开笔记本。#l\r\n#L1#以后再说吧。#l", 9400031);
	} else if (status === i++) {
		if (selectionLog[2] == 1) {
			qm.updateInfoQuest(59744, "map=101000003");
			qm.forceStartQuest(59702, "");
			qm.warp(867111000);
		}
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNextNoESC_Bottom("你找我有什么事，冒险家？", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("我在背包中发现了这个笔记本……但是我完全想不起来是在哪里得到它的。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("这应该是个很重要的东西，但奇怪的是我完全想不起来。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("你能够知道过去我是怎么得到这个东西的吗？", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("让我看看……嗯，你说得对。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("我感受到了强烈的冒险和苦难的气息。这个肯定是个记录了重要事件的东西。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("但现在这个笔记本是空白的。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("只有最后一页上写有一句[一定要阻止APORD] ，不知道是什么意思……", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("我觉得这个似乎很重要，没办法置之不理，所以来请求你的帮助。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("很好，我可以给你帮助……但是你得知道一件事情。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("什么事？", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("如果你想探寻已经遗忘的过去，你必须成为其中的一部分，重新经历那一切。", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("也就是说……？", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("你必须重新再克服一次这上面记录的试炼和困境。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("如果你想看到这里记录的过去，你就得成为这个过去的一部分。你做好觉悟了吗？", 1032001);
	} else if (status === i++) {
		qm.sendNext_Bottom("是的，不管是什么事情，请你快点展现给我吧。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("好，那从现在开始，我将给予你看到你和这个笔记本究竟经历了什么事情的能力。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("(任务图标)打开笔记本的每一页就能解读过去。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("在那里顺其自然，你就能完全地再次完成笔记本。", 1032001);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("祝你好运！", 1032001);
		qm.forceCompleteQuest(59701);
		qm.fieldEffect_KinesisEXP(Math.pow(qm.getPlayer().getLevel(), qm.getPlayer().getLevel() / 25));
		qm.updateInfoQuest(59761, "1=1;2=1");
		qm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
		qm.dispose();
	}
}
