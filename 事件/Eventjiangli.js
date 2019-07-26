
var asked = new Array();//判断已经回答的个数
var currentQuestion;
var eim;
var mapid = 706030100;//进行地图
var map;
var setupTask;
var setupTaskEvent;

function init() {
    scheduleNew();
    eim = em.newInstance("Eventjiangli");
    map = eim.getMapInstance(mapid);
    ResetProperty();
}

function ResetProperty() {
    em.setProperty("EventjiangliState", "0");
    em.setProperty("start", "0");
    em.setProperty("question", "0");
    em.setProperty("RightAnwser", "0");//得到问题的正确答案
	em.setProperty("renshu",0);
	em.setProperty("Exct", "0");
    asked = Array();
    //setupTaskEvent.cancel(true);
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 1;//1分钟检查一次时间
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}


function startEvent() {
    if (em.getProperty("start") == "1") {//已经可以让后面的玩家进来了。
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
            scheduleNew();
        } else {
            for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
                if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                    map.startMapEffect("现在有1分钟的时间等候其它玩家，请稍后！", 5121052);
                    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.packet.CField.getClock(60));//180秒
                    //eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 4);//问题显示NPC
                }
            }
            em.broadcastServerMsg("[活动] 活动已经开始了，现在大约有1分钟的报名时间，请速度到拍卖报到！");
            em.setProperty("start", "2");//等待状态
            setupTaskEvent = em.schedule("WatingStatus", 1000 * 10 * 1, eim);//3分钟后检查问题
        }
    } else if (em.getProperty("start") == "3") {//关闭入口状态
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
            scheduleNew();
            cancelSchedule();
        }
    } else if (em.getProperty("start") == "4") {//任务完成状态
        ResetProperty();//如果活动地图没人，自动释放开启入口等待下一个人的进入。
        scheduleNew();
    } else {
        ResetProperty();
        scheduleNew();
    }
}

function WatingStatus(eim) {
    if (em.getProperty("start") == "2") {//等待状态
        em.setProperty("start", "3");//关闭入口，不允许进入
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//再次循环
        }
        if (eim.getMapFactory().getMap(mapid).getCharactersThreadsafe() != 0) {//如果开始了的话
            em.broadcastServerMsg("[活动] 活动已结束,可以领取奖励了.");
			em.broadcastServerMsg(5121087, "[活动] 活动已结束,可以领取奖励了.", true);
			em.setProperty("Exct", "1");//活动已结束
        } else {
            ResetProperty();
            scheduleNew();//再次循环
        }
    } else {
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//再次循环
        }
    }
}
