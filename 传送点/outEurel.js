function enter(pi) {
    if(pi.getQuestStatus(24040)==1){
		//pi.openNpc(2008,"双弩24040剧情");
		pi.forceStartQuest(24093, "1");
	} else {
        pi.warp(101050100, 0);
    }
}