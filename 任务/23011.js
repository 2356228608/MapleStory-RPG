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
        qm.askYesNo("你决心成为一名唤灵斗师吗？现在还可以重新选择。只要停止对话，放弃任务，然后和其他人对话就行。你要考虑清楚。你真的要选择唤灵斗师吗？你觉得这个职业适合你的反抗者之路吗？");
    } else if (status == 1) {
        if (qm.getJob() == 3000) {
            qm.gainItem(1382100, 1);
            qm.gainItem(1142242, 1);
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(3200);
            qm.teachSkill(30001281, 1, 0);//秘密广场紧急集结
            qm.teachSkill(30000074, 1, 0);//自由化身（魔法师）
        }
        qm.forceCompleteQuest();
        qm.sendNext("很好！欢迎你正式成为反抗者。从现在开始你就是唤灵斗师了。作为一名战斗的魔法师，希望你能勇敢地冲在最前面和敌人战斗。");
    } else if (status == 2) {
        qm.sendNext("你不能在外面自称是唤灵斗师。如果被黑色之翼抓住了的话，就麻烦了。从现在起，你要把我叫做班主任。你是因为特别课程才到教室这里来的。呵呵……特别课程由我负责，我会好好带你的。");
        qm.safeDispose();
    }
}

