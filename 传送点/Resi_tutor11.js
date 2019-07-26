/*
 * 反抗者剧情 - 01
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.getInfoQuest(89741).equals("")) {
        pi.updateInfoQuest(89741, "arr0=o;mo1=o;mo2=o;mo3=o");
        pi.openNpc(2159001);
        return true;
    }
    return false;
}
