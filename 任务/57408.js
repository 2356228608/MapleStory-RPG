/*
 * 阴阳师剧情 - 20
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：挡住敌人视线1(57408)
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
        qm.sendNext_Illus("神那，刚刚负责盯守#b#m807000000##k外围的哨兵送来了一个不好的消息。他们说，似乎有身穿黑色甲胄的士兵出现在了这附近。");
    } else if (status === i++) {
        qm.sendNextPrevS("果然不出所料，织田军也来到“这边”这个世界了啊。也就是说，本能寺出现的异常变化不仅影响到了我们，也影响到了织田军自己。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("听哨兵的描述，这些士兵应该就是织田军的人。不过，敌兵的动作并没有什么组织性，他们也没有携带什么武器装备，应该是织田军的侦察兵吧。");
    } else if (status === i++) {
        qm.askAcceptDecline_Illus("他们现在应该还没有注意到我们这个本阵的存在。但要是再让他们这样侦查下去，恐怕#b#m807000000##k被敌人发现也不过是时间的问题了。我相信神那你应该有能力阻止敌人的侦查。不知道这个任务可不可以交给你来负责呢？");
    } else if (status === i++) {
        qm.sendPrev_Illus("太谢谢了，我就知道你是个值得信赖的人。从本阵的东门移动到#b#m807010000##k后，应该就可以看到敌军的侦察兵了。只要能击退大概30名左右的敌军，应该就可以阻止他们的侦查了。好了，接下来就拜托你了。");
    } else {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}