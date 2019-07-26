/*
 玩具城任务NPC
 */

        function start() {
            if (cm.getMapId() != 922010000) {
                cm.askYesNo("你确放弃任务,从这里出去重新开始吗?");
            } else {
                if (cm.haveItem(4001022)) {
                    cm.removeAll(4001022);
                }
                if (cm.haveItem(4001023)) {
                    cm.removeAll(4001023);
                }
                cm.warp(910002000, 0);
                cm.dispose();
            }
        }

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(922010000, 0);
    }
    cm.dispose();
}