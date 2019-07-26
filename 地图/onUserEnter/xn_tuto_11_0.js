/*
 * 尖兵剧情 - 15
 * 地图：视频 - 教程0 (931050990)
 * @author 狐狸糊涂
 */
﻿var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        ms.playVideoByScript("xenon.avi");
        ms.curNodeEventEnd(true);
    } else {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(931060060, 0);
        ms.dispose();
        ms.enableActions();
    }
}
