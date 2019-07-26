function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.warp(271040100, 0);
    } else {
        pi.playerMessage("希纳斯封锁着这个出口.");
    }
}