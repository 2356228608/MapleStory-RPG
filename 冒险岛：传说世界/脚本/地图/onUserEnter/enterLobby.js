/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	// 没有完成前置剧情
	if (ms.getServerGameMode() == 2 && !ms.isQuestActive(42009) && !ms.isQuestFinished(42009)) {
		ms.warp(130000000, 0);
		ms.addPopupSay(0, 2000, "怎么回事？被一股奇怪的力量送出来了！");
		ms.dispose();
		return;
	}
	ms.effect_Text("#fn微软雅黑##fs24#◆ 独立副本 ◆\r\n#fn黑体##fs40#起源之塔", 100, 2000, 4, 0, -150, 1, 4, 0, 0, 0);
	var em = ms.getEventManager("副本_起源之塔");
	var time = em == null ? null : em.getProperty("time" + ms.getPlayer().getId());
	var level = em == null ? null : em.getProperty("level" + ms.getPlayer().getId());
	// 不是完成副本后退出的
	if (level == null || time == null || status < 0) {
		ms.dispose();
		return;
	}
	// 超时退出
	if (time - 10 * 60 * 1000 < 4 * 60 * 1000) {
		if (status == 0) {
			ms.curNodeEventEnd(true);
			ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
			ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
			ms.sendNext("#h # ，塔的里面怎么样？", 2540000);
		} else if (status == 1) {
			ms.sendNext("看你在塔中努力的冒险，就给你一份小小的礼物吧。", 2540000);
		} else if (status == 2) {
			ms.sendOk("戒指箱，起源之塔荣誉勋章，经验值，起源点数全部都已经发放了，打开消耗栏确认一下吧。", 2540000);
		} else if (status == 3) {
			reward(em, time, level);
			ms.curNodeEventEnd(true);
			ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
			ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			ms.dispose();
		}
	} else { // 有剩余时间，主动退出
		if (status == 0) {
			ms.curNodeEventEnd(true);
			ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
			ms.sendNext("#h # ，塔的里面怎么样？", 2540000);
		} else if (status == 1) {
			ms.sendNext("#h # ，即便使用了朦胧石，依然在回来之前剩余了许多时间啊，虽然我没法将时间完全逆转，但是我可以尝试将剩余时间的一半重新做成石头。\r\n\r\n另外我能够重新研磨的最大时长是所使用的朦胧石时间的一半，如果增加了90分钟就是45分钟。", 2540000);
		} else if (status == 2) {
			ms.sendNext("我尝试将剩余时间重新研磨成了朦胧石，去看看背包吧。\r\n\r\n另外，作为你努力探索塔的奖赏，就给你一份小小的礼物吧。", 2540000);
		} else if (status == 3) {
			ms.sendOk("戒指箱，起源之塔荣誉勋章，经验值，起源点数全部都已经发放了，打开消耗栏确认一下吧。", 2540000);
		} else if (status == 4) {
			reward(em, time, level);
			ms.curNodeEventEnd(true);
			ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
			ms.dispose();
		}
	}
}
var stoneTime = [16, 13, 8, 5, 2];
function reward(em, time, level) {
	// 戒指箱
	ms.gainItem(2028272 - Math.floor((level - 1) / 5), 1);
	// 荣耀勋章
	ms.gainItem(2433840, Math.floor(level * level / 8));
	// 朦胧石
	time = Math.floor(time / 2 / 1000 / 60);
	for (var i = 0; i < stoneTime.length; i++) {
		while (time > stoneTime[i]) {
			ms.gainItem(2432442 - i, 1);
			time -= stoneTime[i];
		}
	}
	// 清理
	em.getProperties().remove("time" + ms.getPlayer().getId());
	em.getProperties().remove("level" + ms.getPlayer().getId());
	// 更新数据
	var myInfo = getMyInfo();
	if (myInfo == null || myInfo.length == 0) {
		updateMyInfo(level, time, -1);
	} else {
		var lastlevel = myInfo[0][0];
		var lasttime = myInfo[0][1];
		if (level > lastlevel || level == lastlevel && time > lasttime) {
			updateMyInfo(level, time, -1);
		}
	}
}

// 搜索自己
function getMyInfo() {
	var conn = ms.getConnection();
	var ps = conn.prepareStatement("SELECT `maxlevel`,`time`,`slots` FROM `oz_tower` WHERE `characterid`=" + ms.getPlayer().getId() + " ;");
	var resultSet = ps.executeQuery();
	var myInfo = new Array();
	if (resultSet.next()) {
		myInfo.push([resultSet.getInt(1), resultSet.getInt(2), resultSet.getInt(3)]);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return myInfo;
}

// 更新数据
function updateMyInfo(maxlevel, time, slots) {
	var sql = "INSERT INTO `oz_tower`(`characterid`,`charactername`";
	if (maxlevel > 0) {
		sql += ",`maxlevel`";
	}
	if (time > 0) {
		sql += ",`time`";
	}
	if (slots > 0) {
		sql += ",`slots`";
	}
	sql += ") VALUES(" + ms.getPlayer().getId() + ",'" + ms.getPlayer().getName() + "'";
	if (maxlevel > 0) {
		sql += "," + maxlevel;
	}
	if (time > 0) {
		sql += "," + time;
	}
	if (slots > 0) {
		sql += "," + slots;
	}
	sql += ") ON DUPLICATE KEY UPDATE `charactername`=VALUES(charactername) ";
	if (maxlevel > 0) {
		sql += ",`maxlevel`=VALUES(maxlevel)";
	}
	if (time > 0) {
		sql += ",`time`=VALUES(time)";
	}
	if (slots > 0) {
		sql += ",`slots`=VALUES(slots)";
	}
	sql += ";";
	var conn = ms.getConnection();
	var ps = conn.prepareStatement(sql);
	ps.executeUpdate();
	ps.close();
	conn.close();
}
