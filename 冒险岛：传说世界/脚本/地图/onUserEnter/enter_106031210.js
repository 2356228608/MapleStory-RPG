/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1300012, -425, 155, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1300012, "summon");
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我们胜利了！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("所有的一切，都是因为勇士的努力。", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("啊，这没什么……", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("请不要把脸凑过来。", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("还好我们的城门很结实。", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("（笃笃笃）", 1, 0, 0, 2000, 1300012, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/copa");
		ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, -100, 0);
		ms.effect_NormalSpeechBalloon("#fn黑体##fs32##r（嘎嘣）", 0, 0, 0, 2000, 1300012, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("城，城门……城门被破坏掉了！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 500, 400, 155);
	} else if (status === i++) {
		ms.npc_ChangeController(1302118, 600, 155, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302118, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302118, 700, 155, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302118, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302119, 800, 155, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302119, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.npc_ChangeController(1302118, 900, 155, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302118, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("敌人冲进来了！快防守！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("咦，咦？城门为什么坏了呢？", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("那个人到底是谁？！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106031002, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
