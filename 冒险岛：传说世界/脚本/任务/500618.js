var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择
var tier = ["初级", "中级", "高级", "资深", "精英", "大师"];
var upgrade = [0, 500, 1000, 1500, 2000, 3000];
var skill = [80000584, 80000583, 80002703, 80002705, 80002707, 80002709];

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;

	var item = cm.getItemQuantity(4310266);
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		var info = qm.getInfoQuest(100161);
		if (info == null || info.length < 4) {
			var level = 1;
			qm.updateInfoQuest(100161, "lv=1");
		} else {
			var level = parseInt(info.substr(3));
		}
		var text = "#b#e<大冒险等级>申请升级！#n#k\r\n\r\n";
		text += "- 当前<大冒险等级>：#b" + tier[level - 1] + "（" + (7 - level) + "级）#k\r\n";
		if (level) {
			text = "\r\n你已经是最高等级大冒险家了。恭喜！";
			qm.sendOk(text, 9062143);
			qm.dispose();
		} else {
			text += "- 下一<大冒险等级>：#b" + tier[level] + "（" + (6 - level) + "级）#k\r\n\r\n- 升级所需费用：#b" + upgrade[level] + "大冒险币#k\r\n";
			text += "- 当前拥有大冒险币：#r" + item + "大冒险币";
			if (item < upgrade[level]) {
				text += "（缺少" + (upgrade[level] - item) + "大冒险币）";
			}
			text += "#k\r\n";
			text += "\r\n#L0# #b<大冒险等级>申请升级#l#k";
			qm.askMenu(text, 9062143);
		}
	} else if (status === i++) {
		if (item < upgrade[level]) {
			qm.sendOk("\r\n要想升到#b<大冒险等级>中级#k，\r\n需要#r500个大冒险币#k！", 9062143);
		} else {
			qm.updateInfoQuest(100161, "lv=" + (level + 1));
			qm.gainItem(4310266, -upgrade[level]);
			qm.sendOk("\r\n你已经是#b" + tier[level] + "大冒险家#k了。恭喜！", 9062143);
			qm.teachSkill(80000582, level - 1);
			// 删除技能
			qm.teachSkill(skill[level - 1], -1, 0);
			qm.teachSkill(skill[level], 1);
		}
	} else if (status == i++) {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
