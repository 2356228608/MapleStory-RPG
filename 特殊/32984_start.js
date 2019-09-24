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
cm.setStandAloneMode(true);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/pen", 100);
cm.onScriptMessage(3, 0, 1, 0,  "啊，书上又出现了内容！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????##fs22#手……不是诅咒。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("#fn????##fs22#真相在神殿。", 1);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "不是诅咒？那到底是什么？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "真相……在神殿……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "反正艾特要到神殿去。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "在这之前，我必须先确认一下。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.setStandAloneMode(false);
cm.setInGameDirectionMode(false, false, false);
cm.OnStartNavigation(307000230, 0, "pt01", 0);
cm.forceStartQuest(32984, "");
cm.dispose();
    } else {
        ms.dispose();
    }
}