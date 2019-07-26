/*
 * 夜光剧情 - 16
 * 地图：秘密地图 - 黑魔法师的留言 (910141040)
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
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene2");
        ms.effect_Voice("Voice.img/DarkMage/5");
        ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(910141000, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
