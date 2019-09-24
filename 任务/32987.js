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
	qm.openNpc(0,"32987_start");
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
