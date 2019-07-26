/*
 * 阴阳师剧情 - 07
 * 地图：本能寺 - 本能寺小路 (807100102)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.openNpc(9131010);
    } else {
        pi.topMsg("打倒所有的敌方阴阳师吧！");
    }
}