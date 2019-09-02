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
		cm.inGameDirectionEvent_Monologue("[事件日志7]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("赏金猎人！虽然很帅……但是也太突然了！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我们本来是来找贩卖珍稀动物的人……这可怎么办呢？", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("叫做代号杰特的这个赏金猎人会成为我们的同伴吗？！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("如果是这样那就好了！那就真是太帅了！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceCompleteQuest(59717);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
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
