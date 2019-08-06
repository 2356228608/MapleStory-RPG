/**
 * 功能:戴米安入场
 * From:芬芬时尚潮流
 */

var status = -1;
var chs;
var 小黄点 = "#fUI/UIPVP/MiniMapIcon/yellow#";


//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["Boss_Dma_1", "Boss_Dma_2", "Boss_Dma_3", "Boss_Dma_4"];
//记录次数名称
var PQLog = ["戴米安", "戴米安[普通]", "戴米安[困难]", "戴米安[地狱]"];
//开始的地图
var startmap = 105300303;
//要求最低的等级
var minLevel = [210, 210, 210, 210];
//要求最高的等级
var maxLevel = [1000, 1000, 1000, 1000];
//次数限制
var maxenter = [20, 20, 20, 20];
//要求最低的人数
var minPlayers = [1, 1, 1, 1];
//要求最高的人数
var maxPlayers = [6, 6, 6, 6];
//怪物最大等级设置
var moblevel = 255;
//要求进行的频道 [0 = 所有]
var channel = [1, 2, 3, 4];

function start() {
	if (cm.getMapId() == startmap) {
		if (cm.getParty() == null) {
			cm.sendOk("你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。那么要执行这个任务必须先创建一个队伍！.");
			cm.dispose();
			return;
		} else if (!cm.isLeader()) {
			cm.sendOk("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
			cm.dispose();
			return;
		}
		var text = "";
		for (var i = 0; i < PQname.length; i++) {
			text += "\r\n#b#L" + i + "#"+小黄点+"挑战 " + PQLog[i] + "#l#k";
		}
		cm.askMenu("#e<副本 - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。?\r\n" + text);
	} else {
		cm.askYesNo("#e<副本 - " + PQLog[0] + ">#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
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
				cm.sendOk(open ? "配置文件不存在,请联系管理员。" : "管理员关闭了目前的副本.有问题可以联系管理员");
				cm.dispose();
				return;
			}
			chs = selection;
			var prop = em.getProperty("state");
			var rwpz = "#e<Boss - " + PQLog[selection] + ">#n\r\n#k\r\n#e#r";
			rwpz += "#n#k#e副本状态：#n" + (prop == null || prop.equals("0") ? "#e#g空闲#n#k" : "#e#r挑战中#n#k") + "";
			rwpz += "\r\n#e要求人数：#r" + minPlayers[selection] + " - " + maxPlayers[selection] + "#k#n#e   要求等级：#r" + minLevel[selection] + " - " + maxLevel[selection] + "#k#n";
			rwpz += "\r\n当前已进行：#r#e" + cm.getPQLog(PQLog[selection]) + "#n#k 次";
			rwpz += "    剩余挑战次数：#r#e" + (maxenter[selection] - cm.getPQLog(PQLog[selection])) + "#n#k 次#n#k\r\n\r\n";
			if(channel[selection] == 0) {
			rwpz += "此副本不受频道限制.所有频道均可进入#k#n#k\r\n\r\n";
			} else {
			rwpz += "需要在：#r#e" + channel[selection] + "#n频道进入副本#k#n#k\r\n\r\n";
			}
			cm.askYesNo(rwpz + "           #b#h0# \n\#k#e是否现在就进入？#n");
		} else if (status == 1) {
			if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
				cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。\r\n\r\n\r\n");
			} else if (channel[chs] != 0 && cm.getPlayer().getClient().getChannel() != channel[chs]) {	
				cm.sendNext("此副本需要在 " + channel[chs] + "频道进入.");
			} else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
				cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
			} else if (!cm.allMembersHere()) {
				cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
			} else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
				var it = party.iterator();
				
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > maxPlayers[chs] || inMap < minPlayers[chs]) {
                    next = false;
                }
				
				if (next) {
				var em = cm.getEventManager(PQname[chs]);
				if (em == null || open == false) {
					cm.askMenu(open ? "配置文件不存在,请联系管理员。" : "管理员关闭了目前的副本.有问题可以联系管理员");
				} else {
					var prop = em.getProperty("state");
					if (prop == null || prop.equals("0")) {
						em.startInstance(cm.getParty(), cm.getMap(), 255);
						cm.gainMembersPQ(PQLog[chs], 1);
						cm.worldSpouseMessage(0x15, "『副本系统』 : " + cm.getChar().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog[chs] + " 去了。");
					} else {
						cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
					}
				}
				} else {
                    cm.sendOk("组队成员 " + minPlayers[chs] + " 人以上 " + maxPlayers[chs] + "人 以下才可以入场。");
                    cm.dispose();
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
