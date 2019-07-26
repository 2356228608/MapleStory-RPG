/*
 * 阴阳师剧情 - 20
 * 地图：枫叶山丘 - 枫叶坡道1 (807010000)
 * 任务：挡住敌人视线2(57409)
 * 等级：17以上
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
        qm.sendNext_Illus("啊，是神那呀。你也要一起参加击退侦察兵的任务吧？这毕竟是来到“这边”之后的首次出征，还请你千万不要太勉强了啊。");
    } else if (status === i++) {
        qm.sendNextPrevS("兼续你也接到了同样的任务啊。你已经击退多少侦察兵了？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("哈哈。我也和你一样，遇到这次的异常变化后，完全发挥不出原本的力量了。所以也没有立下什么功绩。这次的侦察兵不过只击退了40多名而已。");
    } else if (status === i++) {
        qm.sendNextPrevS("……");
    } else if (status === i++) {
        qm.askAcceptDecline_Illus("啊，那边又出现侦察兵了……我先过去了！");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("……输给他，是不是让你觉得挺不甘心的？", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("这不过是个任务而已。根本没有什么胜负之分，也就谈不上什么甘心不甘心的了。不过……我觉得目前击退的侦察兵数量不够，还算不上是彻底阻止了敌人的查探。有必要再去多击退一点敌兵才行。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("你就不能老实承认了吗……", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("（颤抖）");
    } else if (status === i++) {
        qm.sendNext_Illus("哦哦，好可怕好可怕……", 9130081);
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
        qm.sendNext_Illus("神那，你还没有离开战场啊。毛利大人已经发来消息说，可以从战场上撤退了。");
    } else if (status === i++) {
        qm.sendNextPrevS("我只是希望能彻底阻止敌人的侦查。我可不喜欢做事情半吊子。顺便问一下，刚才分开之后，兼续你又击退了多少敌兵呢？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("和刚才相比并没有什么太大的变化。只是多击倒了70多名杂兵而已。");
    } else if (status === i++) {
        qm.sendNextPrevS("……（啪嗒）");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("（啊，这家伙的血管都被气炸了……）", 9130081);
    } else if (status === i++) {
        qm.askYesNo_Illus("好了，我还要继续去寻找谦信大人，所以还不能离开战场。神那你就不要太勉强自己了，赶紧回去吧。");
    } else {
        qm.forceStartQuest();
        qm.gainExp(345);
        qm.dispose();
    }
}