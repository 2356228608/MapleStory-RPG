/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 64600
任务名称： [我的小屋]搬家聚会邀请
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
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#现在去邀请居民们吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#如果可以，#h0#亲自去广场邀请居民们吧，怎么样？\r\n#b#L0#好的！#l\r\n#L1#现在还有点尴尬啊。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#好的，我和艾米会准备一些简单的食物，我们待会见！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1##h0#肯定会做得很好的。我和艾米会准备一些简单的食物，你要拿出勇气来！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
		cm.forceStartQuest(64600, "");
		cm.updateInfoQuest(500767, "2=1;3=1;4=1;entrance=0;7=1;managerXpos=100;managerYpos=100");
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
	} else {
		var info = qm.getInfoQuest(64600);
		if (info == null || info.isEmpty()) {
			end1(mode, type, selection, i);
		} else if (info.equals("NpcSpeech=94009261")) {
			end2(mode, type, selection, i);
		} else if (info.equals("NpcSpeech=94009261/94009242")) {
			end3(mode, type, selection, i);
		} else if (info.equals("NpcSpeech=94009261/94009242/94009233")) {
			end4(mode, type, selection, i);
		} else {
			end5(mode, type, selection, i);
		}
	}
}

function end1(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#搬家聚会？那是什么？", 256, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b就是搬家后，邀请邻居们来参观家里，再一起吃好吃的。特鲁迪只要来玩就可以了。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#啊，特鲁迪十分情愿，说要去搬家聚会！", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(64600, "NpcSpeech=94009261");
		qm.dispose();
	}
}
function end2(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#……搬家聚会？ ", 256, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#你把时钟挂起来了吗？", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b当然了！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#……我知道了。我会准时到的。", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242");
		qm.dispose();
	}
}
function end3(mode, type, selection, i) {
	if (status == i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#啊啊，我听埃尔宾说了你搬家的事情。呵呵。那个桌子可是我做的。看起来是不是像值300万金币？虽然因为是练习用的作品，不能出售……", 256, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#总之，待会儿去就行了吧？凯尼斯大叔还没来，我会转告他的。", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242/94009233");
		cm.OnStartNavigation(871000000, 0, "goHome", 0);
		qm.dispose();
	}
}
function end4(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#你回来了啊？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face0#啊，我都激动起来了！对了，你没有别的要邀请的朋友吗？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/4", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#好友邀请，只要在点击我的小屋菜单的#i3801393#按键后，输入好友的角色名字就能邀请了。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#在#b好友名单窗口#k或者#b聊天窗口#k中右键点击好友的角色名字，然后点击[我的小屋邀请]按键也能进行邀请。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "#face1#你要不要试着邀请好友？\r\n#b#L0#现在就邀请。#l\r\n#L1#好友就下次再邀请吧。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection==0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#好的，请在邀请好友后再和我对话！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#行，那下次再试试看吧！现在只要等人来就可以了。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			cm.forceCompleteQuest(64600);
		}
	} else if (status === i++) {
		cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242/94009233/94009214");
		qm.dispose();
	}
}
function end5(mode, type, selection, i) {
	if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#你已经邀请了所有好友吗？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#好的，现在只要等人来就可以了。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64600);
		qm.dispose();
	}
}
