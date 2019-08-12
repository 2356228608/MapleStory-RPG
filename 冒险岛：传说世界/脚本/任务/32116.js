/* Dawnveil
 [Ellinel Fairy Academy] The Search Concluded
 Cootie
 Made by Daenerys
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.sendNext("快来，#b#h ##k。我正想找你说事呢。");
    } else if (status == 1) {
        qm.sendNextPrev("我都听说了。孩子们在排练演出？", 1500001);
    } else if (status == 2) {
        qm.sendNextPrev("我们只握到了那些信息。这能成为线索吗？");
    } else if (status == 3) {
        qm.sendNextPrev("……这一切都是我的失职啊，校长先生。", 1500002);
    } else if (status == 4) {
        qm.sendNextPrev("……", 1500002);
    } else if (status == 5) {
        qm.sendNextPrev("那是几天前的事情了，那些孩子非常喜欢人类世界的英雄们，而且还想模仿英雄们进行一场演出。当时我就进行了严厉地批评，并处罚了他们。", 1500002);
    } else if (status == 6) {
        qm.sendNextPrev("你怎么能批评他们呢？每个孩子都有自己喜欢的英雄，这是再正常不过的事情了。");
    } else if (status == 7) {
        qm.sendNextPrev("我们艾利涅根本不相信人类。所以我们觉得对于仰募人类英雄这样的事情，不利于孩子们的教育。\r\n\r\n不过没想到，孩子们后来仍旧在准备演出……他们肯定是为了不让我发现，所以躲在什么地方偷偷排练。", 1500002);
    } else if (status == 8) {
        qm.sendNextPrev("看来，孩子们是为避开老师们，在其他地方进行排练的时候失踪了。比如,森林深处的地方，又或者是……");
    } else if (status == 9) {
        qm.sendNextPrev("这，这都是我的错啊。如果孩子们有什么三长两短……我，我……", 1500002);
    } else if (status == 10) {
        qm.sendNextPrev("请镇静，副校长先生。越是这种时候，就越需要冷静。", 1500001);
    } else if (status == 11) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.askAcceptDecline("先向你表示抱款。发生了这种事情……所有的一切都是我们的误会。为了能找回孩子，你能继续帮助我们吗？");
        } else if (status == 1) {
            qm.sendNext("如何才能找到那些孩子？我现在在整理思路，请重新和我说话吧。");
            qm.forceCompleteQuest();
            qm.gainExp(1600);
            qm.dispose();
        }
    }
}