/*
 * 阴阳师剧情 - 20
 * 地图：枫叶山丘 - 枫叶坡道2 (807010100)
 * 任务：挡住敌人视线4(57411)
 * 等级：18以上
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextS("谦信大人，真高兴看到你平安无事。你才刚到达“这边”，恐怕还没办法完全发挥原本的实力……");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("神那，敌人就在周围，而刀剑就在我的手中。这里是战场，战场就是尽情享受战斗的地方，并不是用来谈天说地的地方。我也有一些事情想要问你，但是在此之前，让我们先痛痛快快大战一场，然后再来聊天吧。嘿！");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("……这就走了啊……", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("嗯……也好。反正我也有事情要做，#r#o9421512##k就在这附近。先击倒50人再说吧。");
    } else if (status === i++) {
        qm.askAcceptDecline_Illus("……你不会是想要和那个军神比高低吧？", 9130081);
    } else {
        qm.forceStartQuest();
        qm.dispose();
    }
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
        qm.askYesNo_Illus("神那，这一战打得还痛快吗？");
    } else if (status === i++) {
        qm.sendNextS("嗯，我出了一头汗，感觉真是爽快。");
    } else if (status === i++) {
        qm.sendNextPrevS("顺便问一下，你击败了多少个敌兵啊？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("嗯？让我想想。一开始我还饶有兴致地数了一下。但是超过200人之后觉得计数实在是太麻烦了，就没有继续数");
    } else if (status === i++) {
        qm.sendNextPrevS("……谦信大人真不愧是军神啊。虽然身体的状态明显不同以往，但还能战得如此勇猛。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("（纵使神那再怎么不服输，也没办法胜过这个军神啊。）", 9130081);
    } else if (status === i++) {
        qm.sendNextPrev_Illus("听你这么说，你应该知道这里到底是怎么一回事吧。我本以为又是因为自己在战斗之前喝了点酒睡了过去，所以才被带到这么一个莫名其妙的地方来的。看来并不是这么一回事啊。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("（这女人刚才居然说了一个“又”字！）", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("这里的情况比较混乱，实在不适合长谈。这附近有个名为#b#m807000000##k的新阵地。我们还是先返回阵地，再让我慢慢把情况告诉你吧。好了，我来帮忙带路。");
    } else {
        qm.forceStartQuest();
        qm.warp(807000000, 2);
        qm.dispose();
    }
}