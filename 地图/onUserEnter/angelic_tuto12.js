/*
 * 爆莉萌天使剧情 - 15
 * 地图：万神殿东部地区 - 东侧圣殿 (940011150)
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
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/4", 900, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(510);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/9", 900, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextNoESC("嘿嘿嘿，我的力量如何？", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("不错嘛？我终于拥有能做点儿什么的力量了！");
    } else if (status === i++) {
        ms.sendNextNoESC("这都要归功于我这伟大的诺巴勇士……", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("太开心了~哈哈哈。");
    } else if (status === i++) {
        ms.sendNextNoESC("(完全没有在听我说嘛……)喂，你要想熟练地运用这股力量，还需要多多练习。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("练习？什么练习？");
    } else if (status === i++) {
        ms.sendNextNoESC("练习如何正确运用新获得的力量啊，要不要练习看看？", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯，好！不管是什么练习，我一定认真做！");
    } else if (status === i++) {
        ms.sendNextNoESC("(很好！)那么首先从变身练习开始吧！“装扮！”", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("装扮？");
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940012020, 0);
    } else {
        ms.dispose();
    }
}