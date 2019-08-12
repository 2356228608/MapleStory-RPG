/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var isBigFish;
var isEmpty;

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (im.getMapId() != 141060000) {
		im.sendOkS("#b（还是别在列娜海峡以外的地方使用比较好，免得弄坏了。）");
		im.dispose();
		return;
	}
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	if (!im.isQuestActive(32179)) {
		im.sendOkS("#b（这是别人的钓鱼工具，我还是不要乱用的好。）");
		im.dispose();
		return;
	}
	if (status == 0) {
		var pos = im.getPlayer().getPosition();
		var chance = (Math.abs(pos.getX() - 1230) < 150 && Math.abs(pos.getY() - 382) < 150) ? 80 : 20;
		isBigFish = randomNum(0, 100) < chance ? true : false;
		isEmpty = randomNum(0, 100) < 50 ? true : false;
		im.sendNext("……", 1510006);
	} else if (status == 1) {
		im.sendNext("………………（噗通噗通）", 1510007);
	} else if (status == 2) {
		im.sendNextS("………………嗯？有信号传来。");
	} else if (status == 3) {
		if (isBigFish) {
			im.sendNext("#b#i4030028##z4030028#\r\n\r\n航海士，是条大鱼！", 1510006);
			im.gainItem(4030028, 1);
		} else if (isEmpty) {
			im.sendNext("……好像是错误的信号。", 1510006);
		} else {
			im.sendNext("#b#i4030027##z4030027#\r\n\r\n航海士，这点鱼不够塞牙缝的。", 1510006);
		}
	} else if (status == 4) {
		if (isBigFish) {
			im.fieldEffect_ScreenMsg("Map/OnUserEff.img/aquarisTower/success");
			im.sendNext("太好了！有了这个，就不愁饿肚子啦。", 1510007);
		} else if (isEmpty) {
			im.sendNext("什么也没有嘛……", 1510007);
			im.playerMessage(5, "什么也没有钓到。");
		} else {
			im.sendNext("算了，我们把它放回去吧……看它也太小只了。", 1510007);
			im.playerMessage(5, "放生了列娜野生米诺鱼。");
		}
	} else {
		im.dispose();
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
