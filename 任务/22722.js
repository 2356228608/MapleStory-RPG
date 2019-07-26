/*
 * 超能力者任务 - 收集同意书签名1(22722)
 * 地图：私立英才学校 - 1层走廊 (331002000)
 * 任务：收集同意书签名1(22722)
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
        qm.sendNextNoESC_Bottom("#b#h0##k，看到这里了吧？\r\n这条新闻啊，看到了吧？说是超能力者救了小孩子。", 1531061);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500);
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/news1", 0, 1000, 0, 0, 12, 4, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(是啊，那会儿头发差点全部被烧着。)#k", 1531000);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000);
        qm.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("嗯？你说什么？", 1531061);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("没事，我什么都没说，还是赶紧给我签名吧。", 1531000);
    } else if (status === i++) {
        qm.topMsg("已经得到了三人中第一个学生的签名");
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

