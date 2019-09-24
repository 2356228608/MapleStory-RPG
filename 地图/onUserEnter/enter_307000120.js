/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    if (ms.getInfoQuest(32978) =="exp=1" && ms.isQuestFinished(32978) && (!ms.isQuestFinished(32980) || ms.isQuestActive(32980))) {
	ms.dispose();
    }else if (ms.getInfoQuest(32974) !="e=1;exp=1" && !ms.isQuestFinished(32975)){
	action1(mode, type, selection);
    }else if (ms.isQuestActive(32987) && !ms.isQuestFinished(32987)){
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
ms.npc_ChangeController(2560114, "oid=22247", 134, 296, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.onTeleport(1, ms.getPlayer().getId(), -78, 250);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 313);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_ForcedFlip(1);
ms.npc_ChangeController(2560000, "oid=5132856", 134, 258, 1);
ms.onScriptMessage(3, 0, 1, 0,  "队长，在吗？队长？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#嗯？是影牙啊。有什么事吗？", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我有话想……嗯？那个是……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(500, 3000, 500, 233, 313);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#哎呀，被你发现了。我还想给你个惊喜。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#这是可以看到镜世界之外，#b真实世界中的自己的镜子#k。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#因为最近看你好像对外面的世界很感兴趣。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 313);
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 313);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.onScriptMessage(3, 0, 1, 0,  "那么说……？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#没错。为了感谢你在此期间努力执行任务，\r\n我想把这个镜子给你看看。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "真，真的吗？！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#很遗憾，现在还没准备好。等轮回结束的时候，就能给你看了。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#影牙原来的样子，我也很想知道呢。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "谢谢你，队长。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#不过千万不能得意忘形。\r\n#b要是犯了错，这件事就当我没提过。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（犯了错……就当没提过……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#对了，你有什么话想跟我说吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "呃……不，没什么。哈哈……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#呵呵，好了，快出去吧。作战会议马上就要开始了。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.npc_LeaveField("oid=5132856");
ms.updateInfoQuest(32974, "e=1;exp=1");
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

ms.warp(307000120);
ms.npc_ChangeController(2560114, "oid=22247", 134, 296, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 313);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.npc_ChangeController(2560000, "oid=4206526", 105, 258, 1);
ms.onTeleport(1, ms.getPlayer().getId(), -105, 250);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#影牙，我不是让你好好等着吗？ ", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "图鉴……一开始就是你放在那里的吗？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#看来你的眼神还不错嘛。\r\n没错。上面的字是上个轮回你写的。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#除了最后一张。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "上面写着这样的字。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("人类的怀疑之心，只要有一颗小小的种子，很快就会长大。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/J_1-1.mp3", 100);
ms.inGameDirectionEvent_Monologue("最后会完全占据整个大脑。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/J_2-1.mp3", 100);
ms.inGameDirectionEvent_Monologue("就算使用再强的药物，也无法阻止。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/J_3-1.mp3", 100);
ms.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("不过，我决定反过来想。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/J_4-1.mp3", 100);
ms.inGameDirectionEvent_Monologue("#r只要相信一个#k，怀疑其他一切都没有关系。", 1);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/J_5-1.mp3", 100);
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "只要相信一个……那就是我。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#呵呵呵……是不是很管用？\r\n连那个疑心很重的艾特也每次都会乖乖地喝下中和剂。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "结果一切都只是谎言……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "让我变成真实存在的人，也是谎言吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#为什么……会这么想呢？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#fs17#因为你连自己制造的幻象都无可奈何。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willattack", 100);
ms.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2200);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face2#和不洁者相处了一小段时间，你就变成了这个样子，影牙。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/K_1-1.mp3", 100);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face2##fs17#如果想延长自己虚假的生命，就按我的吩咐去做。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/K_2-3.mp3", 100);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#哎呀哎呀，我好像有点太激动了。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/K_3-2.mp3", 100);
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#没事吧，影牙？你在发抖。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/K_4-2.mp3", 100);
ms.onScriptMessage(3, 0, 1, 0,  "呃……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#请你先回宿舍。米露会带着中和剂过去找你。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#对了，我也得给米露点奖赏才行……在这个轮回中，她可是立了大功。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（真实之药……必须到迎月山丘去。）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（必须从村子的左边出去。）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.forceCompleteQuest(32987);
ms.updateInfoQuest(32987, "exp=1");
ms.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h1;04=h0;13=h0;05=h0;14=h0;06=h0;15=h1;07=h1;16=h1;17=h0;08=h1;18=h0;19=h0");
ms.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h1;04=h0;13=h0;05=h0;14=h0;06=h0;15=h1;07=h1;16=h1;17=h0;08=h1;18=h1;19=h0");
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.npc_LeaveField("oid=4206526");
ms.dispose();
ms.warp(307000100);
ms.npc_ChangeController(2560107, "oid=22231", -1283, -6, 0);
ms.npc_ChangeController(2560118, "oid=22232", -1461, -6, 0);
ms.npc_ChangeController(2560112, "oid=22233", 201, -150, 1);
ms.npc_ChangeController(2560103, "oid=22234", -216, -136, 0);
ms.npc_ChangeController(2500001, "oid=22235", -1846, -6, 1);

    } else {
        ms.dispose();
    }
}
