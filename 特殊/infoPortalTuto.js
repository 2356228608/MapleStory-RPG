/*
 * 冒险家剧情 - 04
 * 地图：陌生空间 - 漏出来的光芒 (4000001)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextS("好像可以通过那个缝隙到外面去，不过有铁链挡着。尝试打断铁链吧。");
    } else {
        cm.effect_OnUserEff("UI/tutorial.img/22");
        cm.dispose();
    }
}