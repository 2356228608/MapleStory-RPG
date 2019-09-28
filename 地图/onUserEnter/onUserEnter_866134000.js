/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
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
// [2019/9/24 1:09:05] 之前所在地图: ms.warp(866133000) - 当前进入地图: ms.warp(866134000)
ms.npc_ChangeController(9390442, "oid=114857", -84, 28, 5);
ms.npc_ChangeController(9390443, "oid=114858", 50, 28, 5);
ms.npc_ChangeController(9390432, "oid=114859", -319, 28, 5);
ms.npc_ChangeController(9390433, "oid=114860", 426, 28, 5);
ms.npc_ChangeController(9390437, "oid=114861", 172, 28, 5);
ms.npc_ChangeController(9390438, "oid=114862", -212, 28, 5);
ms.npc_ChangeController(9390440, "oid=114863", 598, 28, 5);
ms.npc_ChangeController(9390304, "oid=114864", -737, 28, 0);
ms.npc_ChangeController(9390305, "oid=114865", -560, 28, 0);
ms.npc_ChangeController(9390307, "oid=114866", -471, 28, 0);
ms.npc_ChangeController(9390308, "oid=114867", -650, 28, 0);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.npc_ChangeController(9390382, "oid=20214942", -707, -650, 1);
ms.npc_SetSpecialAction("oid=20214942", "summon", 0, 0);
ms.npc_ChangeController(9390383, "oid=20214943", -641, -550, 1);
ms.npc_SetSpecialAction("oid=20214943", "summon", 0, 0);
ms.npc_ChangeController(9390384, "oid=20214944", -936, -550, 0);
ms.npc_SetSpecialAction("oid=20214944", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9390381,  "啊,怎么办?我们也赶紧下去帮忙吧!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_ChangeController(9390381, "oid=20214987", -776, -484, 1);
ms.npc_SetSpecialAction("oid=20214987", "summon", 0, 0);
ms.npc_SetSpecialAction("oid=114859", "attack1", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390381,  "没必要那样喵!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390381,  "啊,阿尔!!!你什么时候过来的?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390381,  "现在来了喵。\r\n比这更重要的是,没时间喵!赶紧和我签订契约喵。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.updateInfoQuest(59021, "fly=2");
ms.npc_LeaveField("oid=20214942");
ms.npc_LeaveField("oid=20214943");
ms.npc_LeaveField("oid=20214944");
ms.npc_LeaveField("oid=20215249");
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.forceStartQuest(59017, "");
ms.forceStartQuest(59017, "");
ms.warp(866136000,0);
	} else {
		ms.dispose();
	}
}
