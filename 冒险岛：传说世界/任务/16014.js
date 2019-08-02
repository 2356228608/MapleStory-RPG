/* 与降龙者会计小姐对话 真的只是聊天而已不是任务你想太多了
Made by Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		qm.dispose();
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
			查看我的冒险岛联盟信息();
			break;
		case 2:
			提高冒险岛联盟级别();
			break;
		case 3:
			听取关于冒险岛联盟的介绍();
			break;
		case 4:
			一周获得纪念币排名();
			break;
		default:
			qm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "今天真是个猎龙的好天气！\r\n关于#b冒险岛联盟#k业务有什么可以帮你？\r\n\r\n";
	text += "#L1##b<查看我的冒险岛联盟信息。>#l\r\n";
	text += "#L2##b<提高冒险岛联盟级别。>#l\r\n";
	text += "#L3##b<听取关于冒险岛联盟的介绍。>#l\r\n";
	text += "#L4##b<一周获得纪念币排名>#l\r\n";
	qm.askMenu(text);
}

function 查看我的冒险岛联盟信息() {
	// TODO 需要在接口层提供获取信息的方法
	// e.g.	qm.getCurrentUnionInfo(); qm.getNextUnionInfo();
	var curLevel = "新手联盟第5阶段";
	var currentTeamMember = 19,
	maxTeamMember = 19;
	var unionCharacters = 25;
	var currentLevel = 6666;
	if (status == 1) {
		text = "那我就来告诉勇士你#e冒险岛联盟#n信息吧？\r\n\r\n";
		text = "#e冒险岛联盟级别：#b<" + curLevel + ">#k\r\n";
		text = "#e联盟等级：#b<" + currentLevel + ">#k\r\n";
		text = "#e持有联盟角色：#b<" + unionCharacters + ">#k#n\r\n";
		text = "#e攻击队队员：#b<" + currentTeamMember + "/" + maxTeamMember + ">#k#n\r\n\r\n";
		qm.askMenu(text);
	} else {
		status = -1;
	}
}

function 提高冒险岛联盟级别() {
	// TODO 需要在接口层提供获取信息、发送升级请求的方法
	// e.g.	qm.getCurrentUnionInfo(); qm.getNextUnionInfo();
	var curLevel = "新手联盟第5阶段",
	curTeamMembers = 13;
	var nextLevel = "资深联盟第1阶段",
	nextTeamMembers = 18;
	var reqLevel = 3000,
	reqCoin = 170;
	var currentLevel = 6666,
	currentCoin = 999;
	if (status == 1) {
		text = "你要进行#e冒险岛联盟升级#n吗？\r\n\r\n";
		text = "#e当前级别：#b<" + curLevel + ">#k\r\n";
		text = "#e下一级别：#b<" + nextLevel + ">#k\r\n";
		text = "#e升级后可投入的攻击队队员增加：#b<" + curTeamMembers + "→" + nextTeamMembers + "名>#k#n\r\n\r\n";
		text = "要想升级必须满足以下条件。\r\n\r\n";
		text = "#e<联盟等级> #r" + reqLevel + "以上\r\n";
		text = "#e<支付币> #b联盟币" + reqCoin + "个#n\r\n\r\n";
		text = "要立即#e升级#n联盟吗？\r\n\r\n";
		qm.askYesNo(text);
	} else if (status == 2) {
		if (currentLevel >= reqLevel && currentCoin >= reqCoin) {
			// TODO 发送升级请求
			text = "你的#e冒险岛联盟#n升级成功了！\r\n\r\n";
			text = "#e当前级别：#b<" + nextLevel + ">#k\r\n";
			text = "#e可投入的攻击队队员：#b<" + nextTeamMembers + "名>#k#n\r\n\r\n";
		} else {
			text = "你还不满足#e联盟升级#n的条件啊。继续努力吧。\r\n\r\n";
		}
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 听取关于冒险岛联盟的介绍() {
	qm.openNpc(qm.getNpc(), "冒险岛联盟_帮助");
	qm.dispose();
}

function 一周获得纪念币排名() {
	if (status == 1) {
		text = "你想要查看#b每周获得联盟币排名#k吗？\r\n有什么可以帮你的吗？\r\n\r\n";
		text += "#L1##b查看当前排名#l\r\n";
		text += "#L2##b查看上周排名#l\r\n";
		text += "#L3##b领取上周排名奖励#l\r\n";
		qm.askMenu(text);
	} else if (status == 2) {
		switch (selectionLog[2]) {
		case 1:
			// TODO 依赖服务端接口
			break;
		case 2:
			// TODO 依赖服务端接口
			break;
		case 3:
			// TODO 依赖服务端接口
			break;
		default:
			qm.dispose(); // 结束
			break;
		}
	} else {
		status = -1;
	}
}

// 完结？不存在的
function end(mode, type, selection) {
	qm.dispose();
}
