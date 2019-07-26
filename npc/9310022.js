var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxPierre1 = 10;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.askMenu("#b#e#i4033866##i4033866##i4033866##i4033866#<金币副本>#i4033866##i4033866##i4033866##i4033866##i4033866##n\r\n#d里面的怪物必须用普通攻击,每次扣1滴血.每日2次.\r\n#e#k要求:组队进去.共5分钟,请抓紧时间\r\n#d龙的传人,狂战士,恶魔猎手,打此副本不扣血,需要找2-3人的队伍酱油 !\r\n            #r#e#L0#我要钱(进入)。#l\r\n\r\n可出#i4001785##i4001714##i4001839##i4000313##i2432353##i4004001##i4004002##i4004000##i4004003##i5150040#\r\n    #i1052594##i1003802##i1082511##i1072791#    #i1052595##i1003803##i1082519##i1072803#")
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                } else {
                    if (cm.getBossLog("刷金币") < maxPierre1) {
                        var party = cm.getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var levelValid = 0;
                        var inMap = 0;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                                levelValid += 1;
                            } else {
                                next = false;
                            }
                            if (cPlayer.getMapid() == mapId) {
                                inMap += 1;
                            }
                        }
                        if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                            next = false;
                        }
                        if (next) {
                            var em = cm.getEventManager("Zsjb");
                            if (em == null) {
                                cm.sendOk("此任务正在建设当中。");
                            } else {
                                var prop = em.getProperty("state");
                                if (prop.equals("0") || prop == null) {
                                    em.startInstance(cm.getParty(), cm.getMap(), 140);
                                    cm.setBossLog("刷金币");
                                    cm.dispose();
                                    return;
                                } else {
                                    cm.sendOk("里面已经有人了，请稍等！");
                                }
                            }
                            cm.dispose();
                        } else {
                            cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）#k#b）");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("对不起，一天只能进入2次。");
                        cm.dispose();
                    }
                } //判断组队
            } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
        }
    }
}