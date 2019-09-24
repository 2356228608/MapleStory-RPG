/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    if (ms.isQuestActive(32984) && !ms.isQuestFinished(32984)) {//寻找真相
	action1(mode, type, selection);
	}
}

function action1(mode, type, selection) {
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 0,  "我们必须进入影子神殿。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
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