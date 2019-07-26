/*
 * 冒险家剧情 - 30
 * 地图：枫叶路 - 选择之岔路 (4000026)
 * Npc名称：赫丽娜
 * Npc职称：弓箭手转职官
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            cm.sendNext("你想体验一下弓箭手职业的话，请再来找我吧。");
            cm.dispose();
            return;
        }
        status--;
    }

    if (cm.getMapId() != 921170016) {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendNext("主线任务。");
    } else if (status == 1) {
        cm.askYesNo("你要是否接受主线任务吗？");
    } else if (status == 2) {
        cm.forceCompleteQuest(62458);
		cm.forceCompleteQuest(62462);
		cm.forceCompleteQuest(62464);
		cm.getPlayer().levelUp();
        cm.warp(10000, 0);
        cm.dispose();
    }
}