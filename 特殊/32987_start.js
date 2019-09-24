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
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.onScriptMessage(3, 0, 1, 0,  "笔记……难道是艾特去神殿之前留下的？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#对不起，朋友。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#召唤我去神殿的声音没有消失。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#也许是最后一次了，我就把秘密告诉你吧。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#为什么你每次靠近的时候，我都能察觉。", 1);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#因为你的身上，一直散发着隐隐的香气。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#那是……迎月花的香味。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????#希望你能喜欢我的礼物。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("                                                  - 艾特", 1);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "这是……迎月花……\r\n不会是真的翻遍了整个森林，才找到的吧？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "傻瓜……真是个傻瓜……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "不，都忘了吧……把它放到抽屉里……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/4", 0, 500, 0, 0, 0, 4, 1);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "！！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "为什么抽屉里已经有花了呢？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "难道这是……上一个轮回，还有上上个轮回的……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "哈……哈哈……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "每次……每次艾特都叫我朋友。\r\n但是我……每次都背叛他……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/I_2.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "我……到底干了些什么？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/I_3.mp3", 100);
cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
cm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "必须到队长室去一趟。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.OnStartNavigation(307000120, 0, "", 0);
cm.forceStartQuest(32987, "");
cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h1;06=h0;16=h1;07=h0;08=h1;17=h0;18=h0;19=h0");
cm.setInGameDirectionMode(false, false, false);
cm.dispose();
    } else {
        ms.dispose();
    }
}