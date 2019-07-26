/*
 * 反抗者剧情 - 05
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：阿班
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("切，我们自己玩吧，别管胆小鬼阿俊。但为什么一定要玩捉迷藏呢？像个小孩子，太幼稚了……");
    } else if (status === i++) {
        cm.sendOk("都已经来了，总不能不玩吧……");
        cm.dispose();
    } else {
        cm.dispose();
    }
}