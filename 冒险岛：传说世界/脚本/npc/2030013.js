/*
 * Boss副本：扎昆
 * Npc名称：阿杜比斯(2030013)
 * 地图：冰峰雪域 - 扎昆的祭台入口(211042400)
 * @author 狐狸糊涂
 */
var status = -1;
//事件开关
var open = true;
//事件名称
var eventNames = ["Boss_扎昆_普通", "Boss_扎昆_进阶","Boss_扎昆_简单"];
//事件日志
var pqName = "扎昆";
//限制等级
var minLevel = [50, 90, 90];
var maxLevel = [999, 999, 999];
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//限制次数
var maxEnter = 20;
//设置队伍最大平均等级
var moblevel = 255;

var zakumMode;

function start() {
	if (!cm.isLeader()) {
		cm.sendOk("只有队长才可以申请入场。");
		cm.dispose();
		return;
	}
	zakumMode = cm.getMapId() - 211042400;
	if (zakumMode == 0) {
		if (!cm.haveItem(4001017)) {
			cm.sendOk("你没有需要献给普通扎昆的祭品，因此无法进行移动。");
			cm.dispose();
		} else {
			cm.askMenu("#e<首领 - 扎昆：普通模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入普通扎昆副本。(队员会同时移动。)#l");
		}
	} else if (zakumMode == 1) {
		if (!cm.haveItem(4001017)) {
			cm.sendOk("你没有需要献给进阶扎昆的祭品，因此无法进行移动。");
			cm.dispose();
		} else {
			cm.askMenu("#e<扎昆：进阶模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入进阶扎昆副本。(队员会同时移动。)#l");
		}
	} else if (zakumMode == 2) {
		if (!cm.haveItem(4001796)) {
			cm.sendOk("你没有需要献给简单扎昆的祭品，因此无法进行移动。");
			cm.dispose();
		} else {
			cm.askMenu("#e<扎昆：简单模式>#n\r\n扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxEnter + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入简单扎昆副本。(队员会同时移动。)#l");
		}
	} else {
		cm.sendOk("出现未知错误。");
		cm.dispose();
	}
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	if (!cm.isAllPartyMembersAllowedLevel(minLevel[zakumMode], maxLevel[zakumMode])) {
		cm.sendNext("所有成员等级" + minLevel[zakumMode] + "级以上" + maxLevel[zakumMode] + "级以下才可以入场。");
	} else if (!cm.isAllPartyMembersAllowedPQ(pqName, maxEnter)) {
		cm.sendNext("你的队员\"" + pqName + "\"次数已经达到上限了。");
	} else {
		var em = cm.getEventManager(eventNames[zakumMode]);
		if (em == null || open == false) {
			cm.askMenu("配置文件不存在,请联系管理员。");
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				em.startInstance(cm.getParty(), cm.getMap(), 255);
				cm.gainMembersPQ(pqName, 1);
			} else {
				cm.askMenu("已经有队伍在进行了,请换其他频道尝试。");
			}
		}
	}
	cm.dispose();
}
