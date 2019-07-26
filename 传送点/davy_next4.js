function enter(pi) {
    if (pi.getMap().getReactorByName("sMob1").getState() >= 1 && pi.getMap().getReactorByName("sMob2").getState() >= 1 && pi.getMap().getReactorByName("sMob3").getState() >= 1 && pi.getMap().getReactorByName("sMob4").getState() >= 1) {
        if (pi.isLeader() && pi.haveItem(4001117, 20)) {
            pi.warpParty(925100500);
        } else {
            pi.playerMessage(5, "璇锋?堕??楠烽???ュ??20涓?,??????娉???杩?!");
        }
    } else {
        pi.playerMessage(5, "璇峰?抽???????ュ??,??????娉???杩?!");
    }
}