/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (!ms.isQuestFinished(30057)) {
		action第一幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30060)) {
		action第二幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30068)) {
		action第三幕(mode, type, selection);
	} else {
		ms.warp(106030000, 0);
		ms.dispose();
	}
}

function action第一幕(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("真的是蘑菇大臣！");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("呵呵呵，你一定是看错了。好了，下一位挑战者上来了。大家把目光转移到舞台上来。", 1302100);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("把痣去掉的话，就一模一祥，干嘛总说不是啊！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("已经是第一百位参加者了。我屈膝跪下，是为了获得推进力！比任何人更快，与所有人都不同，连名字都不愿意透露的迷一般的男人，请你出来吧！", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302103, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302103, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("有一只马吃掉了一头大象。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("为什么会这样呢~？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("难，难道……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("因为那是在象棋！呵呵呵呵呵", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wind");
	} else if (status === i++) {
		// 全场都
		ms.effect_NormalSpeechBalloon("……", 4000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("石头上钻一个洞会变成什么呢~？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("钻石！呵呵呵呵呵", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("那小鸡吃的药的名字是什么呢~？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("把那个蘑菇从我眼前拿开。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哼，要是非要见血，那就没办法了。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("事实上，我就是……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("蘑菇大臣！", 2000, 4);
		ms.inGameDirectionEvent_PushScaleInfo(500, 3500, 500, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("什，什么？真的是蘑菇大臣吗！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哎呀，完全被蒙在鼓里了！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("看来是做了精心的准备！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("真不敢相信，那个蘑菇就是蘑菇大臣！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("又被他完美的伪装给骗过去了！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我回来是为了洗刷过去的耻辱。当然，我不是一个人来的。我请来了一些客人，那就是……在天上飞的大海盗部队！", 1302103);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你们好像在正门的防御上花了不少功夫，真是不好意思，大海盗部队会攻击警备松懈的后门。好了，让我们重新开始吧！这次我一定要将蘑菇王国掌握在手中！", 1302103);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
		ms.npc_LeaveField(1302101);
		ms.npc_LeaveField(1302111);
		ms.npc_LeaveField(1302103);
	} else {
		ms.dispose();
	}
}

function action第二幕(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.npc_ChangeController(1302109, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302109, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("公，公主！快逃！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("父王？这个人到底是谁？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs26##r又多来了一只愚蠢的飞蛾", 100, 3000, 4, 0, 0, 1, 4, 0, 0, 0); //334 0x3D
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("这个台词是……！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我是想要支配这个世界的黑……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 全场
		ms.effect_NormalSpeechBalloon("黑魔法……！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302109, 0, 0);
		ms.npc_SetSpecialAction(1302109, "change");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("黑大海盗！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 屏幕灰暗
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 0, 0); //创建一个遮布 0x10
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/bird");
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		// 屏幕淡化成正常
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		// 全场
		ms.effect_NormalSpeechBalloon("唉……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("大家为什么一听到我的名字就表现得很失望啊！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("嗯，不管怎样，美丽的碧欧蕾塔是谁啊？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302101, "open");
		ms.effect_NormalSpeechBalloon("你该不会是因为贪图我的美貌，才劫持……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不，我不是说你，我在问碧欧蕾塔是谁？我现在是认真的。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我说了，那就是我。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("你真的就是传说中最美丽的碧欧蕾塔？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 全场
		ms.effect_NormalSpeechBalloon("（点头点头）", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("蘑菇大臣那个家伙，竟然敢骗我！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("你们让我感觉受到了侮辱。这个难看的蘑菇我带走了！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(750);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("b0", "Map/Effect2.img/flowervioleta/viking", 0, 2000, 0, 0, 0, 4, 1);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("b0", "Map/Effect2.img/flowervioleta/viking", 2, 1000, 0, 0, 0, 4, 1);
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
		ms.npc_LeaveField(1302101);
		ms.npc_LeaveField(1302109);
		ms.forceCompleteQuest(30059);
		ms.gainExp(48800);
	} else {
		ms.dispose();
	}
}

function action第三幕(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302101, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("碧欧蕾塔！我的女儿！", 1302000);
	} else if (status === i++) {
		// 碧欧蕾塔往前跳
		ms.sendNextNoESC_Bottom("哎呀呀呀！", 1302001);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("没受伤吧？", 1302000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("没有。抱歉让您担心了。", 1302001);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#h #，真是谢谢你。真不知道怎么报答你。", 1302000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("应该重重奖赏他。", 1302105);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("没错，没错，必须重赏。", 1302000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不管你是不是蘑菇，或者是不是男人，都没关系。希望你能尽快和公主结婚……", 1302000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.sendNextSNoESC_Bottom("先，先得抓住蘑菇大臣才行！");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("勇士说得对。", 1302107);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("以后再奖赏也不迟。", 1302106);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，既然大臣们的意思是这样，那就没办法了。", 1302000);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("呼，得救了。");
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
		ms.npc_LeaveField(1302101);
		ms.forceCompleteQuest(30067);
		ms.gainExp(36995);
	} else {
		ms.dispose();
	}
}
