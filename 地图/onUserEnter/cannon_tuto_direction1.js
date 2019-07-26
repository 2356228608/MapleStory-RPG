/*
 * 神炮王剧情 - 18
 * 地图：可可岛 - 火箭发射 (912060300)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.fieldEffect_PlayFieldSound("cannonshooter/flying");
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balloon/0", 9000, 0, 0, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
        ms.curNodeEventEnd(true);
    } else if (status == 1) {
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balloon/1", 9000, 0, 0, 1, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status == 2) {
        ms.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/balloon/2", 9000, 0, 0, 1, 0, 0, 0, 0, 0);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/face04");
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/out01");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status == 3) {
        ms.warp(912060400, 0);
        ms.dispose();
    }
}