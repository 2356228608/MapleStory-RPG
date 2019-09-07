/*
枫之高校 [BMS] BY:nana, jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["副本_黑色天堂"];
//记录次数名称
var PQLog = ["副本_黑色天堂"];
//开始的地图
var startmap = 350011100;
//等级限制
var minLevel = [100];
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
	if (cm.isQuestActive(30068) && cm.haveItem(4034114, 10)) {
		cm.dispose();
		cm.warp(106031100, 0);
		return;
	}
	mode == 1 ? status++ : status--;
	if (cm.getMapId() == startmap) {
		var em = cm.getEventManager(PQname[chs]);
		if (em == null || open == false) {
			cm.sendOkS("配置文件不存在,请联系管理员。");
		}
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
			cm.gainItem(cm.haveItem(4001834) ? 4001834 : 5252017, -1);
			em.startInstance(cm.getParty(), cm.getMap(), 255);
			em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
			cm.setPQLog(PQLog[chs]);
			cm.playerMessage(5, "今天已经进入副本_黑色天堂 " + cm.getPQLog(PQLog[chs]) + " 次了。");
		} else {
			cm.sendOkS("好像已经有队伍在进行了，换其他频道尝试吧。");
		}

		cm.dispose();
	} else {
		cm.warp(startmap, 0);
		cm.dispose();
	}
}
