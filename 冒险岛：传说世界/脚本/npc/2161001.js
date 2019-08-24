var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
		}
		status--;
	}
	if (cm.isQuestActive(3173) || cm.isQuestActive(3175)) {
		if (status == 0) {
			cm.askYesNo("啊，不小心迷路了是吗？我会把你重新送到接见室的。");
		} else if (status == 1) {
			cm.warp(211070200, 1);
			cm.dispose();
		}
	} else if (cm.isQuestActive(3178)) {
		if (status == 0) {
			cm.askYesNo("啊，不小心迷路了是吗？我会把你重新送到专用走廊的。");
		} else if (status == 1) {
			actionFB();
			//cm.warp(921140000, 0);
			cm.dispose();
		}
	} else {
		cm.sendOk("你是来挑战狮子王的勇士吗？请小心……");
		cm.dispose();
	}
}

//配置文件名称
var PQname = ["副本_狮子王城_秘密走廊"];
//记录次数名称
var PQLog = ["副本_狮子王城_秘密走廊"];
//开始的地图
var startmap = 211061001;
//等级限制
var minLevel = [120];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
/*var questID = 31732;*/
var chs = 0;

function actionFB() {
	var em = cm.getEventManager(PQname[0]);
	if (em == null) {
		cm.sendOk("配置文件不存在,请联系管理员。");
	} else if (cm.getParty() == null) { //判断组队
		cm.sendOk("你需要创建一个队伍才能进入。");
	} else if (!cm.isLeader()) { // 判断组队队长
		cm.sendOk("需要让你们的组队长来才能决定是否进入。");
	} else if (!cm.allMembersHere()) {
		cm.sendOk("部分组队成员不在当前地图，你需要召集他们过来。"); //判断组队成员是否在一张地图..
	} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
		cm.sendOk("组队成员要在等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
	} else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
		cm.sendOk("队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
	} else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
			em.startInstance(cm.getParty(), cm.getMap(), 255);
			em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
		} else {
			cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。");
		}
	}
	cm.dispose();
}
