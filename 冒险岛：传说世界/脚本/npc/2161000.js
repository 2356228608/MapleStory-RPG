var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askAcceptDecline("你们是来击退我的勇士吗……亦或是与黑魔法师敌对的人吗……无论是哪一方都无所谓，如果大家目的明确，就无需多言了……\r\n上吧，你们这些愚蠢的家伙……");
	} else if (status === i++) {
		spawn();
		cm.dispose();
	}
}

function spawn() {
	var eim = cm.getEventInstance();
	if (eim == null)
		return;
	var em = eim.getEventManager();
	var modified = em.newMonsterStats();
	if (cm.getMapId() == 211070100) {
		var mob = em.getMonster(8840007);
		modified.setOHp(7 * 100000000);
		mob.setOverrideStats(modified);
	} else if (cm.getMapId() == 211070102) {
		var mob = em.getMonster(8840000); //普通
		modified.setOHp(63 * 100000000);
		mob.setOverrideStats(modified);
	} else {
		var mob = em.getMonster(8840000);
		modified.setOHp(105 * 100000000);
		mob.setOverrideStats(modified);
		// 然后就可以提取晋升的 ChangedStats 实例魔改了
		var oldStats = mob.getStats();
		var newStats = mob.getChangedStats();
		newStats.watk = Math.round(oldStats.getPhysicalAttack() * 1.6);
		newStats.matk = Math.round(oldStats.getMagicAttack() * 1.6);
		newStats.acc = Math.round(oldStats.getAcc() * 1.6);
		newStats.eva = Math.round(oldStats.getEva() * 1.6);
		newStats.PDRate = 90;
		newStats.MDRate = 80;
		newStats.pushed = Math.round(oldStats.getPushed() * 1.6);
		newStats.speed = Math.round(oldStats.getSpeed() * 1.6);
		newStats.level = 160;
	}
	eim.registerMonster(mob);
	var map = eim.getMapInstance(0);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-5, -181));
	cm.removeNpc(cm.getMapId(), 2161000);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
}
