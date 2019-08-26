/*
 *  起源之塔
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var em = cm.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage30");
	if (prop == null || prop.equals("start")) {
		var eim = em.getInstance("副本_起源之塔");
		var map = em.getMapFactoryMap(cm.getMapId());
		var mob = em.getMonster(9309200);
		var modified = em.newMonsterStats();
		modified.setOHp(2100000000);
		mob.setOverrideStats(modified);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(155, 155));
		cm.getMap().getWeatherEffectNotice("胆小的狮子从黑暗中现身了。请你去追踪逃跑的狮子！", 147, 60000, 1);
		em.setProperty("stage30", "fighting");
	}
	cm.dispose();
}
