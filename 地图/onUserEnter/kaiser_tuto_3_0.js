/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]狂龙战士系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg0/0", 0, 0, -105, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 0,  "气氛有古怪，难道是我来迟了？", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "可是即使是达勒摩尔本人，也很难轻松突破赫里希安的防御膜啊，这是怎么回事？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 0,  "显示赫里希安警戒的标志停止运作了。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 600, -600, 178);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(2638);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "从未闭上的守护石之眼也失去了光芒。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "赫里希安已经被占领了吗？防御膜怎么没有启动？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.npc_ChangeController(3000131, "oid=9814726", -390, 170, 1);
ms.npc_SetSpecialAction("oid=9814726", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 3000131,  "狂龙战士，一切都太晚了。", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 178);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "麦格纳斯！你怎么会在这里？赫里希安发生了什么事？", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 3000131,  "现在那个不重要，达勒摩尔的军队不久前占领了赫里希安。", 256, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=9814726", "fake", 0, 1);
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/story/BalloonMsg1/1", 0, 0, -110, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.npc_SetSpecialAction("oid=9814726", "fake", 0, 1);
ms.onScriptMessage(3, 0, 1, 3000131,  "麦格纳斯！你受伤了吗？你和达勒摩尔的军队交战了？", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "我的模样很糟糕吧，真不想让你看见我这幅颓败的模样。你说的没错，事情正是你推测的那样。他们实在太厉害，我本是因为追求更强的力量才被驱逐的，可连我也抵挡不住他们。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "达勒摩尔的军队是怎么侵入赫里希安的？他们用什么方法突破了防御膜？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "我们内部有人叛变。趁着他们暂时清除了保护罩，那些幽灵就迅速侵入了赫里希安各处。", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "到底是谁干的……", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000131,  "那个人正是……我！！！", 257, 0, 9, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9814726");
ms.dispose();
ms.warp(940002010, 0);
    } else {
        ms.dispose();
    }
}