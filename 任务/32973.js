/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) { 
    status++;
    var i = -1;
    if (status <= i++) {
        qm.dispose();
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.onTeleport(1, qm.getPlayer().getId(), 888, -120);
qm.OverlapScreenDetail19(0, 1000, 3000, 1);
qm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 860, -100);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.fieldEffect_RemoveOverlapScreenDetail(1000);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.npc_ChangeController(2560002, "oid=22780368", 792, -130, 0);
qm.npc_SetSpecialAction("oid=22780368", "summon", 0, 0);
qm.userSetFieldFloating(307000210, 10, 10, 50);
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.userSetFieldFloating(307000210, 0, 0, 0);
qm.inGameDirectionEvent_ForcedFlip(-1);
qm.onScriptMessage(3, 0, 1, 0,  "啊，吓死我了！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.effect_NormalSpeechBalloon("#fn???? ExtraBold##fs25#哇啊！！", 0, 0, 0, 1500, 2560002, 5584320);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "#face0#你站着发什么呆呢，影牙？", 256, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯？我？那……那个……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "#face0#队长不是让你别靠近没见过的植物吗？", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "我，我只是看了看。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "#face0#好吧，好奇心可以理解。\r\n我们快回去吧。", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
qm.npc_SetForceMove("oid=22780368",-1,150,100);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.Npc_Fadeout("oid=22780368", 0, 500);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(1);
qm.inGameDirectionEvent_AskAnswerTime(700);
} else if (status === i++) {
qm.inGameDirectionEvent_MoveAction(0);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "等等……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip(1);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "对了……难道，被我吃掉了？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.OverlapScreenDetail19(0, 1000, 3000, 1);
qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
qm.fieldEffect_RemoveOverlapScreenDetail(1000);
qm.setStandAloneMode(false);
qm.setInGameDirectionMode(false, false, false);
qm.forceStartQuest(32973, "");
qm.OnStartNavigation(307000100, 0, "pt01", 0);
qm.npc_LeaveField("oid=22780368");
qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) { (mode == 1) ? status++:status--;
    var i = -1;
    if (status <= i++) {
        qm.dispose();
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.onScriptMessage(3, 0, 1, 0,  "现在可以搜集材料了吧？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯？是石香蝴蝶！这可是稀罕玩意！快追！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip10(2, 200);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.forceCompleteQuest(32972);
qm.updateInfoQuest(32972, "exp=1");
qm.setInGameDirectionMode(false, false, false);
qm.warp(307000210);
qm.dispose();
	}else{
qm.dispose();
    }
}