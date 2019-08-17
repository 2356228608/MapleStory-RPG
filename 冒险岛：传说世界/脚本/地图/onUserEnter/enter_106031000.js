/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (!ms.isQuestFinished(30051)) {
		action第一幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30053)) {
		action第二幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30054)) {
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
		ms.npc_ChangeController(1302111, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302111, "summon");
		ms.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_Voice("Voice.img/flowervioleta/mc/0");
		ms.sendNextNoESC_Bottom("下一位挑战者。只要能让公主笑出来，不管用什么方法都可以。折断的一只角是我的魅力所在！蘑菇界的坏小子，麦~纳斯~", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302110, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302110, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想让公主笑的人", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想成为公主新郎的人", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想成为这个国家国王的人", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302110, "cry");
		ms.inGameDirectionEvent_PushScaleInfo(1000, 3500, 1000, 133, 270);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wind");
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.effect_NormalSpeechBalloon("带上来吧", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302110, "out");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302110);
		ms.effect_NormalSpeechBalloon("啊，真累啊。大会先暂停一下。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.gainExp(31215);
		ms.dispose();
		ms.npc_LeaveField(1302101);
		ms.npc_LeaveField(1302111);
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
		ms.npc_ChangeController(1302111, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302111, "summon");
		ms.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_Voice("Voice.img/flowervioleta/mc/1");
		ms.sendNextNoESC_Bottom("我来介绍下一位挑战者，我要用甜美的小夜曲融化她冰冷的心！比巧克力更甜美的声音，比特浓咖啡更浓的感性的拥有者——甘玛和奥美嘉！", 1302108);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 黑屏
		ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0); //创建一个遮布 0x10
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/stage");
		ms.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		// 突然亮灯
		ms.inGameDirectionEvent_PushScaleInfo(250, 3500, 250, 133, 270);
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0); //创建一个遮布 0x10
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/spotlight");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302114, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302114, "song");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/zerosong");
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		// 屏幕在颤抖
		ms.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(15000);
	} else if (status === i++) {
		// 黑屏消失
		ms.effect_NormalSpeechBalloon("够了，够了！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("下一个！下一个！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302111, "close");
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302114);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.effect_Voice("Voice.img/flowervioleta/mc/2");
		ms.sendNextNoESC_Bottom("下一位挑战者，自称为了她而等待了400年的参加者。冷酷的外表下隐藏着一颗热烈的心的人，雷~明骏！", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302112, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302112, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不管是一个月还是两个月，都不会离开。", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我爱你……胜过#r一百万朵玫瑰！", 2000, 4);
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
		ms.effect_NormalSpeechBalloon("喂……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我不买！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302112, "remove");
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302112);
		ms.effect_NormalSpeechBalloon("真特么地给我捣乱……哎呀，我在说什么呢！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
		ms.npc_LeaveField(1302101);
		ms.npc_LeaveField(1302111);
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
		ms.npc_ChangeController(1302111, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302111, "summon");
		ms.npc_ChangeController(1302101, 366, 193, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_Voice("Voice.img/flowervioleta/mc/3");
		ms.sendNextNoESC_Bottom("公主由我来保护！如果你的脸上有阴影的话，我就成为光之骑士来照亮你！比任何人都耀眼的男人，存仔！", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302115, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302115, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("碧欧蕾塔公主！我对你的忠诚……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("存仔，存仔不在吗？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我在这……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不想参加了吗？下一位参加者！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("喂，我在这……这里！", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302115);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_Voice("Voice.img/flowervioleta/mc/4");
		ms.sendNextNoESC_Bottom("下一位参加者竟然是位女性，真是让人吃惊。出于有一颗爱慕公主的心而前来挑战！公主粉丝俱乐部<光滑白嫩碧欧蕾塔>的会长，安~诺瓦~", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_ChangeController(1302113, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302113, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302113, "knock");
		ms.effect_NormalSpeechBalloon("愿意和我一起造蘑菇人吗~？？", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("谢了……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("OK，拜拜……", 2000, 4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
		ms.npc_LeaveField(1302113);
		ms.npc_LeaveField(1302101);
		ms.npc_LeaveField(1302111);
	} else {
		ms.dispose();
	}
}