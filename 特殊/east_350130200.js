// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var Message = "Message";

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (cm.getInfoQuest(33990) == "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check=1") {
		cm.warp(350130300);
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face13#幻影，情报已经收集得够多了吗？", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "好吧，我所听到的单词之中最让我感兴趣的是……\r\n#b#L0#博物馆#l\r\n#L1#派对#l\r\n#L2#陷坑#l\r\n#L3#林博士#l\r\n#L4#神秘事件#l\r\n#L5#超能力者#l", 0, 6, 37, 0, 1, 1540879); // [类型] 选择菜单
	} else if (status > 0) {
		switch (selectionLog[2]) {
		case 0:
			博物馆(mode, type, selection, i);
			break;
		case 1:
			派对(mode, type, selection, i);
			break;
		case 2:
			陷坑(mode, type, selection, i);
			break;
		case 3:
			林博士(mode, type, selection, i);
			break;
		default:
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}

function 博物馆(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face11#博物馆吗？博物馆怎么了……", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
		cm.dispose();
	}
}

function 派对(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face11#派对吗？真的？派对……派对……", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
		cm.dispose();
	}
}
function 陷坑(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face11#陷坑吗？恩……陷坑离那里有点远啊。", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
		cm.dispose();
	}
}
function 林博士(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "有个叫#b林博士#k的人，\r\n那个人似乎知道有关这里所有神秘物质的情报。", 256, 0, 37, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face13#那从现在开始，我们只要找到这个人就可以了。", 257, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check=1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_KinesisEXP(6722125);
		cm.gainExp(6722125); //得到奖励经验
		cm.forceCompleteQuest(34001);
		cm.updateInfoQuest(33963, "34001=1");
		cm.inGameDirectionEvent_AskAnswerTime(3000);
		cm.npc_ChangeController(1540795, "oid=58726", -180, 60, 1);
		cm.npc_ChangeController(1540884, "oid=58727", 547, 60, 1);
		cm.setInGameDirectionMode(false, false, false);
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130300;act4=350160000");
		cm.Hidden_background("HofM_Case", 0);
		cm.forceStartQuest(33900, "9");
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
		// [2019/9/6 14:49:52] 当前所在地图: cm.warp(350130200) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350130300);
		cm.dispose();
	}
}
