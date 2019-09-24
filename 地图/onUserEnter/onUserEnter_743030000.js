/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
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
ms.onScriptMessage(3, 0, 1, 9330201,  "修炼进行的怎样呢？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "每天每天，都有在进步中，父亲。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "听起来秀禾讲的话, 好像很认真的做下去的样子。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "不管多么努力, 都不愿意肯定秀禾. 可是你跟父亲说过这些话吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "哈哈，那么是代表不努力吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "不, 才不是!我也想要快点认真修炼, 成为像父亲这样的宏武团的一员！", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "好的，我会更认真。啊！可以过来一下吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "好　父亲...!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.onScriptMessage(3, 0, 1, 9330201,  "你的生日是明天吗？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "(哇，父亲没有忘记耶!)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "是啊。父亲，明天是我的生日。可是好像太认真修炼了，连生日都忘了", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "是吗？想送什么礼物给你，如果不送的话也没有关系吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "不，不是，不是这样的….", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(9330203, "oid=7039575", 647, 20, 1);
ms.npc_SetSpecialAction("oid=7039575", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7039575", "move", 0, 0);
ms.npc_SetForceMove("oid=7039575",-1,97,100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "宏武团长", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "我有话要跟你说。", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "秀禾，你去过什么地方吗？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "是小姐有事外出回来了。虽然很冒昧，我可以和团长谈一下话吗？", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330201,  "#h0#。我去一下，所以，在这期间你好好进行练习吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7039445", "move", 0, 1);
ms.npc_SetForceMove("oid=7039445",1,158,100);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7039575", "move", 0, 1);
ms.npc_SetForceMove("oid=7039575",1,80,100);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=7039445");
ms.inGameDirectionEvent_AskAnswerTime(780);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=7039575");
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 0,  "秀禾的表情看起来心情不好。是什么事呢？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/0", 2000, 290, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/2", 1500, 0, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/1", 2000, 120, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg2/3", 2000, 120, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "是不是发生什么事了呢？我要跟她去看看吗？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_ChangeController(9330203, "oid=7039944", 573, 3, 1);
ms.npc_SetSpecialAction("oid=7039944", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "吼，秀禾，不要这么突然间出现", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "小姐不管怎样，偷听的习惯是不好的。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.emotion(3, 5000);
ms.onScriptMessage(3, 0, 1, 9330203,  "偷，偷…。我没有偷听!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330203,  "宏武团长突然间有事情，所以，离开了。小姐 的修练，请在跟我委托之后进行", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.npc_LeaveField("oid=7039944");
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.warp(743000000, 0);
ms.npc_ChangeController(9330206, "oid=103706", 548, 54, 1);
ms.npc_ChangeController(9330207, "oid=103707", -133, 54, 1);
} else {
ms.dispose();
    }
}