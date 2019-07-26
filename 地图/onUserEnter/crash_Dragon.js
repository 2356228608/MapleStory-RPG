/*
 * 龙神剧情 - 25
 * 地图：动画 - 教程2 (900090102)
 */
function action(mode, type, selection) {
    ms.setDirectionMode(true);
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.effect_Direction("Effect/Direction4.img/crash/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1"));
    ms.dispose();
}