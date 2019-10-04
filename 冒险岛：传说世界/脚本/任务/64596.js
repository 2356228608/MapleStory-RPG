/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64596
任务名称： [我的小屋]突然拜访
任务开始NPC ID： 9400921
任务开始NPC 名称： 埃尔宾
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.sendNewEffects(17, 0, 1000, 2000, -80, 120);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 100);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#你没听到什么声音吗？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock1", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#…?", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/knock2", 128);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#看来有谁找来了吧！ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b应该没什么人要来啊……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_ChangeController(9400935, "oid=11111503", -250, 100, 0);
		cm.npc_SetSpecialAction("oid=11111503", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#勇者大人！ ", 256, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111503", 1, 150, 100);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#[50个#i2010058:##t2010058#]\r\n这是给你的礼物……！", 256, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#欢迎你来到我们村子！", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(64696, "give=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#你~~妈妈允许你这么做了吗？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.gainItem(2010058, 50);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#当然了！ ", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#哇，#h0#真是太幸运了~ 特鲁迪家的奶油面包真的很好吃。充满了柔软奶油的蓬松面包，吃下一口后，在嘴里融化开来……可以说是让人感觉到幸福就在身边的味道吧！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b……啊……那我分你一点吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#啊，不用了！这是给#h0#的乔迁礼物嘛。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b谢谢你，特鲁迪！我会好好吃的！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111503", -1);
		cm.npc_SetForceMove("oid=11111503", -1, 100, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#啊啊啊~~", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=11111503");
		cm.sendNewEffects(14, 0, 2000, 1000, 0, 0);
	} else if (status === i++) {
		cm.sendNewEffects(19, 0, 0, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#特鲁迪看来很喜欢#h0#呢！ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b我没什么能够回礼的呢……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#嗯~要不要办搬家聚会呢？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#搬家聚会？", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b搬家聚会？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#邀请村民们来，用好吃的招待他们！再叫上#h0#的好友！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b好主意！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#哇，肯定很有趣！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#好的！那就开始准备搬家聚会吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64596);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
