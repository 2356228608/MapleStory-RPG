/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var chat = ["#e#b终于完成了！真是的，光制作就花了一个多星期。真是迫不及待想试穿了。现在先放在画像后面，待会用上时好来拿。", "下课后去吃桑蘑吧？我知道一个没人知道的地方。", "看上去好像有男朋友了吧？其实没有。", "那些毕业生姐姐真漂亮啊。不过我比她们更漂亮，嘿嘿~", "隔壁班的帕伊尼好像以为我喜欢她。", "最近好像长胖了……我的翅膀都快承受不住了。"];
var randChat = 0;
// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
	if (!im.isQuestActive(32113)) {
		im.sendOkS("#b（上面写的都是一些闲聊的内容……没什么有价值的东西）");
		im.dispose();
		im.gainItem(im.getItemId(), -im.itemQuantity(im.getItemId()));
		return;
	}
	if (status == 0) {
		im.gainItem(im.getItemId(), -1);
		randChat = randomNum(0, chat.length - 1);
		im.sendNext(chat[randChat], 1500030);
	} else if (status == 1) {
		if (randChat == 0) {
			im.sendOkS("正在制作什么东西，而且就位于自画像的后面？这个应该能够成为线索。和#b魔法师库迪#k商议一下吧。");
			im.gainExp(4800);
			im.forceCompleteQuest(32113);
			im.dispose();
		} else {
			im.sendOkS("……总之，好像并不是十分有用的情报。看看别的纸条吧。");
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
