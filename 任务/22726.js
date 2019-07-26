/*
 * 超能力者任务 - 黑客杰的发现1(22726)
 * 地图：据点 - 总部 (331001000)
 * 任务：黑客杰的发现1(22726)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#凯内西斯，说不定这就是针对你的陷阱。也许这件事你不管会比较好。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("但如果我们的猜测是对的，那就表示有坏人持续性地在城市里放出怪物啊？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("没错，这也只是猜测而已，不过你想怎么办？", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("信号正指向学校，要去吗？\r\n#b#L1#当然是去学校了。#l\r\n#b#L2#我再考虑看看。#l", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("我就知道你会这么说，时间是……一会儿之后，如果你要去，我就在这里做接应。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("OK，我现在就把位置数据传送过去，好像是学校的教室，现在这个点估计还有学生在，小心点。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(去学校看看有没有奇怪的征兆。)#k", 1531000);
    } else if (status === i++) {
        qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;E1=1;kinetuto2=1;E2=1;E3=1");
        qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}
