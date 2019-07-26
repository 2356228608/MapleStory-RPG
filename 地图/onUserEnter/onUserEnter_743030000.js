/*
 * 龙的传人剧情 - 02
 * 地图：秘密地图 - 大神殿内部 (743030000)
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setDirectionMode(false);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.npc_ChangeController(9330201, 488, 27, 1);//57 2D C2 0D
        ms.npc_SetSpecialAction(9330201, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.sendNextNoESC("修炼进行的怎样呢？", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("每天每天，都有在进步中，父亲。");
    } else if (status === i++) {
        ms.sendNextNoESC("听起来秀禾讲的话, 好像很认真的做下去的样子。", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("不管多么努力，都不愿意肯定秀禾。可是你跟父亲说过这些话吗？");
    } else if (status === i++) {
        ms.sendNextNoESC("哈哈，那么是代表不努力吗？", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("不，才不是！我也想要快点认真修炼，成为像父亲这样的宏武团的一员！");
    } else if (status === i++) {
        ms.sendNextNoESC("好的，我会更认真。啊！可以过来一下吗？", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("好，父亲……！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.sendNextNoESC("你的生日是明天吗？", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("(哇，父亲没有忘记耶！)");
    } else if (status === i++) {
        ms.sendNextSNoESC("是啊。父亲，明天是我的生日。可是好像太认真修炼了，连生日都忘了！");
    } else if (status === i++) {
        ms.sendNextNoESC("是吗？想送什么礼物给你，如果不送的话也没有关系吗？", 9330201);
    } else if (status === i++) {
        ms.sendNextSNoESC("不，不是，不是这样的……");
    } else if (status === i++) {
        ms.npc_ChangeController(9330203, 647, 20, 1);//CB 48 C2 0D
        ms.npc_SetSpecialAction(9330203, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(9330203, "move");
        ms.npc_SetForceMove(9330203, -1, 97, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC("宏武团长……", 9330203);
    } else if (status === i++) {
        ms.sendNextNoESC("我有话要跟你说。", 9330203);
    } else if (status === i++) {
        ms.sendNextSNoESC("秀禾，你去过什么地方吗？");
    } else if (status === i++) {
        ms.sendNextNoESC("少爷回来了！虽然很冒昧，我可以和团长单独谈谈吗？", 9330203);
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#，我出去一下，在这期间你好好进行练习吧。", 9330201);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(9330201, "move");
        ms.npc_SetForceMove(9330201, 1, 80, 100);
        ms.inGameDirectionEvent_AskAnswerTime(720);
    } else if (status === i++) {
        ms.npc_LeaveField(9330201);
        ms.inGameDirectionEvent_AskAnswerTime(780);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(720);
    } else if (status === i++) {
        ms.npc_LeaveField(9330203);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/0", 2000, 290, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/2", 1500, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/1", 2000, 120, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/3", 2000, 120, -100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextSNoESC("是不是发生什么事了呢？我要跟她去看看吗？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_ChangeController(9330203, 573, 3, 1);//20 7F C2 0D
        ms.npc_SetSpecialAction(9330203, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextSNoESC("吼，秀禾，不要这么突然出现！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.sendNextNoESC("少爷！不管怎样，偷听可不是什么好习惯。", 9330203);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.sendNextSNoESC("偷……偷……我没有偷听！");
    } else if (status === i++) {
        ms.sendNextNoESC("宏武团长突然间有事，所以离开了。稍后您来找我，我们就开始进行少爷的修炼。", 9330203);
    } else if (status === i++) {
        ms.npc_LeaveField(9330201);
        ms.forceStartQuest(52400);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(743000000, 0);
    } else {
        ms.dispose();
    }
}