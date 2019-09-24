/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
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
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "糟了，糟了……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "该不会是被诅咒了吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(100);
cm.inGameDirectionEvent_SetHideEffect(1);
} else if (status === i++) {
cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -840, -2);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(2200);
} else if (status === i++) {
cm.npc_ChangeController(2560006, "oid=3592637", -855, -60, 1);
cm.onScriptMessage(3, 0, 1, 0,  "#face0#喂，影牙！喂！切，我还想让他帮我拿杯果汁呢。", 256, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
cm.npc_ChangeController(2560003, "oid=3592639", -675, -16, 1);
cm.npc_SetForceMove("oid=3592639",-1,250,100);
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.effect_NormalSpeechBalloon("#fnExtraBold##fs20#哼唱～哼唱～", 1, 0, 0, 3000, 2560003, 5584320);
cm.onScriptMessage(3, 0, 1, 0,  "#face0#喂，艾特，你现在有空吧？", 256, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
cm.npc_setForceFlip("oid=3592639", 1);
cm.onScriptMessage(3, 0, 1, 0,  "#face0#嗯？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#帮我泡杯柠檬茶。", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face0#嗯……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#face4#没问题。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.updateInfoQuest(32973, "s=1");
cm.Npc_Fadeout("oid=3592637", 0, 1000);
cm.Npc_Fadeout("oid=3592639", 0, 1000);
cm.curNodeEventEnd(false);//紧急事件？
cm.setStandAloneMode(false);//写入单人模式？
cm.setInGameDirectionMode(false, true); //启用黑屏？启用UI？
cm.dispose();
cm.warp(307000110);
cm.npc_ChangeController(2560116, "oid=22241", 72, -260, 1);
cm.npc_ChangeController(2560108, "oid=22242", 135, -260, 1);
cm.npc_ChangeController(2560110, "oid=22243", -58, -23, 0);
cm.npc_ChangeController(2560119, "oid=22244", 152, -23, 1);
    } else {
        ms.dispose();
    }
}