/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
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
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#今天的任务是狩猎森林中的野兽。让我们差不多应付一下，然后再走吧。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face4#好了，快去狩猎吧。", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "（原来叫我来是为了这个！这家伙也一样，就知道使唤人……）", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "（明明是这种人，在其他人面前却装作很老实的样子。）", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#喂，你在磨蹭什么呢？", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "我，我是医务队员，战斗力完全不行……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "啊！对了！如果我受伤了，就没法制作影子中和剂了。\r\n那样岂不很糟糕？", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face16#……", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "还，还有，我刚好正在熬制百年草……\r\n啊……要是放着不管，就不能用了，哈哈。我得赶紧去看看才行。", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "（能糊弄过去吗？一定要糊弄过去……）", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face16#……", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face4#好了，废话我已经听够了。你能快点开始吗？", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "呜呜……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 2560111, 0, 2560003,  "#face0#你去消灭200个#b#o8230064:##k。据说在#b#m307000221:##k有很多。", 0, 16, 36, 0, 1, 2560003); // [类型] 接受/拒绝
} else if (status === i++) {
qm.forceStartQuest(32976, "");
qm.OnStartNavigation(307000220, 0, "hunt00", 0);
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
qm.onScriptMessage(3, 0, 0, 0,  "呼……搞定了。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32976, "exp=1");
qm.forceCompleteQuest(32976);
qm.dispose();
	} else {
		qm.dispose();
	}
}
