/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020110)
 */
function enter(pi) {
    if (pi.getInfoQuest(22014).equals("mo30=o;mo40=o;mo41=o;mo42=o;mo50=o;mo60=o")) {
        pi.updateInfoQuest(22014, "mo30=o;mo40=o;mo41=o;mo50=o;mo42=o;mo60=o;egg=o");
        pi.evanTutorial("UI/tutorial/evan/8/0");
        return true;
    }
//    if (pi.getInfoQuest(22014).equals("mo30=o;mo40=o;mo41=o;mo50=o;mo42=o;mo60=o;egg=o")) {
//        return false;
//    }
//    pi.updateInfoQuest(22014, "mo30=o;mo40=o;mo41=o;mo50=o;mo42=o;mo60=o;egg=o");
//    pi.evanTutorial("UI/tutorial/evan/8/0");
//    return true;
}