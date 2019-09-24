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
cm.npc_ChangeController(2560011, "oid=4246866", 565, -62, 0);
cm.Npc_Fadeout("oid=4246866", 0, 0);
cm.SitOnDummyPortableChair(3018035, 1);
cm.onTeleport(1, cm.getPlayer().getId(), 944, -122);
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
cm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，\r\n大眼青蛙卵一勺，隔水熬制后……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "最后加上一撮月光……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.SitOnDummyPortableChair(3018037, 1);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "艾特……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "虽然迎月花是无法成为月亮的虚假之物……\r\n但却向我揭示了通往真相的线索。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "虽然我的存在本身不过是个幻象……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "但这是我唯一可以为你做的事。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "真实药水……只要有了这个……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.npc_ChangeController(2560000, "oid=4246925", 565, -62, 0);
cm.npc_SetSpecialAction("oid=4246925", "summon", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#真让人吃惊，影牙。没想到你真的抓住了月光。老实说，我很意外。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#但是……你是不是什么地方搞错了？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#你应该知道那是什么东西吧？\r\n你应该知道了你是什么。如果喝下那个东西……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/L_2-1.mp3", 100);
cm.onScriptMessage(3, 0, 1, 0,  "就会变回原来的样子……影子怪物，对吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#看来你很清楚。那你是想送给艾特，是吧……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/L_4-1.mp3", 100);
cm.Npc_Fadeout("oid=4246925", 0, 1000);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.Npc_Fadeout("oid=4246866", 1000, 2000);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.fieldEffect_PlayBGM("Bgm33.img/RedRoom", 0, 0);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#不过恐怕没那么容易。现在你想怎么办呢？", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "那就只能战斗了……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#影牙，既然你执意如此，我也不会阻拦你。\r\n好吧，那就开始吧？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.npc_LeaveField("oid=4246925");
cm.npc_LeaveField("oid=4246866");
cm.setInGameDirectionMode(false, false, false);
cm.warp(307090040);
cm.warp(307090050);
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.setStandAloneMode(true);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 846, 0);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.npc_ChangeController(2560000, "oid=4247095", 944, -144, 1);
cm.npc_SetSpecialAction("oid=4247095", "summon", 0, 0);
cm.onTeleport(1, cm.getPlayer().getId(), 759, -35);
cm.npc_SetSpecialAction("oid=4247095", "portion1", -1, 1);
cm.inGameDirectionEvent_MoveAction(4);
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
cm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "呃……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(0);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#影子中和剂和真实之药……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#选项只有两个。选择正确的答案，真的有那么难吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#没办法。我再给你一次机会。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "给我……机会？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willbreak", 100);
cm.npc_SetSpecialAction("oid=4247095", "portion2", 1, 1);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "啊，啊啊……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0##fs18#好了～现在选择的时候到了。 ", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_1-1.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#喝下中和剂，变回原来的影牙，或者消失。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_2-1.mp3", 100);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#如果你愿意变回原来的影牙……我向你保证。\r\n你可以拥有想要的一切。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_3-1.mp3", 100);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face0#当然，是在镜世界之中。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_4-1.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "呵，呵呵呵呵。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#有什么……好笑的吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_6-2.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#fs18#废话我已经听够了。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face2##fs18#什么？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/M_8-5.mp3", 100);
cm.fieldEffect_PlayBGM("Bgm48/EveningPrimrose", 0, 0);
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
cm.inGameDirectionEvent_AskAnswerTime(3500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "欺骗朋友的事情……我做不到……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/M_9.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/7", 0, 3000, 0, 0, 0, 4, 1);
cm.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/M_10.mp3", 100);
cm.effect_Text("#fn黑体##fs22#虽然最终变不成月亮……", 50, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.effect_Text("#fn黑体##fs22#但是没关系。只要能看着你就好……", 50, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect3.img/DLep5/8", 0, 3000, 0, 0, 1, 4, 1);
cm.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#竟然自愿变成了影子怪物……", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 5000, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(10000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#果然像那个人说的一样吗？\r\n也许……第九次很难再糊弄过去了。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/N_1-2.mp3", 100);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#不管怎样，我已经尽力了……一切都是在误差范围之内……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/N_2-2.mp3", 100);
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#但是……为什么呢？这种感觉……", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/will/N_3-2.mp3", 100);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.setStandAloneMode(false);
cm.setInGameDirectionMode(false, false, false);
cm.npc_LeaveField("oid=4247095");
cm.warp(307090051);
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.inGameDirectionEvent_SetHideEffect(1);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.npc_ChangeController(2560008, "oid=4247362", 0, -40, 1);
cm.npc_SetSpecialAction("oid=4247362", "summon", 0, 0);
cm.npc_ChangeController(2560012, "oid=4247363", -250, -40, 0);
cm.npc_SetSpecialAction("oid=4247363", "summon", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.effect_NormalSpeechBalloon("艾……艾……", 1, 0, 0, 4500, 2560012, 5584320);
cm.onScriptMessage(3, 0, 1, 2560008,  "#face0#这家伙是怎么回事？是在……说话吗？", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.effect_NormalSpeechBalloon("艾……艾特……", 1, 0, 0, 4500, 2560012, 5584320);
cm.onScriptMessage(3, 0, 1, 2560008,  "#face0#不知道你在说什么。我的名字是纳因。", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.npc_ChangeController(2560012, "oid=4247426", -147, -120, 0);
cm.npc_SetSpecialAction("oid=4247426", "summon", 0, 0);
cm.npc_LeaveField("oid=4247363");
cm.onScriptMessage(3, 0, 1, 2560008,  "#face1#呃，干嘛，这家伙！突然扑了上来……", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
cm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.effect_NormalSpeechBalloon("去……神殿……", 1, 0, 0, 2500, 2560012, 5584320);
cm.Npc_Fadeout("oid=4247426", 0, 2500);
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560008,  "#face1#怎么回事？明明没喝中和剂……但是身体……安然无恙？", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560008,  "#face16#难道中和剂是……假的……？", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.inGameDirectionEvent_PushScaleInfo(5000, 2000, 5000, -222, -460);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("按照古老的传说，\r\n任何谎言都不能骗过#r月亮#k。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/A_1.mp3", 100);
cm.inGameDirectionEvent_Monologue(" ", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("蓄满了雨水的乌云，\r\n深夜中的迷雾，都无法避开月亮。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/A_2.mp3", 100);
cm.inGameDirectionEvent_Monologue(" ", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("因此如果有什么真的很想很想知道的东西，\r\n只要去问问月亮就行。", 1);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/A_3.mp3", 100);
cm.inGameDirectionEvent_Monologue("对于真正想知道的那个问题，月亮必定会如实回答。", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/A_4.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("即使……那个真相#r非常非常残酷#k……", 0);
} else if (status === i++) {
cm.effect_Voice("Voice3.img/DLep5/pangF/A_5.mp3", 100);
cm.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560008,  "#face2#迎月花香味……真让人怀念……", 256, 0, 37, 0, 1, 2560008); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.fieldEffect_PlayBGM("Bgm34/DimensionLibrary", 0, 0);
cm.inGameDirectionEvent_SetHideEffect(0);
cm.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2500000,  "故事到此结束了。", 256, 0, 5, 0, 0, 2500000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2500000,  "现在请回来吧，回到现实中真正的#h0#! ", 257, 0, 5, 0, 0, 2500000); // [类型] 普通对话
} else if (status === i++) {
cm.forceCompleteQuest(32991);
//cm.finishAchievement(1217, 2);
cm.forceCompleteQuest(32989);
cm.updateInfoQuest(32989, "exp=1");
cm.setInGameDirectionMode(false, false, false);
cm.npc_LeaveField("oid=4247362");
cm.npc_LeaveField("oid=4247426");
cm.dispose();
cm.warp(302000000);
cm.npc_ChangeController(2500000, "oid=20653", 80, 58, 0);
cm.npc_ChangeController(2500002, "oid=20654", 343, 245, 1);
    } else {
        ms.dispose();
    }
}