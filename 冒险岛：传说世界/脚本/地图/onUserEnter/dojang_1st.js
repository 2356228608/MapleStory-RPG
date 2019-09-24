/*  This is mada by Jackson
 *  This source is made by Funms Team
 *
 *  功能：武陵道场 第一层 初始化记录数据
 *
 *  @Author Jackson
 */

/* global ms, java */

function start() {
	var eim = cm.getEventInstance();
	var em = eim.getEventManager();
	var mob = em.getMonster(9305600);
	ms.getMap().spawnMonsterWithEffect(mob, 15, new java.awt.Point(286, 7), false);
	ms.fieldEffect_Tremble(0, 1, 30);
	ms.dispose();
}
