/*
 * 反抗者剧情 - 23
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000020)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.getInfoQuest(89741).equals("arr1=o;arr0=o;mo1=o;mo2=o;mo3=o")) {
        pi.updateInfoQuest(89741, "arr2=o;arr1=o;arr0=o;mo1=o;mo2=o;mo3=o");
        pi.openNpc(2159008);
        return true;
    }
    return false;
}
