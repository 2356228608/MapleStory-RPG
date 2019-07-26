/*
 * 冒险家剧情 - 37
 * 地图：1020400
 */
function start() {
    ms.effect_Direction("Effect/Direction3.img/rogue/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}