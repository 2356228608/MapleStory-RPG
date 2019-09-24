/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
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

//如果完成32970的话，那么在这里终止。
if (ms.isQuestFinished(32970)) {ms.dispose();return;}

ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.fieldEffect_PlayBGM("Bgm48.img/EveningPrimrose");

//这句有问题？
//ms.PQ_EFFECT(0,100161,"UI/UIWindowEvent.img/starDust_Adventure",0,0);

ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 953, -131);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.SitOnDummyPortableChair(3018035, 1);
ms.inGameDirectionEvent_AskAnswerTime(3200);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("真实之药调制方法。");
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1850);
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，");
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("大眼青蛙卵一勺，隔水熬制后……");
} else if (status === i++) {
ms.sendNextSNoESC_Bottom("最后放入一撮月光……");
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, 409, -528);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(8000);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("按照古老的传说，\r\n任何谎言都不能骗过#r月亮#k。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/A_1.mp3");
ms.inGameDirectionEvent_Monologue(" ", 0);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("蓄满了雨水的乌云，\r\n深夜中的迷雾，都无法避开月亮。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/A_2.mp3");
ms.inGameDirectionEvent_Monologue(" ", 0);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("因此如果有什么真的很想很想知道的东西，\r\n只要去问问月亮就行。", 1);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/A_3.mp3");
ms.inGameDirectionEvent_Monologue("对于真正想知道的那个问题，月亮必定会如实回答。", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/A_4.mp3");
ms.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("即使……那个真相#r非常非常残酷#k……", 0);
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/pangF/A_5.mp3");
ms.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("#fs38#Episode V：影子炼金术士", 0);
} else if (status === i++) {
ms.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.warp(307090002);
ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
ms.dispose();

        }
}