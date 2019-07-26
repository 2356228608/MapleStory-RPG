/*
 * 龙神剧情 - 25
 * 地图：动画 - 转职 (900090103)
 */
function action(mode, type, selection) {
    ms.setDirectionMode(true);
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.effect_Direction("Effect/Direction4.img/getDragonEgg/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1"));
    ms.dispose();
}