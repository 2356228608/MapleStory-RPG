/*
 * 夜光剧情 - 07
 * 地图：秘密地图 - 黑魔法师的房间 (927020070)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_ChangeController(2159357, 300, -80, 1);
        ms.npc_SetSpecialAction(2159357, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/6", 0, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2322);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/2");
        ms.effect_Voice("Voice.img/DarkMage/0");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, 300, -100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1667);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 0, 0, -100, 1, 0, 1, 2159357, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.sendNextSNoESC("弗里德！……双弩精灵！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(8000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("来啦。我们已经尽力了，但还是不行。", 2159357);
    } else if (status === i++) {
        ms.sendNextSNoESC("双弩精灵怎么啦？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("只是暂时晕过去了。关键是黑魔法师比我们想的厉害得多。现在只能靠这个了。", 2159357);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 0, 0, -100, 1, 0, 1, 2159357, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1800);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Skill/2218.img/skill/22181003/affected", 0, 0, 0, 1, 0, 1, 2159357, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextNoESC("#b(听好。从现在开始我说的话你绝不可以告诉其他人。之前提过的封印，你还记得吗？)#k", 2159357);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("#b(嗯。你和阿弗利埃研究了好长时间嘛。)#k");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#b(那个封印可以逆转黑魔法师从伦娜那里抢来的时间力量。因此，无论黑魔法师有多么厉害，都绝不可能逃脱。只是，要启动封印的话，必须将黑魔法师的时间的力量牵引出来。)#k", 2159357);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#b(我发现战局不利时，就偷偷在这间房间设置了封印。但是光靠我和双弩精灵，无法引出黑魔法师的时间力量。现在你是我们唯一的希望。)#k", 2159357);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("#b(我应该怎么做？)#k");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#b(首先要激活设置好的封印。我会用仅剩的力量，使时间暂时停滞，以防黑魔法师发现。你就趁机去把五个封印全部激活。)#k", 2159357);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("#b(右方应该留有第一个封印的痕迹。你走近就能看到封印。你只要将所有封印激活就行。)#k", 2159357);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("#b(知道了。交给我吧。)#k");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("(#b封印全部激活后，停滞的时间就会恢复正常。拜托了。时间女神啊，赐予我力量……！！#k)", 2159357);
    } else if (status === i++) {
        ms.npc_LeaveField(2159357);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020071, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
