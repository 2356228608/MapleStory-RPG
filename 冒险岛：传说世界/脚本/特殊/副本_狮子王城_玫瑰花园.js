/*
Made by jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["副本_狮子王城_玫瑰花园"];
//记录次数名称
var PQLog = ["副本_狮子王城_玫瑰花园"];
//开始的地图
var startmap = 211080000;
//等级限制
var minLevel = [110];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
/*var questID = 31732;*/
var chs = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	mode == 1 ? status++ : status--;
	if (cm.getMapId() == startmap) {
		var em = cm.getEventManager(PQname[selection]);
		if (em == null || open == false) {
			cm.sendOkS("配置文件不存在,请联系管理员。");
		} else if (cm.getParty() == null) { //判断组队
			cm.sendOkS("这里不太安全，我最好创建一个队伍再进入。");
		} else if (!cm.isLeader()) { // 判断组队队长
			cm.sendOkS("需要让我们的组队长来才能决定是否进入。");
		} else if (!cm.allMembersHere()) {
			cm.sendOkS("部分组队成员不在当前地图，我需要召集他们过来。"); //判断组队成员是否在一张地图..
		} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
			cm.sendOkS("组队成员要在等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
		} else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
			cm.sendOkS("队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
			//            } else if (!cm.isAllPartyMembersNotCoolDown(questID, 1000 * 60 * 90)) {//判断组队成员是否l冷却..
			//                cm.sendOkS("你的队员#r#e \"" + cm.getIsInCoolDownMemberName(questID, 1000 * 60 * 90) + "\" #k#n目前处于等待重置时间状态。");
			//                cm.dispose();
		} else {
			var em = cm.getEventManager(PQname[chs]);
			if (em == null || open == false) {
				cm.askMenu("配置文件不存在,请联系管理员。");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {
					em.startInstance(cm.getParty(), cm.getMap(), 255);
					em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
				} else {
					cm.sendOkS("好像已经有队伍在进行了，换其他频道尝试吧。");
				}

			}
		}
		cm.dispose();
	} else {
		cm.warp(startmap, 0);
		cm.dispose();
	}
}
