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
cm.setStandAloneMode(true);
cm.setInGameDirectionMode(true, false); 
cm.onTeleport(1, cm.getPlayer().getId(), 123, -288);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  " 迎月花……迎月花……在这里。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("晚上开放，早上凋谢的花。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_1.mp3", 100);
cm.inGameDirectionEvent_Monologue("根据传说，在很久很久以前，有个非常喜欢月亮的少女。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_2.mp3", 100);
cm.inGameDirectionEvent_Monologue("她想和月亮见面，自己也想变成月亮。虽然她每天祈祷，但最终却没能实现愿望。", 1);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_3.mp3", 100);
cm.inGameDirectionEvent_Monologue("精灵认为少女很可怜，于是让她重生成了一朵花。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_4.mp3", 100);
cm.inGameDirectionEvent_Monologue("那种花被称作「迎月花」。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_5.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("这就是迎月花晚上开放，白天凋谢的原因……", 1);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/D_6.mp3", 100);
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "……真是个悲伤的故事。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "后面……是白纸？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/knock", 100);
cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#一个人都没有吗？", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "啊！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip(-1);
cm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip(1);
cm.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip(-1);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(4);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "哎呀，连躲的地方都没有。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.updateInfoQuest(32999, "01=h1;10=h1;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;18=h0;19=h0");
cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#这是肯的杯子。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#嗯……没人在吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face3#吸一口气……（嗬咯咯咯！）", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/5", 0, 300, 0, 0, 0, 4, 1);
cm.onScriptMessage(3, 0, 1, 0,  "#face3#这是礼物，嘻嘻。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
cm.onScriptMessage(3, 0, 1, 0,  "哎呀！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face14#是谁！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "啊！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(0);
cm.onScriptMessage(3, 0, 1, 0,  "#face14#看～到～了～", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "！！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
cm.onTeleport(1, cm.getPlayer().getId(), 140, -30);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
cm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face16#哎呀，这不是医务队的影牙吗？", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "那……那个……我什么都没看见。真的。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#干嘛突然对我这么客气。看来你好像看到了……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "不……不……没……没看到……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face14#有句老话，#fs18##r只有死人不会说话。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "哎呀！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.forceCompleteQuest(32973);
cm.updateInfoQuest(32973, "s=1;exp=1");
cm.setInGameDirectionMode(false, false, false);
cm.dispose();
    } else {
        ms.dispose();
    }
}