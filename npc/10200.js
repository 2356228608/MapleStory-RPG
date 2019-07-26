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

    if (cm.getMapId() != 1020000 && cm.getMapId() != 4000026) {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendNext("弓箭手是敏捷性和力量兼备的职业。负责在战场后方进行远距离攻击。擅长利用地形进行狩猎。");
    } else if (status == 1) {
        cm.askYesNo("你要体验一下弓箭手职业吗？");
    } else if (status == 2) {
        cm.setDirectionMode(true);
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.warp(1020300, 0);
        cm.dispose();
    }
}