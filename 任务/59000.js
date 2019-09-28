/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
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

	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.onScriptMessage(4, 9390305, 0, 0,  "赫卡大嫂,对不起……", 256, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390305, 0, 0,  "你这捣什么蛋啦?", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390305, 0, 0,  "是,对不起。我只是想让大家快乐……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390305, 0, 0,  "哎,每天都吊儿郎当的……好吧,这次我就放过你,不过绝对不会有下次咯?", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 9390305, 0, 0,  "那个#b#p9390306##k好像在哭，不知道是不是因为我的那个玩笑而哭的？", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 9390305, 0, 0,  "呃!……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 9390305, 0, 0,  "不行!得懂得珍惜朋友啊。赶紧去给#b#p9390306##k道歉吧。", 0, 16, 0, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
cm.onScriptMessage(4, 9390305, 0, 0,  "是!珍惜朋友也是成为英雄的条件之一啊!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.forceStartQuest(59001, "");
qm.forceCompleteQuest(59000);
qm.dispose();
	} else {
		qm.dispose();
	}
}
