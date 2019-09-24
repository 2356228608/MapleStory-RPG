/*
 * 尖兵剧情 - 08
 * 地图：秘密研究所 - 实验室 (931050930)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        qm.inGameDirectionEvent_PushMoveInfo(0, 100, -198, -41);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(2604);
    } else if (status === i++) {
        qm.sendNextNoESC("呵呵呵，非常好！非常让人满意的结果。现在只要再进行细微的调整……。", 2159377);
    } else if (status === i++) {
        qm.fieldEffect_PlayBGM("Bgm30.img/fromUnderToUpper");
        qm.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 1200, 0, -120, 1, 0, 1, 2159377, 0, 0);
        qm.npc_SetForceMove(2159377, -1, 1, 100);
        qm.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        qm.sendNextNoESC("入侵者？难，难道是奥尔卡？快打开监视器！", 2159377);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        qm.sendNextNoESC("是反抗者吗……不过总比被奥尔卡发现要好。那些烦人的家伙，为什么偏偏要在这个时候潜入呢？", 2159377);
    } else if (status === i++) {
        qm.sendNextPrevNoESC("不过这也许是件好事。就最后再进行一次测试，用那些家伙作为对象，呵呵呵……。", 2159377);
    } else if (status === i++) {
        qm.npc_LeaveField(2159377);
        qm.forceCompleteQuest();
        qm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.dispose();
        qm.warp(931050940, 0);

    } else {
        ms.dispose();
    }
}