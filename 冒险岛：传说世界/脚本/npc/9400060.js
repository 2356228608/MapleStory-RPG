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
		var info = cm.getInfoQuest(59746);
		if (info.equals("chk1=1;chk2=1")) {
			cm.npc_LeaveField("oid=116639");
			cm.updateInfoQuest(59746, "chk1=1;chk2=1;chk3=1");
			cm.forceCompleteQuest(59749);
			cm.sendNextSNoESC_Bottom("好，现在笔记本的这一页也写满了吗？");
		} else {
			cm.sendOkSNoESC_Bottom("先去其他地方张贴吧。待会再来看看这里。");
			cm.dispose();
		}
	} else if (status === i++) {
		cm.updateInfoQuest(16157, "point=20");
		cm.forceCompleteQuest(59704);
		cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1");
		cm.setStandAloneMode(false);
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		var mapId = parseInt(cm.getInfoQuest(59744).substr(4));
		cm.warp(mapId);
		cm.fieldEffect_KinesisEXP(cm.getPlayer().getLevel() * 10000);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
