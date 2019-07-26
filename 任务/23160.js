/*
 * 反抗者转职
 * 地图：反抗者本部 - 秘密广场 (310010000)
 * 任务：唤灵斗师之路(23011)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("请慎重选择。慎重一点不是什么坏事。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        qm.askYesNo("你已经决心成为爆破手了吗？你还有可以推翻这个选择的机会，结束对话，放弃任务后，只要对其他家伙说话就好。好好考虑，你真的打算当爆破手吗？你真的觉得这个职业适合你吗？");
    } else if (status == 1) {
        qm.changeJob(3700);
        qm.forceCompleteQuest();
        qm.dispose();
    }

}
