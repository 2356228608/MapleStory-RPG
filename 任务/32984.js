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
	qm.dispose();
	qm.openNpc(0,"32984_start");
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
qm.onScriptMessage(3, 0, 0, 0,  "狩猎结束了。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#你的表情怎么这么奇怪？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯？那，那个……剩下的影子中和剂……变成了清水。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face16#嗯……果然是因为这个啊。我说你为什么和其他人不一样。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face16#迎月果。那东西让中和剂的成分失效了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "那是什么意思？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#跟我来。我想带你去一个地方。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32982, "exp=1");
qm.forceCompleteQuest(32982);
qm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h1;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
qm.dispose();
qm.warp(307000210);
	} else {
		qm.dispose();
	}
}
