/*
 * 剑豪剧情 - 22
 * 地图：枫叶山丘 - 枫叶坡道2 (807010100)
 * 任务：确保退路(57113)
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
        qm.sendNext_Illus("虽然完全搞不清楚状况，但当务之急是先从这里逃出去才行。你知不知道有什么地方适合藏身啊？");
    } else if (status === i++) {
        qm.sendNextPrevS("离开这个坡道并登上丘陵，就能看到我们在“这边”作为据点的阵地了。只要能到达那里，我们就安全了。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("啊哈哈，看来在我不知道的地方又发生了不少事情啊。 没想到居然又建起了一座新的阵地。不过，我现在实在是太累了，恐怕很难和你一起突破这个包围网了啊。");
    } else if (status === i++) {
        qm.askAcceptDecline_Illus("可不可以请你帮忙减少一些敌兵的数量呢？只要包围网能变得薄弱一点，我应该也能突破这里，和你一起回去了。");
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.sendNext_Illus("啊哈哈，我就喜欢你这种充满自信的回答。好了，那就请你帮忙减少30名敌兵吧。");
    } else {
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
        qm.askYesNo_Illus("你敌兵的数量减少得差不多了吗？");
    } else if (status === i++) {
        qm.sendNext_Illus("很好，这样一来，我应该也能够突破这个包围网了。就拜托你帮忙介绍一下你刚刚提到的新阵地吧。");
    } else {
        qm.forceCompleteQuest();
        qm.gainExp(554);
        qm.dispose();
        qm.warp(807000000, 0);
    }
}