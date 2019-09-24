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
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#刚才是开个玩笑～\r\n因为肯老是来烦我。让我给他拿果汁和花生什么的～", 256, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "（开玩笑……吗？）", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#来得正好。你去帮我找点花生。", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "我？为什么……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face10#嗯……果然还是不行吗？", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face14#不#fs20##r杀人灭口#k的话……", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "我，我去！", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "花生应该就在这里的什么地方……啊，在哪呢……\r\n啊，一定又被他们拿走了！到地下室去看看！", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(32974, "");
qm.OnStartNavigation(307000110, 0, "hunt00", 0);
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
qm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.onScriptMessage(3, 0, 0, 0,  "呼呼，找到了。嗯？那本书是……", 256, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#这不是你的书吗？#b“植物图鉴和神秘配方”#k", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "不，不是的……\r\n啊，要是被米露看见了，一定又要怪我不该随便拿出来。必须快点还回去，哈哈哈……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#拿出来。", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "呜呜……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#让我看看……迎月花？干嘛要看这个……难道……", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "#fs18#我，我绝对没吃！！", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#哦……真的吗？", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "呃……拜托了，一定要帮我保密。", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face3#让我再想想。这本书先借我看一下。", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "等，等等！等一下！", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.forceCompleteQuest(32974);
qm.updateInfoQuest(32974, "exp=1");
qm.onScriptMessage(3, 0, 0, 0,  "还好身体好像没什么异常……必须去向队长报告……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
qm.dispose()
	} else {
		qm.dispose();
	}
}
