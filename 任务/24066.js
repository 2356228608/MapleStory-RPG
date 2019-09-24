/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "长老们的纯白净化不起作用的原因，想来想去只有一个。请冷静地听我说。#r黑魔法师的封印好像已经变弱，或者已经解开#k了。", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "想想其实很简单。从国王陛下醒来的事情，可以看到黑魔法师的诅咒出现了裂痕。而且通过不断的修炼，国王的力量正在逐渐恢复。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "那样的话，我们种族的力量也会逐渐变强。但是其他人还是没能战胜诅咒。好像被什么阻挡了一样……", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "结论只有一个。#r黑魔法师的诅咒虽然出现了裂缝，但好像正在变强#k。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "黑魔法师的诅咒变强，说明黑魔法师的封印正在变弱，他的力量正在回到冒险岛世界……只能这么解释。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "结论是, 现在的......历经了数百年时间的冒险岛世界陷入了危机之中。危机的制造者正是黑魔法师。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 3000 exp", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(24066, "");
qm.forceCompleteQuest(24066);
qm.forceStartQuest(24067, "");
qm.dispose();
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
qm.dispose();
}
