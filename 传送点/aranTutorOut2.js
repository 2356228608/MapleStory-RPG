/*
 * 战神剧情 - 14
 * 地图：黑暗领主 - 燃烧森林1 (914000200)
 */
function enter(pi) {
    pi.teachSkill(20000014, 0, -1);
    pi.teachSkill(20000015, 0, -1);
    pi.teachSkill(20000014, 1, 0);
    pi.teachSkill(20000015, 1, 0);
    pi.playPortalSE();
    pi.warp(914000210, 1);
}