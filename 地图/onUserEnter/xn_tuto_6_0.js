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
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_SetHideEffect(1);
ms.npc_ChangeController(2159386, "oid=8037290", 350, 30, 1);
ms.npc_SetSpecialAction("oid=8037290", "summon", 0, 0);
ms.npc_ChangeController(2159382, "oid=8037291", 250, 30, 1);
ms.npc_SetSpecialAction("oid=8037291", "summon", 0, 0);
ms.npc_ChangeController(2159385, "oid=8037292", 480, 30, 1);
ms.npc_SetSpecialAction("oid=8037292", "summon", 0, 0);
ms.npc_ChangeController(2159427, "oid=8037293", 50, 30, 0);
ms.npc_SetSpecialAction("oid=8037293", "summon", 0, 0);
ms.npc_ChangeController(2159427, "oid=8037294", 0, 30, 0);
ms.npc_SetSpecialAction("oid=8037294", "summon", 0, 0);
ms.inGameDirectionEvent_PushMoveInfo(0, 150, 200, 22);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(2100);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=8037293", "die", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=8037294", "die", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=8037293");
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.npc_LeaveField("oid=8037294");
ms.onScriptMessage(3, 0, 1, 2159386,  "那些家伙，真是没完没了。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159382,  "接到报告说发现了秘密研究所，所以想潜入进来看看。看来这条鱼比想象的要大。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159385,  "这里的防御这么强，反倒让人很想看看里面到底藏着什么东西？我一定要让他们的狐狸尾巴露出来。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159382,  "贝尔，这都什么时候了，还说得这么轻松……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, "oid=8037291", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.npc_LeaveField("oid=8037291");
ms.npc_ChangeController(2159382, "oid=8037327", 250, 30, 0);
ms.npc_SetSpecialAction("oid=8037327", "summon", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/12", 1200, 0, -120, 1, 0, 1, "oid=8037327", 0, 0);
ms.npc_SetSpecialAction("oid=8037327", "catched", 0, 1);
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 1, 0, 1, "oid=8037290", 0, 0);
ms.npc_SetForceMove("oid=8037290",1,30,100);
ms.inGameDirectionEvent_AskAnswerTime(2160);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037290",-1,2,100);
ms.npc_LeaveField("oid=8037327");
ms.npc_ChangeController(2159383, "oid=8037328", 270, 30, 1);
ms.npc_SetSpecialAction("oid=8037328", "summon", 0, 0);
ms.inGameDirectionEvent_SetHideEffect(0);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120, 1, 0, 1, "oid=8037292", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120, 1, 0, 1, "oid=8037292", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.npc_ChangeController(2159377, "oid=8037344", -700, 30, 0);
ms.npc_SetSpecialAction("oid=8037344", "summon", 0, 0);
ms.npc_ChangeController(2159378, "oid=8037345", -800, 30, 0);
ms.npc_SetSpecialAction("oid=8037345", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 2159383,  "按照命令，攻击目标。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, "oid=8037328", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159385,  "离开吉格蒙特！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(4, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.fieldEffect_PlayBGM("Bgm30.img/thePhoto", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159385,  "呃，头……头好痛。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/memory/1", 3900, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(3900);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 900, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159385,  "刚才那是什么？我想起了从没见过的场面。心里这种郁闷的感觉是什么……。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 900, 0, -120, 1, 0, 1, "oid=8037328", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037344",1,650,100);
ms.inGameDirectionEvent_AskAnswerTime(150);
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037345",1,650,100);
ms.inGameDirectionEvent_PushMoveInfo(0, 200, -450, 43);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(3251);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 80, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(6823);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159377,  "嗯？你在干什么？快去抓住那个……不，先把剩下的家伙全部抓回来！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, "oid=8037290", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(810);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159386,  "……贝尔！现在必须先逃走。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159385,  "吉格蒙特怎么办？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159386,  "光靠我们的力量不行！必须召集同伴们一起过来！哎呀！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smog", 3300, 550, 0, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/14", 1200, 120, -260, 1, 0, 1, 0, 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_LeaveField("oid=8037290");
ms.npc_LeaveField("oid=8037292");
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 1500, 0, -120, 1, 0, 1, "oid=8037344", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(840);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogEnd", 0, 550, 0, 1, 0, 1, 0, 1, 0);
ms.inGameDirectionEvent_AskAnswerTime(1020);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159377,  "不能放过那些家伙！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159377,  "尖兵！抓住那个反抗者，别让他逃走！维丽尔! 你和我去追那些家伙！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=8037344",1,600,100);
ms.npc_SetForceMove("oid=8037345",1,600,100);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 900, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.onScriptMessage(3, 0, 1, 2159377,  "刚才那个，到底是什么呢……。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(false, false, false);
ms.npc_LeaveField("oid=8037328");
ms.npc_LeaveField("oid=8037344");
ms.npc_LeaveField("oid=8037345");
ms.dispose();
ms.warp(931050950, 0);
    } else {
        ms.dispose();
    }
}
