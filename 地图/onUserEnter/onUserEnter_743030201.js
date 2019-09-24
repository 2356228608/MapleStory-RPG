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
ms.npc_ChangeController(9330204, "oid=6266541", 807, -100, 1);
ms.npc_SetSpecialAction("oid=6266541", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330204,  "快点坐上船！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9330204,  "赶紧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=6266541", "move", 0, 1);
ms.npc_SetForceMove("oid=6266541",-1,837,160);
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(5000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(5);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 9330204,  "秀禾，这艘船有点奇怪？也没有锚！真奇怪，慢慢的移动了！", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.npc_ChangeController(9330212, "oid=6266833", 263, -31, 0);
ms.npc_SetSpecialAction("oid=6266833", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266834", 288, -31, 0);
ms.npc_SetSpecialAction("oid=6266834", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266835", 200, -31, 1);
ms.npc_SetSpecialAction("oid=6266835", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266836", 430, -31, 1);
ms.npc_SetSpecialAction("oid=6266836", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266837", 170, -31, 1);
ms.npc_SetSpecialAction("oid=6266837", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266838", 230, -31, 1);
ms.npc_SetSpecialAction("oid=6266838", "summon", 0, 0);
ms.npc_ChangeController(9330213, "oid=6266839", 380, -31, 1);
ms.npc_SetSpecialAction("oid=6266839", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266840", 490, -31, 1);
ms.npc_SetSpecialAction("oid=6266840", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266841", 545, -31, 1);
ms.npc_SetSpecialAction("oid=6266841", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266842", 600, -31, 1);
ms.npc_SetSpecialAction("oid=6266842", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266843", 612, -31, 1);
ms.npc_SetSpecialAction("oid=6266843", "summon", 0, 0);
ms.npc_ChangeController(9330213, "oid=6266844", 678, -31, 1);
ms.npc_SetSpecialAction("oid=6266844", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266845", 701, -31, 1);
ms.npc_SetSpecialAction("oid=6266845", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266846", 731, -31, 1);
ms.npc_SetSpecialAction("oid=6266846", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=6266847", 800, -31, 1);
ms.npc_SetSpecialAction("oid=6266847", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330204,  "秀禾!刚刚看到的皇帝的部下！", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "快要出发了。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "父...父亲呢? 父亲说他应该会到渡口啊。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330205,  "被至尊宝控制住了!赶紧抓住那两个家伙! ", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(9330205, "oid=6267000", 490, -31, 0);
ms.npc_SetSpecialAction("oid=6267000", "summon", 0, 0);
ms.npc_SetForceMove("oid=6267000",-1,300,100);
ms.onScriptMessage(3, 0, 1, 9330204,  "秀禾，这是什么意思呢！？父亲？父亲？现在不管父亲就走了吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "什么，回答一下。赶快!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "宏武团长不会来。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "什么?!!!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "我说谎了。团长不会回来了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
ms.npc_LeaveField("oid=6266541");
ms.npc_LeaveField("oid=6266833");
ms.npc_LeaveField("oid=6266834");
ms.npc_LeaveField("oid=6266835");
ms.npc_LeaveField("oid=6266836");
ms.npc_LeaveField("oid=6266837");
ms.npc_LeaveField("oid=6266838");
ms.npc_LeaveField("oid=6266839");
ms.npc_LeaveField("oid=6266840");
ms.npc_LeaveField("oid=6266841");
ms.npc_LeaveField("oid=6266842");
ms.npc_LeaveField("oid=6266843");
ms.npc_LeaveField("oid=6266844");
ms.npc_LeaveField("oid=6266845");
ms.npc_LeaveField("oid=6266846");
ms.npc_LeaveField("oid=6266847");
ms.npc_LeaveField("oid=6267000");
ms.warp(743020400);

	} else {
		ms.dispose();
	}
}
