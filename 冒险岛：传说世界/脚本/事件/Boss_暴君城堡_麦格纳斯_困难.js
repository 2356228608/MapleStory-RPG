/*  This is mada by nana
 *  This source is made by bms Team
 *  功能：麦格纳斯 Magnus Hard
 *  @Author nana
 */

//自定义复活次数
//var reviveCount = 3;

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("Boss_暴君城堡_麦格纳斯_困难");
	var map = eim.setInstanceMap(401060100);
	map.resetFully();
	map.killAllMonsters(false);
	var mob = em.getMonster(8880002); //190J
	//mob.getStats().setChange(true);
	mob.changeLevel(220);
	//mob.getChangedStats().setOHp(30000000000);
	//mob.setHp(30000000000);
	/*var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 300);
	modified.setOMp(mob.getMobMaxMp() * 9000);
	mob.setOverrideStats(modified);*/
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
	eim.setProperty("HPstate", "1");
	eim.startEventTimer(1000 * 60 * 60); // 30 min
	//eim.schedule("checkChrHP", 2000);
	eim.schedule("summonFall", 5000);
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	//player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
	//player.setPQLog("麦格纳斯[困难]");
}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = player.getMap();
		//player.eventRevive();
		player.changeMap(map, map.getPortal(0));
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(401060000);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function changedMap(eim, player, mapid) {
	if (mapid != 401060100) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
	}
}

function playerDisconnected(eim, player) {
	eim.disposeIfPlayerBelow(0, 401060000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
	return 0;
}

function monsterValue(eim, mobId) {
	switch (mobId) {
	case 8880000:
		/*
		for (i = 0; i < eim.getPlayers().size(); i++) {
		eim.getPlayers().get(i).setPQLog("麦格纳斯[困难]");
		}
		 */
		break;
	}
	var teamMembers = eim.getPlayerCount();
	eim.getPlayers().forEach(function (player) {
		player.updateAchievement(677, 0, "mob_kill", 1, 1);
		player.updateAchievement(678, 0, "mob_kill", 1, 10);
		player.updateAchievement(679, 0, "mob_kill", 1, 100);
		player.updateAchievement(680, 0, "mob_kill", 1, 100);
		//  组队通关
		if (teamMembers == 1) {
			player.finishAchievement(681);
		} else if (teamMembers == 4) {
			player.gainAchievement(682, 0, "mob_kill=1");
		} else if (teamMembers == 5) {
			player.gainAchievement(682, 1, "mob_kill=1");
		} else if (teamMembers == 6) {
			player.gainAchievement(682, 2, "mob_kill=1");
		}
		// 限时通关
		if (60 * 60 * 1000 - eim.getTimeLeft() < 5 * 60 * 1000) {
			player.finishAchievement(683);
		}
	});
	return 1;
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}
function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 401060000);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}

function allMonstersDead(eim) {
	//em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
	//eim.startEventTimer(1000 * 60); //10 min
	//eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
	eim.setProperty("HPstate", "-1");
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function summonFall(eim) {
	var state = parseInt(eim.getProperty("HPstate"));
	var time = 4500;
	if (state > 0) {
		var map = eim.getMapInstance(0);
		map.obtacleFall(5 * state + 1, 1, 8);
		eim.schedule("summonFall", time);
	}
}

function checkChrHP(eim) {
	var state = parseInt(eim.getProperty("HPstate"));
	if (state > 0) {
		var map = eim.getMapInstance(0);
		var mob = map.getMonsterById(8880000);
		if (mob != null) {
			for (i = 0; i < eim.getPlayers().size(); i++) {
				mob.checkMobZone(eim.getPlayers().get(i), true);
			}
			eim.schedule("checkChrHP", 2000);
		}
	}
}
function pickUpItem(eim, player, itemID) {}
