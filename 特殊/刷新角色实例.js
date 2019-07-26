/*
 * 地图：彩虹岛 - 枫树山丘 (10000)
 * @author 狐狸糊涂
 */
/*
 * 龙神剧情 - 15
 * 地图：梦中 - 梦中的森林 (900010200)
 * Npc名称：龙
 */
var status = -1;
var p;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else if (status === i++) {
            cm.getRecalcLocalStats();
			cm.getEA();
			cm.playerMessage(1,"由于剧情问题,请小退再进游戏,要不然出现在当前地图无法更换装备.");
			cm.dispose();
        } else {
            cm.dispose();
        }
}