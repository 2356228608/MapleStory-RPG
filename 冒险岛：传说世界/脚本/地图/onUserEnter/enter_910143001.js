/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	if (!ms.isQuestFinished(37155)) {
		action艾洛丁(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action艾洛丁(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.fieldEffect_ProcessOnOffLayer("deepforest", "Effect/Direction21.img/Elodin/deepforest/0", 0, 1000, 0, 0, 0, 4, 1);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/forest");
		ms.sendNextSNoESC_Bottom("……虽然既黑暗又阴森……但好像没听到安所说的惨叫声和咆哮声……");
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("还是……先回去吧。继续留在这里……感觉还挺恐怖的……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("呃……野兽的咆哮声好像越来越大了。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/song_far");
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("！！！惨……惨叫声！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("deepforest1", "Effect/Direction21.img/Elodin/deepforest/1", 0, 1000, 0, 0, 0, 4, 1);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
		ms.sendNextSNoESC_Bottom("呃啊啊！怪……怪物！！！！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101081000, 0);
		ms.forceCompleteQuest(37155);
		ms.gainExp(3700);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
