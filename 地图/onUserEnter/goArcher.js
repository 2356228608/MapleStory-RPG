/*
 * 冒险家剧情 - 31
 * 地图：1020300
 */
function start() {
    ms.effect_Direction("Effect/Direction3.img/archer/Scene" + (ms.isQuestFinished(32214) ? "0" : "1"));
    ms.dispose();
}