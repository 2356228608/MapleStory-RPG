/*
 * 反抗者任务 - 01
 * 地图：反抗者本部 - 训练室入口 (310010010)
 * 任务：反抗者的培训生(23100)
 * 等级：10以上
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

    if (status == 0) {
        qm.sendNext("没想到我们又在这里见面了，恭喜你成为反抗者，从一开始你的特殊能力就让人瞩目，我相信#p2151001#肯定也是在你身上感受到了什么，才会将你送来了这里。");
    } else if (status == 1) {
        qm.sendNextPrev("既然你已经成为了反抗者，就得认真修炼，好好升级了吧？别担心，我会慢慢将反抗者该具备的素质一点点教给你的。");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}