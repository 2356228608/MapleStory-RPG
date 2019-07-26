function enter(pi) {
    if ((pi.getMapId() == 925060200) && (pi.getMap().getAllMonstersThreadsafe().size() > 0)) {
        pi.dojoAgent_NextMap(true, false);
    } else if (pi.getMap().getAllMonstersThreadsafe().size() > 1) {
        pi.playerMessage("杩????╀??????┿??");
    } else {
        pi.dojoAgent_NextMap(true, false);
    }
}