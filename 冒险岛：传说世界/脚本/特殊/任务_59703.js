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
		cm.inGameDirectionEvent_Monologue("[事件日志1]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("嘟嘟消失了！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("村民们说有坏人把嘟嘟绑架了！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("既然有人看见嘟嘟被带去了冒险岛世界……现在就该我出马了！哈哈！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNextS_Bottom("……这就是全部了……？");
	} else if (status === i++) {
		cm.forceStartQuest();
		cm.forceCompleteQuest(59703);
		cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1");
		cm.fieldEffect_KinesisEXP(cm.getPlayer().getLevel() * 10000);
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
