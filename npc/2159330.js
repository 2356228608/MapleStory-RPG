/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
cm.updateInfoQuest(23202, "click=2");
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, true, false);
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159307,  "#b这是……#k", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_ScreenMsg("demonSlayer/pendant");
cm.inGameDirectionEvent_AskAnswerTime(4200);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159307,  "#b妈妈……戴米安……#k", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159307,  "#b...#k", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/5", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/6", 2000, 0, -150, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
cm.setInGameDirectionMode(false, true, false);
cm.dispose();
cm.warp(927000081, 0);
    }

}