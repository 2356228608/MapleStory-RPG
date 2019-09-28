﻿/*  This source is made by BMS Team
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
ms.inGameDirectionEvent_SetHideEffect(1);
ms.npc_ChangeController(3000106, "oid=9815789", 250, 20, 1);
ms.npc_SetSpecialAction("oid=9815789", "summon", 0, 0);
ms.npc_ChangeController(3000107, "oid=9815790", -800, 20, 0);
ms.npc_SetSpecialAction("oid=9815790", "summon", 0, 0);
ms.npc_ChangeController(3000108, "oid=9815791", -600, 20, 0);
ms.npc_SetSpecialAction("oid=9815791", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000106,  "狂龙战士是不是出什么事了？我的感觉很不好……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 3000107,  "祭司长！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1334);
} else if (status === i++) {
ms.npc_SetForceMove("oid=9815790",1,450,100);
ms.npc_SetForceMove("oid=9815791",1,450,100);
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "有什么事吗？看你这么着急……贝尔德您来这里所为何事……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "赫里希安沦陷了。我是和赫里希安的居民们一起逃到这里来的。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "赫里希安……可不久前狂龙战士刚前往赫里希安啊。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "包括我在内的许多赫里希安的居民早在赫里希安沦陷前就逃出来了。就在我们逃亡的途中，赫里希安那边发生了巨大的爆炸，看样子可能是狂龙战士引发的爆炸。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "狼牙！我领着这里的卫兵去赫里希安看看。必须得协助狂龙战士把那些侵略者赶出去！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "不要鲁莽行动！赫里希安已经沦陷了！我们得在这里建立防御膜，继续支撑。这才是我们诺巴生存的唯一希望。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "你的意思是不管狂龙战士的生死吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "那个地方有数万个幽灵！狂龙战士再怎么厉害，要孤身对付他们难免吃力！如果他还活着，说不定已经逃出，正在往这里来，又或者他已经以身殉职了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 0, 0, -100, 1, 0, 1, "oid=9815789", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 0, 0, -120, 1, 0, 1, "oid=9815790", 0, 0);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 0, 0, -120, 1, 0, 1, "oid=9815791", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "可是现在赫里希安已经沦陷，老实说，这里没有能建立防御膜的力量。我们没有办法和放在赫里希安的圣物相连通啊。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "所以我在逃亡时，命令祭司们把圣物带来了。只要有圣物，就能建立起和赫里希安相同水平的防御膜。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "你逃跑的时候竟先想到带走圣物……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "你要想责怪我就尽管开口吧，我出逃的事情反正已经板上钉钉。但我先声明，我这么做只不过是为我们诺巴族做了一个最好的选择。要大家一起死岂不简单，但我选择的是我们种族的未来。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "赫里希安也有防御膜，不还是沦陷了吗？即使建立了防御膜，谁能保证一定安全？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "说起来是挺奇怪，明明有防御膜，赫里希安怎么这么容易就被攻陷了？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "你还记得过去被评议会驱逐的麦格纳斯吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "我听说他也是个战士，实力不亚于狂龙战士，却是个一味追求力量的凶恶之徒，才会被驱逐。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "……是他亲手解除了防御膜。因为不久前他一副疲倦的样子返回赫里希安，我们还以为他已经改过自新。就在我们对他放心大意的时候，麦格纳斯将达勒摩尔的军队驻在了赫里希安周围，然后暂时解除防御膜让大批幽灵涌入，再和他们联手瞬间占领了赫里希安。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "我们原想着达勒摩尔攻占阿波利斯后，来这里的途中得花些时间，有防御膜的话，应该能充分抵挡他的军队，却没想到祸起萧墙。达勒摩尔几乎是同时进攻阿波利斯和赫里希安，麦格纳斯正是他派来的先锋。我们在不知情的情况下就让他进城，连一点防备对策都没来得及想。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "……对了，国王和各位王族在哪里？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "不清楚，现在生死不明的人可不止一两个。要是他们还活着，应该会到这里来。先不说这个，我们得赶紧建立防御膜。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "这次不要把圣物都放在一个地方，分散保管吧。以防将来再次发生和赫里希安一样的事情。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "分开保管的话确实可以降低危险性，可保护圣物的工作就更艰难了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "我会对圣物施下保护魔法，除了特别许可的几个高级祭司之外，任何人都无法碰圣物。当然这也不是最完美的办法。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000108,  "建立防御膜的事就交给你了。如果狂龙战士已死，要什么时候才会转生？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "……从现在开始出生的孩子中，人人都有可能是他，除此之外我就不清楚了。我们只能等待，等特殊契机到来，狂龙战士会自己觉醒的。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "不过，在这些孩子中有人将会成为狂龙战士这件事必须暂时保密。现在敌方有人知道关于转生的事，所以一旦这个消息传扬出去，孩子们会非常危险。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9815789");
ms.npc_LeaveField("oid=9815790");
ms.npc_LeaveField("oid=9815791");
ms.dispose();
ms.warp(940002040, 0);
    } else {
        ms.dispose();
    }
}