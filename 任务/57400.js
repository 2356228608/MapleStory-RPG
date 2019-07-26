/*
 * 阴阳师剧情 - 13
 * 地图：枫叶山丘 - 陌生的山坡 (807040000)
 * 任务：陌生的山坡(57400)
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
        qm.sendNext("……那……那！你快点醒醒啊……！", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("呜……呜呜……");
    } else if (status === i++) {
        qm.sendNextPrev("神那，你快点醒醒啊！", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("啊！");
    } else if (status === i++) {
        qm.sendNextPrev("你总算是醒了，居然睡得这么毫无防备……", 9130081);
    } else if (status === i++) {
        qm.sendNextPrevS("这里是什么地方？呜……我记得，我是为了阻止魔王降临的仪式，和变坏了的兰丸大战了一场之后，前去破坏了祭坛……我应该已经阻止了仪式的进行，但怎么也想不起来之后到底发生了什么。这到底是怎么回事啊？");
    } else if (status === i++) {
        qm.sendNext("这个嘛，其实我所掌握的情况也和你差不了多少。正好附近有人在，不如先去向人家问问看吧？也有我们认识的人在这里呢。", 9130081);
    } else {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}