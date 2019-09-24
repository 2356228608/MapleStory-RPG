/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
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
cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, true, false);
cm.inGameDirectionEvent_Effect( "Effect/Direction12.img/effect/story/BalloonMsg1/0", 1200, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
cm.inGameDirectionEvent_AskAnswerTime(1140);
} else if (status === i++) {
cm.fieldEffect_ScreenMsg("xenon/photoF");
cm.inGameDirectionEvent_AskAnswerTime(3990);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159389,  "怎么回事……？这种感觉？\r\n第一次见到#p2151003#的时候就是这种感觉。有点怀念，又有点悲伤……感觉心缩起来了一样。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159389,  "但是又感觉有点温暖。让人一直想回想起来的那种感觉。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.forceStartQuest(23718, "");
cm.gainItem(4033636,1);//小时候的照片
cm.setInGameDirectionMode(false, true, false);
cm.dispose();
	}
}
