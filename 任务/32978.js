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
qm.onTeleport(1, qm.getPlayer().getId(), 68, -80);
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.onScriptMessage(3, 0, 1, 0,  "嗯……到底是什么时候写上去的呢？不知道。完全记不起来……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#喂，你是看不见我吗？", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#出去战斗之后，医务队的事情就不当回事了吗？", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip(1);
qm.onScriptMessage(3, 0, 1, 0,  "不，不是的……对不起……有什么事吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#我的手腕扭了，帮我配点治疗药。\r\n切，竟然在补给任务中受了伤……", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯，来，给你。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#味道可真难吃，切……每次都这样，真是伤脑筋。", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "每次……嗯？！对了……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "肯，你在上次轮回中不是也受伤了吗？在上上次轮回中也……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face1#什么？那是什么意思？我什么时候？", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "但是你刚才说#r每次#k……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "（怎么回事？为什么我之前没发现呢？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face1#？？", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#喂，影牙～！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "01=h1;10=h1;11=h0;20=h0;02=h0;03=h1;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h1;18=h0;19=h1");
qm.inGameDirectionEvent_ForcedFlip(-1);
qm.onScriptMessage(3, 0, 1, 0,  "哎呀！出来了！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
qm.onScriptMessage(3, 0, 1, 2560003,  "#face14#出来了……？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "啊……没什么……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#该去执行任务了。快准备好。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face2#喂，没看见先来的人吗？", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#啊，肯……刚才凯森队长在急着找你。\r\n是不是补给品没有整理好啊？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face2#你说什么？切！喂，影牙！我马上就回来！等着我！", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32999, "01=h1;10=h1;11=h0;20=h0;02=h0;03=h1;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h1;18=h0;19=h0");
qm.forceStartQuest(32978, "");
qm.onScriptMessage(3, 0, 1, 0,  "凯森队长应该去执行搜索任务了啊……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#嘘！我把妨碍者支走了，快走吧。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "你难道是在骗他？之后该怎么收场呢？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#收场？你怕他吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯……老实说，有点……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face3#嗯……竟敢欺负我的奴隶。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "奴隶……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#太好了。你帮我弄一点#b荆棘树液#k来。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "你想用来干什么？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face0#废话少说，快去。我要让你看点好东西。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, false, false);
qm.setStandAloneMode(false);
qm.OnStartNavigation(307000110, 0, "hunt01", 0);
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

qm.onScriptMessage(3, 0, 0, 0,  "呼呼，搞定了。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#干得好。好了，你好好看着。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
qm.onScriptMessage(3, 0, 1, 2560006,  "#face2#艾特那家伙！！！让我去找队长，害我被臭骂了一顿！", 256, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/6", 0, 1000, 0, 0, 0, 4, 1);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face1#呃啊！！这是怎么回事！！", 256, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
qm.setInGameDirectionMode(false, false, false);
qm.setStandAloneMode(false);
qm.forceCompleteQuest(32978);
qm.updateInfoQuest(32978, "exp=1");
qm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
qm.dispose();
qm.warp(307000100);

	} else {
		qm.dispose();
	}
}
