/*
 * 暗影双刀剧情 - 02
 * 地图：金银岛之路 - 起点 (103050900)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.isQuestActive(2600)) {
        pi.warp(103050910, 0);
    } else {
        pi.systemMessage("先和红雅谈话，然后再开始你的旅程。");
    }
}