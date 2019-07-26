/*
 * 尖兵剧情 - 03
 * 地图：和平时期的埃德尔斯坦 - 埃德尔斯坦外围2 (931050910)
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
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(2159368, -1050, -30, 1); //5D E5 B5 05
        ms.npc_SetSpecialAction(2159368, "summon");
        ms.npc_ChangeController(2159376, -1800, -30, 0); //5E E5 B5 05
        ms.npc_SetSpecialAction(2159376, "summon");
        ms.npc_SetForceMove(2159368, -1, 300, 100);
        ms.inGameDirectionEvent_PushMoveInfo(0, 80, -1600, -34);
        ms.inGameDirectionEvent_AskAnswerTime(6870);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 900, 0, -120, 1, 0, 1, 2159368, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextNoESC("那个爷爷是谁啊？好像不是村里人。", 2159368);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/6", 900, 0, -120, 1, 0, 1, 2159376, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.npc_ChangeController(2159422, -1450, -30, 0); //C8 EC B5 05
        ms.npc_SetSpecialAction(2159422, "summon");
        ms.npc_ChangeController(2159422, -1350, -30, 1); //C9 EC B5 05
        ms.npc_SetSpecialAction(2159422, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 1200, 0, -120, 1, 0, 1, 2159368, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_ChangeController(2159370, -1400, -30, 1); //D4 ED B5 05
        ms.npc_SetSpecialAction(2159370, "summon");
        ms.npc_LeaveField(2159368);
        ms.npc_LeaveField(2159422);
        ms.npc_LeaveField(2159422);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.sendNextNoESC("呵呵……没想到在这种地方发现了。跑了这么多村庄，看来是值得的。", 2159376);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/8", 1200, 0, -120, 1, 0, 1, 2159376, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159376, -1, 300, 100);
        ms.npc_SetForceMove(2159370, -1, 300, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_ChangeController(2159372, -500, -30, 1); //9C F1 B5 05
        ms.npc_SetSpecialAction(2159372, "summon");
        ms.npc_SetForceMove(2159372, -1, 200, 100);
        ms.inGameDirectionEvent_PushMoveInfo(0, 150, -950, -34);
        ms.inGameDirectionEvent_AskAnswerTime(4335);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159372, 1, 1, 100);
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159372, -1, 1, 100);
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159372, 1, 1, 100);
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159372, -1, 1, 100);
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#已经回家了吗？我还想把之前借的短剑还给他呢……", 2159372);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("看来只能明天再说了。", 2159372);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159372, 1, 100, 100);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.npc_LeaveField(2159376);
        ms.npc_LeaveField(2159370);
        ms.npc_LeaveField(2159372);
        ms.dispose();
        ms.warp(931060080, 0);
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
