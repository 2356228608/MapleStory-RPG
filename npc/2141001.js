/*
 * Boss副本：品克缤
 * Npc名称：忘却的神殿管理人
 * 地图：
 * @author 狐狸糊涂
 */
var status = -1;
//事件开关
var eventOpen = true;
//事件名称
var eventName = ["PinkBeanBattle", "ChaosPinkBean"];
//事件日志
var eventLog = ["品克缤", "混沌品克缤"];
//限制等级
var minLevel = [160, 170];
var maxLevel = [255, 255];
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//限制次数
var maxEnter = [5, 3];
//设置怪物最大等级
var mobLevel = 255;
//事件选择
var chs;

function start() {
    var text = "";
    for (var i = 0; i < eventName.length; i++) {
        text += "\r\n#b#L" + i + "#挑战 " + eventLog[i] + "#l#k         ";
    }
    cm.askMenu("#e<Boss - 时间的宠儿:" + eventLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你现在想和队友一起挑战这个BOSS副本吗?\r\n" + text);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        var em = cm.getEventManager(eventName[selection]);
        if (em == null || eventOpen == false) {
            cm.sendOk("配置文件不存在，请联系管理员。");
            cm.dispose();
            return;
        }
        chs = selection;
        var prop = em.getProperty("state");
        var rwpz = "#e<Boss - 时间的宠儿:" + eventLog[0] + ">#n\r\n#k\r\n#e#r";
        rwpz += "#n#k副本状态：" + (prop == null || prop.equals("0") ? "#r空闲#k" : "#b开启#k") + "";
        rwpz += "\r\n#e推荐人数：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + " - " + maxLevel[selection] + "#n";
        rwpz += "\r\n#e#r" + eventLog[selection] + "#n#k当前已进行：#r#e" + cm.getPQLog(eventLog[selection]) + "#n#k 次";
        rwpz += "    剩余挑战次数：#r#e" + (maxEnter[selection] - cm.getPQLog(eventLog[selection])) + "#n#k 次#n#k\r\n\r\n";
        cm.askYesNo(rwpz + "           #b#h0# \n\#k#e是否现在就进入？#n");
    } else if (status == 1) {
        if (cm.getParty() == null) { //判断组队
            cm.askYesNo("你并没有组队，请创建组建一个队伍在来吧。");
        } else if (!cm.isLeader()) { // 判断组队队长
            cm.sendOk("请让你们的组队长和我对话。");
        } else if (!cm.isAllPartyMembersAllowedLevel(minLevel[chs], maxLevel[chs])) {
            cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
        } else if (!cm.isAllPartyMembersAllowedPQ(eventLog[chs], maxEnter[chs])) {
            cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(eventLog[chs], maxEnter[chs]) + "\" #k#n次数已经达到上限了。");
        } else if (!cm.allMembersHere()) {
            cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
        } else {
            var em = cm.getEventManager(eventName[chs]);
            if (em == null || eventOpen == false) {
                cm.askMenu("配置文件不存在，请联系管理员。");
            } else {
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.gainMembersPQ(eventLog[chs], 1);
                    cm.worldSpouseMessage(0x15, "『时间宠儿』 : " + cm.getChar().getName() + " 的敢死队队伍，气势汹汹的挑战 " + eventLog[chs] + " 去了。");
                    cm.gainItem(4032002, -1);
                } else {
                    cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
                }
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
