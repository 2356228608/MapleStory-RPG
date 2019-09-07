/*
 * 冒险家任务
 * 任务：冒险之书与枫叶(32240)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNext("你为什么不接受呢？你不必有任何负担的。", 1012100);
            qm.dispose();
            return;
        }
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext("#h0#, 我有东西要交给你。这是一本#b冒险之书#k, 它可以记录你日后在冒险岛世界旅行过程中所经历的事情。在这里可以记录将要发生的只属于你的故事。", 1012100);
    } else if (status === i++) {
        qm.askStartEndS("怎么样，要领取#b冒险之书#k吗？");
    } else if (status === i++) {
        qm.forceStartQuest(32360);
        qm.sendNext("给你……这本冒险之书正适合你……", 1012100);
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.sendNext("详细内容你可以慢慢查看。", 1012100);
    } else if (status === i++) {
        qm.sendOk("虽然这条路并不平坦, 但我希望即将启程的你可以尽情享受这次冒险之旅。", 1012100);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextS("#b冒险之书#k？你是说可以在这里写下我的冒险故事，对吧？");
    } else if (status === i++) {
        qm.sendNextS("我正想开始进行冒险，现在马上开始就行了。……哎？");
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false);
        qm.fieldEffect_ScreenMsg("adventureStory/mapleLeaf/0");
        qm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        qm.sendNextS("这是什么枫叶？这么看来，冒险岛上存在着巨大的枫树。这枫叶是跟随我来到这里的吗？");
    } else if (status === i++) {
        qm.sendNextS("这也算是一种纪念，好好珍藏吧。夹在#b 冒险之书#k里的话，就不会弄皱了。");
    } else if (status === i++) {
        qm.gainItem(4460004, 1);
        qm.forceCompleteQuest();
        qm.curNodeEventEnd(false);
        qm.setInGameDirectionMode(false);
        qm.dispose();
    } else {
        qm.dispose();
    }
}