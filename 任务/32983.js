/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var PQname = ["影子村_迎月山丘"];
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
qm.fieldEffect_PlayBGM("Bgm48/EveningPrimrose", 0, 0);
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, false, false);
qm.setStandAloneMode(true);
qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.SitOnDummyPortableChair(3018035, 1);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
qm.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，\r\n大眼青蛙卵一勺。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "隔水熬制后……\r\n最后加上……迎月花……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_PlayBGM("Bgm33/ShadowKnight", 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.npc_ChangeController(2560009, "oid=4093030", 1188, -150, 1);
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "呃啊！突然从哪里冒出来的？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face1#退后，影牙！", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
qm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
qm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Attack1", 100);
qm.npc_LeaveField("oid=4093030");
qm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 2560003,  "#face1#呃！", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "艾特！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 2560100, 0, 2560003,  "#face1#我没事。做好战斗准备，影牙！\r\n#b（接受时自动移动。）", 0, 16, 37, 0, 1, 2560003); // [类型] 接受/拒绝
} else if (status === i++) {
qm.dispose();
qm.playerMessage(5, "必须消灭掉扑过来的怪物。");
	var em = qm.getEventManager(PQname[chs]);
	em.startInstance(qm.getParty(), qm.getMap(), 255);

//qm.warp(307000240);

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
		qm.dispose();
		qm.openNpc(0,"32983_end");
	} else {
		qm.dispose();
	}
}
