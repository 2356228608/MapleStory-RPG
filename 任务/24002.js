/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020110)
 */
var status = -1;

function start(mode, type, selection) {
	status++;

	if (mode != 1) {
		if (type == 1 && mode == 0) {
			status -= 2;
		} else {
			qm.sendNext("嗯？什么？害怕 阴险的狐狸 ？没想到我弟弟这么胆小。");
			qm.dispose();
			return;
		}
	}
	if (status == 0) {
		qm.sendNext("也许这是我们的幸运。因为黑魔法师的诅咒，我们能暂时从变得荒凉的冒险岛世界脱离出来。我们回来的时候，这片土地会变成什么样子呢……");
	} else if (status == 1) {
		qm.sendNext("双弩精灵，我要先睡觉了，希望能迎来一个更美好的世界……");
	} else if (status == 2) {
		qm.forceStartQuest();
		//qm.forceCompleteQuest();
		qm.sendNext("希望，你做个……做个好梦。");
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	if (mode != 1) {
		if (type == 1 && mode == 0) {
			status -= 2;
		} else {
			qm.dispose();
			return;
		}
	}
	if (status == 0) {
		cm.sendNext("也许这是我们的幸运。因为黑魔法师的诅咒，我们能暂时从变得荒凉的冒险岛世界脱离出来。我们回来的时候，这片土地会变成什么样子呢……", 1033202);
	} else if (status ==1) {
		cm.askYesNo("双弩精灵，我要先睡觉了，希望能迎来一个更美好的世界……", 1033202);
	} else if (status ==2) {
		cm.forceStartQuest(24002, "");
		cm.forceCompleteQuest(24002);
		cm.sendOk("希望，你做个……做个好梦。", 1033202);
		//cm.forceStartQuest(24005, "");
		qm.dispose();
	}
}
