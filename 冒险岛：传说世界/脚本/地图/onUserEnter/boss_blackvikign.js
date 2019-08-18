/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (ms.isQuestFinished(30070)) {
		spawn();
		return;
	}
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302019, -88, 289, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302019, "say");
		ms.npc_ChangeController(1302005, 167, 289, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302005, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("女孩~可爱的女孩~可爱的女孩~", 1, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("耶耶~可爱的女孩~", 1, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("这里……真的是船长室？", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("谁？！", 0, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/suprise");
		ms.effect_NormalSpeechBalloon("你是黑大海盗吗？", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/action");
		ms.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -444, 140);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 404, 190);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -88, 289);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("这……这是我的取向。请尊重我！", 0, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -30, 140);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我什么都没说。", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哎呀！竟然不经允许就闯进来，不可原谅！", 1, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("既然被你看到了不该看到的东西，就不能让你活下去！", 1, 0, 0, 2000, 1302019, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.npc_LeaveField(1302019);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		spawn();
	} else {
		ms.dispose();
	}
}

function spawn() {
	var em = ms.getEventManager("副本_蘑菇城_Boss");
	var eim = em.getInstance("副本_蘑菇城_Boss");
	var map = em.getMapFactoryMap(ms.getMapId());
	var mob = em.getMonster(3300110);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-88, 289));
	ms.dispose();
}
