var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);

    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function start() {

    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    weekday -= 1;
    scheduleNew();
	//em.broadcastServerMsg("[OX宾果活动]"+min);
    if (hour==22&&min ==10) {
        em.setProperty("open", "true");
        var cal = java.util.Calendar.getInstance();
        cal.set(java.util.Calendar.HOUR, 0);
        cal.set(java.util.Calendar.MINUTE, 10);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 3; //设置多久入口开放结束
        }
        setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
        em.broadcastServerMsg(5120026, "OX宾果活动已经开始拉！请大家速度从副本入口进来哦！入口开放时间3分钟", true);
        em.broadcastServerMsg("[OX宾果活动]  活动入口已经开启，请大家速度从副本入口进来哦,入口开放时间为3分钟！");
    }
}

function finishEvent() {
    em.broadcastServerMsg("[OX宾果活动] 活动入口已经关闭，将在每天的13点10、19点的10分开放！");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}