/*
 * 狂龙剧情 - 01
 * 地图：秘密地图 - 大神殿内部 (940001000)
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
        ms.setForcedStat();
        ms.teachSkill(60001229, 1, 1);
        ms.npc_ChangeController(3000106, 500, 20, 1);//D5 F8 86 01
        ms.npc_SetSpecialAction(3000106, "summon");
        ms.npc_ChangeController(3000107, -600, 20, 0);//D4 F8 86 01
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.sendNextNoESC("糟糕了！！", 3000107);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2501);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg1/0", 7000, 0, -100, 1, 0, 1, 3000107, 0, 0);
        ms.npc_SetForceMove(3000107, 1, 600, 100);
        ms.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(8076);
    } else if (status === i++) {
        ms.sendNextNoESC("树精族的首都沦陷了！", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("(达勒摩尔终于惹出事端了……)", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("现在格兰蒂斯里几乎没有任何势力能抵抗达勒摩尔了。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("还剩下阿尼玛族……", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("阿尼玛族和我们一样，原本就不是太大的势力。加上他们本性亲善，只要不受到攻击，绝对不会想要主动对抗达勒摩尔的。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("这么说来现在……", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("没错，达勒摩尔下一个攻击目标就是我们的首都赫里希安。我这就前往赫里希安，准备抵抗达勒摩尔的侵略。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("我们有没有什么办法打败达勒摩尔？现在的达勒摩尔拥有能和神一较高下的力量，连时间之超越者克洛尼卡都被他打败，还被夺去了力量。", 3000106);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.sendNextNoESC("赫里希安的防御膜还算坚固，达勒摩尔没那么容易攻进来，只守不攻应该没太大问题。虽然力量的差异显著，但绝对不能放弃希望。", 3000106);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.sendNextNoESC("卡塔利安，请你留在这里进行防守。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("比起留在这里干着急，我更愿意出去战斗。我也是堂堂的诺巴战士啊。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("为了以防万一，万神殿里也得建立防御膜。另外，建成后的防御膜也有可能会从内部被破坏，所以得有人负责防止这一切的发生。你应该清楚，以现在的情况，你是不二人选。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("……", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("狂龙战士，你多保重。", 3000106);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.sendNextSNoESC("别担心，狼牙。我可是狂龙战士。");
    } else if (status === i++) {
        ms.sendNextNoESC("(狂龙战士……)", 3000106);
    } else if (status === i++) {
        ms.npc_LeaveField(3000106);
        ms.npc_LeaveField(3000107);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001010, 0);
    } else {
        ms.dispose();
    }
}