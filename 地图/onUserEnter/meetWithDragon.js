/*
 * 龙神剧情 - 10
 * 地图：动画 - 教程0 (900090100)
 */
function action(mode, type, selection) {
    ms.setDirectionMode(true);
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.effect_Direction("Effect/Direction4.img/meetWithDragon/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1"));
    ms.dispose();
}