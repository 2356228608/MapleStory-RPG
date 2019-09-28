/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {

	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
ms.onScriptMessage(4, 9390300, 0, 0,  "铃铛在这里!没关系,喵喵啊?", 256, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9390300, 0, 0,  "等……稍等……喵……转过身去喵,我好害臊喵。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9390300, 0, 0,  "都好了吗?", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9390300, 0, 0,  "喵!!!失礼了喵!!!请稍等片刻喵!!!!", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.dispose();
ms.warp(866106000);
	} else {
		qm.dispose();
	}
}
