/*
 * 米哈尔剧情 - 02
 * 地图：秘密地图 - 林伯特家的杂货店 (913070001)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (!ms.isQuestActive(20031)) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.topMsg("林伯特的杂货店");
            ms.topMsg("冒险岛历XXXX年3月7日");
            ms.topMsg("点击灯泡就可以开始任务。任务状态快捷键[Q]/选择型[J]");
            ms.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === i++) {
            ms.effect_OnUserEff("UI/tutorial.img/34");
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.dispose();
        } else {
            ms.dispose();
        }
    }else {
        ms.dispose();
    }
}