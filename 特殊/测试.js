/*
 *  功能：测试
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化

// 开头
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	cm.forceStartQuest(42009);
	cm.forceCompleteQuest(42009);
	cm.dispose();
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

function actionMob(mode, type, selection) {
	var em = cm.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var map = em.getMapFactoryMap(992010000);
	var mob = em.getMonster(9309201);
	var modified = em.newMonsterStats();
	modified.setOHp(400000000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(400, 100));
	cm.dispose();
}

var count = 30;
var start = 1000; // 阿丽莎呢？？？？
var end = 1000;
var level = [5, 15, 25, 35, 45, 10, 20, 30, 40, 50];
function actionMapEffect(mode, type, selection) {
	status++;
	if (status < 0) {
		cm.dispose();
	} else if (status < end) {
		var now = start + 5120000 + status;
		cm.warp(992000000 + level[status % 10] * 1000, 0);
		cm.getMap().startMapEffect("startMapEffect Code " + now, now);
		cm.askMenu("NEXT CODE : " + now);
	} else {
		cm.dispose();
	}
}
