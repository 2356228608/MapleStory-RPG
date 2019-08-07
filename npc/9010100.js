/*
 * 功能: 路西德入场
 * Form: 芬芬时尚潮流
 */

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["BossLucid_NORMAL"];
//记录次数名称
var PQLog = ["路西德[普通]"];
//开始的地图
var startmap = 450004000; //噩梦时间塔顶端
//等级限制
var minLevel = [210];
var maxLevel = [1000];
//次数限制
var maxenter = [30];
//几天一次
var interval = [1];
var status = -1;
//限制人数
var minPlayers = [1, 1, 1];
var maxPlayers = [6, 6, 6];
var minLimitBreak = [0, 0, 0]; //武器破攻需求，0为不要求
var chs;
var MapList = Array(
		940200252, //森林 刺溜树9833066 1447 -265
		940200206, //草笛森林 坠落
		940200204, //森林入口
		940200205, //森林可见处   花8880163 -265 39
		450001250, //水雾瀑布 跳崖
		450001380, //洞穴 阿勒玛8641010 736 177
		940200202, //神秘河某处上空 传送
		940200203, //光之漩涡 噩梦粉色石8880161  -85 215             死亡后召唤蝴蝶 8880165  -690 215
		921171000, //碎梦者 噩梦岩石 8880171  542 -1963/ -1726 -237/ 3352 -237/ 1091 1485
		450004150, //梦幻森林 路西德 1阶段
		450004550, //坍塌时间 路西德 2阶段
		450004600 //噩梦塔 奖励阶段    音乐盒8880167 93,35
	);

function start() {
	if (cm.getMapId() == startmap) {
		var text = "#e<首领怪:路西德>#n\r\n如果不能阻拦路西德，将会发生很可怕的事情。\r\n";
		for (var i = 0; i < PQname.length; i++) {
			text += "\r\n#b#L" + i + "#申请入场<首领怪:路西德>（" + minLevel[i] + "级以上）#l#k";
		}
		cm.askMenu(text);
	} else {
		cm.askYesNo("#e<首领怪:路西德>#n\r\n\r\n你现在确定放弃任务,从这里出去?\r\n");
	}
}

function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	mode == 1 ? status++ : status--;
	if (cm.getPlayer().isGM()) {
		maxenter = [999];
	}
	chs = selection;
	if (cm.getMapId() == startmap) {
		if (status == 0) {
			if (cm.getParty() == null) { //判断组队
				cm.sendOk("你并没有组队，请创建组建一个队伍在来吧。");
			} else if (!cm.isLeader()) { // 判断组队队长
				cm.sendOk("请让你们的组队长和我对话。");
			} else if (cm.getLimitBreak() < minLimitBreak[chs]) { // 判断组队队长
				cm.sendOk("武器破功不够" + minLimitBreak[chs] + "，不允许进入！");
			} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
				cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
			} else if (cm.getPQLog(PQLog) >= maxenter) {
                cm.sendOk("你今天挑战次数已经用完了,请明天在来吧!");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
				cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
			} else if (cm.getPlayerCount(MapList[chs]) != 0) {
				cm.sendOk("目前该频道已经有人在挑战，请换个频道重新进入。");
			} else {
				var em = cm.getEventManager(PQname[chs]);
				if (em == null || open == false) {
					cm.askMenu("配置文件不存在,请联系管理员。");
				} else {
					var party = cm.getParty().getMembers();
					var next = true;
					/*
					for (var keys in MapList) {
					if (cm.getPlayerCount(MapList[keys]) != 0) {
					next = false;
					break;
					}
					}*/
					if (!cm.getPlayer().isGM() && (party.size() > maxPlayers[chs] || party.size() < minPlayers[chs])) {
						next = false;
					}
					if (next) {
						var prop = em.getProperty("state");
						if (prop == null || prop.equals("0")) {
							cm.dispose();
							em.startInstance(cm.getParty(), cm.getMap());
							cm.gainMembersPQ(PQLog[chs], 1);
							cm.worldSpouseMessage(0x0F, "[副本挑战] : " + cm.getChar().getName() + " 带队开始挑战" + PQLog[chs] + "。祝Ta满载而归！");
							return;
						} else {
							cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
						}
					} else {
						cm.sendOk("你需要有一个 " + minPlayers[chs] + " - " + maxPlayers[chs] + " 人的队伍. 请您组好队员后再试.");
						cm.dispose();
					}
				}
			}
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
		if (status == 0) {
			cm.warp(startmap, 0);
		}
	}

}
