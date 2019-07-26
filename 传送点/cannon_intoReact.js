/*
 * 神炮王剧情 - 11
 * 地图：可可岛 - 可可岛附近海域 (3000400)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.isQuestActive(2565)) {
        pi.effect_OnUserEff("UI/tutorial.img/cannon/3");
        return true;
    }
    return false;
}