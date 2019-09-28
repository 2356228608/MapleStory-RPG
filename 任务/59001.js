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
qm.onScriptMessage(4, 9390306, 0, 0,  "布兰，对不起……", 256, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "切,我就知道是你干的。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "嘿嘿,抱歉。以后我不会再调皮了。\r\n因为我要成为英雄嘛!", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "等等,你刚才说,你会成为英雄?", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "嗯!我一定会成为冒险岛5大英雄一样的大英雄!", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "可笑啊,你怎么可能?", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "切!!我一定会成为英雄的!\r\n你怎么才会相信我呢?", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "若你敢进入村东#b野狼森林#k的话,我就相信你。\r\n知道吗?那里危险的连大人们都不敢轻易进去呢!", 0, 16, 0, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "好,我去去就来!", 256, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "哇,真的?不要勉强啊。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9390306, 0, 0,  "哼,要想当英雄,这点程度就应该不在话下才是!", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(59002, "");
qm.forceCompleteQuest(59001);
qm.npc_LeaveField("oid=114721");
qm.npc_LeaveField("oid=114722");
qm.npc_LeaveField("oid=114726");
qm.dispose();
	} else {
		qm.dispose();
	}
}
