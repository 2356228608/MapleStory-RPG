/*
 * 狂龙剧情 - 02
 * 地图：秘密地图 - 万神殿东部 (940001010)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.npc_ChangeController(3000107, -2950, 20, 0);//E0 FB 86 01
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.sendNextNoESC("狂龙战士，我还是觉得不妥，我要跟你一起去。除了我，万神殿里还有很多值得信赖的人。", 3000107);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, -2150, 29);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(357);
    } else if (status === i++) {
        ms.npc_SetForceMove(3000107, 1, 200, 100);
        ms.inGameDirectionEvent_AskAnswerTime(417);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg1/1", 0, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 600, -1200, 29);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(1553);
    } else if (status === i++) {
        ms.mob_EnterField(9300545, -1600, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300546, -1500, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300545, -1400, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300546, -1300, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300545, -1200, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300546, -1100, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300545, -1000, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300546, -900, 29);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.mob_EnterField(9300545, -800, 29);
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(0);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
    } else {
        ms.dispose();
    }
}