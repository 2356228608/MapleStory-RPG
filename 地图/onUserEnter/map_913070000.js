/*
 * 米哈尔剧情 - 01
 * 地图：秘密地图 - 林伯特家的杂货店 (913070000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.forceStartQuest(20030);
        ms.topMsg("林伯特的杂货店");
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.topMsg("冒险岛历XXXX年3月4日……");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/0", 2000, 0, -100);
        ms.emotion(6, 10000);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/1", 2000, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/2", 3000, 0, -100);
        ms.emotion(4, 8000);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/3", 3000, 0, -100);
        ms.emotion(6, 2000);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("你……你找我有事吗？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你叫什么名字？", 1106000);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("我……没有名字。你就叫我#b“小孩”#k好了。林伯特大叔就是这么叫我的。你想要什么东西呢？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("家人……没有家人吗？", 1106000);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("我没有家人……#b\r\n(这个人是谁，为什么会问我这种问题？)#k\r\n你不想买东西的话……我……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你知道光之骑士库洛姆吗？", 1106000);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("库洛姆？嗯……我……#b\r\n(库洛姆是谁？这个人为什么要问我这种事情呢？)");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#e小孩！\r\n我让你清理箱子，你在那跟谁聊天呢！！", 1106002);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("是……是！！林伯特大叔！我正想清理呢！\r\n嗯，那我……就去……做事了……");
    } else if (status === i++) {
        ms.forceCompleteQuest(20030);
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/4", 2000, 0, -100);
        ms.emotion(6, 2000);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("那……那个人去哪儿了？\r\n对了！不想被林伯特大叔骂的话，得赶紧把箱子清理干净！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(913070001, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }

}