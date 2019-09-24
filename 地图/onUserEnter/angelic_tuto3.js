/*
 * 爆莉萌天使剧情 - 05
 * 地图：万神殿东部地区 - 东侧圣殿 (940011030)
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
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.npc_ChangeController(3000140, -300, 220, 0);
        ms.npc_SetSpecialAction(3000140, "summon");
        ms.npc_ChangeController(3000104, -450, 220, 0);
        ms.npc_SetSpecialAction(3000104, "summon");
        
        ms.npc_ChangeController(3000110, -150, 220, 0);
        ms.npc_SetSpecialAction(3000110, "summon");
        ms.npc_ChangeController(3000114, -50, 220, 0);
        ms.npc_SetSpecialAction(3000114, "summon");
        ms.npc_ChangeController(3000111, 70, 220, 1);
        ms.npc_SetSpecialAction(3000111, "summon");
        ms.npc_ChangeController(3000115, 170, 220, 1);
        ms.npc_SetSpecialAction(3000115, "summon");
        ms.sendNextNoESC("你到底是感觉到了什么……", 3000104);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -100, 1, 0, 1, 3000104, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/0", 1200, 0, -100, 1, 0, 1, 3000140, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/3", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("祭司们在做什么？话说怎么是陌生面孔啊？", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("嘘！有异常，贝德罗斯！", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("我知道，我也发现情况很可疑！我先去村里求援，你们好好观察这些人在做什么。要是有危险，就赶紧逃。", 3000104);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg0/0", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextNoESC("你这是什么话？", 3000103);
    } else if (status === i++) {
        ms.npc_LeaveField(3000104);
        ms.sendNextNoESC("(东侧圣殿遭到袭击了吗？那帮人想对圣物做什么手脚？)", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("拿掉圣物后，防御膜就会变弱。", 3000110);
    } else if (status === i++) {
        ms.sendNextNoESC("可是如果搬动圣物，会不会受到诅咒啊？", 3000114);
    } else if (status === i++) {
        ms.sendNextNoESC("你怎么那么迷信？这可是千载难逢的好机会！现在我们不能回头了！", 3000110);
    } else if (status === i++) {
        ms.sendNextNoESC("你要拿走圣物吗？", 3000110);
    } else if (status === i++) {
        ms.sendNextNoESC("必须阻止他们！！", 3000103);
    } else if (status === i++) {
        ms.npc_SetForceMove(3000140, 1, 300, 100);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000110, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000114, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000111, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/1", 1200, 0, -100, 1, 0, 1, 3000115, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/story/BalloonMsg1/6", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("kaiser/tear_rush");
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000140);
        ms.npc_LeaveField(3000110);
        ms.npc_LeaveField(3000114);
        ms.npc_LeaveField(3000111);
        ms.npc_LeaveField(3000115);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011040, 0);
    } else {
        ms.dispose();
    }
}