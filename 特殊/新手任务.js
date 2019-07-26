
/*
	功能：新手任务
	备注：任务初始ID 200100，子任务依次加1，新任务分类的初始ID需间隔100，如100200
	
*/


var status = 0;
var text = "";
var text1 = "";
var questid = 300000;
var maxtimes = 15;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var 状态="";

var lastMapList = Array();
var maplist = Array(
	Array(10000, "蜗牛")
	)

function start () {
	status = -1;
	action(1, 0, 0);
}


function action (mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}

		if (status == -1) {
			cm.dispose();
		} else if (status == 0) {
			
			playerid = cm.getPlayer().getId();
			accepttimes = cm.getBossLog("新手任务");
		    text = "#h0# 欢迎来到" + cm.getServerName() + " #k,先来大概了解一下新手任务:";
            text += "\r\n接受任务后在指定的时间内完成任务可获得奖励!连击超时6秒后会重置哦.";
			text += "\r\n奖励1: 连击次数达到300(奖励点卷1000)";
			text += "\r\n奖励2: 连击次数达到500(奖励点卷10000)";
			text += "\r\n奖励3: 连击次数达到999(奖励点卷100000)";
			text += "\r\n今日剩余任务次数：#r" + (maxtimes-accepttimes) + "#k 次\r\n";
			//text += "\r\n接取任务状态：#r" + 状态 + "#k \r\n";
			if (cm.getPlayer().MissionStatus(playerid, questid, 0, 4)) {  // 判断是否接取了任务
				if (cm.getPlayer().MissionStatus(playerid, questid, 0, 0)) { // 判断是否完成任务
					if ((maxtimes-accepttimes)==0) { // 判断是否超过完成次数
						text += "您已经完成了今天的新手任务，请明天0点后再来吧~\r\n";
					} else {
						状态 = "未接受";
						text += "#b#L0#接受任务0#l#k\r\n";
					}
				} else {
					状态 = "已接受";
					text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
				}
			} else {
				text += "#b#L3#接受任务3#l\r\n";
			}
			text += "\r\n接取任务状态：#r" + 状态 + "#k \r\n";
			cm.askMenu(text);
		} else if (status == 1) {
			  if (selection == 0) {// 重新接受任务 初始化
				if (cm.getSpace(2)<1) {
					cm.sendOk("你的消耗栏格子不足，请先整理一下吧。");
					cm.dispose();
					return;
				}
				text1+="#r#e提示我只给你一次哦，一定要记牢！#n#k  "+java.lang.System.currentTimeMillis();
				// 重新接受任务
				cm.getPlayer().MissionReMake(playerid, questid, 1, 0, 0);
				// 写入任务地图ID
				cm.getPlayer().MissionSetMobId(playerid, questid, mapid);
				// 写入任务道具数量
				cm.getPlayer().MissionMaxNum(questid, 0);
				cm.dispose();
				cm.sendOk(text1);
			} else if (selection == 2) {	// 放弃任务
				cm.getPlayer().setCurrenttime(0);
				cm.getPlayer().MissionFinish(playerid, questid);
				cm.setBossLog("新手任务");
				text = "任务已放弃……";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 3) {	// 接受任务
				if (cm.getSpace(2)<1) {
					cm.sendOk("你的消耗栏格子不足，请先整理一下吧。");
					cm.dispose();
					return;
				}
				text = "宝藏有可能藏匿在一下几个地图，你有#b10分钟#k的时间寻找的正确地图并打开我的黄金袋子！\r\n";
				// 创建任务，写入任务道具ID
				cm.getPlayer().MissionMake(playerid, questid, 1, 0, 0, mapid);
				// 写入任务道具数量
				cm.getPlayer().MissionMaxNum(questid, 0);
				cm.sendOk(text);
				cm.dispose();
			} else {
				cm.sendOk('此功能尚未开放，敬请期待！');
				cm.dispose();
			}
		} 
	}
}

