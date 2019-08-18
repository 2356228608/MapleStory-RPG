/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (!ms.isQuestFinished(30060)) {
		action第二幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30068)) {
		action第三幕(mode, type, selection);
	} else {
		ms.warp(106030000, 0);
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
		ms.npc_ChangeController(1302101, 307, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.npc_ChangeController(1302109, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302109, "summon");
		ms.npc_SetSpecialState(1302109, 2, 0);
		var newStatus = ms.getQuestRecord(30081);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("公，公主！快逃！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("父王？这个人到底是谁？", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs40##r又多来了一只愚蠢的飞蛾", 100, 3000, 4, 0, 0, 1, 4, 0, 0, 0); //334 0x3D
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("这个台词是……！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我是想要支配这个世界的黑……", 1, 0, 0, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 全场
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 0, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 1, 0, 2000, 1302101, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302109, 0, 0);
		ms.npc_SetSpecialAction(1302109, "change");
		ms.npc_SetSpecialState(1302109, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30081);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.effect_NormalSpeechBalloon("黑大海盗！", 0, 0, 200, 2000, 1302109, 0);
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
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 全场
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 0, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 1, 0, 2000, 1302101, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("唉……", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialState(1302109, 2, 1);
		ms.effect_NormalSpeechBalloon("大家为什么一听到我的名字就表现得很失望啊！", 1, 0, 0, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("嗯，不管怎样，美丽的碧欧蕾塔是谁啊？", 1, 0, 0, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// ms.npc_SetSpecialState(1302101, 3, 0);
		ms.effect_NormalSpeechBalloon("你该不会是因为贪图我的美貌，才劫持……", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不，我不是说你，我在问碧欧蕾塔是谁？我现在是认真的。", 1, 0, 0, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我说了，那就是我。", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("你真的就是传说中最美丽的碧欧蕾塔？", 1, 0, 0, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 全场
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 1, 0, 2000, 1302101, 0);
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("（点头点头）", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("蘑菇大臣那个家伙，竟然敢骗我！", 0, 0, 200, 2000, 1302109, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("你们让我感觉受到了侮辱。这个难看的蘑菇我带走了！", 1, 0, 0, 2000, 1302109, 0);
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
		ms.npc_ChangeController(1302101, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("碧欧蕾塔！我的女儿！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 碧欧蕾塔往前跳
		ms.effect_NormalSpeechBalloon("哎呀呀呀！", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("没受伤吧？", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("没有。抱歉让您担心了。", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("#h #，真是谢谢你。真不知道怎么报答你。", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("应该重重奖赏他。", 1, 0, 0, 2000, 1302105, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("没错，没错，必须重赏。", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不管你是不是蘑菇，或者是不是男人，都没关系。希望你能尽快和公主结婚……", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("先，先得抓住蘑菇大臣才行！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("勇士说得对。", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("以后再奖赏也不迟。", 1, 0, 0, 2000, 1302106, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("嗯，既然大臣们的意思是这样，那就没办法了。", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("呼，得救了。", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
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
