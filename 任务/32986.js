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
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.onTeleport(1, qm.getPlayer().getId(), 288, -30);
qm.inGameDirectionEvent_ForcedFlip(1);
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
qm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "不是怪物……是个少女？难道一切都是谎言？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#影牙，你来这里干什么？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 340, 17);
} else if (status === i++) {
qm.npc_ChangeController(2560115, "oid=4994919", 480, -30, 1);
qm.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h01;21=h1;04=h0;13=h0;05=h0;14=h1;06=h0;15=h1;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
qm.onScriptMessage(3, 0, 1, 0,  "队长？！你怎么在这里……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "请告诉我。真相是什么？为什么要欺骗我们？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#没办法。那就给你看看吧。你一直渴望见到的真相。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 374, -30, 1, 0, 1, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.npc_ChangeController(2560010, "oid=4994921", 374, -30, 1);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#来，好好看吧。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/1", 0, 4000, 0, 0, 0, 4, 1);
qm.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "这……就是我？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#没错。在镜世界中创造出来的存在。你不过是个#b影子怪物#k。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#外面的世界对你来说是毫无意义的。\r\n因为从一开始你就不可能出去。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "这……怎么可能……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#我曾经警告过你。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#所谓的真相，其实一文不值。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
qm.npc_LeaveField("oid=4994919");
qm.npc_LeaveField("oid=4994921");
qm.setStandAloneMode(false);
qm.setInGameDirectionMode(false, false, false);
qm.dispose();
qm.warp(307090030);
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
