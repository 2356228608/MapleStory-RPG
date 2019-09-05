/*
 * 起源之塔
 * by Jessefjxm
 */
var mapIds = new Array();
var mapHall = 992000000;
// 目前故障的楼层
var badMaps = [2, 4, 6, 16, 19, 21, 29, 37, 38, 42, 43, 46];
// 不重载
var skipResetMaps = [1];
// 24F BGM
var BGM = [["阿里安特", "Bgm14/Ariant"], ["明珠港", "Bgm02/AboveTheTreetops"], ["射手村", "Bgm00/FloralLife"], ["勇士部落", "Bgm00/Nightmare"], ["废弃都市", "Bgm01/BadGuys"], ["魔法密林", "Bgm02/WhenTheMorningComes"], ["林中之城", "Bgm00/SleepyWood"], ["埃欧雷", "Bgm25/WindAndFlower"], ["天空之城", "Bgm04/Shinin'Harbor"], ["冰封雪域", "Bgm03/SnowyVillage"], ["水下世界", "Bgm11/Aquarium"], ["玩具城", "Bgm06/FantasticThinking"], ["神木村", "Bgm13/Leafre"], ["圣地", "Bgm18/QueensGarden"], ["埃德尔斯坦", "Bgm22/EdelsteinCity"], ["玛加提亚", "Bgm12/Dispute"], ["武陵", "Bgm15/MureungHill"], ["里恩", "Bgm19/RienVillage"], ["尖耳狐狸村", "Bgm36/foxvillage"], ["万神殿", "Bgm27/Pantheon"], ["童话村", "Bgm11/DownTown"]];
// 27F 怪物
var mobs27F = [2600106, 9800145];
var mobsName27F = ["沙漠蛇先生", "壁虎"];
// 37F 怪物
var mobs37F = [9309016, 9309017, 9309018, 9309019];
var mobsName37F = ["丁满", "秃鹫先生", "沙漠土拨鼠", "沙漠毒蝎"];
// 42F 怪物
var mobs37F = [9309023, 9309024, 9309025, 9309026];
var mobsName37F = ["橡木甲虫", "金属甲虫", "哈维", "血腥哈维"];

function init() {
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	// 暂时很多地图有问题
	for (var i = 1; i <= 50; i++) {
		if (badMaps.indexOf(i) < 0) {
			mapIds.push(992000000 + i * 1000);
			if (i == 14) {
				mapIds.push(992000000 + i * 1000 + 1);
				mapIds.push(992000000 + i * 1000 + 2);
			}
		}
	}
}

function setup(eim, leaderid) {
	em.setProperty("state", 1);
	em.setProperty("leader", "true");
	var eim = em.newInstance("Map_TowerOfOz");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		if (skipResetMaps.indexOf(i) < 0) // 加速载入，或者避免部分地图重载丢失
			map.resetFully();
		map.killAllMonsters(false);
	}
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	eim.startEventTimer(em.getProperty("time"));
}

function playerRevive(eim, player) {
	return false;
}

