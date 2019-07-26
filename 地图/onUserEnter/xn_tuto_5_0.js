/*
 * 尖兵剧情 - 07
 * 地图：秘密研究所 - 实验室 (931050930)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_ChangeController(2159377, -180, 50, 0); //F3 11 B6 05
        ms.npc_SetSpecialAction(2159424, "summon");
        ms.inGameDirectionEvent_PushMoveInfo(0, 100, -272, -63);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2701);
    } else if (status === i++) {
        ms.sendNextNoESC("今天的测试和调整已经进入了最后的阶段。好的，准备好了吗？", 2159377);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/11", 1200, 0, -140, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2381);
        ms.spawnMob(9300635, 150, -301);
        ms.forceStartQuest(23600);
        ms.teachSkill(30021238, 1, 1);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
