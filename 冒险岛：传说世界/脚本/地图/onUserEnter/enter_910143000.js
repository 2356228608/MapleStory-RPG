/* 
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
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
		ms.npc_ChangeController(1501011, -856, 0, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501011, "summon");
		ms.npc_ChangeController(3002028, -1115, 341, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(3002028, "summon");
		// [移动耗时] [缩放比例，标准1000，越大越放大] [动画耗时] [x] [y] 单独占用一次迭代
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -850, 140);
	} else if (status === i++) {
		// 桉走到右边
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC("呜呜……好像飞到这边了……在哪儿呢？", 1012110);
	} else if (status === i++) {
		// 桉往左看
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("啊！掉在哪里了。", 1012110);
	} else if (status === i++) {
		// 桉跳下来走到纸飞机那边
		ms.npc_LeaveField(1501011);
		ms.npc_ChangeController(1501011, -1036, 319, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501011, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("怎么会飞到这里来了呢……必须快点回去……要是遇到水灵就糟了……", 1012110);
	} else if (status === i++) {
		// BGM变换
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/forest");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_LeaveField(3002028);
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, 1501011, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("呃……感觉有什么东西会出来……快走吧……", 1012110);
	} else if (status === i++) {
		// 桉向右看
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_far");
		// 恐怖叫声出现
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 3000, 0, -100, 1, 0, 1, 1501011, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("是谁的……惨叫声？", 1012110);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 拉近
		ms.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -850, 540);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1501012, -912, 599, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501012, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("呃……呃啊啊啊啊啊！！！魔……魔女！！！", 1012110);
	} else if (status === i++) {
		// 桉往右逃跑了
		ms.npc_LeaveField(1501011);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -100, 1, 0, 1, 1501012, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101000000, 4);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
