/*
 * 剑豪剧情 - 19
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：阻止敌人侦查(57110)
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
        qm.sendNext_Illus("剑斗。刚刚负责盯守枫叶山丘外围的哨兵传来了不好的消息。他们说，似乎有身穿黑色甲胄的士兵出现在了这附近。");
    } else if (status === i++) {
        qm.sendNextPrevS("黑色甲胄……难道是织田军的士兵？果然不出所料，织田军也来到“这边”这个世界了啊！");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("根据哨兵的描述，这些士兵应该就是织田军的人。不过，敌兵并没有摆出什么阵型，也没有携带什么武器装备，应该是织田军的侦察兵吧。");
    } else if (status === i++) {
        qm.askAcceptDecline_Illus("他们现在应该还没有注意到我们这个本阵的存在。但是再让他们这样侦查下去，恐怕枫叶山丘被敌人发现也不过是时间的问题了。我相信剑斗你应该有能力阻止敌人的侦查。不知道这个任务可不可以交给你来负责呢？");
    } else {
        qm.forceStartQuest();
        qm.sendNext_Illus("谢谢，有你在真是太好了。从本阵的东门移动到枫叶坡道后，应该就可以看到敌军的侦察兵了。只要能击退大概30名左右的敌军，应该就可以阻止他们的侦查了。好了，接下来就拜托你了。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}