// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askMenu_Bottom("#face0##fs25##e#b<超空间魔方>#k#n#fs16#\r\n本舰是#b私营银河研究合作机关APORD#k的第6号研究船。\r\n有什么可以为你效劳？\r\n#L1#进入超空间魔方。#l\r\n#L9#放弃。#l", 9400057);
		cm.dispose();
	} else if (status === i++) {
		if (selection == 9) {
			qm.dispose();
			return;
		}
		actionEvent(mode, type, selection);
	} else {
		cm.dispose();
	}
}

/*
Made by jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var eventname = ["副本_APORD飞船", "副本_APORD飞船_剧情"];
//开始的地图
var startmap = 867110000;
//等级限制
var minLevel = [0];
var maxLevel = [999];
//次数限制
var maxenter = [10, 999];
//几天一次
var interval = [10, 999];
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;

function actionEvent(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (cm.getMapId() != startmap) {
		cm.warp(startmap, 0);
		cm.dispose();
		return;
	}
	var mode = (cm.getQuestStatus(59741) == 2) ? 0 : 1;
	var em = cm.getEventManager(eventname[mode]);
	if (em == null || open == false) {
		cm.sendOk("配置文件不存在,请联系管理员。", 9062147);
	} else if (mode == 0 && cm.getParty() == null) { //判断组队
		cm.sendOkS("这里不太安全，我最好创建一个队伍再进入。");
	} else if (mode == 0 && !cm.isLeader()) { // 判断组队队长
		cm.sendOkS("需要让我们的组队长来才能决定是否进入。");
	} else if (mode == 0 && !cm.allMembersHere()) {
		cm.sendOkS("部分组队成员不在当前地图，我需要召集他们过来。"); //判断组队成员是否在一张地图..
	} else if (mode == 0 && !cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
		cm.sendOkS("组队成员要在等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
	} else if (mode == 0 && !cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
		cm.sendOkS("队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
	} else if (cm.getPQLog(eventname[mode]) >= maxenter[mode]) {
		cm.sendOk("你今日的访问授权已过期。请等待第二天刷新。\r\n可用进入授权次数：" + cm.getPQLog(eventname[mode]) + " #e/ " + maxenter[mode]);
	} else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
			cm.setPQLog(eventname[mode]);
			if (mode == 0) {
				em.startInstance(cm.getParty(), cm.getMap(), 255);
			} else {
				em.startInstance(cm.getPlayer());
			}
		} else {
			cm.sendOk("超空间魔方正在被访问中，请尝试其他超维度频道。");
		}
	}
	cm.dispose();
}
