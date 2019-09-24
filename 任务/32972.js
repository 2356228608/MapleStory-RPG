/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) { 
    status++;
    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) { (mode == 1) ? status++:status--;
    var i = -1;
    if (status <= i++) {
        qm.dispose();
} else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.onScriptMessage(3, 0, 1, 0,  "现在可以搜集材料了吧？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "嗯？是石香蝴蝶！这可是稀罕玩意！快追！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_ForcedFlip10(2, 200);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.forceCompleteQuest(32972);
qm.updateInfoQuest(32972, "exp=1");
qm.setInGameDirectionMode(false, false, false);
qm.warp(307000210);
qm.dispose();
	}else{
qm.dispose();
    }
}