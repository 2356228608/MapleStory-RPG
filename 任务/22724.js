/*
 * 超能力者任务 - 收集同意书签名3(22724)
 * 地图：私立英才学校 - 1层走廊 (331002000)
 * 任务：收集同意书签名3(22724)
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
        qm.sendNextNoESC_Bottom("嗯？签名？\r\n既然是学生会长提出来的，当然要帮忙了。", 1531047);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("那个，听说这次超能力者抓住了银行劫匪，你看过这个新闻了吧？", 1531047);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500);
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect2.img/kinesis/news3", 0, 1000, 0, 0, 12, 4, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(照片拍得不错，为了配合编队，能更上相一点，我是没少受累。)#k", 1531000);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.fieldEffect_ProcessOnOffLayer("2", "", 2, 1500, 0, 0, 0, 0, 0);
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
        qm.sendNextNoESC_Bottom("那个，这可是高级情报，\r\n根据可靠传言，超能力者的真实身份……", 1531047);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("是通过基因实验孕育出的变异人，他先是被恐怖分子绑架，后来又被虫子咬了，就变成了绿色皮肤的超级军人。", 1531047);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("平时一副戴着眼镜的新闻记者的架势，但实际上是个超级有钱的土豪呢！", 1531047);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("……就说大家伙电影看太多了。", 1531000);
    } else if (status === i++) {
        qm.topMsg("学生的签名已经全都到手了，回去找尤娜吧");
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
