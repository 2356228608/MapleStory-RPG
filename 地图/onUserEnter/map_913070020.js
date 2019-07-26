/*
 * 米哈尔剧情 - 09
 * 地图：秘密地图 - 杂货店后院 (913070020)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.topMsg("杂货店后院");
        ms.resetMap(ms.getMapId());
        if (!ms.isQuestFinished(20033)) {
            ms.spawnMob(9001051, 229, 65);
        }
        ms.dispose();
    } else {
        ms.dispose();
    }
}