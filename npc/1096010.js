/*
 * 神炮王剧情 - 13
 * 地图：可可岛 - 可可岛对岸 (3000500)
 * @author 狐狸糊涂
 */
function action(mode, type, selection) {
    if (cm.isQuestActive(2566) && !cm.haveItem(4032985, 1)) {
        cm.gainItem(4032985, 1);
        cm.sendNext("发现了点火装置，拿回去交给司徒诺吧。");
    }
    cm.dispose();
}