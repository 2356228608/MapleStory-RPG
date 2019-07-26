/*
 * 反抗者剧情 - 04
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：小伶俐
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("背着大人偷偷地出来，我有点紧张。虽然可能会被骂，但好不容易有哥哥姐姐陪我玩，就算被骂也没关系。");
    } else if (status === i++) {
        cm.dispose();
    } else {
        cm.dispose();
    }
}