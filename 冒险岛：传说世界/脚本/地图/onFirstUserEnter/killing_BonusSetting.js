// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.getMap().resetFully();
		ms.fieldEffect_ScreenMsg("killing/bonus/bonus");
		ms.fieldEffect_ScreenMsg("killing/bonus/stage");
		var pos1,
		pos2,
		pos3;
		var spawnPer = 0,
		mobId = 0;
		// 9700019, 9700029
		// 9700021 = one thats invincible
		if (ms.getMapId() >= 910320010 && ms.getMapId() <= 910320029) {
			pos1 = new java.awt.Point(121, 218);
			pos2 = new java.awt.Point(396, 43);
			pos3 = new java.awt.Point(-63, 43);
			mobId = 9700020;
			spawnPer = 10;
		} else if (ms.getMapId() >= 926010010 && ms.getMapId() <= 926010029) {
			pos1 = new java.awt.Point(0, 88);
			pos2 = new java.awt.Point(-326, -115);
			pos3 = new java.awt.Point(361, -115);
			mobId = 9700019;
			spawnPer = 10;
		} else if (ms.getMapId() >= 926010030 && ms.getMapId() <= 926010049) {
			pos1 = new java.awt.Point(0, 88);
			pos2 = new java.awt.Point(-326, -115);
			pos3 = new java.awt.Point(361, -115);
			mobId = 9700019;
			spawnPer = 15;
		} else if (ms.getMapId() >= 926010050 && ms.getMapId() <= 926010069) {
			pos1 = new java.awt.Point(0, 88);
			pos2 = new java.awt.Point(-326, -115);
			pos3 = new java.awt.Point(361, -115);
			mobId = 9700019;
			spawnPer = 20;
		} else if (ms.getMapId() >= 926010070 && ms.getMapId() <= 926010089) {
			pos1 = new java.awt.Point(0, 88);
			pos2 = new java.awt.Point(-326, -115);
			pos3 = new java.awt.Point(361, -115);
			mobId = 9700029;
			spawnPer = 20;
		} else {
			break;
		}
		var eim = ms.getEventInstance();
		if (eim != null) {
			var em = eim.getEventManager();
			for (var i = 0; i < spawnPer; i++) {
				ms.getMap().spawnMonsterOnGroundBelow(em.getMonster(mobId), pos1);
				ms.getMap().spawnMonsterOnGroundBelow(em.getMonster(mobId), pos2);
				ms.getMap().spawnMonsterOnGroundBelow(em.getMonster(mobId), pos3);
			}
		}
		ms.getPlayer().startMapTimeLimitTask(120, ms.getMap().getReturnMap());
		ms.dispose();
	} else {
		ms.dispose();
	}
}
