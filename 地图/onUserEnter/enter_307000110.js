/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;
    if (ms.isQuestActive(32973)) {//迎月花
	ms.dispose();
	}else if (ms.isQuestActive(32977)) {//真实之药
        ms.dispose();
	ms.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h1;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
	}else if (ms.isQuestActive(32974)) {
	ms.dispose();
	ms.updateInfoQuest(32999, "01=h1;10=h1");
	}else if (ms.isQuestActive(32978)) {
	ms.dispose();
	ms.updateInfoQuest(32999, "01=h1;10=h1");
	}
    
    var info = ms.getInfoQuest(32970);
    //每一轮对话调用一次action，所以任务身份要写在最后否则连不上。
    if (!info.equals("s1=1;s2=1;e1=1;e2=1") && !ms.isQuestFinished(32971)) {
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
        // 初始化
        //客户端内置NPC//此处移动
        ms.npc_ChangeController(2560116, "oid=22240", 72, -260, 1);
        ms.npc_ChangeController(2560108, "oid=22241", 135, -260, 1);
        ms.npc_ChangeController(2560110, "oid=22242", -58, -23, 0);
        ms.npc_ChangeController(2560119, "oid=22243", 152, -23, 1);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false, false);
        ms.setStandAloneMode(true);
        ms.onTeleport(1, ms.getPlayer().getId(), -11, -77);
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.effect_Text("#fnNanumGothicExtraBold##fs20#第二天", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
        ms.SitOnDummyPortableChair(3018034, 1);
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2200);
    } else if (status === i++) {
        ms.sendNextSNoESC_Bottom("影鹿角，再放一点磨得很细的骨粉，\r\n少许苍穹甘草根，少许泥鳅眼珠……");
    } else if (status === i++) {
        ms.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
        ms.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
        ms.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.sendNextSNoESC_Bottom("呼……搞定了。中和剂准备好了……\r\n啊，已经这么晚了吗？快出去吧。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.setStandAloneMode(false);
        ms.setInGameDirectionMode(false, false, false);
	//没有取消动作所以用传送来重置角色
	ms.warp(307000110,0);
	//于是再次召唤四大天王=。=
        ms.npc_ChangeController(2560116, "oid=22240", 72, -260, 1);
        ms.npc_ChangeController(2560108, "oid=22241", 135, -260, 1);
        ms.npc_ChangeController(2560110, "oid=22242", -58, -23, 0);
        ms.npc_ChangeController(2560119, "oid=22243", 152, -23, 1);
        ms.updateInfoQuest(32970, "s1=1;s2=1;e1=1;e2=1");
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
	        ms.dispose();
    } else {
        ms.dispose();
    }
}