/*
 * 尖兵剧情 - 11
 * 地图：秘密研究所 - 监狱 (931050960)
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
        ms.npc_ChangeController(2159380, 450, 180, 1);
        ms.npc_SetSpecialAction(2159380, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("#h0#，#h0#，你在这里干什么？", 2159380);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("鲁提，有件事我想问问那个俘虏。你能帮我保密吗？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我看你刚才见到那个人的时候好像呆了一下。#h0#，你记起来了吗？你的过去……。", 2159380);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("记忆？过去？你在说什么啊？鲁提，你是怎么知道的？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你先拿着这个。", 2159380);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/knife");
        ms.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
        ms.sendNextNoESC("这是那个人的东西。我想那个人一定是你找回记忆的重要线索。你们好好谈谈吧。我去看看格里梅尔有没有回来。", 2159380);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159380, 1, 700, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("鲁提，谢谢你。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(2159380);
        ms.sendNextSNoESC("喂……。我想问你。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 700, 50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextNoESC("你！是黑色之翼的……！", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("(果然……一看到那个人，就有一种奇怪的感觉。明明是今天第一次见到，但却感觉好像认识这个人。)");
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("(还有，这个人的这把短剑，感觉好像是我的东西。)");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("这，这个。", 2159384);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("xenon/knife");
        ms.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 700, 50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextNoESC("这是我的短剑！", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("这是你的东西吧？这个有什么特别的力量吗？你是从哪里得到的？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("黑色之翼的成员为什么要问这个？", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("看到它的瞬间，我好像想起了什么，但是却记不太清楚。鲁提说这个东西和你好像跟我的记忆和过去有关……。如果你知道我的过去，请你告诉我。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("(这个人到底在说什么啊？记忆？)", 2159384);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 700, 50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("等等，你说那把短剑很眼熟？难道你是……！", 2159384);
    } else if (status === i++) {
        ms.npc_ChangeController(2159381, 1200, 180, 0);
        ms.npc_SetSpecialAction(2159381, "summon");
        ms.npc_SetForceMove(2159381, -1, 350, 100);
        ms.sendNextNoESC("#h0#，#h0#！", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("不好了，格里梅尔马上就要回来了！你从那个人那里知道什么了吗？", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("不，什么都没有。我也想不起刚才那个场面了。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("哎呀……果然光是这样是无法恢复记忆的。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("记忆？你在说什么啊，鲁提？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("现在不是说这些的时候，#h0#。我看这是最后的机会了。你快和这个人一起逃走。不然的话，你好不容易恢复的记忆又会被格里梅尔清除掉。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("记忆，清除掉？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("是的，你一定不知道我在说什么……事实上，过去我曾经答应过。一定要让你从这里逃出去。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("答应？答应谁？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("……失去记忆之前的你。", 2159381);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 1200, 700, 50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("你也许已经不记得了。那是因为格里梅尔把你的记忆全部清除了。但是在记忆被清除掉之前，你想离开这里。我就是那时候答应你的。答应一定要把你从这里救出去。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("所以我一直装作是格里梅尔的忠实部下……。\n\r为了等待今天这个机会。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("这个人一定和你的过去有关。所以你在见到这个人的瞬间好像想起了什么……", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你快和她一起逃走。不然的话，你好不容易恢复的记忆就又要失去了。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("记忆……刚才浮现在眼前的那个场面是我过去的记忆吗？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("是的。没时间了。格里梅尔马上就会回来。n\r那样的话，他一定会清除掉你的记忆，这个人也会有危险。你决定怎么办？", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("我想找回我的记忆。");
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("事实上我也不知道那是什么。但是我有种感觉，我必须找回我的记忆。而这个人，虽然我不认识，但我觉得不能让她受伤。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 1200, 700, 50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextNoESC("好的，既然决定了，就在格里梅尔回来之前赶快逃走。后面的事情就交给我吧……。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("鲁提，你也一起逃走吧。要是格里梅尔知道我逃走了，你一定会受到牵连。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("但我不是战斗型机械人。带我走只会成为你的累赘。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("那样的话，我就更不能把你留在这里了。跟我一起逃走吧。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("……好吧，现在我们没时间站在这里多说了。我和你一起走。快点吧！", 2159381);
    } else if (status === i++) {
        ms.npc_LeaveField(2159381);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(931050970, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
