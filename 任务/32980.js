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

qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.onTeleport(1, qm.getPlayer().getId(), -78, 250);
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 313);
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip(1);
qm.onScriptMessage(3, 0, 1, 0,  "（幕后黑手……威尔队长怎么会……）", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "（虽然确实有很多疑点……\r\n不，不可能。他是多么慈祥的人啊……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "（况且欺骗我们对他又有什么好处呢？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
qm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "……就是这样。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#是吗，一定很有意思，呵呵呵。艾特的性格真是让人意外。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#还有呢？即便是琐碎的事情也好，我都想听听。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "那个……他发现了#b真实之药#k的配方。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#真实之药？啊，是那个啊。我也曾经研究过。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0##b一撮月光#k让我伤透了脑筋。\r\n我花了很长时间找到了替代的东西……但是没有尝试。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯？为什么……？（替代的东西，是说#b迎月花#k吗？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#因为我发现那是#r毫无意义#k的东西。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "毫无意义……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#通过炼金术来发现真相……", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0##fs18#不是很奇怪吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
qm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
qm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face16#所以，如果有人跟你说#r“奇怪”#k，一定要小心。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face16#因为我认为那个人就是幕后黑手。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
qm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
qm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "是，是，是的，没错。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "那我……该说的好像都说完了。我能出去了吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#好的，辛苦了，影牙。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#对了，有件事你必须记住。抱歉总是跟你唠叨同样的事……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#绝对不能#fs18##r怀疑使命#k。\r\n你应该还没忘记吧？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "当……当然。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#艾特一定是想到神殿去……\r\n他会以真相为诱饵，来利用你。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face1#所以千万别相信他。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "我会……记住的。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "（快点出去吧。）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip(0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip10(1, 300);
qm.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
qm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 189, 313);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
qm.npc_ChangeController(2560005, "oid=3758073", 220, 263, 1);
qm.npc_ChangeController(2560001, "oid=3758074", 300, 263, 1);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560005,  "#face1#你没事吧？ ", 256, 0, 37, 0, 1, 2560005); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560005,  "#face1#他执着地想要知道自己的真面目。影牙一定会……", 257, 0, 37, 0, 1, 2560005); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0#是的。但是迎月花代替不了月亮，只不过是幻象而已。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.effect_Voice("Voice3.img/DLep5/will/F_1-1.mp3", 100);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560000,  "#face0##fn????#月亮落下去之后，很快就会凋谢了。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
qm.effect_Voice("Voice3.img/DLep5/will/F_2-1.mp3", 100);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.OverlapScreenDetail19(0, 1000, 3000, 1);
qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.fieldEffect_RemoveOverlapScreenDetail(1000);
qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
qm.setStandAloneMode(false);
qm.updateInfoQuest(32980, "exp=1");
qm.forceCompleteQuest(32980);
qm.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h1;12=h01;21=h0;04=h0;13=h0;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h1;08=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h1;12=h01;21=h0;04=h0;13=h0;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h1;08=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h1;12=h01;21=h0;04=h0;13=h0;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
qm.setInGameDirectionMode(false, false, false);
qm.npc_LeaveField("oid=3758073");
qm.npc_LeaveField("oid=3758074");
qm.dispose();
qm.warp(307000100);
qm.npc_ChangeController(2560107, "oid=22231", -1283, -6, 0);
qm.npc_ChangeController(2560118, "oid=22232", -1461, -6, 0);
qm.npc_ChangeController(2560112, "oid=22233", 201, -150, 1);
qm.npc_ChangeController(2560103, "oid=22234", -216, -136, 0);
qm.npc_ChangeController(2500001, "oid=22235", -1846, -6, 1);

	} else {
		qm.dispose();
	}
}
