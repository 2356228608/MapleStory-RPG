/*
 * 战神剧情 - 35
 * 地图：冰雪岛 - 寒冷森林5 (140090500)
 */
function enter(pi) {
    if (pi.getInfoQuest(21019).equals("helper=clear")) {
        pi.updateInfoQuest(21019, "miss=o;helper=clear");
        pi.hireTutor(false);
    }
}