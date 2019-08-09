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

function actionPos(mode, type, selection) {
	cm.playerMessage(5, cm.getPlayer().getPosition());
	cm.dispose();
}
function actionMovie(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		// 显示文字：字体，大小 [刷字时间] [持续时间] [位置（0=左上，1=中上，2=右上，3=左中，4=正中，5=右中，6=左下，7=中下，8=右下 ）]
		// ... [X] [Y] [?] [?] [?] [淡入时间（立刻刷新所有字）] [淡入时间（立刻刷新所有字）]
		cm.effect_Text("   ", 500, 0, 4, -50, -50, 1, 4, 0, 0, 0); //334 0x3D
		cm.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		cm.effect_Text("   ", 500, 0, 4, -150, -150, 1, 4, 0, 0, 0); //334 0x3D
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 收尾
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 0, 0, 0, 0, 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
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

function action(mode, type, selection) {
	cm.playerMessage(5, cm.getPlayer().getTruePosition());
	var em = cm.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var map = em.getMapFactoryMap(cm.getMapId());
	var mob = em.getMonster(9300891);
	mob.getStats().setFly(true);
	mob.getStats().setChange(true);
	map.spawnMonster(mob, new java.awt.Point(-3000, -2500));
	cm.dispose();
}

function actionMob(mode, type, selection) {
	var em = cm.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var map = em.getMapFactoryMap(cm.getMapId());
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
