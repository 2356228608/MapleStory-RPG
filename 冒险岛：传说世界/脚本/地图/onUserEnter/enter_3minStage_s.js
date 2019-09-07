// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		var mapId = cm.getMapId();
		var eim = cm.getEventInstance();
		var em = eim.getEventManager();
		var map = em.getMapFactoryMap(mapId);
		if (mapId == 867111060) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			var mob = em.getMonster(9410863);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			var mob = em.getMonster(9410864);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			var mob = em.getMonster(9410865);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410858);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400034, 2000, "这激光看起来很危险。当心不要碰到，赶快离开地图吧！");
		} else if (mapId == 867111080) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 116));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410858);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400031, 2000, "啊啊！如果无法越过那条绳子！估计会出大事……！");
		} else if (mapId == 867111100) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410858);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400033, 2000, "这剧毒看上去特别危险。当心不要掉下去。");
		} else if (mapId == 867111120) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410856);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
		} else if (mapId == 867111150) {
			var mob = em.getMonster(9410831);
			eim.registerMonster(mob);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			cm.fieldEffect_Unew150("Map/EffectPL.img/3min/notice_spine/bossWarn/skeleton_warning_boss", "animation", "", 256, 1, 5000, 0, 0);
		} else if (mapId == 867111200) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410851);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400034, 2000, "这是那些家伙的无重力实验室。身体会浮起来，要当心啊！");
		} else if (mapId == 867111220) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410858);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400035, 2000, "那个焚烧器看起来相当危险。当心不要碰到。");
		} else if (mapId == 867111240) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410850);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
		} else if (mapId == 867111270) {
			var mob = em.getMonster(9410821);
			eim.registerMonster(mob);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			cm.fieldEffect_Unew150("Map/EffectPL.img/3min/notice_spine/bossWarn/skeleton_warning_boss", "animation", "", 256, 1, 5000, 0, 0);
		} else if (mapId == 867111300) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410853);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400031, 2000, "呃啊啊啊，发射了，发射了！当心不要成为目标！");
		} else if (mapId == 867111320) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410854);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			}
			cm.addPopupSay(9400034, 2000, "除了少数的几个区域外，其他地方都在发生等离子爆炸。要小心啊！");
		} else if (mapId == 867111350) {
			var mob = em.getMonster(9410855);
			eim.registerMonster(mob);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-300, 600), 45));
			cm.fieldEffect_Unew150("Map/EffectPL.img/3min/notice_spine/bossWarn/skeleton_warning_boss", "animation", "", 256, 1, 5000, 0, 0);
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
