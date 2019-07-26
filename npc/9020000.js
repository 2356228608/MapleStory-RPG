/*
 废弃都市组队任务
 */


var status = 0;
var minLevel = 50;  //最低等级 
var maxLevel = 255; //最高等级
var minPlayers = 1; //最小人数
var maxPlayers = 8; //最大人数
var open = true; //开启、true 关闭、false
var PQ = '废弃组队任务';
var eventname = "KerningPQ"; //配置文件名称
var maxenter = 10;//每日挑战次数
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var em = cm.getEventManager(eventname);
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var vipstr = "#r副本空闲#k";
        } else {
            var vipstr = "#b已有人开启#k";
        }
        if (cm.getPlayer().getMapId() != 910340700) {
            cm.askMenu("#e<组队任务：组队训练场>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍。\r\n#b#L0#我想进入组队训练场待机室。#l");
        } else if (cm.getPlayer().getMapId() == 910340700) {
            var pqtry = maxenter - cm.getPQLog(PQ);
            var rwpz = "";
            rwpz = "经验指数：#v4140301##v4140301##v4140301#\r\n";
            rwpz += "组队点数：#fUI/UIWindow2.img/actionAchievement/achievement/number/3#  \r\n基础奖励：#v1072533# \r\n#e推荐等级：50 - 200";
            rwpz += "        推荐人数：2 - 6  \r\n#b今日已进行：" + cm.getPQLog(PQ) + " 次          #r剩余挑战次数：" + pqtry + " 次#n#k";
            rwpz += "\r\n当前副本状态：" + vipstr + "";
            var zyms = "";
            zyms = "#e#v3991051##v3991051##v3991051##v3991051#<废弃组队任务>#v3991050##v3991050##v3991050##v3991050##n\r\n#b#h0# \n\#k你现在想和队友一起完成这个组队任务吗?\r\n" + rwpz + "\r\n";
            zyms += "    #L1##b>>>>>>>>>>是的,我们现在就要去<<<<<<<<<<#l\r\n\r\n";
            zyms += "    #L2##b>>>>>>>>>>>>>兑换基础奖励<<<<<<<<<<<<<<#l\r\n";
            cm.askMenu(zyms);
            //cm.askMenu("#e<组队任务：组队训练场>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……想挑战的话，请通过#b所属组队的队长#k和我说话。#b\r\n#L1#我想执行组队任务。#l\r\n#L2#我想寻找队伍。#l\r\n#L3#我想听听任务说明。#l\r\n#L4#兑换任务基础奖励#l\r\n#L5#我想知道今天剩余挑战次数。#k");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(910002000, 0);
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getParty() == null) {
                cm.sendOk("你没有创建组队,无法入场。");
            } else if (!cm.isLeader()) {
                cm.sendOk("请你们团队的队长和我对话。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。");
                cm.dispose();
            } else {

                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                var outname;
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
                        levelValid += 1;
                    } else {
                        next = 0;
                        cm.dispose();
                        break;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }

                    if (cm.getPQLog(PQ) >= maxenter) {
                        next = 2;
                        cm.dispose();
                        break;
                    }

                }
                if (party.size() > maxPlayers || inMap < minPlayers) {
                    next = 0;
                }
                if (next == 1) { // 0 表示检测通过
                    var em = cm.getEventManager(eventname);
                    if (em == null || open == false) {
                        cm.sendOk("配置文件出错,请联系管理员。");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 255);
                        } else {
                            cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
                        }
                        cm.removeAll(4001008);
                        cm.removeAll(4001007);
						cm.worldSpouseMessage(0x24, "『废弃组队』：庆祝【" + cm.getChar().getName() + "】 带领队伍进入废弃组队副本!");
                        //cm.setPQLog(PQ);
                        cm.dispose();
                    }
                } else if (next == 0) { // 1 表示组队等级或人数有误
                    cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下 所有成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
                } else if (next == 2) { // 2 表示有人次数不够
                    cm.sendOk("你的队伍中有成员今天的挑战次数已经用完。\r\n以下成员今日挑战次数已经用完:\r\n " + outname + " ");
                }
            }

        } else if (selection == 2) {
            if (!cm.canHold(1072533, 1)) {
                cm.sendOk("你已经拥有了#v1072533##z1072533#无法重复兑换。");
            } else if (cm.haveItem(4001531, 15)) {
                cm.gainItem(4001531, -15);
                cm.gainItem(1072533, 1);
                cm.sendOk("兑换成功,祝您游戏愉快。");
            } else {
                cm.sendOk("兑换失败。\r\n\r\n兑换#v1072533##z1072533#需要15个#z4001531#。");
            }
            cm.dispose();

        }
    } else if (status == 2) {
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}