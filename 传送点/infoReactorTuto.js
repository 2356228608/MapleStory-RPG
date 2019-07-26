/*
 * 冒险家剧情 - 04 19
 * 地图：枫叶路 - 危险森林 (4000014)
 */
function enter(pi) {
    if (pi.getMapId() == 4000001) {
        pi.openNpc(10310, "infoPortalTuto");
    } else {
        pi.effect_OnUserEff("UI/tutorial.img/22");
    }
    return true;
}

