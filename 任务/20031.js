/*
 * 米哈尔剧情 - 03 05
 * 地图：秘密地图 - 林伯特家的杂货店 (913070001)
 * 任务：搬走阁楼的东西(20031)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext("怎么这么慢？该不会是趁我不在的时候，在哪儿偷懒吧？让你去拿的东西呢？\r\n#b#L0# ……在这里……还有，我在阁楼里捡到了这封信。好像还没看过……好像是个叫库洛姆的人寄来的……#l", 1106002);
    } else if (status === i++) {
        qm.sendNextPrev("你说什么！！快给我！干嘛随便碰别人的东西？", 1106002);
    } else if (status === i++) {
        qm.gainItem(2001500, 10);
        qm.gainItem(2001503, 10);
        qm.enableActions();
        qm.emotion(4, 2000);
        qm.sendNextS("呜呜……今天又被骂了……");
    } else if (status === i++) {
        qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextS("嗯？那是什么？");
    } else if (status === i++) {
        qm.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/soul/0", 4000, 0, -100);
        qm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        qm.sendNextS("哇！！刚才那是什么？我看见了……一道明亮的光……？");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainItem(4033194, -1);
        qm.gainItem(4033195, -1);
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.warp(913070002, 0);
        qm.dispose();
    } else {
        qm.dispose();
    }
}


