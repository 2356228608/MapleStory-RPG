/*
 * 米哈尔剧情 - 06
 * 地图：秘密地图 - 林伯特家的杂货店 (913070001)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    if (!ms.isQuestActive(20032)) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.topMsg("林伯特的杂货店");
            ms.topMsg("冒险岛历XXXX年3月8日");
            ms.inGameDirectionEvent_AskAnswerTime(3000);
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