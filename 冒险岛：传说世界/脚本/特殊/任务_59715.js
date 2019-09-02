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
		cm.inGameDirectionEvent_Monologue("[事件日志6]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("找到了，找到了！奇怪的动物商人就在勇士部落的线索！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("代号神那真是个帅气的同伴啊。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("如果他真的把我的嘟嘟和奈奈卖了，那我一定要好好教训那个人！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceCompleteQuest(59715);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1");
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
