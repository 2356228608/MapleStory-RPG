function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.openNpc(9330192);
    } else {
        pi.playerMessage(5, "璇风‘璁ゅ????板?炬????杩?瀛??ㄦ???╋?");
    }
}