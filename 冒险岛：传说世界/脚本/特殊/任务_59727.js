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
		cm.inGameDirectionEvent_Monologue("[事件日志11]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我们找到了APORD的秘密基地！那就是他们的宇宙飞船！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("居然藏在了森林深处……如果不是我们橡果侦探团……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("那些动物就会消失在宇宙中，再也见不到了……！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("嘟嘟、奈奈、灵灵！我们得快点找到我们重要的朋友！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.updateInfoQuest(16157, "point=266");
		cm.forceCompleteQuest(59727);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
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
