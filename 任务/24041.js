/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
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
qm.forceStartQuest(24041, "");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, true, false);
qm.inGameDirectionEvent_OneTimeAction(5, 0);
qm.onScriptMessage(3, 0, 1, 0,  "左手可以动……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_OneTimeAction(6, 0);
qm.onScriptMessage(3, 0, 1, 0,  "右手也没问题……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_OneTimeAction(15, 0);
qm.onScriptMessage(3, 0, 1, 0,  "腿也没事。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "伤全都好了。只是等级……呃呃呃……好想哭……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, true, false);
qm.forceCompleteQuest(24041);
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
qm.forceStartQuest(24041, "");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, true, false);
qm.inGameDirectionEvent_OneTimeAction(5, 0);
qm.onScriptMessage(3, 0, 1, 0,  "左手可以动……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_OneTimeAction(6, 0);
qm.onScriptMessage(3, 0, 1, 0,  "右手也没问题……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_OneTimeAction(15, 0);
qm.onScriptMessage(3, 0, 1, 0,  "腿也没事。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "伤全都好了。只是等级……呃呃呃……好想哭……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, true, false);
qm.forceCompleteQuest(24041);
qm.dispose();
	} else {
		qm.dispose();
	}
}
