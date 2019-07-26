function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() < 1) {
		pi.getEA();
        pi.spawnMonster(9001050, 10, 235, 65);
    }
}