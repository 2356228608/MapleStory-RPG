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
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#准备好之后，到外面来。别太久……明白了吗？", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "呜呜……（点头点头）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h2;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.OnStartNavigation(307000220, 0, "pt00", 0);
qm.forceStartQuest(32975, "");
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
qm.onScriptMessage(3, 0, 0, 2560003,  "#face13#呼……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "（睡着了吗？要趁机……逃走吗？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face15#你太慢了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "哎呀！我……准备了一下……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "01=h1;10=h0;11=h1;20=h0;02=h0;03=h1;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h0;18=h0;19=h0");
qm.onScriptMessage(3, 0, 0, 0,  "嗯……你为什么要跟我一起走呢？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#因为一个人很无聊。又没有其他可以相信的人。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "你相信我？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#那当然。毕竟我们是#r共享秘密#k的关系。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "啊……秘密……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
qm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/5", 0, 300, 0, 0, 0, 4, 1);
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#这是给你的礼物，嘻嘻。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
qm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face14#说出去……你就死定了……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "哎呀！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, false, false);
qm.forceCompleteQuest(32975);
qm.updateInfoQuest(32975, "exp=1");
qm.dispose();
	} else {
		qm.dispose();
	}
}
