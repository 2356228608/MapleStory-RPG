/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
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
cm.onScriptMessage(3, 0, 0, 0,  "嗯？那本书……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face0#这是昨天你看的植物图鉴。但是你……可以制作这个吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "这是……#b真实之药？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.setStandAloneMode(true);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#r真实之药#k调制方法。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/E_1.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/E_2.mp3", 100);
cm.inGameDirectionEvent_Monologue("大眼青蛙卵一勺，隔水熬制后……", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/E_3.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("最后放入一撮月光……", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/E_4.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("效果很简单。#r消除一切虚假，显露真相。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/E_5.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.setStandAloneMode(false);
cm.setInGameDirectionMode(false, false, false);
cm.onScriptMessage(3, 0, 0, 0,  "这个我还是头一次看见……咦？昨天这一页明明是白纸。奇怪……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face16#什么？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "一定是看错了。不可能有人在这段时间里把书页给补上。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face16#不，刚才你说“奇怪”……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "嗯？那怎么了？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face16#不，不，那个算了。告诉我，你能不能制作这个东西。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "这个配方怎么看都像是什么人的恶作剧。\r\n#b一撮月光#k，怎么可能？你看。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face11#啧……没错。算了，回去吧。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "嗯……这本书你不拿走吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 2560003,  "#face16#你还回去吧。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 0, 0,  "（切……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.forceStartQuest(32977, "");
cm.OnStartNavigation(307000110, 0, "", 0);
cm.dispose();
    } else {
        ms.dispose();
    }
}