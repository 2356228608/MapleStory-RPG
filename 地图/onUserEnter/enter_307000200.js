/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    var info = ms.getInfoQuest(32970);
    //32971对话任务32972打200只影子斧木妖
    if (ms.isQuestActive(32973)) {//回影子村
        action1(mode, type, selection);
    } else {
        ms.dispose();
    }
}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.npc_ChangeController(2560104, "oid=22331", 201, -6, 1);
ms.onScriptMessage(3, 0, 0, 0,  "糟了……我到底做了什么？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 0, 0,  "要是受到影子诅咒就糟了……必须马上回去查一下图鉴！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.updateInfoQuest(32972, "exp=1;e1=1;e2=1");
ms.dispose();
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