function changedMap(eim, player, mapid) {
	// em.broadcastServerMsg("[changedMap]");
	if (mapIds.indexOf(mapid) < 0) {
		on玩家退场(eim, player, false);
		return;
	}
	// 初始化变量
	var level = (mapid - mapHall) / 1000;
	em.setProperty("state", level);
	switch (level) {
	case 1:
		initProp("stage" + level + "_kill", 0);
		initProp("stage" + level + "_damage", 0.0);
		break;
	case 3:
		initProp("stage" + level + "_last_egg_count", 0);
		initProp("stage" + level + "_bet_egg_on_left", 0);
		initProp("stage" + level + "_bet_egg_on_right", 0);
		initProp("stage" + level + "_winner", 0);
		// 背景事件
		scheduleNew("stage" + level + "_CountItem", 3);
		scheduleNew("stage" + level + "_Fight", randomNum(1 * 60, 3 * 60));
		break;
	case 6:
		initProp("stage" + level + "_kill", 0);
		break;
	case 7:
		initProp("stage" + level + "_count", 0);
		break;
	case 8:
		initProp("stage" + level + "_kill", 0);
		break;
	case 9:
		initProp("stage" + level + "_level", 0);
		initProp("stage" + level + "_fail", 0);
		for (var i = 0; i < 8; i++) {
			initProp("stage" + level + "_puzzle_" + i, randomNum(0, 3));
		}
		break;
	case 11:
		initProp("stage" + level + "_kill", 0);
		break;
	case 13:
		initProp("stage" + level + "_kill", 0);
		break;
	case 14:
		initProp("stage" + level + "_kill", 0);
		break;
	case 18:
		initProp("stage" + level + "_count", 0);
		scheduleNew("stage" + level + "_CountItem", 3);
		break;
	case 23:
		initProp("stage" + level + "_stage", 0);
		initProp("stage" + level + "_fail", 0);
		initPropArray("stage" + level + "_help", 0, 0, 2);
		break;
	case 24:
		initPropArrayRandom("stage" + level + "_bgm", 0, BGM.length - 1, 1, 4);
		initPropArray("stage" + level + "_question", 0, 1, 4);
		break;
	case 26:
		initProp("stage" + level + "_kill", 0);
		break;
	case 28:
		initPropArray("stage" + level + "_kill", 0, 0, 1);
		break;
	case 31:
		initProp("stage" + level + "_kill", 0);
		scheduleNew("stage31_FairySpawn", 30);
		break;
	case 32:
		initProp("stage" + level + "_kill", 0);
		initProp("stage" + level + "_fairy_summon", 0); // 统计
		initProp("stage" + level + "_angry", 0);
		break;
	case 33:
		initProp("stage" + level + "_reset", 0); // 不超过4次
		initProp("stage" + level + "_teleport", 0); // 反作弊
		break
	case 34:
		initProp("stage" + level + "_count", 0);
		scheduleNew("stage" + level + "_CountItem", 3);
		break;
	case 36:
		initProp("stage" + level + "_stage", 0);
		initProp("stage" + level + "_curBit", 1);
		initPropArrayRandom("stage" + level + "_password", 1, 4, 1, 8);
		break;
	case 37:
		initPropArray("stage" + level + "_kill", 0, 0, 3);
		break;
	case 39:
		initProp("stage" + level + "_stage", 0);
		initProp("stage" + level + "_total", 0);
		initProp("stage" + level + "_wrong", 0);
		initPropArrayRandom("stage" + level + "_answer", 1, 4, 1, 10);
		break;
	case 42:
		initPropArray("stage" + level + "_kill", 0, 0, 3);
		break;
	case 46:
		initProp("stage" + level + "_kill", 0);
		break;
	case 47:
		initProp("stage" + level + "_trigger", randomNum(2, 8));
		break;
	case 49:
		initProp("stage" + level + "_stage", 0);
		initProp("stage" + level + "_correct", 0);
		initProp("stage" + level + "_reset", 1);
		initProp("stage" + level + "_curMob", 0);
		break;
	}
}

function playerDisconnected(eim, player) {
	// todo 干脆放弃？
	// em.broadcastServerMsg("[playerDisconnected]");
	on玩家退场(eim, player, false);
	return 0;
}

function scheduledTimeout(eim) {
	// em.broadcastServerMsg("[scheduledTimeout]");
	on玩家退场(eim, eim.getPlayers().get(0), true);
}

function playerExit(eim, player) {
	// em.broadcastServerMsg("[playerExit]");
	on玩家退场(eim, player, false);
}

function allMonstersDead(eim) {
	// em.broadcastServerMsg("[allMonstersDead]");
}

