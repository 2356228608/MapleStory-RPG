﻿
/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能：桃乐丝[困难]
 *  @Author 娜娜
 */

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["taolesi_HARD"];
//记录次数名称
var PQLog = ["桃乐丝"];
//开始的地图
var startmap = 992000000;
//等级限制
var minLevel = [200, 220, 200, 220];
var maxLevel = [999, 999, 999, 999];
//次数限制
var maxenter = [1, 1, 1, 1];
//几天一次
var interval = [1, 1];
var status = -1;
//限制人数
var minPlayers = 2;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs;
/*var questID = 31732;*/

function start() {
	if (cm.getMapId() == startmap) {
		var text = "";
		for (var i = 0; i < PQname.length; i++) {
			text += "\r\n#b#L" + i + "# 我要去挑战" + PQLog[i] + "#l#k";
		}
		cm.askMenu("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……\r\n" + text);
	} else {
		cm.askYesNo("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
	}
}
function action(mode, type, selection) {

	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	mode == 1 ? status++ : status--;
	if (cm.getMapId() == startmap) {
		if (status == 0) {
			var em = cm.getEventManager(PQname[selection]);
			if (em == null || open == false) {
				cm.sendOk("配置文件不存在,请联系管理员。");
				cm.dispose();
				return;
			}
			chs = selection;
			var prop = em.getProperty("state");
			var rwpz = "#e<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#e#r";
			rwpz += "#n#k#e副本状态：#n" + (prop == null || prop.equals("0") ? "#e#g空闲#n#k" : "#e#r开启#n#k") + "";
			rwpz += "\r\n#e推荐人数：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n";
			rwpz += "\r\n当前已进行：#r#e" + cm.getPQLog(PQLog[selection], interval[chs]) + "#n#k 次";
			rwpz += "    剩余挑战次数：#r#e" + (maxenter[selection] - cm.getPQLog(PQLog[selection], interval[chs])) + "#n#k 次#n#k\r\n\r\n";
			cm.askYesNo(rwpz + "           #b#h0# \n\#k#e是否现在就进入？#n");
		} else if (status == 1) {
			if (cm.getParty() == null) { //判断组队
				cm.askYesNo("你并没有组队，请创建组建一个队伍在来吧。");
			} else if (!cm.isLeader()) { // 判断组队队长
				cm.sendOk("请让你们的组队长和我对话。");
			} else if (!cm.allMembersHere()) {
				cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
			} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
				cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
			} else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
				cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
				//            } else if (!cm.isAllPartyMembersNotCoolDown(questID, 1000 * 60 * 90)) {//判断组队成员是否l冷却..
				//                cm.sendOk("你的队员#r#e \"" + cm.getIsInCoolDownMemberName(questID, 1000 * 60 * 90) + "\" #k#n目前处于等待重置时间状态。");
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
						cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
					}
				}
			}
			cm.dispose();
		} else {
			cm.dispose();
		}
	} else {
		if (status == 0) {
			cm.warp(startmap, 0);
		}
		cm.dispose();
	}
}
