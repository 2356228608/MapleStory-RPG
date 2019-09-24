/*
 * 爆莉萌天使剧情 - 11
 * 地图：万神殿东部地区 - 东侧圣殿附近 (940011090)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("好。我也不能只懂得哭哭啼啼的，得想想办法。");
    } else if (status === i++) {
        ms.sendNextSNoESC("再去圣物原来所在的东侧圣殿看看吧，那里应该能有什么方法可以解开诅咒。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/1", 1200, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg0/0", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/2", 1200, 0, -100);
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(120);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/7", 1200, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/3", 1200, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/0", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1800);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/4", 1200, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/8", 1200, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("现在你能看见我了吧？？", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯……你是……什么？爱丝卡达？");
    } else if (status === i++) {
        ms.sendNextNoESC("嗯，我是爱丝卡达。我就寄居在你戴的这个手镯里。为了给你力量我才跟你说话的。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("力量？你到底在说什么啊。");
    } else if (status === i++) {
        ms.sendNextNoESC("你先到圣物起反应的圣殿去吧。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯……我正在去的路上。");
    } else if (status === i++) {
        ms.sendNextNoESC("嗯。在那里你能找到某种可以再现我力量的东西。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("我……我怎么能相信你的话！");
    } else if (status === i++) {
        ms.sendNextNoESC("随便你爱信不信，不过相信我你也不吃亏啊？", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯，这倒是。反正我也要到那里去。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011100, 0);
    } else {
        ms.dispose();
    }
}