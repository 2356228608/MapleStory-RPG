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

function act蘑菇城() {
	cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -850, 140);

	cm.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
	cm.npc_SetSpecialAction(1302101, "summon");
	cm.npc_LeaveField(1302101);

	cm.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302101, 0, 0);

	cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
	cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
	cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wind");
	cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");

	cm.effect_Voice("Voice.img/flowervioleta/mc/0");

	cm.effect_NormalSpeechBalloon("想让公主笑的人", 2000, 4);

	cm.fieldEffect_PlayBGM("Bgm00/Silence");
	cm.fieldEffect_PlayBGM("Bgm38/MushroomCastle");

	cm.effect_Direction("Effect/Direction2.img/flowervioleta/opennig");
	cm.effect_Direction("Effect/Direction2.img/flowervioleta/copa");
	cm.effect_Direction("Effect/Direction2.img/flowervioleta/face");
	cm.effect_Direction("Effect/Direction2.img/flowervioleta/song");

	cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
	cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird2");
	cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/ending");
	cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/viking");
	cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/puzzle");
}
function action(mode, type, selection) {
	var newStatus = cm.getQuestRecord(500619);
	newStatus.setStatus(0);
	// 这样才能有效更新
	cm.getPlayer().updateQuest(newStatus, true);
	cm.dispose();
}
function actionPacket(mode, type, selection) {
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.mplewPacket("4fa", "01 5F CD 27 01 3C 28 00 00 10 FF DC 00 01 01 06 00 DE FE 42 FF 01 00 00 00 00 00 00 00 00 00 FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00");
		cm.inGameDirectionEvent_AskAnswerTime(50);
	} else if (status === i++) {
		cm.mplewPacket("4fe", "5F CD 27 01 FF FF 00 00 00 00 00 00 00 00 10 FF F5 00 00 00 00 00 01 00 10 FF F5 00 00 00 00 00 06 00 00 00 00 00 00 00 05 38 04 00");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function actionTP(mode, type, selection) {
	var pos = cm.getMap().getPortal(0).getPosition();
	cm.onTeleport(1, cm.getPlayer().getId(), pos.getX(), pos.getY());
}
function actionHD(mode, type, selection) {
	// 缓存控制之神里角色最后移动时间
	updateInfoQuest(34515, Long.toString(System.currentTimeMillis()));
	// 上一次领取每周礼物的时间 可以领取的礼物 是否完结了全部大冒险岛内容，完结就不显示UI了
	cm.updateInfoQuest(100114, "time=12345;reward=1;finished=1");
	// 今日获得的能量
	cm.updateInfoQuest(100168, "123");
	// 控制之神 20+ 皮肤奖励
	qm.updateInfoQuest(500651, "clear=1");
	// 大冒险钻头击杀数量
	cm.updateInfoQuest(100188, "123");

	// 访问过控制之神；入场时选择的关卡
	cm.updateInfoQuest(18837, "visit=1");
	// 挑战次数 每天重置用的参考时间 ？ 最高关卡 模式？
	cm.updateInfoQuest(18838, "count=99;stageT=190824142712;hack=0;stage=5;mode=1");
	// 18839=第一关 是否通关 耗费秒数 星级 已完成第一次（控制对话）
	cm.updateInfoQuest(18839, "isClear=1;br=14;cs=3;first=1");
	// 更新时间 星星总数
	cm.updateInfoQuest(18869, "starSumT=190824142712;starSum=3");
	// 总耗时 更新时间
	cm.updateInfoQuest(18870, "timeSum=14;timeSumT=190824142712");
	// 本次陷阱次数 总陷阱次数 更新时间
	cm.updateInfoQuest(18877, "trap=6;trapSum=8;T=190824143554936");
	// 剩余时间 ？
	cm.updateInfoQuest(34500, "time=10000000;type=1");

	cm.updateInfoQuest(500650, "uW=3;3=6");
	cm.updateInfoQuest(500651, "3=1");

	// 大冒险等级？
	qm.updateInfoQuest(100161, "lv=1");
	qm.updateInfoQuest(500617, "lv=1");

	// 大冒险属性
	qm.teachSkill(80000582, 1);
	// 大冒险技能 80000584 80000583 80002703 80002705 80002707 80002709（奥本的勋章）
	qm.teachSkill(80000584, 1);
	cm.dispose();
}

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}

