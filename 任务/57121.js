/*
 * 剑豪剧情 - 25
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：寻找全新的力量(57121)
 * 等级：22以上
 * @author 狐狸糊涂
 */
//任务暂时有问题，官方的原因做不了
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
        qm.sendNext_Illus("我听说，你似乎还是没有把樱乃姬给救出来啊。");
    } else if (status == 1) {
        qm.sendNextPrevS("是的。非常遗憾，不仅没有救出来，就连她现在身在何处我都不知道。不知道她现在人在哪里，是不是平安无事啊。一想到这些，我就特别担心……");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("樱乃姬的血脉是进行次元之门开启仪式所必不可缺的人物。就算她仍旧落在织田军的手里，暂时应该也是性命无忧的。不过，如果织田军再一次进行了仪式，樱乃姬完成了自身的任务，那她就会彻底失去利用价值。织田军自然没有必要继续留她的性命。趁着现在还没有为时已晚，我们最好尽快找到她的行踪，并将她给救出来。");
    } else if (status === i++) {
        qm.sendNextPrevS("唔……我明白了。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("不过，你也不要太勉强自己啊。现在的你还没有彻底恢复力量。如果剑斗你强行突击，只会断送了自己的性命。到时候，不仅没有人能够救出樱乃姬，更没有人能够与信长抗衡了。这一点，你一定要牢牢记住才是。");
    } else if (status === i++) {
        qm.sendNextPrevS("(姬儿……我一定会立刻将你救出来的。我绝对不会让你一直沦为信长的道具。你一定要等我啊。)");
    } else {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}