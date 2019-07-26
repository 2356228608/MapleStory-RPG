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
    if (hour==20) {
        em.setProperty("open", "true");
        var cal = java.util.Calendar.getInstance();
        cal.set(java.util.Calendar.HOUR, 0);
        cal.set(java.util.Calendar.MINUTE, 10);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 5; //设置多久入口开放结束
        }
        setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
        em.broadcastServerMsg(5120026, "每天晚上8点活动已经开始拉！请大家速度从市场财神爷入口进来哦！入口开放时间5分钟", true);
        em.broadcastServerMsg("[每天晚上8点活动]  活动入口已经开启，请大家速度从市场财神爷入口进来哦！");
    }
}

function finishEvent() {
    em.broadcastServerMsg("[每天晚上8点活动] 活动入口已经关闭，将在每天的20点开放！");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}