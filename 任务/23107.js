/*
 * 反抗者任务
 * 地图：反抗者本部 - 秘密广场 (310010000)
 * 任务：第一个任务(23107)
 * 等级：14以上
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    
    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext("欢迎你，#h0#。我是负责反抗者的对外任务的#p2151003#。在村子之外的地方见面，感觉好像有点别扭。");
    } else if (status === i++) {
        qm.sendNextPrev("其实我应该是飞侠教官，但你也知道，反抗者是没法培养出飞侠的，所以我就负责了这项工作。");
    } else if (status === i++) {
        qm.sendNextPrev("总之我负责的是对外任务，今后你和我见面的次数可能要比你的转职教官#p2151001#还要多。在黑色之翼被赶出这个地方之前，执行任务的时候一定要做好万全的准备。");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(1500);
    } else {
        qm.dispose();
    }
}