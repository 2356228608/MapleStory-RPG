/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
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
		qm.forceStartQuest();
		qm.dispose();
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
qm.onScriptMessage(4, 2151003, 0, 0,  "你回来啦。我听其他转职官说了。所有人都决定接收你为同伴。\r\n欢迎你。从现在开始，你就是反抗者的同伴了。我再来自我介绍一下。", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 2151003, 0, 0,  "我叫#b#p2151003##k，表面上我是医生，但在反抗者内部，我负责对外工作。\r\n今后如果有什么不明白的地方，你可以去问其他转职官。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(23630, "");
qm.forceCompleteQuest(23630);
qm.forceStartQuest(23129, "1");
qm.forceStartQuest(23637, "");
qm.onScriptMessage(4, 2151003, 0, 0,  "对了，以后有时间的话，你可以去见见埃德尔斯坦的村民们，帮他们解决困难。因为你必须了解现在的埃德尔斯坦是个什么样的地方。", 1, 0, 0, 0, 0, 0); // [类型] 普通对话
qm.dispose();
	} else {
		qm.dispose();
	}
}
