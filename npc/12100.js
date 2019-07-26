/*
 * 冒险家剧情 - 24
 * 地图：枫叶路 - 冒险家的修炼场入口 (4000021)
 * Npc名称：麦加
 */
var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.askMenu("你想巩固基础的话，这里再合适不过了。你想在哪里修炼呢？\r\n#b#L0#冒险家的修炼场1#l\r\n#b#L1#冒险家的修炼场2#l\r\n#b#L2#冒险家的修炼场3#l\r\n#b#L3#冒险家的修炼场4#l\r\n");
    } else if (status == 1) {
        sel = selection;
        if (selection == 0) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000022, 4);
                cm.dispose();
            } else {
                cm.warp(1010100, 4);
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000023, 4);
                cm.dispose();
            } else {
                cm.warp(1010200, 4);
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000024, 4);
                cm.dispose();
            } else {
                cm.warp(1010300, 4);
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getPlayer().getMapId() == 4000021) {
                cm.warp(4000025, 4);
                cm.dispose();
            } else {
                cm.warp(1010400, 4);
                cm.dispose();
            }
        }
    }
}