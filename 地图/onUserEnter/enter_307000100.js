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
    if (!ms.isQuestFinished(32971)) {
	action1(mode, type, selection);
    }else if (ms.getInfoQuest(32978) =="exp=1" && ms.isQuestFinished(32978) && (!ms.isQuestFinished(32980) || !ms.isQuestActive(32980)) && ms.getInfoQuest(32980) !="exp=1" ) {//消失的记忆
	action4(mode, type, selection);
    }else if (ms.getInfoQuest(32974) =="e=1;exp=1" && !ms.isQuestFinished(32976)) {
	action3(mode, type, selection);
    }else if (ms.isQuestFinished(32974) && ms.getInfoQuest(32974) !="e=1;exp=1" && !ms.isQuestFinished(32976)) {
	action2(mode, type, selection);
    } else {
	//再次进入时同步任务身份信息
	ms.updateInfoQuest(32970, "s1=1;s2=1;e1=1;e2=1;e3=1");
	ms.forceCompleteQuest(32970);
	ms.updateInfoQuest(32970, "s1=1;s2=1;exp=1;e1=1;e2=1;e3=1");
        ms.dispose();
    }

}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
	//地图内置无需召唤
	ms.npc_ChangeController(2560107, "oid=22230", -1283, -6, 0);
	ms.npc_ChangeController(2560118, "oid=22231", -1461, -6, 0);
	ms.npc_ChangeController(2560112, "oid=22232", 201, -150, 1);//艾特
	ms.npc_ChangeController(2560103, "oid=22233", -216, -136, 0);//米露
	ms.npc_ChangeController(2500001, "oid=22234", -1846, -6, 1);//云雀丽塔
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.setStandAloneMode(true);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.onTeleport(1, ms.getPlayer().getId(), -250, -20);
ms.npc_ChangeController(2560003, "oid=20569705", 96, -60, 1);//艾特
ms.npc_SetSpecialAction("oid=20569705", "summon");
ms.npc_ChangeController(2560004, "oid=20569706", 254, -181, 1);//西姆斯
ms.npc_SetSpecialAction("oid=20569706", "summon");
ms.npc_ChangeController(2560006, "oid=20569707", 180, -181, 1);//肯
ms.npc_SetSpecialAction("oid=20569707", "summon");
ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, -58);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.npc_ChangeController(2560001, "oid=20569726", -87, -239, 0);//拉伊勒
ms.npc_SetSpecialAction("oid=20569726", "summon");
ms.npc_ChangeController(2560005, "oid=20569727", 90, -231, 1);//凯森
ms.npc_SetSpecialAction("oid=20569727", "summon");
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(700);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#应该能做到吧，艾特？\r\n只要完成这次作战，就能达到S级了。", 2560001);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#当然。这次我会把时间缩得更短。", 2560003);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#果然不愧是艾特。", 2560001);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#好了，说明到此结束。\r\n相信大家已经理解了作战内容。\r\n请移动到各自的位置。", 2560001);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#（S级？哼，真笨。）", 2560006);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#（连骗人都不会。实际上一拳就搞定了。）", 2560006);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1#（不要像傻瓜一样去嫉妒。）", 2560004);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1#我们先出发了。", 2560004);
} else if (status === i++) {
ms.Npc_Fadeout("oid=50940904", 0, 1000);
ms.Npc_Fadeout("oid=50940905", 0, 1000);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1#我们也走吧。", 2560001);
} else if (status === i++) {
ms.Npc_Fadeout("oid=50941033", 0, 1000);
ms.Npc_Fadeout("oid=50941034", 0, 1000);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20569705",-1,200,150);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#再见，影牙。去执行作战之前，能给我点#r中和剂#k吗？", 2560003);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("嗯，给。");
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0 #太感谢了。", 2560003);
} else if (status === i++) {
ms.npc_SetForceMove("oid=20569705",-1,1000,150);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("不，没关系。这是我的工作……");
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -361, -10);
} else if (status === i++) {
ms.inGameDirectionEvent_ForcedFlip(-1);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.Npc_Fadeout("oid=50940903", 0, 1000);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=20569705");
ms.sendNextSNoESC_Bottom("呼……");
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#说的是反话吧？\r\n#b骗人的人竟然会羡慕被骗的人。", 2560000);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("嗯？");
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(100, 1500, 100, -165, -10);
} else if (status === i++) {
ms.npc_ChangeController(2560000, "oid=20570306", -150, -20, 1);
ms.npc_SetSpecialAction("oid=20570306", "summon");
ms.inGameDirectionEvent_ForcedFlip(1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("啊，我没有……");
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#没关系，影牙。我也可以理解。\r\n和医务队的事情相比，他相当华丽，对吧？", 2560000);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("嗯……是有一点。");
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1##fs20 ##r但.是。", 2560000);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1##fs18#我们的使命是绝对的。\r\n千里之堤，毁于蚁穴。", 2560000);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face1##fs20#绝对不能#r怀疑使命#k。\r\n#fs16#你该不会是忘了吧？", 2560000);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("是，是！！对不起……");
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("（每次都这样落入威尔队长的陷阱……）");
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#我再叮嘱你一件事。\r\n影子森林中的#r诅咒气息#k正在逐渐增强。", 2560000);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#一不小心，可能会被影子气息侵蚀。所以如果见到没见过的植物，最好不要靠近。", 2560000);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("#r影子诅咒……#k是，知道了。");
} else if (status === i++) {
ms.sendNextNoESC_Bottom("#face0#老是跟你唠叨，真的很抱歉，影牙。\r\n但是团员的安全永远是第一位的，希望你能理解。", 2560000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_setForceFlip("oid=20570306", 1);
ms.Npc_Fadeout("oid=50952010", 0, 700);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_LeaveField("oid=20570306");
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
ms.updateInfoQuest(32970, "s1=1;s2=1;e1=1;e2=1;e3=1");
ms.forceCompleteQuest(32970);
ms.updateInfoQuest(32970, "s1=1;s2=1;exp=1;e1=1;e2=1;e3=1");
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
ms.npc_ChangeController(2560107, "oid=22231", -1283, -6, 0);
ms.npc_ChangeController(2560118, "oid=22232", -1461, -6, 0);
ms.npc_ChangeController(2560112, "oid=22233", 201, -150, 1);
ms.npc_ChangeController(2560103, "oid=22234", -216, -136, 0);
ms.npc_ChangeController(2500001, "oid=22235", -1846, -6, 1);
ms.dispose();
ms.warp(307000120);
    } else {
        ms.dispose();
    }
}

function action3(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560107, "oid=22231", -1283, -6, 0);
ms.npc_ChangeController(2560118, "oid=22232", -1461, -6, 0);
ms.npc_ChangeController(2560112, "oid=22233", 201, -150, 1);
ms.npc_ChangeController(2560103, "oid=22234", -216, -136, 0);
ms.npc_ChangeController(2500001, "oid=22235", -1846, -6, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h1;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h0;18=h0;19=h0");
ms.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h1;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h0;08=h0;18=h0;19=h0");
ms.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h0;08=h0;18=h0;19=h0");
ms.npc_ChangeController(2560001, "oid=4212120", -87, -239, 1);
ms.npc_ChangeController(2560005, "oid=4212121", 90, -231, 1);
ms.npc_ChangeController(2560000, "oid=4212122", -200, -180, 1);
ms.npc_ChangeController(2560002, "oid=4212123", -113, -25, 0);
ms.npc_ChangeController(2560004, "oid=4212124", 100, -20, 1);
ms.npc_ChangeController(2560006, "oid=4212125", 180, -20, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -264, 0);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onTeleport(1, ms.getPlayer().getId(), -290, -6);
ms.inGameDirectionEvent_ForcedFlip(1);
ms.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "呃……最后还是没说。怎么办呢……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "不，没事的。\r\n虽然#b艾特#k知道了迎月花，让人有点担心……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "但是只要以后尽可能避开他，应该就没什么问题。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_setForceFlip("oid=4212123", -1);
ms.onScriptMessage(3, 0, 1, 2560002,  "#face0#（喂，影牙！你！大家都在看着你呢！）", 257, 0, 37, 0, 1, 2560002); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "嗯？什么……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, -53);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.onScriptMessage(3, 0, 1, 2560003,  "#face3#……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560001,  "#face0#如果我的理解没错……", 257, 0, 37, 0, 1, 2560001); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560001,  "#face0#这次作战，你是想#b和影牙一起出战#k吧？", 257, 0, 37, 0, 1, 2560001); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560001,  "#face0#我说得对吗，艾特？", 257, 0, 37, 0, 1, 2560001); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
ms.npc_setForceFlip("oid=4212120", 1);
ms.npc_setForceFlip("oid=4212122", 1);
ms.npc_setForceFlip("oid=4212123", 1);
ms.onScriptMessage(3, 0, 1, 2560003,  "#face4#是的，没错。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#fs20#呃唉？！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#在之前的作战中受了点伤，我担心会恶化。\r\n要是医务队员能一起参加作战，负担就能减轻不少。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#嗯？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "那，那那……有那个必要吗……我，我还有别的事……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#别的事？啊～原来你很忙啊，哈哈……啊！是因为那个吗？那个什么来着？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face14#迎.月……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我，我想参加战斗！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, "oid=4212120", 0, 0);
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/what", 0, 0, 0, 1, 0, 1, "oid=4212121", 0, 0);
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, "oid=4212122", 0, 0);
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, "oid=4212123", 0, 0);
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/what", 0, 0, 0, 1, 0, 1, "oid=4212124", 0, 0);
ms. inGameDirectionEvent_Effect( "Effect/OnUserEff.img/emotion/what", 0, 0, 0, 1, 0, 1, "oid=4212125", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560001,  "#face0#这个嘛……我不知道。", 256, 0, 37, 0, 1, 2560001); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#嗯……", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#是的，影牙的主意好像不错。我赞成。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "嗯？！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#对影牙而言，这也会是很好的经历。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560001,  "#face0#既然威尔这么说，那就没办法了。", 257, 0, 37, 0, 1, 2560001); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face14#从现在开始，你就是我的奴隶。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（救命……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_LeaveField("oid=4212120");
ms.npc_LeaveField("oid=4212121");
ms.npc_LeaveField("oid=4212122");
ms.npc_LeaveField("oid=4212123");
ms.npc_LeaveField("oid=4212124");
ms.npc_LeaveField("oid=4212125");
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.updateInfoQuest(32974, "e=1;exp=1;e2=1");
ms.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h0;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h0;08=h0;18=h0;19=h0");
ms.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h0;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h0;18=h0;19=h0");
ms.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h1;12=h1;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;08=h0;18=h0;19=h0");
ms.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0, 0);
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
    } else {
        ms.dispose();
    }
}

