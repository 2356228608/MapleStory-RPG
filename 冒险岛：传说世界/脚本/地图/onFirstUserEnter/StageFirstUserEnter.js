function action(mode, type, selection) {
	ms.fieldEffect_PlayBGM("BgmTW/MapleHighSchool");
	var mapId = ms.getMapId() - 744000000;
	if (mapId == 0) {
		ms.dispose();
		return;
	}
	var em = ms.getEventManager("副本_枫之高校");
	var eim = em.getInstance("副本_枫之高校");
	var map = em.getMapFactoryMap(ms.getMapId());
	var level = getPartyMaxLevel();
	var state = parseInt(em.getProperty("state"));

	if (mapId == 16) {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/final");
	} else {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/stage");
		ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + state % 10);
		if (state > 10) {
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + state % 10);
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + Math.floor(state / 10));
		} else {
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + state % 10);
		}
	}

	switch (mapId) {
	case 1:
		// 744000001 - 枫之高校 - 屋顶
		// 让我看看你从和朋友的对决那里学到了什么吧。
		var rand = randomNum(1, 2);
		if (rand == 1) {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120063);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410191, 50, 240);
		} else if (rand == 2) {
			ms.getMap().startMapEffect("真是……不懂得放弃的人啊，告诉你吧。", 5120064);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410192, 50, 240);
		} else if (rand == 3) {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120065);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410193, 50, 240);
		} else {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120066);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410194, 50, 240);
		}
		break;
	case 2:
		// 744000002 - 枫之高校 - 仓库
		// 让我看看你从和朋友的对决那里学到了什么吧。
		var rand = randomNum(1, 2);
		if (rand == 1) {
			spawnMob(em, eim, map, level, Math.pow(level, 2), 9410165, 70, 240);
		} else if (rand == 2) {
			spawnMob(em, eim, map, level, Math.pow(level, 2), 9410166, 70, 240);
		} else if (rand == 3) {
			spawnMob(em, eim, map, level, Math.pow(level, 2), 9410167, 70, 240);
		} else {
			spawnMob(em, eim, map, level, Math.pow(level, 2), 9410168, 70, 240);
		}
		break;
	case 3:
		// 744000003 - 枫之高校 - 校长室
		// 让我看看你从候补校长那里学到了什么吧。
		var rand = randomNum(1, 3);
		if (rand == 1) {
			ms.getMap().startMapEffect("很感谢你的心意，但是可以训练多少……", 5120069);
			spawnMob(em, eim, map, level, level * level, 9410178, 50, 240);
		} else if (rand == 1) {
			ms.getMap().startMapEffect("竟敢说要教训我？那就来试试看！呵呵呵", 5120068);
			spawnMob(em, eim, map, level, level * level, 9410177, 50, 240);
		} else {
			ms.getMap().startMapEffect("嘿嘿~看你怎么训练我。", 5120073);
			spawnMob(em, eim, map, level, level * level, 9410179, 50, 240);
		}
		break;
	case 4:
		// 744000004 - 枫之高校 - 美术部
		// 表白
		ms.spawnNpc(9330181 + randomNum(0, 2), 47, -36);
		ms.getMap().startMapEffect("刚刚那个像是一直在等谁的小孩就是你吗？", 5120120);
		break;
	case 5:
		// 744000005 - 枫之高校 - 保健室
		// 算你好运。居然躲掉接种预防针？下次不会放过你。
		em.scheduleAtTimestamp("passRoom5", java.lang.System.currentTimeMillis() + 60 * 1000);
		ms.getMap().startMapEffect("讨厌打针的话，就得避开保健室老师顶住1分钟。", 5120120);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410186, randomNum(-400, 400), 240);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410170, randomNum(-400, 400), 240);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410169, randomNum(-400, 400), 240);
		break;
	case 6:
		// 744000006 - 枫之高校 - 废弃的教室
		ms.getMap().startMapEffect("请帮帮我~僵尸竟然这么多……", 5120076);
		for (var i = 9410147; i <= 9410151; i++) {
			for (var j = 0; j < 4; j++) {
				spawnMob(em, eim, map, level, Math.pow(level, 1.5), i, randomNum(-400, 400), 240);
			}
		}
		break;
	case 7:
		// 744000007 - 枫之高校 - 前途商谈室
		var rand = randomNum(1, 2);
		// 让我看看你从库梅老师那里学到了什么吧
		if (rand == 1) {
			ms.getMap().startMapEffect("我会比之前的班主任库梅老师教得更好。", 5120120);
		} else {
			ms.getMap().startMapEffect("身为导师绝不原谅打架这件事！只能用力量来阻止你！", 5120067);
		}
		spawnMob(em, eim, map, level, level * level, 9410171, 70, 240);
		break;
	case 8:
		// 744000008 - 枫之高校 - 小考考场
		ms.getMap().startMapEffect("不通过考试的话，谁都不能出去。", 5120120);
		break;
	case 9:
		// 744000009 - 枫之高校 - 家政教室
		ms.getMap().startMapEffect("那些家伙把人参带走了。赶快帮一下忙！", 5120020);
		for (var i = 9410187; i <= 9410189; i++) {
			for (var j = 0; j < 7; j++) {
				spawnMob(em, eim, map, level, Math.pow(level, 1.5), i, randomNum(-400, 400), 240);
			}
		}
		break;
	case 10:
		// 744000010 - 枫之高校 - 体育室
		// 李卡思 全……全部力量结合起来。总……总有一天会成为朋友……
		ms.getMap().startMapEffect("这次大家要一起合作。四大天王中任一位被击倒的话，就算失败啰！", 5120064);
		spawnMob(em, eim, map, level, level * level, 9410173, 80, 240);
		spawnMob(em, eim, map, level, level * level, 9410174, 150, 240);
		spawnMob(em, eim, map, level, level * level, 9410175, 220, 240);
		spawnMob(em, eim, map, level, level * level, 9410176, 290, 240);
		for (var i = 0; i < 20; i++) {
			spawnMob(em, eim, map, level, Math.pow(level, 1.5), 9410190, randomNum(-400, 400), 240);
		}
		break;
	case 11:
		// 744000011 - 枫之高校 - 科学实验室
		// 授课已经结束了。接受物理老师的考核吧
		ms.getMap().startMapEffect("开始上物理课。如果打的力太大会更痛，打的力太小则只会造成小伤害。", 5120071);
		spawnMob(em, eim, map, level, level * level, 9410180, 50, 240);
		break;
	case 12:
		// 744000012 - 枫之高校 - 图书室
		// 授课已经结束了。接受历史老师的考核吧
		ms.getMap().startMapEffect("开始上历史课，以前的英雄们是这样攻击黑魔法师……", 5120070);
		spawnMob(em, eim, map, level, level * level, 9410181, 50, 240);
		break;
	case 13:
		// 744000013 - 枫之高校 - 空教室
		// 呼~太手下留情了，下次一定要把你带走
		ms.getMap().startMapEffect("我是来招募新生的……今天要来把你抓走！呼呼呼~", 5120072);
		spawnMob(em, eim, map, level, level * level, 9410182, 50, 240);
		break;
	case 14:
		// 744000014 - 枫之高校 - 柔道部
		// 真是的……不允许有社员比社长还强。不准入社！
		ms.getMap().startMapEffect("进到柔道部……一点都不用害怕。就是入社测试！！", 5120075);
		spawnMob(em, eim, map, level, level * level, 9410183, 50, 240);
		break;
	case 15:
		// 744000015 - 枫之高校 - 乐队部
		// 不懂艺术……音乐部不需要你……
		ms.getMap().startMapEffect("我想到了不得了的乐曲……我再弹给你听~呵呵呵", 5120074);
		spawnMob(em, eim, map, level, level * level, 9410184, 50, 240);
		break;
	case 16:
		// 744000016 - 枫之高校 - 伊昆领域
		ms.getMap().startMapEffect("既然你已经赢了最厉害的问题学生，那就接受我的考核吧。", 5120120);
		spawnMob(em, eim, map, level, Math.pow(level, 3), 9410198, 50, 240);
		break;
	}
	ms.dispose();
}

function getPartyMaxLevel() {
	var max = 0;
	ms.getPlayer().getParty().getMembers().forEach(function (e) {
		max = Math.max(max, e.getLevel());
	});
	return max;
}

function spawnMob(em, eim, map, level, hpModifier, mobid, x, y) {
	var mob = em.getMonster(mobid);
	mob.changeLevel(level);
	var modified = em.newMonsterStats();
	modified.setOHp(mob.getMobMaxHp() * 100000 * hpModifier);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(x, y));
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
