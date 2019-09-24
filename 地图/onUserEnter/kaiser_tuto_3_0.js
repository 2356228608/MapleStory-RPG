/*
 * 狂龙剧情 - 04
 * 地图：秘密地图 - 赫里希安外围 (940001100)
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
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg0/0", 0, 0, -100);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.sendNextSNoESC("气氛有古怪，难道是我来迟了？");
    } else if (status === i++) {
        ms.sendNextSNoESC("可是即使是达勒摩尔本人，也很难轻松突破赫里希安的防御膜啊，这是怎么回事？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("显示赫里希安警戒的标志停止运作了。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 600, -600, 178);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(2638);
    } else if (status === i++) {
        ms.sendNextSNoESC("从未闭上的守护石之眼也失去了光芒。");
    } else if (status === i++) {
        ms.sendNextSNoESC("赫里希安已经被占领了吗？防御膜怎么没有启动？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.npc_ChangeController(3000131, -390, 170, 1);
        ms.npc_SetSpecialAction(3000131, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextNoESC("狂龙战士，一切都太晚了。", 3000131);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 178);
    } else if (status === i++) {
        ms.sendNextSNoESC("麦格纳斯！你怎么会在这里？赫里希安发生了什么事？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.sendNextNoESC("现在那个不重要，达勒摩尔的军队不久前占领了赫里希安。", 3000131);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(3000131, "fake");
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 0, 0, -100);
        //ms.inGameDirectionEvent_MoveAction(2);
        ms.npc_SetSpecialAction(3000131, "fake");
        ms.sendNextSNoESC("麦格纳斯！你受伤了吗？你和达勒摩尔的军队交战了？");
    } else if (status === i++) {
        ms.sendNextNoESC("我的模样很糟糕吧，真不想让你看见我这幅颓败的模样。你说的没错，事情正是你推测的那样。他们实在太厉害，我本是因为追求更强的力量才被驱逐的，可连我也抵挡不住他们。", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("达勒摩尔的军队是怎么侵入赫里希安的？他们用什么方法突破了防御膜？");
    } else if (status === i++) {
        ms.sendNextNoESC("我们内部有人叛变。趁着他们暂时清除了保护罩，那些幽灵就迅速侵入了赫里希安各处。", 3000131);
    } else if (status === i++) {
        ms.sendNextSNoESC("到底是谁干的……");
    } else if (status === i++) {
        ms.sendNextNoESC("那个人正是……我！！！", 3000131);
    } else if (status === i++) {
        ms.npc_LeaveField(3000131);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940002010, 0);
    } else {
        ms.dispose();
    }
}