/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
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
cm.inGameDirectionEvent_SetHideEffect(1);
cm.inGameDirectionEvent_MoveAction(0);
cm.inGameDirectionEvent_MoveAction(2);
cm.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.inGameDirectionEvent_MoveAction(0);
cm.npc_ChangeController(2159369, "oid=8036794", 665, -20, 1);
cm.npc_SetSpecialAction("oid=8036794", "summon", 0, 0);
cm.npc_ChangeController(2159374, "oid=8036795", 380, -20, 0);
cm.npc_SetSpecialAction("oid=8036795", "summon", 0, 0);
cm.npc_ChangeController(2159372, "oid=8036796", 450, -20, 0);
cm.npc_SetSpecialAction("oid=8036796", "summon", 0, 0);
cm.npc_ChangeController(2159373, "oid=8036797", 520, -20, 0);
cm.npc_SetSpecialAction("oid=8036797", "summon", 0, 0);
cm.npc_ChangeController(2159375, "oid=8036798", 590, -20, 1);
cm.npc_SetSpecialAction("oid=8036798", "summon", 0, 0);
cm.fieldEffect_ScreenMsg("xenon/text0");
cm.inGameDirectionEvent_AskAnswerTime(1900);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "好了，走吧？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/0", 900, 0, -120, 1, 0, 1, "oid=8036797", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/1", 900, 0, -120, 1, 0, 1, "oid=8036798", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159375,  "冒险勇者红鹰！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "冒险勇者黄雄！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159372,  "冒险勇者蓝鲨！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159374,  "冒险勇者绿虎！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159369,  "冒险勇者熊猫！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "合在一起……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/2", 900, 0, -120, 1, 0, 1, "oid=8036797", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
cm.npc_SetSpecialAction("oid=8036797", "happy", 0, 1);
cm.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "呀！太帅了！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159372,  "贝尔非常喜欢冒险勇者游戏。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "嗯！不觉得很帅吗？守护埃德尔斯坦的正义英雄！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159374,  "虽然没有需要击败的坏蛋。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159375,  "所以每天只能喊喊口号。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159369,  "我来当坏蛋不就行了……。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "#h0#！你又在胡说什么啊？那可不行。大家都应该是正义一方！不然就太让人难过了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159369,  "嗯……。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159374,  "即使没有坏蛋，只要好玩就行了。该做的游戏做完了，今天就此解散吧？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159369,  "那我先走了。家里还有事。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159373,  "再见。#h0#，明天见！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.npc_SetForceMove("oid=8036794",-1,550,100);
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/3", 1200, 0, -120, 1, 0, 1, "oid=8036798", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/4", 1200, 0, -120, 1, 0, 1, "oid=8036795", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/5", 1200, 0, -120, 1, 0, 1, "oid=8036794", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.npc_LeaveField("oid=8036794");
cm.npc_LeaveField("oid=8036795");
cm.npc_LeaveField("oid=8036796");
cm.npc_LeaveField("oid=8036797");
cm.npc_LeaveField("oid=8036798");
ms.dispose();
ms.warp(931050910, 0);
    } else {
        ms.dispose();
    }
}