function monsterValue(eim, mobId) {
	// em.broadcastServerMsg("[monsterValue]=" + mobId);
	var state = parseInt(em.getProperty("state"));
	var curstage = em.getProperty("stage" + state);
	var mapid = state * 1000 + mapHall;
	switch (state) {
	case 1:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			var damage = parseFloat(em.getProperty("stage1_damage")) + player.getStat().getCurrentMaxBaseDamage() / 10000;
			em.setProperty("stage1_damage", damage);
			player.dropMessage(-1, "消灭古代绿水灵 " + (kill) + " / " + kilReq + "，累积冲击量 " + damage.toFixed(2) + "万 / 5000万");
		});
		if (kill >= kilReq || parseFloat(em.getProperty("stage1_damage")) > 5000) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 6:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭绿水灵 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 8:
		var kilReq = 100;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭火山虫 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 10:
		if (mobId == 9309201) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(state, "起源之塔_BOSS结算");
			});
		}
		break;
	case 11:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭石头人 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 13:
		var kilReq = 20;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭怪物 " + kill + " / " + kilReq * 4);
		});
		if (kill == kilReq * 4) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("咳……幸好全部消灭了。你做得不错。让我们通过右侧边缘的传送出口前往下一层吧。", 5120061);
		} else if (kill == kilReq * 3 || kill == kilReq * 2 || kill == kilReq * 1) {
			scheduleNew("stage13_Fight", 10);
		}
		break;
	case 14:
		var kilReq = 20;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭蘑菇蝙蝠 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.changeMap(mapid + 2, 0);
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid + 2).startMapEffect("做得很好！赶快从右侧的出口下去吧。", 5120061);
		}
		break;
	case 16:
		var kilReq = 200;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭怪物 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 20:
		if (mobId == 9309205) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(state, "起源之塔_BOSS结算");
			});
		}
		break;
	case 26:
		var kilReq = 300;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭古代橙水灵 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 28:
		var kilReq = 20;
		var index = mobs27F.indexOf(mobId);
		var kill = new Array();
		for (var i = 0; i < mobs27F.length; i++) {
			kill.push(parseInt(em.getProperty("stage" + state + "_kill_" + i)) + 1);
		}
		em.setProperty("stage" + state + "_kill_" + index, kill[index]);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭" + mobsName27F[index] + " " + (kill[index]) + " / " + kilReq);
		});
		if (kill[0] >= kilReq && kill[1] >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 30:
		if (mobId == 9309200) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(state, "起源之塔_BOSS结算");
			});
		}
		break;
	case 31:
		if (mobId == 5250006) {
			break;
		}
		var kilReq = 200;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭食虫水灵 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 32:
		var kilReq = 45;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 37:
		var kilReq = 100;
		var index = mobs37F.indexOf(mobId);
		var kill = new Array();
		for (var i = 0; i < mobs37F.length; i++) {
			kill.push(parseInt(em.getProperty("stage" + state + "_kill_" + i)) + 1);
		}
		em.setProperty("stage" + state + "_kill_" + index, kill[index]);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭" + mobsName37F[index] + " " + (kill[index]) + " / " + kilReq);
		});
		if (kill[0] >= kilReq && kill[1] >= kilReq && kill[2] >= kilReq && kill[3] >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你已经将所有的怪物各消灭了100个。让我们前往下一层吧。", 5120061);
		} else if (kill[index] >= kilReq) {
			eim.getPlayers().forEach(function (player) {
				player.dropMessage(5, "你消灭了100多个" + mobsName37F[index] + "。现在请消灭其他怪物。");
			});
		}
		break;
	case 40:
		if (mobId == 9309203) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(state, "起源之塔_BOSS结算");
			});
		}
		break;
	case 42:
		var kilReq = 30;
		var index = mobs42F.indexOf(mobId);
		var kill = new Array();
		for (var i = 0; i < mobs42F.length; i++) {
			kill.push(parseInt(em.getProperty("stage" + state + "_kill_" + i)) + 1);
		}
		em.setProperty("stage" + state + "_kill_" + index, kill[index]);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭" + mobsName42F[index] + " " + (kill[index]) + " / " + kilReq);
		});
		if (kill[0] >= kilReq && kill[1] >= kilReq && kill[2] >= kilReq && kill[3] >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你已经将所有的怪物各消灭了30个。请前往下一层。", 5120061);
		} else if (kill[index] >= kilReq) {
			eim.getPlayers().forEach(function (player) {
				player.dropMessage(5, "你消灭了30多个" + mobsName42F[index] + "。现在请消灭其他怪物。");
			});
		}
		break;
	case 46:
		var kilReq = 200;
		var kill = parseInt(em.getProperty("stage" + state + "_kill")) + 1;
		em.setProperty("stage" + state + "_kill", kill);
		eim.getPlayers().forEach(function (player) {
			player.dropMessage(-1, "消灭飞龙 " + (kill) + " / " + kilReq);
		});
		if (kill >= kilReq) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("你现在可以前往下一层了。", 5120061);
		}
		break;
	case 47:
		if (mobId == 9309128) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(2540005, "特效_完成");
			});
			em.getMapFactoryMap(mapid).startMapEffect("咳。现在我的声音才能传到你那儿。我已经把门打开了，请前往下一层吧。", 5120061);
		}
		break;
	case 50:
		if (mobId == 9309207) {
			em.setProperty("stage" + state, "clear");
			eim.getPlayers().forEach(function (player) {
				player.openNpc(state, "起源之塔_BOSS结算");
			});
		}
		break;
	}
	return 1;
}

