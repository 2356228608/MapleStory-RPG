/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]狂龙战士系列remake
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
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(60);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(3000106, "oid=9817876", 150, 50, 0);
ms.npc_SetSpecialAction("oid=9817876", "summon", 0, 0);
ms.npc_ChangeController(3000107, "oid=9817877", 70, 50, 0);
ms.npc_SetSpecialAction("oid=9817877", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000106,  "你清醒一些了吗？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "狼牙？呃……这里是什么地方？我还活着？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "你现在安全了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "卡塔利安？先别说我，迪奥怎么样了？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "她很安全，就是遇到点麻烦……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "您为什么对我说话这么客气……？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你是狂龙战士。所有诺巴族人都应该对狂龙战士表示尊敬。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "狂龙战士？你说的是我？我不明白你说的话。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "接到贝德罗斯的求援后，我和狼牙立即前往东侧圣殿，在那里发现了已经觉醒成为狂龙战士的你。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "我们赶到时，你已经把那里那些奇怪的祭司全部赶走，昏倒在地。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "迪奥没事，你不用担心。不过看样子迪奥受到圣物的诅咒，令我不太放心。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "圣物的诅咒？比起这个，我还是不能相信你说我变成狂龙战士的话！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "从到达的时候，围绕在你身上的灵气和变身征兆来看，你应该就是狂龙战士。虽然很难接受，但你就是命运中的那个孩子。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "那么我……我会变成什么样？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你只要坦然接受赋予你的使命，按照命运的指引行动就行了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你年龄还小，这条路会很艰难，但既然赋予了你伟大的力量，你当然要承担起相应的责任。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "如果我真的具有那么强大的力量，我愿意承担责任。可我现在还什么也没感觉到啊。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "你是狂龙战士转生，转生后会失去所有战斗能力和记忆。简单来说，身为狂龙战士的你现在还只是块带有无限潜力的原石。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "请你勤快修炼，早日成为不亚于先代的狂龙战士，领导我们诺巴族。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你别太催他，卡塔利安。他还不能完全了解担在他肩上的沉重命运。你先休息一会儿吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "你虽然成了狂龙战士，但现在还很虚弱，所以别跟别人说你是狂龙战士，那样你会很危险。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "我更担心迪奥，她在哪儿？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "她比你更早醒过来，知道自己的情况后，跑出了万神殿。克里昂跟着去了，不会有事的。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "我现在脑子里一片乱麻。不过精神好一些了，我想自己整理一下思绪。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你别太辛苦了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9817876");
ms.npc_LeaveField("oid=9817877");
ms.dispose();
ms.warp(400000000, 0);
    }
}