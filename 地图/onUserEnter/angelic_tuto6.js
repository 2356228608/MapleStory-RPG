/*
 * 爆莉萌天使剧情 - 08
 * 地图：万神殿 - 万神殿治疗室 (940011060)
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
        ms.npc_ChangeController(3000106, 160, 50, 0);//43 5F 00 01
        ms.npc_SetSpecialAction(3000106, "summon");
        ms.npc_ChangeController(3000107, 10, 50, 0);//44 5F 00 01
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.npc_ChangeController(3000152, 90, 50, 0);//45 5F 00 01
        ms.npc_SetSpecialAction(3000152, "summon");
        ms.sendNextNoESC("#h0#你恢复意识了。", 3000152);
    } else if (status === i++) {
        ms.sendNextSNoESC("呃……这里是？");
    } else if (status === i++) {
        ms.sendNextNoESC("这里是万神殿。你觉得怎么样？", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("就是头有点疼，其他还好。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯？这是什么？");
    } else if (status === i++) {
        ms.sendNextNoESC("唉……看来得跟你说实话了。#h0#，你受到东侧圣殿圣物的诅咒，圣物附在你的身上了。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("啊？诅咒？什么叫做“附在我身上”？");
    } else if (status === i++) {
        ms.sendNextNoESC("圣物附在你身上变成了这个手镯。也就是说有一个圣物消失了。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("卡塔利安，别怪他。要不是狂龙战士和#h0#，这圣物就被抢走了。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("是……知道了。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("哈……哈哈哈……真不知道你们在说什么。我只记得我碰到了圣物，然后就……", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("你们说那圣物附到我身上变成了手镯？开什么玩笑……");
    } else if (status === i++) {
        ms.sendNextNoESC("你别激动。圣物已经附上去，暂时也没办法处理了。不过看样子圣物附在你身上并没有什么坏处。", 3000152);
    } else if (status === i++) {
        ms.sendNextSNoESC("我……我没想过要把圣物毁掉……");
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#，谁也不会怪你什么的。万神殿里还有3个圣物，应该不会有大问题。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("可……可是……我……");
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#，你又要哭了吗？", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("呃……");
    } else if (status === i++) {
        ms.sendNextNoESC("卡塔利安！！", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("对不起，我不是故意的……", 3000107);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.npc_LeaveField(3000106);
        ms.npc_LeaveField(3000107);
        ms.npc_LeaveField(3000152);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011070, 0);
    } else {
        ms.dispose();
    }
}