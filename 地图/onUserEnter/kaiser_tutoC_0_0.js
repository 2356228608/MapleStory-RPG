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
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(3000103, "oid=9816238", -1400, 0, 1);
ms.npc_SetSpecialAction("oid=9816238", "summon", 0, 0);
ms.npc_ChangeController(3000104, "oid=9816239", -1650, 0, 0);
ms.npc_SetSpecialAction("oid=9816239", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000103,  "嗯，天气真好！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "你也太清闲了。我和#h0#已经成为骑士团团员了，你打算什么时候加入骑士团？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "嘿嘿，我嘛，没有魔力，就不提这些咯。说真的，也许将来我也会有魔力吧？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "这话你都说了上百遍了额？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "总之祝贺你们俩！骑士团团员~啊~我也好想当呢！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "我觉得迪奥不一定非得成为骑士团团员啊？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "这是什么话！我们结成赫里希安攻击队时，不是发誓要三个人一起成为骑士团团员的吗！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "那时候没想到你会一直没有魔力啊。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "哼，你又哪壶不开提哪壶！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "好了好了，当我没说。我说，我们是不是该准备归队了？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "呜呜，真心羡慕死你们了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/0", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "嗯？我忽然有种不好的预感。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "胡说什么？快回去吧。再耽搁得迟了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "不是的……肯定有事。东侧圣殿好像出事了。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "去看看吧！会是什么事呢？？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "喂……迪奥。你要相信他胡诌的话吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000103,  "#h0#的第六感不是很厉害嘛，而且我正好闲着无聊。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000104,  "总之我这队长说话就没人肯听的。好吧，一起去吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetForceMove("oid=9816238",1,400,100);
ms.npc_SetForceMove("oid=9816239",1,400,100);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg0/3", 1200, 0, -120, 1, 0, 1, "oid=9816238", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9816238");
ms.npc_LeaveField("oid=9816239");
ms.dispose();
ms.warp(940001210, 0);
    } else {
        ms.dispose();
    }
}