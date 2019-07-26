/*
 * 神炮王剧情 - 04
 * 地图：航行中 - 蒙奇方位 (912060100)
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
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/Scene00");
        ms.effect_Direction("Effect/Direction4.img/cannonshooter/out00");
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true);
        ms.dispose();
    }
}