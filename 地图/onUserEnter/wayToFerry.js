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
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(9330204, "oid=7054550", 339, -7, 1);
ms.npc_SetSpecialAction("oid=7054550", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330204,  "现在有提起精神了吗？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9330204,  "咻。秀禾。这里是哪里呢？父亲呢？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "幸好我的伤口没有哪么深，所以还算可以帮忙掩护你。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "已经说好将会在渡口见面，所以，赶紧去吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "是喔? 真的吗? ", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "嘘，稍等一下。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "好像还有跟踪我们的家伙的样子。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "我来除掉这些家伙。得在此地分手了。请记住。要在渡口见面！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "我会除掉追逐你们的家伙，可是前往的路上仍然不太顺遂。我会在路上放上告知的标志板，请多小心。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "恩，知道了!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7054550", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=7054550");
ms.onScriptMessage(3, 0, 1, 9330204,  "父亲真的会没事吗？", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "如果回头的话？不是的。渡口！先去渡口！秀禾不可能说谎！在渡口见父亲。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "好吧，就照秀禾说的去见面吧。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.setStandAloneMode(false);
ms.setInGameDirectionMode(false, false, false);
ms.dispose();
} else {
 ms.dispose();
}
}