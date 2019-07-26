/*
 * 反抗者剧情 - 21
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000020)
 * @author 狐狸糊涂
 */
function start() {
    ms.dispose();
    if (ms.getInfoQuest(23007).indexOf("vel01=2") != -1 && ms.getInfoQuest(23007).indexOf("vel01=3") == -1) {
        ms.openNpc(2159007);
    }
}