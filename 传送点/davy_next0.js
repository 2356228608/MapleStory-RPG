﻿function enter(pi) {
    if (pi.haveItem(4001260, 7) && pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        pi.warpParty(925100100, 0);
    } else {
        pi.playerMessage(5, "璇锋?堕????娴风??绠卞?????ュ??7涓?骞舵???????????,??????娉???杩?!");
    }
}