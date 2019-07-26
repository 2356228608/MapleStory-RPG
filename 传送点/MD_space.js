


        /*
         
         ??缁? ???肩?? 瀹惰?? ?跺??璧?椋? 娑???淇?.
         
         ?ㄥ???? 涔?缁? ?? : 绗???璧? ?????? 杈? 1
         
         ?ㄥ?? 姹茬?? : ?鸿??甯??? 娑???
         
         
         */

        var map = 220070001;
var exit = 220070000;

function enter(pi) {
    if (pi.getPlayer().getMapId() == map) {
        var eim = pi.getEventInstance();
        if (eim == null) {
            pi.warp(exit);
            return true;
        }
        eim.removePlayer(pi.getPlayer());
        pi.warp(exit);
        pi.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵?杈? 纭煎??娌??艰??淇?.");
        return true;
    } else {
        var em = pi.getEventManager("MiniDungeon");
        if (em == null) {
            pi.getPlayer().message(5, "?鸿??甯??? ?跺??璧?椋?淇? ?峰??? ??绉?娌??艰??淇?. GM淇??? 宸╃?肩Е ????澶?.");
            return false;
        }
        if (pi.getPlayer().getParty() != null) {
            if (!pi.allMembersHere()) {
                pi.getPlayer().message(5, "棰??????? ??婊? ????涔?缁㈠?? 娑???涓? ?? 涔??艰??淇?.");
                return false;
            }
            if (!pi.isLeader()) {
                pi.getPlayer().message(5, "棰??????? 娑???涓? ?? 涔??艰??淇?.");
                return false;
            }
            em.setProperty("Leader_" + pi.getPlayer().getParty().getLeader().getId() + "_Exit", pi.getPlayer().getMapId() + "");
            em.setProperty("Leader_" + pi.getPlayer().getParty().getLeader().getId() + "_Map", map + "");
            em.startInstance(pi.getParty(), pi.getPlayer().getMap());
            pi.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵? 娑????昏???艰??淇?.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        } else {
            em.setProperty("Leader_" + pi.getPlayer().getId() + "_Exit", pi.getPlayer().getMapId() + "");
            em.setProperty("Leader_" + pi.getPlayer().getId() + "_Map", map + "");
            em.startInstance(pi.getPlayer());
            pi.getPlayer().message(5, "?鸿??甯??? ?㈣?剁???朵? 娑????昏???艰??淇?.");
            var eim = pi.getPlayer().getEventInstance();
            eim.startEventTimer(7200000);
            return true;
        }
    }


}
