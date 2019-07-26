var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
    allPlayers = allPlayers.iterator();
    while (allPlayers.hasNext()) {//循环每一个玩家
        var player = allPlayers.next();
        if (player.getMapId() == 910000000 || player.haveItem(2430865)) {
            var points = 10;
            player.modifyCSPoints(2, points);
            player.modifyCSPoints(1, 3);
            player.dropMessage(5, "[泡点奖励]：获得 [ " + points + " ] 抵用卷 获得 [ 3 ] 点卷 ");
            player.dropMessage(-1, "[泡点奖励]： 获得[ " + points + " ]抵用卷 获得 [ 3 ] 点卷");
        }
    }
}