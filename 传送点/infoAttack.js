function enter(pi) {
    if (pi.isQuestActive(1035)) {
        pi.effect_OnUserEff("UI/tutorial.img/20");
        return true;
    }
    return false;
}