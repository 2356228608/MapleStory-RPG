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
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.inGameDirectionEvent_MoveAction(0);
cm.inGameDirectionEvent_OneTimeAction(379, 20500);
cm.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/illustration/ChivalrousLogo_1/0", 10000, 0, -50, 1, 0, 1, 0, 1, 0);
cm.inGameDirectionEvent_AskAnswerTime(3500);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(false, false, false);
cm.dispose();
cm.warp(743020103,0);
} else {
 ms.dispose();
}
}