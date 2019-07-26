/*
 * 冒险家剧情 - 48
 * 地图：隐藏地图 - 明珠港 (4000005)
 */
function start() {
    ms.setDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
    //ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.effect_Direction("Effect/Direction3.img/goLith/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1"));
    ms.dispose();
}