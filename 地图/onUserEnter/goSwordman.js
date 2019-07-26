/*
 * 冒险家剧情 - 35
 * 地图：1020100
 */
function start() {
    ms.effect_Direction("Effect/Direction3.img/swordman/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}