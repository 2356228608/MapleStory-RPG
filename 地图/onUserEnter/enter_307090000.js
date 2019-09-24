/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */


var status = -1;

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
        } else if (status === i++) {
		// 初始化

ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_SetHideEffect(1);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.effect_Text("#fn黑体##fs20#艾……艾……", 50, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(3500);
} else if (status === i++) {
ms.effect_Text("#fn黑体##fs20#艾……艾特……", 50, 2200, 4, -50, -50, 1, 4, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(3500);
} else if (status === i++) {
ms.sendNextNoESC_Bottom("不知道你在说什么。我的名字是纳因。", 2560008);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
	    ms.dispose();
	    ms.warp(307090001);
	    ms.inGameDirectionEvent_SetHideEffect(0);
	    ms.setInGameDirectionMode(false, false, false);
            //ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 


        }
}