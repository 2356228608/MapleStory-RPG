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
		ms.npc_ChangeController(1302101, -75, 202, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.effect_NormalSpeechBalloon("碧欧蕾塔公主！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.effect_NormalSpeechBalloon("求你把我放下！", 1, 1, 0, 2000, 1302101, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.npc_SetSpecialState(1302101, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.npc_SetSpecialState(1302101, 5, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1750);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_CaptainNomad/Use");
		ms.inGameDirectionEvent_Effect("Effect/Direction2.img/effect/flowervioleta/twingkle/0", 0, 0, 0, 1, 0, 1, 1302101, 0, 0);
		ms.npc_LeaveField(1302101);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106031310, 1);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
