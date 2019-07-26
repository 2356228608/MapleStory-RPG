/*
 * 尖兵剧情 - 05
 * 地图：秘密研究所 - 实验室 (931050920)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_ChangeController(2159377, -200, 50, 0);
        ms.npc_SetSpecialAction(2159377, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/doorOpen", 0, 0, 1, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/9", 1200, 0, -120, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/10", 1200, 0, -250, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/7", 1200, 0, -250, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_LeaveField(2159377);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(931060081, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
