/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    var info = ms.getInfoQuest(32970);
    //32971对话任务32972打200只影子斧木妖
    if (!ms.isQuestFinished(32973)) {//回影子村
        action1(mode, type, selection);
    }else if (ms.isQuestFinished(32982) && ms.getInfoQuest(32982) =="exp=1" && ms.getInfoQuest(32982) !="s1=1;exp=1"){
        action2(mode, type, selection);
    } else {
        ms.dispose();
    }
}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560100, "oid=22361", 1010, -93, 1);
ms.npc_ChangeController(2500001, "oid=22362", -209, -6, 1);
ms.npc_ChangeController(2560120, "oid=22363", 806, -93, 0);
ms.npc_ChangeController(2560121, "oid=22364", 1020, -93, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.onTeleport(1, ms.getPlayer().getId(), 888, -120);
ms.inGameDirectionEvent_ForcedFlip(1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1300, 0, 954, -72);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 945, -66);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "好像来到了什么地方……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "嗯？这种地方竟然有迎月花……真漂亮……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "哎呀，队长让我别靠近没见过的植物……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "但是看上去好像没什么危险。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "嗯……稍微看看没关系吧？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/3", 0, 300, 0, 0, 0, 4, 1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "一会儿功夫，都长出果实来了……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/C_1.mp3", 100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.effect_Text("#fn黑体##fs18#看……果实……", 100, 1000, 4, 0, 0, 1, 4, 0, 0, 0);
ms.onScriptMessage(3, 0, 1, 0,  "嗯？刚才是什么声音？谁在那里？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/C_2.mp3", 100);
ms.onScriptMessage(3, 0, 1, 0,  "让我……看果实？仔细看一下……味道……非常香……很甜蜜……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/C_3.mp3", 100);
ms.onScriptMessage(3, 0, 1, 0,  "甜蜜的味道……（咕嘟）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/C_4.mp3", 100);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.updateInfoQuest(32972, "exp=1;e1=1");
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
    } else {
        ms.dispose();
    }
}

function action2(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560100, "oid=22362", 1010, -93, 1);
ms.npc_ChangeController(2500001, "oid=22363", -209, -6, 1);
ms.npc_ChangeController(2560120, "oid=22364", 806, -93, 0);
ms.npc_ChangeController(2560121, "oid=22365", 1020, -93, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.onTeleport(1, ms.getPlayer().getId(), 903, -140);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 938, -100);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.onScriptMessage(3, 0, 1, 0,  "这里是……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#这段时间我也做了点事。石竹花瓣，发光蘑菇，大眼青蛙卵……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#b真实之药？！#k你难道？！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#还有这里的迎月花。这样材料就都齐了吧？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "但是……迎月花不是真的月亮。\r\n不知道会不会有效。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#但是试一下也不会有损失。不是吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "那倒是……但是真的没关系吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#不要紧张。你不也想知道吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我们不应该怀疑使命……（我……该怎么办？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#不愿意一起干，那就看着好了。我来提取。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "等，等一下。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我……我来。如果不小心，可能会受伤。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "先把其他的都准备好，最后再提取。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.updateInfoQuest(32982, "s1=1;exp=1");
ms.dispose();
    } else {
        ms.dispose();
    }
}