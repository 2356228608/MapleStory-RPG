// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("[事件日志5]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("同伴！新的同伴就是侦探团所需要的！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我遇到了叫做代号剑斗和代号神那的帅气同伴。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("剑斗和神那弄丢了乌龟朋友奈奈……我们得快点找到它。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("说不定嘟嘟也会和它在一起呢？！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("但是……我们现在应该从什么开始呢……？问问神那吧！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceCompleteQuest(59713);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1");
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.setInGameDirectionMode(false, false, false);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
