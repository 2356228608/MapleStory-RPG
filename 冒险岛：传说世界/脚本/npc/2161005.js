var status = -1;
var text;
//限制等级
var minLevel = [120, 140, 160]; //最低等级
var maxLevel = [999,999,999]; //最高等级
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
//副本开关 开启、true 关闭、false
var open = true;
//组队log记录
var PQ = ["Boss_狮子王城_班雷昂_简单", "Boss_狮子王城_班雷昂_普通", "Boss_狮子王城_班雷昂_困难"];
//配置文件名称
var eventname = ["Boss_狮子王城_班雷昂_简单", "Boss_狮子王城_班雷昂_普通", "Boss_狮子王城_班雷昂_困难"];
//设置每日次数
var maxenter = [10, 10, 10];

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
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
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 211070000) { //传送
			cm.askMenu("#e<首领：班·雷昂>#n\r\n你现在确定放弃任务，从这里出去？\r\n#L1##b是的，现在就出去#l");
		} else {
			text = "#e<首领：班·雷昂>#n\r\n#k伟大的勇士，你准备好迎战堕落的狮子王了吗？\r\n\r\n";
			text += "#L1##b班·雷昂远征队申请入场#l\r\n";
			cm.askMenu(text);
		}
	} else if (status == 1) {
		if (cm.getPlayer().getMapId() != 211070000) { //传送
			cm.warp(211070000, 2);
			cm.dispose();
		} else {
			text = "#e<首领：班·雷昂>#n\r\n#k请选择想要的模式。\r\n\r\n";
			text += "#L1#简单模式（等级125级以上）#l\r\n\r\n已进行 " + cm.getPQLog(PQ[0]) + "#k#e/" + maxenter[0] + "#k#n 次\t" + getBusyState(1) + "\r\n";
			text += "#L2#普通模式（等级140级以上）#l\r\n\r\n已进行 " + cm.getPQLog(PQ[1]) + "#k#e/" + maxenter[1] + "#k#n 次\t" + getBusyState(2) + "\r\n";
			text += "#L3#困难模式（等级160级以上）#l\r\n\r\n已进行 " + cm.getPQLog(PQ[2]) + "#k#e/" + maxenter[2] + "#k#n 次\t" + getBusyState(3) + "\r\n";
			cm.askMenu(text);
		}
	} else if (status == 2) {
		check(selection);
	} else {
		cm.dispose();
	}
}

function getBusyState(index) {
	var em = cm.getEventManager(eventname[index - 1]);
	var prop = em.getProperty("state");
	return (prop == null || prop.equals("0")) ? "#r副本空闲#k" : "#b已经开启#k";
}

function check(index) {
	if (cm.getParty() == null) { //判断组队
		cm.sendOk("创建组队才能进入。");
	} else if (!cm.isLeader()) { // 判断组队队长
		cm.sendOk("请你们团队的队长和我对话。");
	} else if (cm.getPQLog(PQ[index - 1]) >= maxenter[index - 1]) {
		cm.sendOk("你今天挑战次数已经用完了,请明天在来吧!");
	} else if (!cm.allMembersHere()) {
		cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
	} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[index - 1], maxLevel[index - 1])) {
		cm.sendOkS("组队成员要在等级 " + minLevel[index - 1] + " 以上 " + maxLevel[index - 1] + " 以下才可以入场。");
	} else if (!cm.isAllPartyMembersAllowedPQ(PQ[index - 1], maxenter[index - 1])) {
		cm.sendOkS("队员#r#e \"" + cm.getNotAllowedPQMemberName(PQ[index - 1], maxenter[index - 1]) + "\" #k#n次数已经达到上限了。");
	} else {
		var em = cm.getEventManager(eventname[index - 1]);
		if (em == null || open == false) {
			cm.askMenu("配置文件不存在,请联系管理员。");
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				cm.setPQLog(PQ[index - 1]);
				em.startInstance(cm.getParty(), cm.getMap(), moblevel);
			} else {
				cm.askMenu("已经有队伍在进行了，请换其他频道尝试。");
			}
		}
	}
	cm.dispose();
}
