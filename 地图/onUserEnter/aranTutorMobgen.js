/*
 * 战神剧情 - 10 15 19
 * 地图：黑暗领主 - 燃烧森林1 (914000200)
 * 地图：黑暗领主 - 燃烧森林2 (914000210)
 * 地图：黑暗领主 - 燃烧森林3 (914000220)
 */
function start() {
    if (ms.getMapId() == 914000200) {
        ms.spawnMob(9300379, 2099, 2);
        ms.spawnMob(9300379, 1799, 2);
        ms.spawnMob(9300379, 1515, 2);
        ms.dispose();
    }
    if (ms.getMapId() == 914000210) {
        ms.spawnMob(9300380, 667, 2);
        ms.spawnMob(9300380, 382, 2);
        ms.spawnMob(9300380, 97, 2);
        ms.dispose();
    }
    if (ms.getMapId() == 914000220) {
        ms.spawnMob(9300381, -716, 2);
        ms.spawnMob(9300381, -839, 2);
        ms.spawnMob(9300381, -1046, 2);
        ms.spawnMob(9300381, -1186, 2);
        ms.spawnMob(9300381, -1332, 2);
        ms.dispose();
    }
}