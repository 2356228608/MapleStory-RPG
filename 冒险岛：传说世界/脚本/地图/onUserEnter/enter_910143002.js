/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/forest");
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextS("呃啊啊啊……为什么……我到底干了什么，要把我困在这里，不让我出去……");
	} else if (status === i++) {
		ms.sendNextS("我想回去……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1501012, 473, 149, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501012, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_LeaveField(1501012);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextS("……咦？");
	} else if (status === i++) {
		ms.sendNextS("那是那个……魔女？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_far");
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextS("管不了那么多了！只要没把我变成青蛙，就是个好人！先跟上去再说！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(2750);
	} else if (status === i++) {
		ms.gainExp(8400);
		ms.warp(101081300, 2);
		ms.dispose();
	}
}
