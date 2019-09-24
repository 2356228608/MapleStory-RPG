/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	var info = ms.getInfoQuest(32970);
	if (info == null || !info.equals("s1=1")) {
		action1(mode, type, selection);
	} else {
		if (ms.isQuestActive(32970)) {
		//更新任务信息(此句隐藏NPC)
		ms.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h0;18=h0;19=h0");
		ms.dispose();
		}
		ms.dispose();
	}
}

function action1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
	ms.npc_LeaveField(2560102);//米露
	ms.npc_LeaveField(2500001);//云雀
	ms.npc_LeaveField("oid=22194");//米露
	ms.npc_LeaveField("oid=22195");//云雀
	//地图内置NPC无需召唤
	//ms.npc_ChangeController(2560102, "oid=22194", 38, -6, 1);
	//ms.npc_ChangeController(2500001, "oid=22195", -966, -6, 1);
	ms.updateInfoQuest(32970, "s1=1");
	ms.updateInfoQuest(32999, "10=h0;01=h0;02=h1;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
	ms.sendNextSNoESC_Bottom("直到某一天回到外面的世界……那是什么时候呢？");
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