function monsterDrop(eim, player, mob) {
	// em.broadcastServerMsg("[monsterDrop] " + mob);
	var state = parseInt(em.getProperty("state"));
	var mapid = state * 1000 + mapHall;
	var map = em.getMapFactoryMap(mapid);
	switch (state) {
	case 31: // 确保是玩家杀的？
		var mobId = 5250006;
		if (mobId == mob.getId()) {
			var summon = randomNum(2, 3);
			var fairySummon = parseInt(em.getProperty("stage" + state + "_fairy_summon")) + summon;
			em.setProperty("stage" + state + "_fairy_summon", fairySummon);
			em.setProperty("stage31_angry", 1);
			player.openNpc(2540000, "起源之塔_31F_妖精被杀");
			for (var i = 0; i < summon; i++) {
				newmob = em.getMonster(mobId);
				var modified = em.newMonsterStats();
				modified.setOHp(3379200);
				newmob.setOverrideStats(modified);
				eim.registerMonster(newmob);
				map.spawnMonsterOnGroundBelow(newmob, mob.getPosition());
			}
		}
		break;
	}
}

function allMonstersDead(eim) {
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function playerRevive(eim, player) {
	return false;
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {
	// em.broadcastServerMsg("[playerDead]");
	var state = parseInt(em.getProperty("state"));
	var curstage = em.getProperty("stage" + state);
	var mapid = state * 1000 + mapHall;
	switch (state) {
	case 50: // 1142684	起源之塔最初挑战者
		eim.getPlayers().forEach(function (player) {
			if (!player.haveItem(1142684, 1)) {
				player.dropMessage(5, "在被桃乐丝击败时，背包里似乎多了什么。");
				player.gainItem(1142684, 1);
			}
		});
		break;
	}
}
function cancelSchedule() {}

var setupTask;

// 3F 收集龙蛋
function stage3_CountItem() {
	var itemid = [4009237, 4009238];
	var reqNum = 1000;
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 3 * 1000 + mapHall)
		return;

	em.getPlayersInMap(mapid).forEach(function (player) {
		var owns = player.getItemAmount(itemid[0]) + player.getItemAmount(itemid[1]);
		if (parseInt(em.getProperty("stage3_last_egg_count")) == owns) {
			scheduleNew("stage3_CountItem", 3);
			return;
		}
		em.setProperty("stage3_last_egg_count", owns);
		player.dropMessage(-1, "古代乌龟蛋 " + owns + " / " + reqNum);
		if (owns < reqNum) {
			scheduleNew("stage3_CountItem", 3);
			return;
		} else {
			em.getMapFactoryMap(mapid).startMapEffect("哇！你真的收集到1000个啦？现在我们可以前往下一层了。", 5120061);
			em.setProperty("stage3", "clear");
			player.openNpc(2540005, "特效_完成");
		}
	});
}

// 3F 世纪对决
function stage3_Fight() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 3 * 1000 + mapHall) {
		return;
	}
	var winner = randomNum(1, 2) == 1 ? 2540012 : 2540014;
	em.setProperty("stage3_winner", winner);
	em.getPlayersInMap(mapid).forEach(function (player) {
		player.openNpc(winner, "起源之塔_3F_对决胜利");
	});

	scheduleNew("stage3_Fight", randomNum(1 * 60, 3 * 60));
}

