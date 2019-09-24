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
qm.onScriptMessage(4, 1033101, 0, 0,  "抽泣，虽然#p1033101#很想和你一起去，但是我还没有多少力气。跟着你的话，会妨碍到你的。现在我想重新修炼。双弩精灵？要是我在这种情况下妨碍你的话，#p1033100#哥哥一定会骂我的。", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033101, 0, 0,  "我会先留在村子里，努力恢复力量。我决心不妨碍你的修炼！不过#b你也必须努力修炼，让其他人快点醒来哦#k！", 1, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "双弩精灵……", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "#p1033102#！你的身体没事吧？！", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "是的，还好我这个老太婆没什么不舒服的地方，我很健康。虽然力量变弱了，但是没问题。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "啊……太好了。#p1033100#和#p1033101#全都很结实，但是我很担心#p1033102#你。", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "多谢国王陛下的担心，我没事。呵呵呵……国王陛下一个人先醒过来，一定经历了不少事情吧？\r\n", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "嗯，但是没遇到什么困难。", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "你小小年纪就登上了王位, 甚至还见过黑魔法师, 你历经的苦难让你看起来成熟稳重......看来磨练使人成长这句话果真没错啊。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp", 0, 16, 0, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.forceStartQuest(24064, "");
qm.forceCompleteQuest(24064);
qm.dispose();
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
qm.dispose();
}
