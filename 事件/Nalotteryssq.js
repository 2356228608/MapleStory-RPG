/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能：彩票系统双色球
 *  @Author 娜娜 
 */
        var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {

    var myDate = new Date();
    var nextTime = myDate.getTime();
    nextTime += 1000 * 60 * 20; // 时间 50分钟 开一次奖
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {

    scheduleNew();//循坏
    em.startlotteryssq();//启用彩票双色球功能
}