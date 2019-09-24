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
ms.npc_ChangeController(9330208, "oid=103759", -251, 150, 1);
ms.npc_ChangeController(9330209, "oid=103760", -66, 150, 0);
ms.npc_ChangeController(9330215, "oid=103761", 164, 86, 1);
ms.npc_ChangeController(1090000, "oid=103762", 129, 150, 1);
ms.onScriptMessage(4, 9330215, 0, 9330204,  "起来了？身体还好吗？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "啊…还好。救我的人是你吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "真是厉害？没错。我开着很久没开的诺特勒斯号前往异国的海洋，就发现你。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "啊... 啊!秀禾... 秀禾现在他的状况怎样呢？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "啊…你是说和你在一起的女人吗？现在躺在那里。伤势严重，已经做了紧急处理。还要再观察看看，可是已经度过了危险期。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "啊... 真的太好了…太好了。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "总之，请不要担心！我们会好好照顾！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(4, 9330215, 0, 9330204,  "我的名字叫做凯琳！是这里的船长，也是冒险岛海盗的领袖。那就麻烦你了~", 1, 0, 1, 0, 0, 0); // [类型] 普通对话
ms.dispose();
} else {
 ms.dispose();
}
}