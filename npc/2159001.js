/*
 * 反抗者剧情 - 02
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：乌里卡
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    //迟到的人找人，难道不是理所当然的吗！必须你来找我们！
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("#h0#，你来晚了。捉迷藏现在开始。既然已经到了大人不许来的地方，就应该好好玩玩。");
    } else if (status === i++) {
        cm.askYesNo("你来晚了，你来找我们。我们现在躲起来。你到前面的大树那里数到10。");
    } else if (status === i++) {
        cm.warp(931000001, 1);
        cm.dispose();
    } else {
        cm.dispose();
    }
}