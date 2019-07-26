/*
 股票系统 by:娜娜
 */
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {

    var myDate = new Date();
    var nextTime = myDate.getTime();
    nextTime += 1000 * 60; // 时间
    setupTask = em.scheduleAtTimestamp("start", nextTime);

}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {

    scheduleNew();
    em.startStack();
}