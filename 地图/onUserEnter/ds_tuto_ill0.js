/*
 * 恶魔剧情 - 01
 * 地图：秘密地图 - 恶魔猎手标志 (931050310)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setInGameDirectionMode(true, true);
        ms.setStandAloneMode(true);
        ms.effect_Direction("Effect/Direction6.img/DemonTutorial/SceneLogo");
        ms.inGameDirectionEvent_AskAnswerTime(5500);
    } else if (status === i++) {
        ms.dispose();
        ms.warp(927000000, 0);
    } else {
        ms.dispose();
    }
}

