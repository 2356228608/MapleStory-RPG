/*
 * 剑豪剧情 - 20
 * 地图：枫叶山丘 - 枫叶坡道1 (807010000)
 * 任务：寻找武田信玄1(57110)
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
        qm.askYesNo("啊啊，你……你不是姐崎剑斗吗？");
    } else if (status === i++) {
        qm.sendNext("啊，真是太好了。没想到能在这种腹背受敌的境况下遇到剑斗你，看来幸运之神还没有抛弃我真田幸村啊。");
    } else if (status === i++) {
        qm.sendNextPrevS("啊，真是太好了。没想到能在这种腹背受敌的境况下遇到剑斗你，看来幸运之神还没有抛弃我真田幸村啊。");
    } else if (status === i++) {
        qm.sendNextPrev("在本能寺战斗的时候，我突然被一团不可思议的光芒包裹。等我再次醒来的时候，就出现在了这个陌生的地方。还没等我反应过来呢，我就遭到了织田军的袭击。但是身体实在不听使唤，所以只能悄悄躲藏了起来。");
    } else if (status === i++) {
        qm.sendNextPrev("最初醒来的时候，我的主公信玄大人也和我待在一起。但是，在共同对抗敌兵的时候，我们两人也完全被分散了。");
    } else {
        qm.forceCompleteQuest();
        qm.gainExp(2574);
        qm.dispose();
    }
}