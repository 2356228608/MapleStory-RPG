/*
 * 反抗者剧情 - 02
 * 地图：反抗者本部 - 训练室入口 (310010010)
 * Npc名称：温黛林
 * Npc职称：治疗负责人
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.askYesNo("你没有受伤吧？快去接受治疗吧。只要是反抗者的人，我随时会免费为你们治疗。");
    } else if (status === i++) {
        cm.getPlayer().getStat().heal(cm.getPlayer());
        cm.sendNext("好了，治疗结束了。");
        cm.dispose();
    } else {
        cm.dispose();
    }
}