/*
 * 夜光剧情 - 05
 * 地图：秘密地图 - 黑魔法师的房间前 (927020060)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.sendNextSNoESC("弗里德和双弩精灵应该已经进去了。我不能晚去的。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(750);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2");
        ms.sendNextSNoESC("门里面，黑暗的气息浓的仿佛要令人窒息了。难道这就是黑魔法师的力量……？！必须赶紧进去，支援他们两个。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020090, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
