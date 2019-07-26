/*
 鑴氭湰鍔熻兘锛氳嫳璇潙鐩稿叧
 */

        var letters0 = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var answers0 = Array("APPLE", "BEAR", "CHEESE", "DOUGHNUT", "EARTH", "FLY", "GOLD", "HALLOWEEN", "ICE", "JEWELRY", "KING", "LOVE", "MOUNTAIN", "NOTE", "ORANGE", "POLICE", "QUIZ", "ROSE", "SNAKE", "TEA", "UFO", "VIP", "WOOD", "XMAS", "YOUNG", "ZZZ");
var letters1 = Array("鑻规灉", "鑲?", "楦¤泲", "姗欏瓙", "鏌犳", "铚傝湝", "闈掕嫻鏋?", "娌欐媺", "鐐搁浮", "铔嬬硶", "鎶惃", "姹夊牎", "澶??鐙?", "楸块奔骞?", "棣欒偁", "姗欐眮", "钁¤悇姹?", "閰ュ共閰?", "椹箍濂?", "娓呮櫒涔嬮湶", "榛勬槒涔嬮湶", "濂堕叒铔嬬硶");
var answers1 = Array("APPLE", "MEAT", "EGG", "ORANGE", "LEMON", "HONEY", "GREENAPPLE", "SALAD", "FRIEDCHICKEN", "CAKE", "PIZZA", "HAMBURGER", "HOTDOG", "DRIEDSQUID", "FATSAUSAGE", "ORANGEJUICE", "GRAPEJUICE", "MELTINGCHEESE", "REINDEERMILK", "SUNRISEDEW", "SUNSETDEW", "CHEESECAKE");
var letters2 = Array("鑽夎帗鐨勮嫳璇崟璇嶆槸浠?涔堬紵", "鎭㈠MP鍊?100鐨勮嵂姘存槸浠?涔堥鑹诧紵", "姹芥补闇?瑕佸姞浠?涔堟墠璺戝緱鍔紵锛? ", "2鏈?14鏃ユ槸浠?涔堟棩瀛愬憿锛?", "鐢熺梾浜嗚鍘诲摢閲岋紵", "浠?涔堟妸鍦扮悆姝ｅソ鍒嗘垚涓?鍗婏紵", "鎴戜滑娓告垙鐨勬椿鍔ㄧ鐞嗗憳鏄皝锛燂紙鎻愮ず锛欱iXX锛?", "鏂版墜鎴愪负涓?涓瓟娉曞笀锛岄渶瑕佺殑鏈?浣庣瓑绾ф槸澶氬皯锛?", "鍐掗櫓宀涚殑鑻辫鍚嶅瓧鏄粈涔堬紵", "鎸戞垬鎵庢槅鏈?浣庣骇鏄灏戠骇鍛??");
var answers2 = Array("STRAWBERRY", "BLUE", "GAS", "VALENTINE", "HOSPITAL", "EQUATOR", "BIXIN", "EIGHT", "MAPLESTORY", "FIFTY");
function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(mapid) {

    var eim = em.newInstance("English" + mapid);
    eim.setInstanceMap(702090101 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090102 + (parseInt(mapid) * 100)).resetFully();
    eim.setInstanceMap(702090103 + (parseInt(mapid) * 100)).resetFully();
    eim.setProperty("mode", mapid);
    if (eim.getProperty("mode").equals("0")) {
        var ee = java.lang.Math.floor(java.lang.Math.random() * letters0.length);
        eim.setProperty("question", letters0[ee]);
        eim.setProperty("answer", answers0[ee]);
    } else if (eim.getProperty("mode").equals("1")) {
        var ee = java.lang.Math.floor(java.lang.Math.random() * letters1.length);
        eim.setProperty("question", letters1[ee]);
        eim.setProperty("answer", answers1[ee]);
    } else if (eim.getProperty("mode").equals("2")) {
        var ee = java.lang.Math.floor(java.lang.Math.random() * letters2.length);
        eim.setProperty("question", letters2[ee]);
        eim.setProperty("answer", answers2[ee]);
    }
    eim.startEventTimer(300000); //5 mins lol

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    if (eim.getProperty("mode").equals("0")) {
        player.getMap().startMapEffect("璇烽棶杩欎釜瀛楁瘝 [" + eim.getProperty("question") + "] 鍍忎粈涔堝憿锛?", 5120008);
    } else if (eim.getProperty("mode").equals("1")) {
        player.getMap().startMapEffect("璇锋敹闆嗕笅闈㈤棶棰樼殑瀛楁瘝锛?  " + eim.getProperty("question") + "銆?", 5120034);
    } else if (eim.getProperty("mode").equals("2")) {
        player.getMap().startMapEffect(eim.getProperty("question"), 5120034);
    }
}

function playerDead(eim, player) {
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 702090101: // 1st Stage
        case 702090102: // 2nd Stage
        case 702090103: // 3rd Stage
        case 702090201:
        case 702090202:
        case 702090203:
        case 702090301:
        case 702090302:
        case 702090303:
            return; // Everything is fine
    }
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function playerRevive(eim, player) {
}

function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {
// If only 2 players are left, uncompletable
    if (!eim.disposeIfPlayerBelow(2, 702090400)) {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
// Boot whole party and end
    eim.disposeIfPlayerBelow(100, 702090400);
}


function scheduledTimeout(eim) {
    clearPQ(eim);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var exit = eim.getMapFactory().getMap(702090400);
    player.changeMap(exit, exit.getPortal(0));
    if (eim.disposeIfPlayerBelow(2, 702090400)) {
    }
}

function clearPQ(eim) {
// KPQ does nothing special with winners
    eim.disposeIfPlayerBelow(100, 702090400);
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}