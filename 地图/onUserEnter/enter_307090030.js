/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    if (!ms.isQuestFinished(32986) && ms.isQuestFinished(32985)) {
	action1(mode, type, selection);
	}
}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560106, "oid=22475", 360, -269, 1);
ms.npc_ChangeController(2560000, "oid=22476", 518, 5, 1);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.fieldEffect_PlayBGM("Bgm33/ShadowKnight", 0, 0);
ms.inGameDirectionEvent_SetHideEffect(1);
ms.npc_ChangeController(2560003, "oid=4994971", 205, -6, 0);
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.effect_Text("#fn黑体##fs18#几小时后", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
ms.onScriptMessage(3, 0, 1, 2560003,  "#face11#呃，你……我以为你毫无战斗能力的……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#谁都会藏着一手，不是吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#现在，你愿意听我说了吗？", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face11#哼，那就快说吧。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face0##fs18#反正都是狗屁。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#…… ", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#影子骑士团是为了封印你而创建的。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#永恒的时间轮回，毫无意义的重复消灭怪物的任务。\r\n这一切，全都是为了阻止你觉醒成超越者。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#封印在影子神殿中的怪物，那个少女，就是你。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face1#什么？你在胡说什么呢？！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_ForcedFlip(-1);
ms.inGameDirectionEvent_SetHideEffect(0);
ms.inGameDirectionEvent_ForcedFlip10(1, 150);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "艾特……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face1#呃，是人质吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#怎么可能。影牙，你能告诉他吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "队长的话……全都是事实。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face7#影牙……？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#你必须尽快喝下中和剂，艾特。否则很快就会有事情发生。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face1#呃，我不相信你说的话！！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face1#影牙，你来说。那是真的吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
//ms.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#怎么样？你想要的真相……", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/H_1-1.mp3", 100);
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#你是谁，是谁创造了你，现在清楚了吗？", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/H_2-1.mp3", 100);
ms.onScriptMessage(3, 0, 1, 0,  "所以……才会……欺骗我……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "什么外面的世界……镜世界，都是甜蜜的谎言……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我一直都不知道……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#没错。但是不必太绝望。\r\n只要按我说的去做，我就会给你。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/H_4-1.mp3", 100);
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#你想要的月光……真相。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice3.img/DLep5/will/H_5-1.mp3", 100);
//ms.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
ms.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
ms.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "这是……真的，艾特。你必须喝下那个东西。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face11#好，我相信。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face4#影牙，因为这是你说的。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(3500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face11#呃……", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "艾特？！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#别担心。你的朋友不会有任何事。\r\n只不过会永远做你的朋友罢了。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#干得好，影牙。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#我……是谁？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#你叫纳因。隶属于影子骑士团攻击队。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face1#不要怀疑任何事情，\r\n一切奉命行事，好好执行骑士团的任务。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560003,  "#face16#我叫纳因……隶属于影子骑士团，遵命……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#谢谢你，影牙。这次辛苦你了。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "这次……嗯？难道我们重复的轮回……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#当然，每次都不一样，呵呵呵……只是结果是一样的。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2560000,  "#face0#好了，现在回去吧。还得为你准备一份中和剂呢。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
ms.forceCompleteQuest(32986);
ms.forceCompleteQuest(32984);
ms.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h01;21=h1;04=h0;13=h0;05=h0;14=h1;06=h0;15=h1;07=h0;16=h1;17=h0;08=h1;18=h0;19=h0");
ms.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h1;04=h0;13=h0;05=h0;14=h1;06=h0;15=h1;07=h0;16=h1;17=h0;08=h1;18=h0;19=h0");
ms.updateInfoQuest(32986, "exp=1");
ms.setInGameDirectionMode(false, false, false);
ms.npc_LeaveField("oid=4994971");
ms.dispose();
ms.warp(307000110);
ms.npc_ChangeController(2560116, "oid=22241", 72, -260, 1);
ms.npc_ChangeController(2560108, "oid=22242", 135, -260, 1);
ms.npc_ChangeController(2560110, "oid=22243", -58, -23, 0);
ms.npc_ChangeController(2560119, "oid=22244", 152, -23, 1);

    } else {
        ms.dispose();
    }
}

function action2(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        // 初始化
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_AskAnswerTime(1000);

    } else if (status === i++) {
        // 收尾
        ms.warp(992000000, 0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        // NPC离场
        ms.npc_LeaveField(2540000);
    } else {
        ms.dispose();
    }
}