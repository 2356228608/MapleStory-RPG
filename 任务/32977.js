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
	qm.openNpc(0,"32977_start");
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
qm.npc_ChangeController(2560116, "oid=22241", 72, -260, 1);
qm.npc_ChangeController(2560108, "oid=22242", 135, -260, 1);
qm.npc_ChangeController(2560110, "oid=22243", -58, -23, 0);
qm.npc_ChangeController(2560119, "oid=22244", 152, -23, 1);
qm.onTeleport(1, qm.getPlayer().getId(), 56, -293);
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h1;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
qm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 128, -224);
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.inGameDirectionEvent_ForcedFlip(1);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
qm.effect_Text("#fnNanumGothicExtraBold##fs18#第二天", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
qm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "真是奇怪。之前明明是张白纸……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯……#b消除一切虚假，显露真相#k……\r\n消除什么虚假呢？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "耶，行了。一定是想做什么恶作剧。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "这里也有人写了字。写的是#fn????##b“一定是恶作剧！”#k", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "不管它。好好干活吧。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip10(2, 150);
qm.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "啊……等等？！这……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
qm.inGameDirectionEvent_ForcedFlip(-1);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "#fs20#这不是我的笔迹吗？！！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.OverlapScreenDetail19(0, 1000, 3000, 1);
qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.fieldEffect_RemoveOverlapScreenDetail(1000);
qm.setStandAloneMode(false);
qm.setInGameDirectionMode(false, false, false);
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h1");
qm.updateInfoQuest(32977, "exp=1");
qm.forceCompleteQuest(32977);
qm.fieldEffect_PlayBGM("Bgm33.img/NastyLiar", 0, 0);
qm.dispose();
	} else {
		qm.dispose();
	}
}
