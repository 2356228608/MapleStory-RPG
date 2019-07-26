/*
 * 尖兵剧情 - 01
 * 地图：秘密地图 - 商标 (931060089)
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
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.teachSkill(30021238, 1, 1);  //刀锋之舞
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.effect_Direction("Effect/Direction12.img/XenonTutorial/SceneLogo");
        ms.inGameDirectionEvent_AskAnswerTime(6300);
    } else if (status === i++) {
        ms.warp(931050900, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
