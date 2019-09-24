/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(9330204, "oid=6266443", 807, -100, 1);
ms.npc_SetSpecialAction("oid=6266443", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330204,  "你到了!!!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9330204,  "父亲，父亲还没有到达吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "好，先坐上船做好出发准备。我观察一下四周", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "好，知道了!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.npc_LeaveField("oid=6266443");
cm.warp(743030201,0);
	} else {
		ms.dispose();
	}
}
