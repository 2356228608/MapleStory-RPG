/*
 * 冒险家剧情 - 44
 * 地图：隐藏地图 - 香格里拉号船内 (4000033)
 */
function start() {
    ms.resetMap(ms.getMapId());
    ms.spawnMob(9300815, -300, 150);
    ms.topMsg("请击退红蜗牛王。");
    ms.dispose();
}
