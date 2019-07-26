/*
 * 冒险家剧情 - 47
 * 地图：隐藏地图 - 冒险家动画 (4000004)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.playVideoByScript("adventurer.avi");
        ms.curNodeEventEnd(true);
        ms.dispose();
    } else if (status == 1) {
//        if (mode == 0) {
//            ms.topMsg("影片播放失败。");
//        }
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(4000005, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
	