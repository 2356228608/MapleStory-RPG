/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var area = [["冰川观测总部", 141000000, 1], ["第1观测站", 141010000, 0], ["第2观测站", 141020000, 0], ["第3观测站", 141030000, 0], ["魔女芭芭拉的家", 141040000, 0], ["冰川破坏者的巢穴", 141050000, 0]];
var leave = ["好的，那我这就停船。停船后，我想喝碗热汤！", "我要停船了。你要离开的话，随时再来找我，航海士。", "好的，航海士。我就让你瞧瞧我高超的停靠技术！","哈哈哈，我会随时做好起航准备的，航海士！"];
var questReq = [32162, 32166, 32172, 32181, 32176, 32186];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var id = cm.getNpc() - 1;
	cm.playerMessage(5, "id = " + id);
	if (id < 0 || id >= area.length) {
		cm.dispose();
		return;
	}
	if (!cm.isQuestFinished(questReq[id])) {
		cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.askYesNo("航海士，你要停靠在#b" + area[id][0] + "吗？", 1510006);
	} else if (status == 1) {
		cm.sendNext(leave[randomNum(0, leave.length - 1)], 1510006);
	} else if (status == 2) {
		cm.dispelBuff(80001346);
		cm.warp(area[id][1], area[id][2]);
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
