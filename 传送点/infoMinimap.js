function enter(pi) {
    if (pi.isQuestActive(1031)) {
        pi.effect_OnUserEff("UI/tutorial.img/25");
        return true;
    }
    return false;
}