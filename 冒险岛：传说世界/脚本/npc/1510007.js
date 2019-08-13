/* 列娜海峡
Made by jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["副本_列娜海峡_Boss"];
//记录次数名称
var PQLog = ["副本_列娜海峡_Boss"];
//开始的地图
var startmap = 141050200;
//等级限制
var minLevel = [50];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 1;
//怪物最大等级设置
var moblevel = 255;
/*var questID = 31732;*/
var chs = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (!cm.isQuestFinished(32189)) {
		cm.sendOkS("这地方看上去不太对劲。我还是不要乱走比较好。");
		cm.dispose();
		return;
	}
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
			cm.askAcceptDecline("移动到冰川运输船。\r\n\r\n#b（只有1人可入场 / 等级：50以上）");
		} else if (status == 1) {
			if (cm.getParty() == null) { //判断组队
				cm.sendOk("你需要创建一个队伍才能进入。");
			} else if (!cm.isLeader()) { // 判断组队队长
				cm.sendOk("需要你们的组队长来才能决定是否进入。");
			} else if (!cm.allMembersHere()) {
				cm.sendOk("部分组队成员不在当前地图，你需要召集他们过来。"); //判断组队成员是否在一张地图..
			} else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
				cm.sendOk("组队成员要在等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
			} else if (!cm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
				cm.sendOk("队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
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
						cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。");
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
