/*
 * 冒险家剧情 - 08
 * 地图：枫叶路 - 枫树上方 (4000010)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.sendNextSNoESC("……这里是枫树？");
    } else if (status == 1) {
        ms.sendNextSNoESC("先到下面去看看吧。");
    } else if (status == 2) {
        ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/2", 3000000, -520, -740, 1, 0, 1, 0, 1, 0);
        ms.topMsg("同时按下[↓]键与 [Alt] 或 [Space] (选择型设定)键可以往下降");
        ms.forceStartQuest(32202);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
    } else {
        ms.dispose();
    }
}