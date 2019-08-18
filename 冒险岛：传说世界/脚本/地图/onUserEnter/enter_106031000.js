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
	} else if (!ms.isQuestFinished(30055)) {
		action第三幕(mode, type, selection);
	} else if (!ms.isQuestFinished(30057)) {
		action第四幕(mode, type, selection);
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
		ms.npc_SetSpecialState(1302111, 3, 0);
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.npc_ChangeController(1302101, 366, 193, 1); //D5 F8 86 01
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
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302110, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302110, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想让公主笑的人", 1, 0, 0, 2000, 1302110, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想成为公主新郎的人", 1, 0, 0, 2000, 1302110, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("想成为这个国家国王的人", 1, 0, 0, 2000, 1302110, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302110, "cry");
		ms.npc_SetSpecialState(1302110, 2, 0);
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
		ms.effect_NormalSpeechBalloon("带上来吧", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302110, "out");
		ms.npc_SetSpecialState(1302110, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.npc_LeaveField(1302110);
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.npc_SetSpecialState(1302111, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("啊，真累啊。大会先暂停一下。", 1, 0, 0, 2000, 1302100, 0);
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
		ms.npc_SetSpecialState(1302111, 3, 0);
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.npc_ChangeController(1302101, 366, 193, 1); //D5 F8 86 01
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
		ms.inGameDirectionEvent_PushScaleInfo(100, 3500, 100, 133, 270);
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0); //创建一个遮布 0x10
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/spotlight");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302114, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302114, "song");
		ms.npc_SetSpecialState(1302114, 2, 1);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/zerosong");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 屏幕在颤抖
		ms.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(15000);
	} else if (status === i++) {
		// 黑屏消失
		ms.effect_NormalSpeechBalloon("够了，够了！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("下一个！下一个！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302111, "close");
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialState(1302111, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		ms.npc_LeaveField(1302114);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
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
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302112, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302112, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不管是一个月还是两个月，都不会离开。", 1, 0, 0, 2000, 1302112, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我爱你……胜过#r一百万朵玫瑰！", 1, 0, 0, 2000, 1302112, 0);
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
		ms.effect_NormalSpeechBalloon("喂……", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我不买！", 1, 0, 0, 2000, 1302112, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302112, "remove");
		ms.npc_SetSpecialState(1302112, 2, 0);
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302112);
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("真特么地给我捣乱……哎呀，我在说什么呢！", 1, 1, 0, 2000, 1302101, 0);
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
		ms.npc_SetSpecialState(1302111, 3, 0);
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.npc_ChangeController(1302101, 366, 193, 1); //D5 F8 86 01
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
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302115, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302115, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("碧欧蕾塔公主！我对你的忠诚……", 1, 0, 0, 2000, 1302115, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("存仔，存仔不在吗？", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我在这……", 1, 0, 0, 2000, 1302115, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("不想参加了吗？下一位参加者！", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("喂，我在这……这里！", 1, 0, 0, 2000, 1302115, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.npc_SetSpecialState(1302111, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		ms.npc_LeaveField(1302115);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
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
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302113, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302113, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.npc_SetSpecialAction(1302113, "knock");
		ms.npc_SetSpecialState(1302113, 2, 0);
		ms.effect_NormalSpeechBalloon("愿意和我一起造蘑菇人吗~？？", 1, 0, 0, 2000, 1302113, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("谢了……", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("OK，拜拜……", 1, 0, 0, 2000, 1302113, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.npc_SetSpecialAction(1302111, "close");
		ms.npc_SetSpecialState(1302111, 3, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.npc_LeaveField(1302113);
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
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

function action第四幕(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302105, 19, 382, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302105, "summon");
		ms.npc_ChangeController(1302106, 396, 382, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302106, "summon");
		ms.npc_ChangeController(1302107, -122, 382, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302107, "summon");
		
		ms.npc_ChangeController(1302111, 133, 260, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302111, "summon");
		ms.npc_SetSpecialState(1302111, 3, 0);
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(0);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.npc_ChangeController(1302101, 366, 193, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("真的是蘑菇大臣！");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("呵呵呵，你一定是看错了。好了，下一位挑战者上来了。大家把目光转移到舞台上来。", 1302100);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("把痣去掉的话，就一模一祥，干嘛总说不是啊！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("已经是第一百位参加者了。我屈膝跪下，是为了获得推进力！比任何人更快，与所有人都不同，连名字都不愿意透露的迷一般的男人，请你出来吧！", 1302108);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302111, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/cheer");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/appear");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/curtain");
		ms.npc_SetSpecialAction(1302111, "open");
		ms.npc_SetSpecialState(1302111, 2, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302103, 133, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302103, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30080);
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("有一只马吃掉了一头大象。", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("为什么会这样呢~？", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("难，难道……", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("因为那是在象棋！呵呵呵呵呵", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wind");
	} else if (status === i++) {
		// 全场都
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 0, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 1, 0, 2000, 1302101, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("石头上钻一个洞会变成什么呢~？", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("钻石！呵呵呵呵呵", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("那小鸡吃的药的名字是什么呢~？", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("把那个蘑菇从我眼前拿开。", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哼，要是非要见血，那就没办法了。", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("事实上，我就是……", 1, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("蘑菇大臣！", 0, 0, 0, 2000, 1302103, 0);
		ms.inGameDirectionEvent_PushScaleInfo(500, 3500, 500, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 133, 270);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("什，什么？真的是蘑菇大臣吗！", 1, 0, 0, 2000, 1302105, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哎呀，完全被蒙在鼓里了！", 1, 0, 0, 2000, 1302106, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("看来是做了精心的准备！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("真不敢相信，那个蘑菇就是蘑菇大臣！", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("又被他完美的伪装给骗过去了！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 0, 0);
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
		ms.npc_LeaveField(1302105);
		ms.npc_LeaveField(1302106);
		ms.npc_LeaveField(1302107);
	} else {
		ms.dispose();
	}
}