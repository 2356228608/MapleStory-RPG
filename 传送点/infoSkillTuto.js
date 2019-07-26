/*
 * 冒险家剧情 - 16
 * 地图：枫叶路 - 小树林 (4000013)
 */
function enter(pi) {
    if (pi.getQuestStatus(32207) == 2) {
        pi.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/cygnusTutorial/7");
        return true;
    }
}
