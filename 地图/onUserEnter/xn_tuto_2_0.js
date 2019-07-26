/*
 * 尖兵剧情 - 04
 * 地图：秘密地图 - 场面切换用 (931060080)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.fieldEffect_ScreenMsg("kaiser/text0");
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.warp(931050920, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
