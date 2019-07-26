/*
 * 剑豪剧情 - 18
 * 阴阳师剧情 - 18
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：无法发挥的力量(57105)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.isQuestActive(57106) || pi.isQuestActive(57404)) {
        pi.warp(807030000);
    }
    if (pi.isQuestActive(57107) || pi.isQuestActive(57405)) {
        pi.warp(807030100);
    }
    if (pi.isQuestActive(57108) || pi.isQuestActive(57406)) {
        pi.warp(807030200);
    }
}