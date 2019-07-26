/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020110)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.isQuestActive(22007)) {
                cm.sendNext("#b(You have obtained an Egg. Deliver it to Utah.)#k");
                cm.gainItem(4032451, 1);
            } else {
                cm.sendOk("#bYou don't need to take an egg now.#k");
            }
            cm.dispose();
        }
    }
}