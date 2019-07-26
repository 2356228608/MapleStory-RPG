﻿var setupTask;

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

function cancelSchedule() {
    if (setupTask != null)
        setupTask.cancel(true);
}

function start() {

    var cal = java.util.Calendar.getInstance();
    var hour = cal.get(java.util.Calendar.HOUR);
    var min = cal.get(java.util.Calendar.MINUTE);
    var sec = cal.get(java.util.Calendar.SECOND);
    var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    weekday -= 1;
    //scheduleNew();
    /*
	if (hour == 20 && (minute == 10) && (weekday == 6 || weekday == 2 || weekday == 4)) {
        //em.broadcastServerMsg(5121040, " < 挤牛奶活动 >，已开启请到市场,奶牛妈妈NPC进行挤奶活动吧！", true);
    }
    if (min == 58) {
        //em.startSuperlabaed(5120079," 你们这些没出息的东西,今天双倍才两个人充值,真特么太扣了,留着钱干嘛 去嫖啊？ ",5121010);
        //em.broadcastServerMsg(5120074,"下午13点的无限火力关卡开始了。20分钟后将关闭了，请抓紧挑战。",true);
    }
    if (min == 01) {
        //em.broadcastServerMsg(5121001," 通知：8月12号全天开放存在福利,群公告看介绍,充值请联系客服QQ:188803955！",true);
        //em.broadcastServerMsg(5120074,"晚上20点的无限火力关卡开始了。20分钟后将关闭了，请抓紧挑战。",true);
    }
    if (min == 45) {
        //em.broadcastServerMsg(5121051, " <公测充值福利> 通知 今天最后一天 首冲双倍  明天恢复 正常 平时只有10% 充值请联系客服！", true);
        //em.broadcastServerMsg(5120074,"< 怪物攻城 > 每周 六 日21:00大批量怪物进攻一线射手村，狂暴好礼！。",true);
    }
    if (min == 15) {
        //em.broadcastServerMsg(5121036, " <公测充值福利> 通知 今天最后一天 首冲双倍  明天恢复 正常 平时只有10% 充值请联系客服！", true);
        //em.broadcastServerMsg(5121048,"每小时50分钟的答题在市场<诸葛孔明>开始了。5分钟后关闭。",true);
    }
    if (min == 50) {
        //em.startSuperlabaed("每小时副本<挑战粉扎>在市场刘备处开放了,勇士们快组队征服它吧..",5121010);
        //em.broadcastServerMsg(5120006, "每小时50分时的 < 答题 > 在市场(书架)处开放了,小伙伴们抓紧时间做作业吧..", true);
    } else if (min == 56) {
        //em.broadcastServerMsg(5120079, " < 挤奶活动 > 每周五 六 日 20:00开启挤奶活动哟,奖励丰富，点爆鼠标！！", true);
    }
	*/
}
function monsterDrop(eim, player, mob) {}