var status = 0;
// BOSS名称
var bossName = "皮埃尔";
// 难度等级
var difficulty = ["普通", "进阶"];
// 限制等级
var minLevel = [125, 180]; //最低等级
var maxLevel = [999, 999]; //最高等级
// 限制人数
var minPlayers = 1;
var maxPlayers = 6;
// 怪物最大等级设置
var moblevel = 255;
// 副本开关 开启、true 关闭、false
var open = true;
// 配置文件名称
var eventname = ["副本_鲁塔比斯_Boss_皮埃尔", "副本_鲁塔比斯_Boss_皮埃尔_进阶"];
// 设置每日次数
var maxenter = [50, 50];
// 地图名称
var mapName = "鲁塔比斯庭院西侧入口";

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
		cm.sendOk("赶快加入组队来挑战组队任务吧。");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		var msg = "";
		msg += "#r#e<" + mapName + ">#n\r\n\r\n";
		for (var i = 0; i < difficulty.length; i++) {
			var prop = cm.getEventManager(eventname[i]).getProperty("state");
			var state = (prop == null || prop.equals("0")) ? "#r场地空闲#k" : "#b已被占用#k";
			msg += "#b已进行" + difficulty[i] + "模式 #e" + cm.getPQLog(difficulty[i] + bossName) + " #n/" + maxenter[i] + " 次\t\t状态：" + state + "\r\n";
		}
		for (var i = 0; i < difficulty.length; i++) {
			msg += "#L" + i + "#使用#v4033611##z4033611#，移动到" + difficulty[i] + "模式。（" + minLevel[i] + "级以上）#l\r\n";
		}
		cm.askMenu(msg);
	} else if (status == 1) {
		if (cm.getParty() == null) { //判断组队
			cm.sendOk("创建组队才能进入。");
			cm.dispose();
		} else if (cm.haveItem(4033611) < 1) {
			cm.sendOk("你没有#v4033611##z4033611#无法进入副本。");
			cm.dispose();
		} else if (!cm.isLeader()) { // 判断组队队长
			cm.sendOk("请你们团队的队长和我对话。");
			cm.dispose();
		} else if (cm.getPQLog(difficulty[selection] + bossName) >= maxenter[selection]) {
			cm.sendOk("你今天挑战次数已经用完了,请明天在来吧!");
			cm.dispose();
		} else if (!cm.allMembersHere()) {
			cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
			cm.dispose();
		} else {
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;

			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				if (cPlayer.getLevel() >= minLevel[selection] && cPlayer.getLevel() <= maxLevel[selection]) {
					levelValid += 1;
				} else {
					//cm.sendOk("所有成员等级 "+ minLevel +" 以上 "+ maxLevel +" 以下才可以入场。");
					cm.dispose();
					next = false;
				}
				if (cPlayer.getMapid() == mapId) {
					inMap += 1;
				}
			}
			if (party.size() > maxPlayers || inMap < minPlayers) {
				next = false;
			}
			if (next) {
				var em = cm.getEventManager(eventname[selection]);
				if (em == null || open == false) {
					cm.askMenu("配置文件不存在,请联系管理员。");
				} else {
					var prop = em.getProperty("state");
					if (prop == null || prop.equals("0")) {
						cm.setPQLog(difficulty[selection] + bossName);
						em.startInstance(cm.getParty(), cm.getMap(), moblevel);
					} else {
						cm.askMenu("已经有队伍在进行了,请换其他频道尝试。");
					}
					cm.gainItem(4033611, -1);
					cm.dispose();
				}
			} else {
				cm.askYesNo("所有成员等级 " + minLevel[selection] + " 以上 " + maxLevel[selection] + " 以下才可以入场。");
			}
		}
	} else if (status == 2) {
		cm.dispose();
	} else if (mode == 0) {
		cm.dispose();
	}
}
