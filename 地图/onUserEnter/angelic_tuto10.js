/*
 * 爆莉萌天使剧情 - 12
 * 地图：万神殿东部地区 - 东侧圣殿 (940011100)
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
        ms.sendNextSNoESC("到了。下面你要让我找什么？");
    } else if (status === i++) {
        ms.sendNextNoESC("原来放圣物的地方你没发现什么吗？", 3000132);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg2/0", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("虽不是什么好东西，你戴在手上看看吧。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯……就这样戴上去就行了？");
    } else if (status === i++) {
        ms.sendNextNoESC("好了，下面我就把力量传给你！", 3000132);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940012000, 0);
    } else {
        ms.dispose();
    }
}