/*
 * 超能力者任务 - 收集同意书签名2(22723)
 * 地图：私立英才学校 - 1层走廊 (331002000)
 * 任务：收集同意书签名2(22723)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("你来得正好，#b#h0##k。\r\n地铁的日报上登了这种照片，我总觉得这应该是合成的吧？我和朋友吵了好久。", 1531046);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/kinesis/news2", 0, 1000, 0, 0, 12, 4, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(啊，我想起来了，这刚好是那时候经过的路。)#k", 1531000);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1500, 0, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("嗯？你说什么？", 1531046);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("没，我什么都没说。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("听传闻说，超能力者会使用念力。\r\n这是种不用动手就可以移动物体的超能力。", 1531046);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("我总觉得这在科学的角度是说不通的，\r\n你是不是也这么觉得，#b#h0##k？", 1531046);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("对了……你让我帮忙签名同意书的吧。", 1531046);
    } else if (status === i++) {
        qm.topMsg("已经得到了三人中第二个学生的签名");
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.gainExp(800);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