function action4(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560107, "oid=22231", -1283, -6, 0);
ms.npc_ChangeController(2560118, "oid=22232", -1461, -6, 0);
ms.npc_ChangeController(2560112, "oid=22233", 201, -150, 1);
ms.npc_ChangeController(2560103, "oid=22234", -216, -136, 0);
ms.npc_ChangeController(2500001, "oid=22235", -1846, -6, 1);
ms.onTeleport(1, ms.getPlayer().getId(), -900, -84);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.npc_ChangeController(2560003, "oid=3757020", -800, -60, 1);
ms.inGameDirectionEvent_ForcedFlip(1);
ms.onScriptMessage(3, 0, 1, 2560003,  "#face5#哈哈哈，看到了吗？", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 0,  "我死定了……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face5#哈哈，别太担心。我不会把你怎么样的。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "呃……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face5#好玩吧？看见那家伙的表情了吗？哈哈哈！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "确实很好笑……嘻嘻嘻。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/pen", 100);
ms.onScriptMessage(3, 0, 1, 0,  "嗯？等等……书里又增加了没见过的内容？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#什么？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（哎呀！不应该让艾特看到……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#用盛满了月光的#r那种花#k，来代替一撮月光，怎么样……？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "！！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#你们俩在看什么呢？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0, 0);
ms.npc_ChangeController(2560000, "oid=3757078", -746, -100, 1);
ms.inGameDirectionEvent_ForcedFlip(1);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "啊，队，队长！你好……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0#你好，队长。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#如果没什么急事，我可以把影牙带走吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face4#当然。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.npc_setForceFlip("oid=3757078", 1);
ms.Npc_Fadeout("oid=3757078", 0, 500);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_LeaveField("oid=3757078");
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#影牙，你昨天说过#r“奇怪”#k，对吧？", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_ForcedFlip(-1);
ms.onScriptMessage(3, 0, 1, 0,  "嗯？嗯……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16##fs18#你知道吗？这里的人不会说那种话。绝对。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "什么？听，听你这么一说，确实……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#所以，如果医务队长说出#r“奇怪”#k这样的话，一定要小心。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#如果那样的话……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#说明那家伙是秘密的幕后黑手。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.OverlapScreenDetail19(0, 1000, 3000, 1);
ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.fieldEffect_RemoveOverlapScreenDetail(1000);
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.forceStartQuest(32980, "");
ms.npc_LeaveField("oid=3757020");
ms.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
ms.dispose();
ms.warp(307000120);
ms.npc_ChangeController(2560114, "oid=22247", 134, 296, 1);
    } else {
        ms.dispose();
    }
}