// 7F 赶猴子
function stage7_Fight() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 7 * 1000 + mapHall) {
		return;
	}
	var map = em.getMapFactoryMap(mapid);
	var mob;
	var count = parseInt(em.getProperty("stage7_count")) + 1;
	em.setProperty("stage7_count", count);
	if (count < 7) {
		var incoming = 2540000 + randomNum(1, 2);
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(incoming, "起源之塔_7F_赶猴子");
		});
		scheduleNew("stage7_Fight", randomNum(10, 20));
		for (var i = 0; i < count * 4 + 10; i++) {
			mob = em.getMonster(count % 2 == 0 ? 9309002 : 9309125);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(count % 2 == 0 ? (-1500 + i * 30) : (-200 - i * 30), 2300));
		}
	} else if (count == 7) { // 最后一轮
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(2540003, "起源之塔_7F_赶猴子");
		});
		scheduleNew("stage7_Fight", randomNum(10, 20));
		for (var i = 0; i < count * 2 + 10; i++) {
			mob = em.getMonster(i % 2 == 0 ? 9309002 : 9309125);
			map.spawnMonsterOnGroundBelow(mob, -1500 + i * 30, 2300);
			map.spawnMonsterOnGroundBelow(mob, -200 - i * 30, 2300);
		}
	} else { // 结束
		em.getPlayersInMap(mapid).forEach(function (player) {
			player.openNpc(2540004, "起源之塔_7F_赶猴子");
		});
	}
}

// 13F 防御战
function stage13_Fight() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 13 * 1000 + mapHall) {
		return;
	}
	var mobId = [9309099, 9309104, 9309105, 9309098];
	var kilReq = 20;
	var kill = parseInt(em.getProperty("stage13_kill"));
	var index = Math.floor(kill / kilReq);
	var map = em.getMapFactoryMap(mapid);
	var mob;
	if (index < 3) {
		for (var i = 0; i < kilReq; i++) {
			mob = em.getMonster(mobId[index]);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-750 + i * 50, 0));
		}
	} else { // 大杂烩
		for (var k = 0; k < mobId.length; k++) {
			for (var i = 0; i < kilReq / mobId.length; i++) {
				mob = em.getMonster(mobId[k]);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1000 + (k * mobId.length + i) * 50, 0));
			}
		}
	}
	em.getPlayersInMap(mapid).forEach(function (player) {
		player.openNpc(index, "起源之塔_13F_防御战");
	});
}

// 18F 收集龙蛋
function stage18_CountItem() {
	var itemid = [4000136];
	var reqNum = 10;
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 18 * 1000 + mapHall)
		return;

	em.getPlayersInMap(mapid).forEach(function (player) {
		var owns = player.getItemAmount(itemid[0]);
		if (parseInt(em.getProperty("stage18_count")) == owns) {
			scheduleNew("stage18_CountItem", 3);
			return;
		}
		em.setProperty("stage18_count", owns);
		player.dropMessage(-1, "采集了 " + owns + " 个椰子果。");
		if (owns < reqNum) {
			scheduleNew("stage18_CountItem", 3);
			return;
		} else {
			em.getMapFactoryMap(mapid).startMapEffect("终于收集够椰子果了。现在我们可以前往下一层了。", 5120061);
			em.setProperty("stage18", "clear");
			player.openNpc(2540005, "特效_完成");
		}
	});
}

