/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]尖兵计划系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
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
cm.npc_ChangeController(2159391, "oid=6791090", 740, -25, 1);
cm.npc_SetSpecialAction("oid=6791090", "summon", 0, 0);
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, true, false);
cm.inGameDirectionEvent_MoveAction(0);
cm.inGameDirectionEvent_MoveAction(2);
cm.curNodeEventEnd(true);
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/story/BalloonMsg1/0", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.onScriptMessage(3, 0, 1, 2159391,  "……找到了。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159391,  "你是……#p2159391#！", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159391,  "博士命令我把你找回来。觉悟吧！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.npc_LeaveField("oid=6791090");
cm.playerMessage(-1, "打倒维丽尔。");
cm.setInGameDirectionMode(false, true, false);
cm.forceStartQuest(23719, "1");
cm.dispose();
cm.warp(931060011);

	}
}
