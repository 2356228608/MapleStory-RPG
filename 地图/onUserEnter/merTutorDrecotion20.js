/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

// 全局变量
var status = -1;

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
        } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesInIce/merBalloon/9", 3500, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(1);
ms.dispose();
ms.warp(910150005,0);
	}
}