// 31F 妖精出没
function stage31_FairySpawn() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 31 * 1000 + mapHall)
		return;

	var eim = em.getInstance("Map_TowerOfOz");
	var mobId = 5250006;
	var map = em.getMapFactoryMap(mapid);
	var mob = em.getMonster(mobId);
	var modified = em.newMonsterStats();
	modified.setOHp(3379200);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randomNum(-1500, -500), randomNum(-1500, -500)));
	scheduleNew("stage31_FairyLeave", 30);
}

// 31F 妖精隐退
function stage31_FairyLeave() {
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	var isAngry = parseInt(em.getProperty("stage31_angry"));
	if (isAngry || (mapid != 31 * 1000 + mapHall))
		return;

	var mobId = 5250006;
	var eim = em.getInstance("Map_TowerOfOz");
	eim.getMobs().forEach(function (element) {
		if (element.getMap().getId() == mapid && element.getId() == mobId)
			element.killed();
	});
	scheduleNew("stage31_FairySpawn", 60);
}

// 34F 收集紫皮
function stage34_CountItem() {
	var itemid = [4009235];
	var reqNum = 10;
	var mapid = parseInt(em.getProperty("state")) * 1000 + mapHall;
	if (mapid != 34 * 1000 + mapHall)
		return;

	em.getPlayersInMap(mapid).forEach(function (player) {
		var owns = player.getItemAmount(itemid[0]);
		if (parseInt(em.getProperty("stage34_count")) == owns) {
			scheduleNew("stage34_CountItem", 3);
			return;
		}
		em.setProperty("stage34_count", owns);
		player.dropMessage(-1, "紫色皮革 " + owns + " / " + reqNum);
		if (owns < reqNum) {
			scheduleNew("stage34_CountItem", 3);
			return;
		} else {
			em.getMapFactoryMap(mapid).startMapEffect("你已经将10个紫色皮革全部搜集到了！让我们前往下一层吧！", 5120061);
			em.setProperty("stage34", "clear");
			player.openNpc(2540005, "特效_完成");
		}
	});
}

// ===================== 功能类方法 ======================

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

// 初始化参数
function initProp(name, val) {
	if (em.getProperty(name) == null)
		em.setProperty(name, val);
}
function initPropArray(name, val, startI, endI) {
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, val);
	}
}
// 随机数序列
function initPropArrayRandom(name, min, max, startI, endI) {
	var arr = new Array();
	var maxTimes = endI - startI + 1;
	var canRepeat = (max - min) < (endI - startI) ? true : false;
	do {
		var num = randomNum(min, max);
		if (canRepeat || arr.indexOf(num) < 0) { //数组中不存在
			arr.push(num);
			maxTimes--;
		}
	} while (maxTimes);
	for (var i = startI; i <= endI; i++) {
		if (em.getProperty(name + "_" + i) == null)
			em.setProperty(name + "_" + i, arr[i - 1]);
	}
}
// 循环调动事件
function scheduleNew(funcName, seconds) {
	var setupTask = em.schedule(funcName, seconds * 1000);
	return setupTask;
}
// 处理玩家退场
function on玩家退场(eim, player, isTimeout) {
	// 保存一部分数据，方便之后领取奖励
	var time = eim.getTimeLeft();
	var level = em.getProperty("state");
	// ????
	if (isTimeout) {
		eim.disposeIfPlayerBelow(100, mapHall);
	} else {
		eim.disposeIfPlayerBelow(0, 0);
	}
	// 清空配置文件
	em.getProperties().clear();
	em.setProperty("state", 0);
	em.setProperty("leader", "true");
	eim.unregisterPlayer(player);
	// 清空玩家道具
	var itemid = [4009237, 4009238];
	player.removeItem(itemid[0], player.getItemAmount(itemid[0]));
	player.removeItem(itemid[1], player.getItemAmount(itemid[1]));
	// 记录本次通关数据
	if (level > 1) {
		em.setProperty("time" + player.getId(), time);
		em.setProperty("level" + player.getId(), level);
	}
}
