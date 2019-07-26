/*
 * 剑豪剧情 - 16
 * 地图：枫叶山丘 - 陌生的山坡 (807040000)
 * 任务：此时在本能寺(57103)
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
        qm.askAcceptDecline("我是共同参加本能寺攻略战的尼子家家臣，我名为山中幸盛。在说明事情的来龙去脉之前，可不可以告诉我你的名字呢？");
    } else if (status === i++) {
        qm.sendNextS("我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。");
    } else if (status === i++) {
        qm.sendNextPrev("姐崎剑斗……真是久仰了。能见到鼎鼎有名的晓月流剑圣，实在是我的光荣。");
    } else if (status === i++) {
        qm.sendNextPrevS("阁下太客气了，能见到人称忠肝义胆的幸盛，才真是我的荣幸呢。如果知道你也参加了本能寺攻略战，我真应该早点过来和你打声招呼了。实在是太遗憾了。");
    } else if (status === i++) {
        qm.sendNextPrev("虽然还有很多话想说，但我现在还是先简单说明一下本能寺攻略战时候发生的问题，以及现在的情况吧。等你做好心理准备之后，再来和我进行对话吧。");
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
        qm.sendNext("我本以为你会为弄不清现在究竟是什么状况而感到混乱……还是说，你已经察觉到了呢？现在我们所处的地方和我们原本所在的日本并不相同。虽说看起来有些相似，但其实是完全不一样的两个地方。");
    } else if (status === i++) {
        qm.sendNextPrevS("看起来有些相似，但其实是完全不一样的两个地方？");
    } else if (status === i++) {
        qm.sendNextPrev("没错。说得再清楚一点吧，这里并不是日本。而是我们所不知道的完全陌生的世界。虽然不清楚究竟发生了什么事，但是在我们进行本能寺攻略战的途中，突然有一道耀眼的光柱从本堂方向射出。而后，我们就来到了这个完全未知的世界。而且，我们每个人所到达的时间点和位置都不一样。");
    } else if (status === i++) {
        qm.sendNextPrevS("未知的世界……？真的会有这样的事情发生吗？");
    } else if (status === i++) {
        qm.askYesNo("这个嘛，其实具体什么情况我也不太清楚。只不过，先我们一步到达这里的人聚在一起讨论的时候，得出了这样一个结果。先行到达的他们已经在这座丘陵之上建起了新的阵地。我们先一起到新的阵地去吧。");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(621);
        qm.dispose();
    }
}