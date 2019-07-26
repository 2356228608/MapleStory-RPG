function enter(pi) {
    if (pi.getPlayer().getMapId() == 744000008 && pi.getPlayer().getParty() != null && pi.haveItem(4001137) && pi.isLeader()) {
        pi.warpParty(744000014); //??????
        pi.gainItem(4001137, -1);
        pi.playPortalSE();
    } else {
        if (pi.getPlayer().getMapId() == 744000008) {
            pi.playerMessage(5, "璇风‘璁や?????瀹?????璇?绛?棰?锛?");
        }
    }
    if (pi.getPlayer().getMapId() == 744000014 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410183) && pi.isLeader()) {
        pi.warpParty(744000013); //绌烘??瀹?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000013 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410182) && pi.isLeader()) {
        pi.warpParty(744000015); //涔?????
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000015 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410184) && pi.isLeader()) {
        pi.warpParty(744000003); //?￠?垮??
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000003 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410178) && pi.isLeader()) {
        pi.warpParty(744000002); //浠?搴?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000002 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410179) && pi.isLeader()) {
        pi.warpParty(744000006); //搴?寮?????瀹?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000006 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410147) && !pi.haveMonster(9410148) && !pi.haveMonster(9410149) && !pi.haveMonster(9410150) && !pi.haveMonster(9410151) && pi.isLeader()) {
        pi.warpParty(744000007); //??????璋?瀹?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000007 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410171) && pi.isLeader()) {
        pi.warpParty(744000004); //缇?????
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000004 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410177) && pi.isLeader()) {
        pi.warpParty(744000010); //浣??查??
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000010 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410180) && pi.isLeader()) {
        pi.warpParty(744000009); //瀹舵?垮??
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000009 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410187) && !pi.haveMonster(9410188) && !pi.haveMonster(9410189) && pi.isLeader()) {
        pi.warpParty(744000011); //绉?瀛?瀹?楠?瀹?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000011 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410190) && pi.isLeader()) {
        pi.warpParty(744000012); //?句功瀹?
        pi.playPortalSE();
    } else if (pi.getPlayer().getMapId() == 744000012 && pi.getPlayer().getParty() != null && !pi.haveMonster(9410181) && pi.isLeader()) {
        pi.warpParty(744000001); //灞?椤?
        pi.playPortalSE();
    } else {
        if (pi.getPlayer().getMapId() != 744000008) {
            pi.playerMessage(5, "璇风‘璁ゅ????板?炬????杩?瀛??ㄦ???╋?");
        }
    }
}