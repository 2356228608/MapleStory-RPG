/*
 *  桃乐丝
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// 材料
var 通用强化材料 = 4001878;
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else {
		switch (selectionLog[1]) {
		case 1:
			扩展朦胧石栏位();
			break;
		case 2:
			灵魂连接器();
			break;
		case 3:
			查看排行榜();
			break;
		default:
			cm.askMenu("啊你说什么？没听清楚。");
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	var text = "有什么可以帮你的吗？\r\n\r\n";
	text += "#L1#我想扩展我的朦胧石栏位\r\n#l";
	text += "#L2#我弄丢了我的灵魂连接器\r\n#l";
	text += "#L3#我想查看起源之塔排行榜#l";
	cm.askMenu(text);
}

function 扩展朦胧石栏位() {
	var text = "这个能力我也还在研究，暂时帮不了你了……\r\n\r\n";
	cm.askMenu(text);
	cm.dispose(); // 结束
}

function 灵魂连接器() {
	if (cm.haveItem(2432461, 1)) {
		var text = "#b灵魂连接器#k不是在你的包里吗？";
	} else {
		var text = "#b灵魂连接器#k可是很重要的东西。没有它在塔内我就无法和你联络了。这回一定要保管好！";
	}
	cm.gainItem(2432461, 1);
	cm.askMenu(text);
	cm.dispose(); // 结束
}

function 查看排行榜() {
	var text = "这个能力我也还在研究，暂时帮不了你了……\r\n\r\n";
	cm.askMenu(text);
	cm.dispose(); // 结束
}
