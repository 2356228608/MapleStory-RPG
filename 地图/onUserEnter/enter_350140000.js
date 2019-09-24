/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 350140000
地图名称： 雪龟岛
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/6 15:40:50] 之前所在地图: cm.warp(913050010) - 当前进入地图: cm.warp(350140000)
		cm.npc_ChangeController(1540809, "oid=484325040", -150, 350, 0);
		cm.npc_SetSpecialAction("oid=484325040", "summon", 0, 0);
		cm.npc_ChangeController(1540845, "oid=484325042", 200, 350, 1);
		cm.npc_SetSpecialAction("oid=484325042", "summon", 0, 0);
		cm.npc_ChangeController(1540850, "oid=484325044", 0, 350, 1);
		cm.npc_SetSpecialAction("oid=484325044", "summon", 0, 0);
		cm.updateInfoQuest(34020, "check4=1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 500, 392);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#另一方面，#fs15##fnNanum Gothic#雪龟岛", 100, 1500, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 100, 392);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 500, 500, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -30, 392);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3500, 0, 392);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face6#二话不说就闯进来，你这是做什么，阿卡伊勒？", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/1", 128);
		cm.onScriptMessage(3, 0, 1, 0, "我找到了你背叛的证据，戴米安。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/2", 128);
		cm.onScriptMessage(3, 0, 1, 0, "超越石是一种将超越者的力量吸引到必亡者领域的石头！\r\n你若不是为了背叛那个伟大的人，又为什么要寻找这种石头？", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/3", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#……看来你真够清闲的啊，还有工夫偷偷调查我，阿卡伊勒。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/4", 128);
		cm.onScriptMessage(3, 0, 1, 0, "那个伟大的人是信任你，才将事情交给你，可你居然敢谋反！", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/5", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#说重点吧，所以你打算怎么办？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/6", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "把世界树交出来。", 256, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/7", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#哈哈哈，你最终的目的还是要抢夺我的功劳？阿卡伊勒真是个小人啊。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/8", 128);
		cm.onScriptMessage(3, 0, 1, 0, "闭嘴，你这个无礼的家伙！", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/9", 128);
		cm.setNpcSpecialActionReset("oid=484325042");
		cm.npc_SetSpecialAction("oid=484325042", "summon_chain", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom", 100);
		cm.setNpcSpecialActionReset("oid=484325040");
		cm.npc_SetSpecialAction("oid=484325040", "chain_start", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/dem_chain", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=484325040");
		cm.npc_SetSpecialAction("oid=484325040", "chain_loop", -1, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#！！你什么时候在我身上……！", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/10", 128);
		cm.onScriptMessage(3, 0, 1, 0, "数百年前关押你的时候就已经刻进去了。\r\n原本终极秘密就应该藏到最后才是，戴米安。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/11", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face6#哼，你这家伙真是从头到脚都透着卑鄙的味道。", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/12", 128);
		cm.onScriptMessage(3, 0, 1, 0, "给我闭嘴，你这么傲慢放肆，你以为我能忍你到何时？", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/13", 128);
		cm.onScriptMessage(3, 0, 1, 0, "啊，对了，话说起来，我还隐瞒了另外一件事。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/14", 128);
		cm.setNpcSpecialActionReset("oid=484325042");
		cm.npc_SetSpecialAction("oid=484325042", "summon_mother", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom", 100);
		cm.inGameDirectionEvent_AskAnswerTime(250);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=484325044");
		cm.npc_SetSpecialAction("oid=484325044", "appear2", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=484325044");
		cm.npc_SetSpecialAction("oid=484325044", "loop", -1, 0);
		cm.OverlapScreenDetail19(0, 1000, 1000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -20, 392);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 3000, 2000, 10, 392);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 1000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 25, 392);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(4000, 3000, 4000, 5, 392);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 1000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 392);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=484325044");
		cm.npc_SetSpecialAction("oid=484325044", "destroy", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/windowcrash2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face5#!!!!", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/15", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ak_mom2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "你母亲其实只是个虚像，区区人类身体，你以为我会吃那么多苦帮你保管着吗？", 256, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/16", 128);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face5#你……说……是虚像？", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/17", 128);
		cm.onScriptMessage(3, 0, 1, 0, "好吧，而且那天杀死你母亲的人并不是你，那全都是我的作品。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/18", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face5#！！！", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/19", 128);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("home", "Effect/Direction6.img/effect/tuto/backToHome/0", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#一切事情……全都是你干的？", 256, 0, 37, 0, 1, 1540934); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/20", 128);
		cm.onScriptMessage(3, 0, 1, 0, "没错，我把你关起来只是用来当工具，为的就是让你的哥哥恶魔能够堕落得更加彻底。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/21", 128);
		cm.onScriptMessage(3, 0, 1, 0, "不过狼终究是狼……\r\n不管是哥哥还是弟弟，同样都威胁到了我的处境。\r\n既然已经好好使唤了你们数百年，也该够了。", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/22", 128);
		cm.fieldEffect_ProcessOnOffLayer("home", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……", 256, 0, 37, 0, 1, 1540934); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/23", 128);
		cm.onScriptMessage(3, 0, 1, 0, "呵呵……你的表情可真是有趣啊。\r\n在你上黄泉路之前，我就将真相作为最后的礼物送给你，你是不是会更感激我一些呢？", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/24", 128);
		cm.onScriptMessage(3, 0, 1, 0, "那现在我就问你最后一个问题，世界树在哪儿，戴米安？！", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/25", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face14#呵呵……呵哈哈……哇哈哈哈哈……", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/26", 128);
		cm.onScriptMessage(3, 0, 1, 0, "哪里好笑了？", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/27", 128);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face15#世界树已经不复存在，因为已经被我吞噬了。", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/28", 128);
		cm.onScriptMessage(3, 0, 1, 0, "什么？！", 257, 0, 37, 0, 1, 1540845); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/29", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face15#你说过终极秘密要藏到最后的吧？", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/30", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face15#我之所以寻找超越石，不是想要背叛黑魔法师。\r\n我是想让自己成为生命的超越者！", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/31", 128);
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, -225, 442);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2500, 1000, 2500, -200, 242);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=484325040");
		cm.npc_SetSpecialAction("oid=484325040", "chain_destroy", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/dam_chain2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/32", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这怎么可能，那股力量……！", 256, 0, 37, 0, 1, 1540933); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm45/Demian", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face12##r那现在我要问你最后一个问题。#k", 256, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/33", 128);
		cm.onScriptMessage(3, 0, 1, 0, "#face11##r我该怎么杀死你呢，阿卡伊勒？#k", 257, 0, 37, 0, 1, 1540809); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT4/OP/34", 128);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
		cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/HofM/ACT4_akayrum", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/OP/35", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 3000, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/OP/36", 128);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-Final Act-\r\n#fs28#世界树: #fs20#最后一战", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=484325040");
		cm.npc_LeaveField("oid=484325042");
		cm.npc_LeaveField("oid=484325044");
		// [2019/9/6 15:43:03] 当前所在地图: cm.warp(350140000) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350140100);
		cm.dispose();

	} else {
		ms.dispose();
	}
}
