function enter(pi) {
    if (pi.getPlayer().getMapId() == 105200100) {
        pi.openNpc(1064013, 2); //????????
    } else if (pi.getPlayer().getMapId() == 105200500) {
        pi.openNpc(1064013, 2); //杩??跺????
    } else if (pi.getPlayer().getMapId() == 105200200) {
        pi.openNpc(1064012, 2); //????????灏?
    } else if (pi.getPlayer().getMapId() == 105200600) {
        pi.openNpc(1064012, 2); //杩??剁????灏?
    } else if (pi.getPlayer().getMapId() == 105200400) {
        pi.openNpc(1064015, 2); //????璐?浼?
    } else if (pi.getPlayer().getMapId() == 105200800) {
        pi.openNpc(1064015, 2); //杩??惰?浼?
    } else if (pi.getPlayer().getMapId() == 105200300) {
        pi.openNpc(1064014, 2); //????琛??ュコ??
    } else if (pi.getPlayer().getMapId() == 105200700) {
        pi.openNpc(1064014, 2); //杩??惰??ュコ??
    }
    return true;
}