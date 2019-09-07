// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.sendOk("#b(设置了结界。这下村子应该安全了……)", 1033205);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.sendNext("……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！", 0);
	} else if (status === i++) {
		cm.sendNextPrev("哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 500 exp", 0);
	} else if (status === i++) {
		cm.sendNextSNoESC("啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("1. 黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("2. 醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("3. 虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！");
	} else if (status === i++) {
		cm.sendNextPrevSNoESC("……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？");
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.forceStartQuest(11620, "0");
		cm.updateInfoQuest(15710, "lasttime=19/09/04/16/15");
		cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
		cm.forceStartQuest(29952, "");
		cm.forceCompleteQuest(29952);
		cm.forceStartQuest(24041, "");
		qm.dispose();
	}
}
