/*
 * 夜光剧情 - 06
 * 地图：秘密地图 - 黑魔法师的房间 (927020090)
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
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene1");
        ms.inGameDirectionEvent_AskAnswerTime(9000);
    } else if (status === i++) {
        ms.curNodeEventEnd(false);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020070, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
