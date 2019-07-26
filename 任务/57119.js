/*
 * 剑豪剧情 - 25
 * 地图：枫叶山丘 - 枫叶山丘 (807000000)
 * 任务：狐尾的意义(57119)
 * 等级：21以上
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
        qm.sendNext_Illus("剑斗，辛苦你了。");
    } else if (status === i++) {
        qm.sendNextPrevS("实在抱歉，我的力量还没有完全恢复，所以没能彻底击溃敌阵。真是不好意思。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("无妨，在我看来，剑斗你已经拼尽全力了。应该好好夸夸你才是呢。");
    } else if (status === i++) {
        qm.sendNextPrevS("谢谢。对了，我在战场上发现了这么一个东西。从中散发着非同小可的气息……不知道这究竟是什么东西啊？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("这是白狐的尾巴吗？说来还真是奇怪。在其他参加奇袭任务的武士之中，也有人拿回了与这个相同的白狐尾巴。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("这之间到底有着怎样的关系呢……不知你们两位是不是已经有了什么推测？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("你们说的什么阴阳道和气息，我完全是一窍不通。我就只会帮忙看看刀枪的好坏而已。", 9130009);
    } else if (status === i++) {
        qm.sendNextPrev_Illus("啊哈哈，其实谦信你对酒的造诣也很深嘛。对不住了元就大人，我也完全推测不出这狐狸尾巴究竟是什么来头。", 9130000);
    } else if (status === i++) {
        qm.sendNextPrev_Illus("嗯，既然这样，就让我们先把目前收集到的狐狸尾巴聚集到一起，然后再来仔细研究吧。");
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.dispose();
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
        qm.sendNext_Illus("嗯？你们干嘛都这么惊讶地看着我？哦，是剑斗啊。本能寺的任务辛苦你了。听说你战得非常神勇嘛。");
    } else if (status == 1) {
        qm.sendNextPrev_Illus("土御门……这到底是怎么回事啊？为什么你会变成狐狸尾巴的模样？", 9130008);
    } else if (status === i++) {
        qm.sendNextPrev_Illus("狐狸尾巴？你们到底在说什么啊。我是在进行本能寺攻略战的时候，突然被一团光芒包裹，然后就失去意识了。等再醒过来的时候，就看到你们一个个都来跟我大眼瞪小眼。");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("(其实，我是第一个到达“这边”这个世界的。为了避免在找到五星之子和联合军之前就被织田军给找到，我才幻化成了狐尾的模样。但这一点应该没必要告诉他们吧。)");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("(果不其然，正是织田军先一步发现了我。幸好联合军找到了所有狐狸尾巴，不然肯定要出大事了……)");
    } else {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}