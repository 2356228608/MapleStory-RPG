/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能：彩票系统单选球
 *  @Author 娜娜 
 */
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {

    var myDate = new Date();
    var nextTime = myDate.getTime();
    nextTime += 1000 * 60 * 10; // 时间 10分钟 开一次奖
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {

    scheduleNew();//循坏
    em.startlottery();//启用彩票单选球功能
}