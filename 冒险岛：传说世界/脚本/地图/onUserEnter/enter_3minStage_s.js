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
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			var mob = em.getMonster(9410863);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			var mob = em.getMonster(9410864);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			var mob = em.getMonster(9410865);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410859);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			}
			cm.addPopupSay(9400034, 2000, "这激光看起来很危险。当心不要碰到，赶快离开地图吧！");
		} else if (mapId == 867111080) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 116));
			var mob = em.getMonster(9410866);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 116));
			var mob = em.getMonster(9410867);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 116));
			var mob = em.getMonster(9410868);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 116));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410859);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			}
			cm.addPopupSay(9400031, 2000, "啊啊！如果无法越过那条绳子！估计会出大事……！");
		} else if (mapId == 867111100) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410859);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			}
			cm.addPopupSay(9400033, 2000, "这剧毒看上去特别危险。当心不要掉下去。");
		} else if (mapId == 867111120) {
			var mob = em.getMonster(9410861);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			for (var i = 0; i < 10; i++) {
				var mob = em.getMonster(9410856);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
			}
		} else if (mapId == 867111120) {
			var mob = em.getMonster(9410831);
			eim.registerMonster(mob);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1, 45));
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
