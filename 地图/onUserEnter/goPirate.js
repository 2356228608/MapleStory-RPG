/*
 * 冒险家剧情 - 39
 * 地图：1020500
 */
function start() {
    ms.effect_Direction("Effect/Direction3.img/pirate/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}