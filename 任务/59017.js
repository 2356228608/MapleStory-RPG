/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
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
// [2019/9/24 1:10:50] 之前所在地图: qm.warp(0) - 当前进入地图: qm.warp(866136000)
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, true, false);
qm.inGameDirectionEvent_MoveAction(0);
qm.setStandAloneMode(true);
qm.onScriptMessage(3, 0, 1, 9390381,  "该走了喵。 \r\n晚了的话,伊卡会生气的喵。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.onScriptMessage(3, 0, 1, 9390381,  "知道了,阿尔。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390381,  "奶奶,我得走了。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "嗯。要注意身体啊。可别做什么太危险的行动哦!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "嗯!奶奶!不要担心!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390305,  "#b#h0##k，之前是我错了！\r\n #b#h0##k你真的是英雄！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390308,  "#b#h0##k，你已经是我们村子的英雄了。\r\n 我们以你为傲。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390306,  "没错！#b#h0##k已经是英雄啦！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390384,  "什么啊！！怎么还不来！！！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390381,  "啊，伊卡生气了喵。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.emotion(1, 5000);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "对老奶奶我来说，#b#h0##k你永远都是可爱漂亮的好孩子。\r\n嗯，我相信#b#h0##k你，你快去快回。\r\n如果你累了，可以随时回来！\r\n还有，把这些带走。\r\n#b(罗斯娜奶奶拿出了什么，然后挂到了我的脖子上。)#k", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "#b#h0##k，你走吧。朋友们在等你呢。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "这是什么？奶奶？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.gainItem(1352810, 1);
qm.onScriptMessage(3, 0, 1, 9390304,  "在你沉睡期间，我感觉迟早会有这样一天的到来，就事先做好了。你带着这个哨子，和你的朋友们好好相处吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(2);
qm.emotion(1, 10000);
qm.inGameDirectionEvent_AskAnswerTime(200);
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(1);
qm.inGameDirectionEvent_AskAnswerTime(50);
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(0);
qm.inGameDirectionEvent_OneTimeAction(113, 540);
qm.inGameDirectionEvent_AskAnswerTime(540);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9390304,  "好的！希望大家一切平安。\r\n 我很快就会回来的~ 成为真正的英雄之后！\r\n 走吧，阿尔！", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(2);
qm.inGameDirectionEvent_MoveAction(0);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.setInGameDirectionMode(false, true, false);
qm.setStandAloneMode(false);
qm.dispose();
cm.playerMessage(-1, "受到伙伴们的力量的作用，守护者之身手和重返亚柏兰已被激活。");
cm.updateInfoQuest(59021, "movie=1;fly=2;tuto=1");
cm.playerMessage(5, "获得<幼苗守护神>勋章");
cm.playerMessage(-1, " 获得<幼苗守护神>勋章");
cm.forceCompleteQuest(59326);
qm.warp(100000000);
	} else {
		qm.dispose();
	}
}
