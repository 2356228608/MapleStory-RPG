// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(9330205, "oid=7054299", 200, 3, 1);
ms.npc_SetSpecialAction("oid=7054299", "summon", 0, 0);
ms.npc_ChangeController(9330202, "oid=7054300", 80, 3, 0);
ms.npc_SetSpecialAction("oid=7054300", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.npc_SetSpecialAction("oid=7054300", "dead", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330205,  "你跟其他人一样都是笨蛋。为了救那种人奋不顾身。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.emotion(4, 10000);
ms.onScriptMessage(3, 0, 1, 9330205,  "父亲!!! 父亲!!! 父亲!!!!!!", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 9330205,  "现在全部都结束了。 呵呵", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(9330204, "oid=7054366", -130, 3, 0);
ms.npc_SetSpecialAction("oid=7054366", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330204,  "宏武团长!还有 小姐!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "咻，秀禾….父亲，父亲!!!!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330202,  "逃，必须要逃脱。这，这里的话，我会处理的。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330205,  "所有东西都在我的计划里面。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330205,  "为了不害你这样的家伙，我有必要站出来吗？呵呵", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7054299", "attack0", 0, 1);
ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.npc_ChangeController(9330212, "oid=7054397", 300, -31, 1);
ms.npc_SetSpecialAction("oid=7054397", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054398", 430, -31, 1);
ms.npc_SetSpecialAction("oid=7054398", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054399", 370, -31, 1);
ms.npc_SetSpecialAction("oid=7054399", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054400", 400, -31, 1);
ms.npc_SetSpecialAction("oid=7054400", "summon", 0, 0);
ms.npc_ChangeController(9330213, "oid=7054401", 380, -31, 1);
ms.npc_SetSpecialAction("oid=7054401", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054402", 490, -31, 1);
ms.npc_SetSpecialAction("oid=7054402", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054403", 545, -31, 1);
ms.npc_SetSpecialAction("oid=7054403", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054404", 600, -31, 1);
ms.npc_SetSpecialAction("oid=7054404", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054405", 612, -31, 1);
ms.npc_SetSpecialAction("oid=7054405", "summon", 0, 0);
ms.npc_ChangeController(9330213, "oid=7054406", 678, -31, 1);
ms.npc_SetSpecialAction("oid=7054406", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054407", 701, -31, 1);
ms.npc_SetSpecialAction("oid=7054407", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054408", 731, -31, 1);
ms.npc_SetSpecialAction("oid=7054408", "summon", 0, 0);
ms.npc_ChangeController(9330212, "oid=7054409", 800, -31, 1);
ms.npc_SetSpecialAction("oid=7054409", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 9330205,  "呼呼，那么现在就结束吧。各位！一个都不要救！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330202,  "还....还没有结束。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "跟我一起来！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330204,  "不，我不会去的….", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7054366", "attack0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.emotion(1, 1000);
ms.onScriptMessage(3, 0, 1, 9330204,  "啊啊，秀禾… 你会打….打我…..", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.emotion(4, 30000);
ms.inGameDirectionEvent_OneTimeAction(29, 2000);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(25, 30000);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330202,  "秀禾!赶紧走吧!!!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/DaddysSkill0/4", 1920, 150, 0, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/DaddysSkill0/5", 3840, 600, 200, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
ms.inGameDirectionEvent_AskAnswerTime(2640);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/2", 4000, 600, 20, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/2", 4000, 400, -10, 0, undefined, 0, 0, 0, 0);
ms.npc_LeaveField("oid=7054366");
ms.npc_LeaveField("oid=7054299");
ms.npc_LeaveField("oid=7054300");
ms.npc_LeaveField("oid=7054397");
ms.npc_LeaveField("oid=7054398");
ms.npc_LeaveField("oid=7054399");
ms.npc_LeaveField("oid=7054400");
ms.npc_LeaveField("oid=7054401");
ms.npc_LeaveField("oid=7054402");
ms.npc_LeaveField("oid=7054403");
ms.npc_LeaveField("oid=7054404");
ms.npc_LeaveField("oid=7054405");
ms.npc_LeaveField("oid=7054406");
ms.npc_LeaveField("oid=7054407");
ms.npc_LeaveField("oid=7054408");
ms.npc_LeaveField("oid=7054409");
ms.setInGameDirectionMode(false, false, false);
ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
ms.dispose();
ms.warp(743020102);
	} else {
		ms.dispose();
	}
}