function actionStage(mode, type, selection) {
	if (mapId == 16) {
		cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/final");
	} else {
		cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/stage");
		cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + state % 10);
		if (state > 10) { // 00=个位 0=十位
			cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + state % 10);
			cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + Math.floor(state / 10));
		} else {
			cm.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + state % 10);
		}
	}
	cm.dispose();
}

function actionPos(mode, type, selection) {
	cm.playerMessage(5, cm.getPlayer().getPosition());
	cm.dispose();
}

function actionMovie(mode, type, selection) {
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_PushScaleInfo(500, 500, 500, -4000, 0);
	} else if (status === i++) {
		// 收尾
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

function action缩放(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent(14, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// [移动耗时] [缩放比例，标准1000，越大越放大] [动画耗时] [x] [y] 单独占用一次迭代
		cm.inGameDirectionEvent_PushScaleInfo(1000, 500, 1000, 1000, -620);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -162, 264);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function actionQuest(mode, type, selection) {
	var qid = 37169;
	//cm.forceStartQuest(qid, "1");
	//cm.updateInfoQuest(qid, "value=9");
	var newStatus = cm.getQuestRecord(qid);
	newStatus.setCustomData("9");
	//newStatus.setStatus(1);
	// 这样才能有效更新
	cm.getPlayer().updateQuest(newStatus, true);
	cm.playerMessage(5, "getQuest - " + cm.getQuest(qid));
	cm.playerMessage(5, "getQuestRecord - " + cm.getQuestRecord(qid));
	cm.playerMessage(5, "getQuestCustomData - " + cm.getQuestCustomData(qid));
	// getQuestStatus 0：没开始 1：开始了 2：结束了
	cm.playerMessage(5, "getQuestStatus - " + cm.getQuestStatus(qid));
	cm.playerMessage(5, "getInfoQuest - " + cm.getInfoQuest(qid));
	cm.dispose();
}

function actionMob(mode, type, selection) {
	var emName = "副本_起源之塔";
	var em = cm.getEventManager(emName);
	var eim = em.getInstance(emName);
	var map = em.getMapFactoryMap(cm.getMapId());
	var mob = em.getMonster(9309200);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 10000);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(155, 155));
	cm.addPopupSay(2540000, 6000, "胆小的狮子从黑暗中现身了。请你去追踪逃跑的狮子！");
	em.setProperty("stage30", "fighting");
	cm.dispose();
}

function spawnMob(em, eim, map, level, mod, mobid, x, y) {
	var mob = em.getMonster(mobid);
	var newHP = mob.getMobMaxHp() * 100000 * mod;
	// 首先要注入涉及到HP的 OverrideStats 实例
	var modified = em.newMonsterStats();
	modified.setOHp(newHP);
	modified.setOMp(mob.getMobMaxMp() * 9000);
	mob.setOverrideStats(modified);
	// 然后就可以提取晋升的 ChangedStats 实例魔改了
	var oldStats = mob.getStats();
	var newStats = mob.getChangedStats();
	newStats.watk = Math.round(oldStats.getPhysicalAttack() * mod);
	newStats.matk = Math.round(oldStats.getMagicAttack() * mod);
	newStats.acc = Math.round(oldStats.getAcc() * mod);
	newStats.eva = Math.round(oldStats.getEva() * mod);
	newStats.PDRate = Math.min(oldStats.isBoss() ? 30 : 20, Math.round(oldStats.getPDRate() * mod));
	newStats.MDRate = Math.min(oldStats.isBoss() ? 30 : 20, Math.round(oldStats.getMDRate() * mod));
	newStats.pushed = Math.round(oldStats.getPushed() * level);
	newStats.speed = Math.round(oldStats.getSpeed() * level);
	newStats.level = level;
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(x, y));
}

function actionMapEffect(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	if (status < 0) {
		cm.dispose();
	} else if (status < end) {
		cm.getMap().getWeatherEffectNotice("getWeatherEffectNotice " + (start + status), start + status, 2000, 1);
		cm.askMenu("NEXT CODE : " + now);
	} else {
		cm.dispose();
	}
}

function start黑屏放动画(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 0, 2000, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	}
}

function isLeader(player) {
	return player.getParty().getLeader().getId() == player.getId();
}
