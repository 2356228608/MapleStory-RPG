/*
 Return from Free Market Script
 */
 
/*  This is mada by Bug51Hjj_v150.1.6.10
 *	修改内容：自由市场出去默认到自由市场
 *  @Author Bug51Hjj_v150.1.6.10
 */

function enter(pi) {
    var returnMap = pi.getSavedLocation("FREE_MARKET");
    pi.clearSavedLocation("FREE_MARKET");

    // pi.worldSpouseMessage(0x20, "[debug]" + returnMap);

    if (returnMap < 0) {
        returnMap = 102000000; // to fix people who entered the fm trough an unconventional way
    }
    var target = pi.getMap(returnMap);
    var portal;

    if (target == null || returnMap == 950000100) {
        pi.warp(100000000, 0);
        return;
    }

    if (returnMap == 230000000) { // aquaroad has a different fm portal - maybe we should store the used portal too?
        portal = target.getPortal("market01");
    } else {
        portal = target.getPortal("market00");
    }
    if (portal == null) {
        portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
        pi.getPlayer().changeMap(target, portal);
    }
    // pi.warp(910000000,0);
}