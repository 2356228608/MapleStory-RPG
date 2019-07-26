/*
 * 反抗者剧情 - 13
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：可疑的洞
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    //#b(就算是阿班，应该也不会躲在这里吧……应该不会吧？)#k
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.askYesNo("#b(看起来很可疑的洞。不知道阿班会不会躲在里面。要进去看看吗？)#k");
    } else if (status === i++) {
        cm.gainExp(35);
        cm.warp(931000010, 0);
        cm.dispose();
    }
}