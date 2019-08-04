var status = 0;
// 名称
var eventType = "副本";
var eventName = "起源之塔";
// 难度等级
var difficulty = ["普通"];
// 限制等级
var minLevel = [125, 180]; //最低等级
var maxLevel = [999, 999]; //最高等级
// 限制人数
var minPlayers = 1;
var maxPlayers = 1;
// 怪物最大等级设置
var moblevel = 300;
// 副本开关 开启、true 关闭、false
var open = true;
// 配置文件名称
var eventname = ["Map_TowerOfOz"];
// 设置每日次数
var maxenter = [5, 5];
// 地图名称
var mapName = "起源之塔";

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
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
			var pqtry = maxenter[i] - cm.getPQLog(difficulty[i] + eventName);
			msg += "#b已进行" + difficulty[i] + "模式 #e" + cm.getPQLog(difficulty[i] + eventName) + " #n/" + pqtry + " 次\t\t状态：" + state + "\r\n";
		}
		for (var i = 0; i < difficulty.length; i++) {
			msg += "#L" + i + "#前往" + difficulty[i] + "模式的" + eventName + "。（" + minLevel[i] + "级以上）#l\r\n";
		}
		cm.askMenu(msg);
	} else if (status == 1) {
		if (cm.getPQLog(difficulty[selection] + eventName) >= maxenter[selection]) {
			cm.sendOk("你今天挑战次数已经用完了，请明天在来吧！");
			cm.dispose();
		} else {
			var em = cm.getEventManager(eventname[selection]);
			if (em == null || open == false) {
				cm.askMenu("配置文件不存在,请联系管理员。");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {
					cm.setPQLog(difficulty[selection] + eventName);
					em.startInstance(cm.getParty(), cm.getMap(), moblevel);
				} else {
					cm.askMenuS("看来已经有人在挑战" + eventName + "，去其他频道看看吧。");
				}
				cm.dispose();
			}
		}
	} else if (status == 2) {
		cm.dispose();
	} else if (mode == 0) {
		cm.dispose();
	}
}
