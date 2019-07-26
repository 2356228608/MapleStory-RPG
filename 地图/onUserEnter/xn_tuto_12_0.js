/*
 * 尖兵剧情 - 16
 * 地图：秘密研究所 - 机库 (931060060)
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
        ms.npc_ChangeController(2159381, -1040, 20, 0);
        ms.npc_SetSpecialAction(2159381, "summon");
        ms.npc_ChangeController(2159384, -990, 20, 0);
        ms.npc_SetSpecialAction(2159384, "summon");
        ms.npc_ChangeController(2159379, -780, 20, 1);
        ms.npc_SetSpecialAction(2159379, "summon");
        ms.npc_ChangeController(2159385, -470, 20, 1);
        ms.npc_SetSpecialAction(2159385, "summon");
        ms.npc_ChangeController(2159386, -550, 20, 1);
        ms.npc_SetSpecialAction(2159386, "summon");
        ms.npc_ChangeController(2159387, -370, 20, 1);
        ms.npc_SetSpecialAction(2159387, "summon");
        ms.npc_ChangeController(2159388, -620, 20, 1);
        ms.npc_SetSpecialAction(2159388, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/17", 2400, 0, -170, 1, 0, 1, 2159388, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2400);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/18", 1500, 0, -170, 1, 0, 1, 2159385, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextNoESC("各位！", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("吉格蒙特，我来救你了。我们等回去之后再寒暄吧。啊哈！", 2159387);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159387, "shoot");
        ms.inGameDirectionEvent_AskAnswerTime(720);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogStart", 0, -370, 20, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1050);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smog", 3900, -370, 20, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(2159381);
        ms.npc_LeaveField(2159384);
        ms.npc_LeaveField(2159385);
        ms.npc_LeaveField(2159386);
        ms.npc_LeaveField(2159387);
        ms.npc_LeaveField(2159388);
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.inGameDirectionEvent_AskAnswerTime(2220);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogEnd", 0, -370, 20, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1800);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 1200, 0, -120, 1, 0, 1, 2159379, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_LeaveField(2159379);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(931060070, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
