var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext("你找到了解过去发生在这座城里的事件的人了吗？嗯？#p2161002#？他原本是国王的近卫骑士团长。他还留在这里吗……是吗，#p2161002#是怎么说的呢？他知道雷昂为什么会变成这个样子吗？");
	} else if (status == i++) {
		qm.sendNextS("#b(转述从#p2161002#那里听到的话。)#k");
	} else if (status == i++) {
		qm.sendNext("没错……是的，是的。在黑色的乌云遮住天空的那一天，原本看上去很普通的士兵们突然变了，开始攻击我们。城墙倒塌，房屋全都着了火……我，我被塔里的烟雾……原来是这样啊。");
	} else if (status == i++) {
		qm.sendNextS("#b(从#p2161001#的反应来看，#p2161002#的话好像是事实。)#k");
	} else if (status == i++) {
		qm.sendNext("雷昂是因为这个才会变成这样的啊。我光在这里抱怨雷昂，没想到这段时间他一直生活在悲伤和愤怒之中……我不能再让他这样下去了。");
	} else if (status == i++) {
		qm.sendNextS("#b你有什么办法吗？");
	} else if (status == i++) {
		qm.sendNext("城里有鲁丹都不知通的国王和王妃专用的通道。本来是不应该告诉别人的……但是这次就破例一次。请你和我一起到接见室去见见他。");
	} else if (status == i++) {
		qm.askAcceptDecline("我要亲自去见见他。因为那些拥有黑暗气息的怪物，我一直不能到接见室去……不过如果你能帮我，我就应该可以过去。请一定要让我到接见室去！拜托你了！");
	} else if (status == i++) {
		var newStatus = qm.getQuestRecord(3178);
		newStatus.setStatus(1);
		// 这样才能有效更新
		qm.getPlayer().updateQuest(newStatus, true);
		actionFB();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext("这……是我送给雷昂的吊坠。我送他这个礼物，是希望他能成为一个好的国王。没想到他还戴在身上……他果然是个多情的人。");
	} else if (status == i++) {
		qm.sendNext("虽然他已经完全变了，虽然他的所作所为可能已经不可原谅……不过我不认为已经没有希望了。我相信总有一天，雷昂会恢复成原来的样子。");
	} else if (status == i++) {
		qm.dispose();
		qm.forceCompleteQuest();
	}
}


//配置文件名称
var PQname = ["副本_狮子王城_秘密走廊"];
//记录次数名称
var PQLog = ["副本_狮子王城_秘密走廊"];
//开始的地图
var startmap = 211061001;
//等级限制
var minLevel = [120];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
/*var questID = 31732;*/
var chs = 0;

function actionFB() {
	var em = qm.getEventManager(PQname[0]);
	if (em == null) {
		qm.sendOk("配置文件不存在,请联系管理员。");
	} else if (qm.getParty() == null) { //判断组队
		qm.sendOk("你需要创建一个队伍才能进入。");
	} else if (!qm.isLeader()) { // 判断组队队长
		qm.sendOk("需要让你们的组队长来才能决定是否进入。");
	} else if (!qm.allMembersHere()) {
		qm.sendOk("部分组队成员不在当前地图，你需要召集他们过来。"); //判断组队成员是否在一张地图..
	} else if (!qm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
		qm.sendOk("组队成员要在等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
	} else if (!qm.isAllPartyMembersAllowedPQ(PQLog[chs], maxenter[chs])) {
		qm.sendOk("队员#r#e \"" + qm.getNotAllowedPQMemberName(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
	} else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
			em.startInstance(qm.getParty(), qm.getMap(), 255);
			em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
		} else {
			qm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。");
		}
	}
	qm.dispose();
}
