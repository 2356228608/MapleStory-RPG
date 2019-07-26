/*
 * 阴阳师剧情 - 20
 * 地图：枫叶山丘 - 枫叶原2 (807020100)
 * 任务：寻找气息之源2(57415)
 * 等级：21以上
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
        qm.sendNextS("总算是找到了。如何呢，你有没有感觉到什么？");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("嗯，绝对没错。气息就是从这条狐狸尾巴中散发出来的。不过，这到底是什么东西呢？其中散发出来的气息感觉如此熟悉……还带着一丝让人怀念的香味。", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("这不会是小白你的尾巴吧？说不定是你被人追踪时候慌了神，才把尾巴给摘掉逃了出去……");
    } else if (status === i++) {
        qm.sendNextPrev_Illus("你以为我是蜥蜴啊！？", 9130081);
    } else if (status === i++) {
        qm.askYesNoS("这里实在不适合我们继续思考下去了。先把这条尾巴带回本阵，再慢慢调查吧。");
    } else {
        qm.forceCompleteQuest();
        qm.gainExp(373);
        qm.gainItem(4033274, -1);
        qm.dispose();
    }
}