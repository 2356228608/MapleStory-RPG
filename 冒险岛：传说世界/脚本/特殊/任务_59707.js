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
		cm.inGameDirectionEvent_Monologue("[事件日志3]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("按照长老的话调查了怪物……虽然它们全部都很凶残，但是有几个特别奇怪的家伙。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我仔细查看了那些倒下的家伙，在它们体内有着微小的宝石碎片，难道与这个有关？", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("希望嘟嘟能没事就好……！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我得按照长老所说，快点去向明明女士打听消息！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceCompleteQuest(59707);
		cm.fieldEffect_KinesisEXP(cm.getPlayer().getLevel() * 10000);
		cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
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
