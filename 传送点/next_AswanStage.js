function enter(pi) {
    if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
        pi.warpParty(pi.getPlayer().getMapId() + 100);
        pi.playPortalSE();
    } else {
        pi.playerMessage(5, "璇风‘璁ゅ????板?炬????杩?瀛??ㄦ???╋?");
    }
}