/*
 * 神炮王剧情 - 19
 * 地图：可可岛 - 火箭着陆 (912060400)
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
        ms.fieldEffect_PlayFieldSound("cannonshooter/bang");
        ms.curNodeEventEnd(true);
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/Scene01");
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/out02");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status == 1) {
        ms.warp(912060500, 0);
        ms.dispose();
    }
}