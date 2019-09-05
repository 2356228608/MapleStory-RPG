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
        nextTime += 1000 * 1;//每秒检测一次
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	
	scheduleNew();
	if(min == 14 && sec == 0){//时间定时什么时候开始摇奖 如果每天只需要1次 那么就需要加hour == 12 如果每个小时1次 那么就不需要hour
		em.ernie(5121025);//显示的喇叭的ID
	}
    
}
