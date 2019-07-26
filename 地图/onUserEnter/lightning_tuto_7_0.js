/*
 * 夜光剧情 - 15
 * 地图：秘密地图 - 最后的决战 (927020100)
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
        ms.playVideoByScript("Luminous.avi");
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(910141040, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
