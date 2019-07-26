function enter(pi) {
    if (pi.getQuestStatus(32205) == 1) {
        pi.effect_OnUserEff("UI/tutorial.img/21");
        return true;
    }
}
