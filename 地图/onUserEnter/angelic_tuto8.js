/*
 * 爆莉萌天使剧情 - 10
 * 地图：万神殿西部地区 - 赫里希安攻击队基地 (940011080)
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
        ms.sendNextSNoESC("唉……虽然回到了据点，我会变成什么样啊？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.sendNextSNoESC("呜呜……我怎么这么倒霉？");
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene1");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.npc_ChangeController(3000140, 300, 10, 1);//A6 62 00 01
        ms.npc_SetSpecialAction(3000140, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.npc_SetForceMove(3000140, 1, 170, 100);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(690);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(210);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("啊！是卡伊尔。听说你成了狂龙战士？真帅。");
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#，我找你好久，你没事吧？", 3000140);
    } else if (status === i++) {
        ms.sendNextSNoESC("我？找我做什么？是因为这个吗？虽然手上附着奇怪的东西，不过没什么事。");
    } else if (status === i++) {
        ms.sendNextSNoESC("你不也清楚嘛，我总是这么倒霉，哈哈哈。");
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#……", 3000140);
    } else if (status === i++) {
        ms.sendNextSNoESC("我还以为这东西附在手上的话，我会获得魔力，看来我还是没那么走运。本想着保护圣物，结果反而把它弄没了……我都觉得自己太没用了。");
    } else if (status === i++) {
        ms.sendNextNoESC("#p3000007#也很担心你。", 3000140);
    } else if (status === i++) {
        ms.sendNextSNoESC("#p3000007#也很担心我？因为我又没本事强出头，害你们担心了。对不起，我没事。你们别担心。");
    } else if (status === i++) {
        ms.sendNextNoESC("嗯，我还有事，先走了。", 3000140);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.npc_LeaveField(3000140);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011090, 0);
    } else {
        ms.dispose();
    }
}