/*
 * 扎昆 - 普通
 * 地图：最后的任务 - 扎昆的祭台(280030100)
 * This is made by BMS Team
 * @Author 狐狸糊涂
 */
//# 死亡次数
var reviveCount = 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

//# 1 EventManager - startInstance - 302
function setup(partyLevel, partyId) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    em.schedule("footholdVisible", 30 * 1000);

    var eim = em.newInstance("BossZakum_NORMAL");
    eim.setInstanceMap(280030100).resetFully();
    eim.startEventTimer(30 * 60 * 1000);

    return eim;
}

//# 2 EventManager - startInstance - 303
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.setReviveCount(reviveCount);
}

//# 角色死亡切换地图时触发
function playerRevive(eim, player) {
    if (player.getReviveCount() <= 0) {
        var map = eim.getMapInstance(211042300);
        player.changeMap(map, map.getPortal(0));
        player.addHP(50);
        return true;
    }
    return false;
}

//# 3 角色进入/离开地图触发 EventInstanceManager - changedMap - 107
function changedMap(eim, player, mapid) {
    if (mapid != 280030100) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("leader", "true");
            em.setProperty("state", "0");
        }
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(1, 280030100)) {
        em.setProperty("leader", "true");
        em.setProperty("state", "0");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

//# 时间结束后执行
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);//结束后被传送的地图
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

//# 完成组队任务【源码未调用，不会被执行】
function clearPQ(eim) {
    scheduledTimeout(eim);
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    if (em.getProperty("state").equals("1")) {
        em.setProperty("state", "2");
    } else if (em.getProperty("state").equals("2")) {
        em.setProperty("state", "3");
    }
    eim.restartEventTimer(1 * 60 * 1000);
}

function footholdVisible() {
    em.schedule("footholdHide", 30 * 1000);
    em.getMapFactory().getMap(280030100).OnSyncDynamicFoothold(18, ["zdc1", "zdc2", "zdc3", "zdc4", "zdc5", "zdc6", "zdc7", "zdc8", "zdc9", "zdc10", "zdc11", "zdc12", "zdc13", "zdc14", "zdc15", "zdc16", "zdc17", "zdc18"],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [-464, -388, -310, -514, -439, -362, -512, -436, -358, 350, 426, 504, 384, 464, 546, 363, 439, 517],
            [-186, -187, -184, -102, -101, -99, -7, -5, -8, -189, -190, -187, -99, -102, -101, -7, -5, -8]);
}

function footholdHide() {
    em.schedule("footholdVisible", 30 * 1000);
    em.getMapFactory().getMap(280030100).OnSyncDynamicFoothold(18, ["zdc1", "zdc2", "zdc3", "zdc4", "zdc5", "zdc6", "zdc7", "zdc8", "zdc9", "zdc10", "zdc11", "zdc12", "zdc13", "zdc14", "zdc15", "zdc16", "zdc17", "zdc18"],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [-464, -388, -310, -514, -439, -362, -512, -436, -358, 350, 426, 504, 384, 464, 546, 363, 439, 517],
            [-186, -187, -184, -102, -101, -99, -7, -5, -8, -189, -190, -187, -99, -102, -101, -7, -5, -8]);
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}