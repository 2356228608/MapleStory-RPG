/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var PQname = ["影子村_影子村"];
var chs = 0;

var status = -1;

function start(mode, type, selection) { 
    status++;
    var i = -1;
            if (qm.getParty() == null) { // 没有组队
                qm.sendOk("需要开启队伍。");
                qm.dispose();
		return;
	    }

    if (status <= i++) {
        qm.dispose();
} else if (status === i++) {

qm.npc_LeaveField("oid=22233");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.onScriptMessage(3, 0, 1, 2560004,  "#face0#站住，影牙。", 256, 0, 37, 0, 1, 2560004); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "希姆斯……肯……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560004,  "#face0#我们接到了命令，只要你踏出村子一步，就干掉你。", 257, 0, 37, 0, 1, 2560004); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#哈哈，真是个笨蛋。我还在担心，要是你回宿舍去了该怎么办呢。", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560004,  "#face0#只要乖乖地喝下中和剂，就什么事都没有了。", 257, 0, 37, 0, 1, 2560004); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "让开。我不想伤害你们。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560006,  "#face0#哈哈，好狂妄的口气！", 257, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.setStandAloneMode(false);
qm.setInGameDirectionMode(false, false, false);
	var em = qm.getEventManager(PQname[chs]);
	em.startInstance(qm.getParty(), qm.getMap(), 255);
qm.playerMessage(5, "必须打败希姆斯和肯，到迎月山丘去。");
//qm.warp(307090020);
qm.dispose();

    } else {
        qm.dispose();
    }
}


function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.npc_LeaveField("oid=22233");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.onScriptMessage(3, 0, 1, 2560006,  "#face2#不可能……怎么会……", 256, 0, 37, 0, 1, 2560006); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "必须到迎月山丘去……真实药水……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceCompleteQuest(32988);
qm.updateInfoQuest(32988, "exp=1;clear=1");
qm.setInGameDirectionMode(false, false, false);
qm.dispose();
qm.warp(307000210);
qm.npc_ChangeController(2560100, "oid=22362", 1010, -93, 1);
qm.npc_ChangeController(2500001, "oid=22363", -209, -6, 1);
qm.npc_ChangeController(2560120, "oid=22364", 806, -93, 0);
qm.npc_ChangeController(2560121, "oid=22365", 1020, -93, 1);
	} else {
		qm.dispose();
	}
}
