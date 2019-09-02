// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	var mapId = ms.getMapId();
	if (mapId == 867111003) {
		action3(mode, type, selection);
	} else {
		action4(mode, type, selection);
	}
}

function action3(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116518", 4802, -56, 5);
		ms.npc_ChangeController(1012003, "oid=116519", 4782, 454, 5);
		ms.npc_ChangeController(1012133, "oid=116520", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=1543739", 5000, 446, 1);
		ms.npc_SetSpecialAction("oid=1543739", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_SetForceMove("oid=1543739", -1, 50, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2400);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("您好，长老！我正在寻找失踪的嘟嘟……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("您有没有见过一只巨大的青蛙？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我现在有很多烦心的事情要忙，你下次再来吧。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#那个……你只要告诉我有没有见过青蛙就行……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("真是的，我都说了现在我很忙了。不然……你来帮我解决一点问题吧？", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的，我来帮您吧，不管是什么事情我会帮助您的，长老！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("既然你这么积极……那我就拜托你一点事情吧。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("最近经常有村民抱怨怪物变得十分凶残。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("虽然怪物本来就有攻击性……但是再这么下去，游客和村民都会受到伤害。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("既然你说要帮忙，那就拜托你一下。你能去村子外面，看看怪物们", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("究竟发生了什么变化吗？", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#当然了！我马上就去！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你不要太勉强了，尽力而为就行。你可别在阴沟里翻船啊！", 1012003);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("嗯，这次要消灭怪物才能进入下个阶段啊。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1543739");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action4(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116529", 4720, -56, 5);
		ms.npc_ChangeController(1012003, "oid=116530", 4829, 454, 4);
		ms.npc_ChangeController(1012133, "oid=116531", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400031, "oid=148883847", 5000, 446, 1);
		ms.npc_SetSpecialAction("oid=148883847", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_SetForceMove("oid=148883847", -1, 50, 100);
		ms.sendNextNoESC_Bottom("你去确认过了吗？", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，我确实发现了几只比平时更加凶残的怪物，但是没什么更特别的事情了。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……这样啊……还真是奇怪啊……", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊，对了。你要问我什么？", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("您在这附近见过青蛙吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("青蛙？平原上就有很多青蛙啊？你为什么找青蛙？", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……不是普通的青蛙，是跟人一样大的青蛙……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("还有那种青蛙？我没见过啊。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊，这么说来……我老婆提到过最近有动物失踪了。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不知道她能不能帮上你，不过你还是去问问她吧。", 1012003);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#真的吗？！失踪的动物！好的！谢谢您！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我才要谢谢你，希望你能找到青蛙。", 1012003);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("好，现在笔记本的这一页也写满了吗？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.forceCompleteQuest(59706);
		ms.fieldEffect_KinesisEXP(ms.getPlayer().getLevel() * 10000);
		ms.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=148883847");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
