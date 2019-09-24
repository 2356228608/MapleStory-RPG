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

cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, true, false);
cm.inGameDirectionEvent_MoveAction(0);
cm.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
cm.curNodeEventEnd(true);
cm.inGameDirectionEvent_MoveAction(1);
cm.onScriptMessage(3, 0, 1, 2159390,  "等一下！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "......!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(2);
cm.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(0);
cm.inGameDirectionEvent_AskAnswerTime(90);
} else if (status === i++) {
cm.npc_ChangeController(2159390, "oid=6791264", -1040, -30, 1);
cm.npc_SetSpecialAction("oid=6791264", "summon", 0, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.npc_SetForceMove("oid=6791264",-1,500,100);
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "还好。听了#p2152009#的话之后，我赶紧追了过来。听说你要离开埃德尔斯坦……。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "是的，我是这么打算的。抱歉，没打声招呼就急着走了。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "嗯……你是不喜欢埃德尔斯坦吗？这里的变化太大了吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "不是的。我有特殊的情况，不能继续留在这里……是我自己的问题。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "有需要我们帮助的地方吗？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "如果我继续留在这里，大家都可能会有危险。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "……既然你这么坚决，我就不再多说什么了。给……拿着这个。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "这个？这不是#p2159390#的短剑吗。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "我把它还给你。也算#b物归原主#k了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "……！", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "(#p2159390#……一直认为我是她失踪了的朋友。虽然现在还没能找到任何决定性的证据……连我自己都不相信自己，#p2159390#却一直相信着我。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "(我也很信任#p2159390#。虽然失去了记忆，即使我不是那个失踪了的朋友，我也是#p2159390#的朋友。即使我们不在一起。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "谢谢你，#p2159390#。这个东西你还是留着吧。现在你比我更需要它。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "但是……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "总有一天，埃德尔斯坦会重新恢复和平。等#p2159390#你不再需要这把短剑的时候，到时再把它还给我好了。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "……知道了。那就先把它放在我这里。在再见面之前，希望你能注意身体。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2159390,  "好的，#p2159390#，你也保重。再见。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_MoveAction(1);
cm.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
cm.setInGameDirectionMode(false, true, false);
cm.npc_LeaveField("oid=6791264");
cm.warp(100000000,0);
cm.dispose();

	}
}
