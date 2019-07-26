/*
 * 恶魔剧情 - 17
 * 地图：秘密地图 - 决战动画播放 (931050300)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.playVideoByScript("DemonSlayer" + (ms.getPlayerStat("GENDER") == 0 ? "1" : "2") + ".avi");
    } else {
        ms.warp(931050000, 0);
        ms.dispose();
    }
}