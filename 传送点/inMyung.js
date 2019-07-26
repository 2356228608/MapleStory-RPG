/*
 * 暗影双刀任务 - 帮内拉做事(2614)
 * 地图：废弃都市 - 废弃都市 (103000000)
 * 任务：帮内拉做事(2614)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.isQuestActive(2614)) {
        pi.warp(910350200, 1);
    } else {
        pi.warp(103000002, 8);
    }
}