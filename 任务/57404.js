/*
 * 阴阳师剧情 - 16
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：无法发挥的力量(57403)
 * 等级：12以上
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Illus("啊，阁下是……");
	} else if (status === i++) {
		cm.onScriptMessage(4, 9130008, 0, 9131010, "#face0#虽然说了要帮你的忙，但我能做的事情毕竟有限，只能用#b#m807000000##k少得有限的物资修建了一座临时练兵所。只要你肯用这些训练人偶从头开始锻炼，就一定能够回忆起该如何使用自己的力量。", 0, 16, 37, 0, 1, 9130006); // [类型] 接受/拒绝
	} else if (status === i++) {
		cm.forceStartQuest(57404, "");
		cm.OnStartNavigation(807030000, 0, "", 0);
		cm.onScriptMessage(3, 0, 0, 9131010, "#face0#首先，请你前往#b#m807030000##k，去捕捉10只#r#o9421508##k回来吧。", 256, 0, 37, 0, 1, 9130006); // [类型] 普通对话
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 9131010, "#face0#感觉如何呢？", 256, 0, 37, 0, 1, 9130006); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(57404);
		cm.forceStartQuest(11620, "0");
		cm.updateInfoQuest(15710, "lasttime=19/09/19/14/39");
		qm.gainExp(1242);
		qm.dispose();
	}
}
