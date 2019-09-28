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
// [2019/9/24 1:08:33] 之前所在地图: ms.warp(866131000) - 当前进入地图: ms.warp(866132000)
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.onScriptMessage(3, 0, 1, 9390384,  "话说回来，凭你的力量，应该还无法应付我的力量。先将它封印吧。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9390384,  "真，真的吗？#b(抽泣)#k", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "(直截了当)是真的！\r\n……\r\n……啊，那并不代表你很弱……算了！你快去找控制杆，把门关上吧！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "控制杆在哪里呢?", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 9390384,  "来,现在就把这个控制杆!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(26, 540);
ms.inGameDirectionEvent_AskAnswerTime(1100);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "现在好了!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/ChapterA/23", 0, 17, -3, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, 1334, -50);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("advStory/disappear", 100);
ms.inGameDirectionEvent_AskAnswerTime(950);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.warp(866134000,0);
	} else {
		ms.dispose();
	}
}
