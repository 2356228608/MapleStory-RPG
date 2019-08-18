/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (!ms.isQuestFinished(30061)) {
		action第一幕(mode, type, selection);
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
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("……呃，看上去真的和大海盗很像！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我，我还以为是大海盗呢！", 1, 0, 0, 2000, 1302106, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("要……要是长着喙的话，就真的一模一样了。", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("要，要是腿再细一点的话，直就是一模一样！", 1, 0, 0, 2000, 1302105, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("用布制作成翅膀的话，一定没人能分辨得出来！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wind");
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 0, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("……", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("嗯，果然不行吗？", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("是的，总觉得这个有点……", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("确实好像有点勉强。", 1, 0, 0, 2000, 1302105, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哎呀，那我们的碧欧蕾塔怎么办！", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("请交给我吧！我会打听清楚的！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("哦，警卫队长！有什么好消息吗？", 1, 0, 0, 2000, 1302100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("应该以盖还盖，以孢子还孢子！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("我去劫持大海盗！", 1, 0, 0, 2000, 1302107, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("嗯……？", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("嗯……？", 1, 0, 0, 2000, 0, 0);
		ms.effect_NormalSpeechBalloon("嗯……？", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("嗯……？", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("嗯……？", 1, 0, 0, 2000, 1302108, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
