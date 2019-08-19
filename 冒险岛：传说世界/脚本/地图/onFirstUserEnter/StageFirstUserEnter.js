function action(mode, type, selection) {
	ms.fieldEffect_PlayBGM("BgmTW/MapleHighSchool");
	var em = ms.getEventManager("副本_枫之高校");
	var eim = em.getInstance("副本_枫之高校");
	var mapId = ms.getMapId() - 744000000;
	var map = eim.setInstanceMap(ms.getMapId());
	var level = getPartyMaxLevel();

	switch (mapId) {
	case 1:
		// 让我看看你从和朋友的对决那里学到了什么吧。
		// 酷咪 嘿~不要再打了~回到教室吧！提高朋友的友好度吧。
		var rand = randomNum(1, 2);
		if (rand == 1) {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120063);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410165, 50, 240);
		} else if (rand == 2) {
			ms.getMap().startMapEffect("真是……不懂得放弃的人啊，告诉你吧。", 5120064);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410166, 50, 240);
		} else if (rand == 3) {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120065);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410167, 50, 240);
		} else {
			ms.getMap().startMapEffect("终于，来到这里……面对真正的对决！来吧！", 5120066);
			spawnMob(em, eim, map, level, Math.pow(level, 2.5), 9410168, 50, 240);
		}
		break;
	case 2:
		// 让我看看你从和朋友的对决那里学到了什么吧。
		// 酷咪 唔？到刚才为止还听见谁在打架的声音？
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
		// 让我看看你从候补校长那里学到了什么吧。
		// 酷咪 喔？你在校长室做什么？现在！出去！
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
		var rand = randomNum(1, 2);
		if (rand == 1) {
			ms.spawnNpc(9330176, 47, -36);
		} else {
			ms.spawnNpc(9330168, 47, -36);
		}
		ms.getMap().startMapEffect("刚刚那个像是一直在等谁的小孩就是你吗？", 5120120);
		break;
	case 5:
		// 算你好运。居然躲掉接种预防针？下次不会放过你。
		ms.getMap().startMapEffect("讨厌打针的话，就得避开保健室老师顶住1分钟。", 5120120);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410186, 50, 240);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410170, 50, 240);
		spawnMob(em, eim, map, level, Math.pow(level, 4), 9410169, 50, 240);
		break;
	case 6:
		// ……………………
		ms.getMap().startMapEffect("请帮帮我~僵尸竟然这么多……", 5120076);
		for (var i = 9410147; i <= 9410151; i++) {
			for (var j = 0; j < 5; j++) {
				spawnMob(em, eim, map, level, Math.pow(level, 1.5), i, 50, 240);
			}
		}
		break;
	case 7:
		var rand = randomNum(1, 2);
		if (rand == 1) {
			// 让我看看你从库梅老师那里学到了什么吧
			ms.getMap().startMapEffect("我会比之前的班主任库梅老师教得更好。", 5120120);
		} else {
			// 酷咪 很有实力呢？什么~虽然我有手下留情……
			ms.getMap().startMapEffect("身为导师绝不原谅打架这件事！只能用力量来阻止你！", 5120067);
		}
		spawnMob(em, eim, map, level, level * level, 9410171, 70, 240);
		break;
	case 8:
		ms.getMap().startMapEffect("不通过考试的话，谁都不能出去。", 5120120);
		break;
	case 9:
		ms.getMap().startMapEffect("那些家伙把人参带走了。赶快帮一下忙！", 5120020);
		for (var i = 9410187; i <= 9410189; i++) {
			for (var j = 0; j < 5; j++) {
				spawnMob(em, eim, map, level, Math.pow(level, 1.5), i, 50, 240);
			}
		}
		break;
	case 10:
		// 李卡思 全……全部力量结合起来。总……总有一天会成为朋友……
		ms.getMap().startMapEffect("这次大家要一起合作。四大天王中任一位被击倒的话，就算失败啰！", 5120064);
		spawnMob(em, eim, map, level, level * level, 9410173, 80, 240);
		spawnMob(em, eim, map, level, level * level, 9410174, 150, 240);
		spawnMob(em, eim, map, level, level * level, 9410175, 220, 240);
		spawnMob(em, eim, map, level, level * level, 9410176, 290, 240);
		for (var i = 0; i < 10; i++) {
			spawnMob(em, eim, map, level, Math.pow(level, 1.5), 9410190, 50, 240);
		}
		break;
	case 11:
		// 授课已经结束了。接受物理老师的考核吧
		ms.getMap().startMapEffect("开始上物理课。如果打的力太大会更痛，打的力太小则只会造成小伤害。", 5120071);
		spawnMob(em, eim, map, level, level * level, 9410180, 50, 240);
		break;
	case 12:
		// 授课已经结束了。接受历史老师的考核吧
		ms.getMap().startMapEffect("开始上历史课，以前的英雄们是这样攻击黑魔法师……", 5120070);
		spawnMob(em, eim, map, level, level * level, 9410181, 50, 240);
		break;
	case 13:
		// 呼~太手下留情了，下次一定要把你带走
		ms.getMap().startMapEffect("我是来招募新生的……今天要来把你抓走！呼呼呼~", 5120072);
		spawnMob(em, eim, map, level, level * level, 9410182, 50, 240);
		break;
	case 14:
		// 真是的……不允许有社员比社长还强。不准入社！
		ms.getMap().startMapEffect("进到柔道部……一点都不用害怕。就是入社测试！！", 5120075);
		spawnMob(em, eim, map, level, level * level, 9410183, 50, 240);
		break;
	case 15:
		// 不懂艺术……音乐部不需要你……
		ms.getMap().startMapEffect("我想到了不得了的乐曲……我再弹给你听~呵呵呵", 5120074);
		spawnMob(em, eim, map, level, level * level, 9410184, 50, 240);
		break;
	case 16:
		// 酷咪 嘿~不要再打了~回到教室吧！提高朋友的友好度吧。
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
