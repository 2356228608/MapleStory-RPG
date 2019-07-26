/*
 * 隐月剧情 - 02
 * 地图：隐藏地图 - 时间神殿前狼藉的空地 (927030000)
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
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(2159439, 1210, 10, 1);
        ms.npc_SetSpecialAction(2159439, "summon");
        ms.npc_ChangeController(2159467, 830, 10, 0);
        ms.npc_SetSpecialAction(2159467, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.sendNextNoESC("……我从一开始就不喜欢你。", 2159439);
    } else if (status === i++) {
        ms.sendNextNoESC("你那种圆滑的性格我也很讨厌。", 2159467);
    } else if (status === i++) {
        ms.sendNextNoESC("我们之间唯一的共同点就是都不喜欢对方。但是弗里德却还是把我们一起派了过来，真不知道他在想些什么。那个家伙，难道是遇到了什么心情不好的事情吗？你说呢？", 2159439);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
        ms.effect_OnUserEff("Effect/BasicEff.img/Summoned");
    } else if (status === i++) {
        ms.sendNextNoESC("这个嘛，我也不太清楚。不过如果一直在这里浪费时间的话，弗里德可能真的要发火了。", 2159467);
    } else if (status === i++) {
        ms.sendNextNoESC("弗里德发火？那一定很有趣。", 2159439);
    } else if (status === i++) {
        ms.sendNextNoESC("不过很可能永远都不会见到。我先进去了。里面散发出来的气息很不寻常。", 2159467);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 100, 1000, 18);
        ms.inGameDirectionEvent_AskAnswerTime(191);
    } else if (status === i++) {
        ms.sendNextNoESC("……那就先聊到这里。再见面的话，让我们直接问问弗里德好了。不要在这里浪费时间。", 2159439);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159439, "teleportation");
        ms.inGameDirectionEvent_AskAnswerTime(840);
    } else if (status === i++) {
        ms.npc_LeaveField(2159439);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_LeaveField(2159467);
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(927030010, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}