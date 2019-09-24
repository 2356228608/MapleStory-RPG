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
qm.onScriptMessage(3, 0, 0, 0,  "米露？你在这里干什么？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560002,  "#face0#艾特有话要我转告你，所以我在这里等着。他说会在#b#m307000230:##k等你。", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "谢谢你，米露。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560002,  "#face0#啊，等等。", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560002,  "#face0#我想问一下……你在吃影子中和剂吗？", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯？那当然。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560002,  "#face0#但是为什么……不，别忘了吃。\r\n要不然就会变成影子怪物，哈哈。", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯，谢谢你，米露。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(32981, "");
qm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h2;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
qm.OnStartNavigation(307000230, 0, "", 0);
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
qm.onScriptMessage(3, 0, 0, 0,  "你是在……睡觉吗？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face15#你又迟到了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "你怎么每次都知道我来了？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face15#这个嘛～说出来就没意思了。如果你乖一点，我就想一想。啊～", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "还要我怎样啊……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h1;12=h01;21=h0;04=h0;13=h1;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
qm.updateInfoQuest(32981, "exp=1");
qm.forceCompleteQuest(32981);
qm.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h01;21=h0;04=h0;13=h1;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
qm.dispose();
	} else {
		qm.dispose();
	}
}
