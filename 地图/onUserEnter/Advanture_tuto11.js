/*
 * 冒险家剧情 - 09
 * 地图：枫叶路 - 枫树山丘 (4000011)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (!ms.isQuestFinished(32202)) {
        if (status == 0) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.fieldEffect_ScreenMsg("maplemap/enter/10000");
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status == 1) {
            ms.npc_ChangeController(10300, -240, 220);
            ms.npc_SetSpecialAction(10300, "summon");
            ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 1, 0, 1, 10300, 0, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1800);
        } else if (status == 2) {
            ms.npc_SetForceMove(10300, 1, 1000, 100);
            ms.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 200);
        } else if (status == 3) {
            ms.inGameDirectionEvent_AskAnswerTime(4542); //延时(毫秒)
        } else if (status == 4) {
            ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else if (status == 5) {
            ms.inGameDirectionEvent_AskAnswerTime(900);  //延时(毫秒)
        } else if (status == 6) {
            ms.sendNextSNoESC("刚刚那女生是谁啊？为什么看到我就逃走？");
        } else if (status == 7) {
            ms.sendOkSNoESC("我也先到那边看看吧。");
        } else if (status == 8) {
            ms.npc_LeaveField(10300);
            ms.forceCompleteQuest(32202);
            ms.setInGameDirectionMode(false);  //屏蔽/解锁操作台 true = 锁 false = 解
            ms.dispose();
        } else {
            ms.dispose();
        }
    } else {
        ms.fieldEffect_ScreenMsg("maplemap/enter/10000");
		ms.dispose();
    }
}