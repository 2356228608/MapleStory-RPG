/*
 * 恶魔剧情 - 10
 * 地图：秘密地图 - 恶魔猎手的老家 (924020000)
 * Npc名称：闪光的吊坠
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1000, 0, -120);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        cm.sendNextSNoESC("#b这是……#k");
    } else if (status === i++) {
        cm.fieldEffect_ScreenMsg("demonSlayer/pendant");
        cm.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
        cm.sendNextSNoESC("#b妈妈……戴米安……#k");
    } else if (status === i++) {
        cm.sendNextSNoESC("#b……#k");
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/5", 2000, 0, -120);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/6", 2000, 0, -160);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.forceCompleteQuest(23202);
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.warp(927000081, 0);
        cm.enableActions();
        cm.dispose();
    }

}