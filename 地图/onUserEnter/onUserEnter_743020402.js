/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/19 18:58:51] 之前所在地图: ms.warp(743020103) - 当前进入地图: ms.warp(743020402)
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true, false);
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_OneTimeAction(379, 0);
		ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/illustration/kairin/0", 5000, 0, 0, 1, 0, 1, 0, 1, 0);
		ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		ms.setInGameDirectionMode(false, true, false);
		ms.dispose();
		ms.warp(743000600);
	}
}
