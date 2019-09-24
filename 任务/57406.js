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
		cm.onScriptMessage(3, 0, 0, 9131010, "#face0#将以前进行过的训练重来一次，感觉还真挺麻烦的吧。下一场训练可以提高练习强度了。", 257, 0, 37, 0, 1, 9130006); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 9130008, 0, 9131010, "#face0#虽然拖着沉重的身体训练已经让我变得疲惫不堪，但现在并没有时间去好好休息。好了，快点开始接下来的训练课程吧。", 0, 16, 37, 0, 1, 9130006); // [类型] 接受/拒绝
	} else if (status === i++) {
		cm.forceStartQuest(57406, "");
		cm.OnStartNavigation(807030100, 0, "", 0);
		cm.onScriptMessage(3, 0, 0, 9131010, "#face0#这次的训练应该会比上一次的更加艰难。", 256, 0, 37, 0, 1, 9130006); // [类型] 普通对话

	} else if (status === i++) {
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
		cm.forceCompleteQuest();
		cm.forceStartQuest(11620, "0");
		cm.updateInfoQuest(15710, "lasttime=19/09/19/14/39");
		qm.gainExp(1242);
		qm.dispose();
	}
}
