// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext_Bottom("#face0#喂，回来啦。找齐所有罗盘碎片还是太难了吧……\r\n什么？全部找到啦！真厉害……", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#好了，快去启动罗盘吧。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#呼呼……知道了。别催我。\r\n反正这个罗盘必须在阳光的充分照射下才能启动。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#现在离正午还早得很呢……\r\n在这之前修好不就行了，呼噜。", 1013351);
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("#face0#我来把罗盘碎片拼好，你们先休息一下。\r\n到时候我叫你们。", 1013351);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#哦～把四分五裂的罗盘拼好 ?\r\n哦哦～在阳光洒满山坡之前 ?", 1013351);
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, false, false);
		qm.setStandAloneMode(true);
		qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		qm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1504, -77);
	} else if (status === i++) {
		qm.onTeleport(1, qm.getPlayer().getId(), 1509, -102);
		qm.inGameDirectionEvent_ForcedFlip(-1);
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		qm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（距离正午好像还有不少时间。终于可以好好休息一下了。\r\n受到诅咒之后，还从来没有安心地休息过呢。）#k", 1013358);
	} else if (status === i++) {
		qm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		qm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6##b（在这一刻，依然能感觉到诅咒之印在燃烧着生命力……\r\n而且速度越来越快了。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（赫丽娜会怎么想呢？\r\n因为过度的好奇心而招致了灾祸，也许她都不会认我这个没出息的弟子吧。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（说什么要去寻找其他人未曾经历过的冒险，却完全迷失了方向。\r\n这个样子……实在是没脸去见师父。）#k", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face2#勇士，你在干嘛？", 1013350);
	} else if (status === i++) {
		qm.npc_ChangeController(1013350, "oid=2819407", 1216, -119, 1);
		qm.npc_SetSpecialAction("oid=2819407", "summon");
		qm.npc_SetForceMove("oid=2819407", 1, 150, 150);
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#!?", 1013358);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#我刚才一个人在玩，但是看到你的表情非常悲伤。\r\n觉得不能袖手旁观，所以……", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#要是打扰了你休息，我在这里向你道歉。但是……", 1013350);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face1#不久前我度过了一段郁郁寡欢的时光。\r\n心情非常郁闷、沉重的时候，我的表情跟刚才的你一模一样。", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face1#啊，我不是说你跟我一样！\r\n我是个笨蛋、胆小鬼，但你很强……", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#所，所以……我的意思是……\r\n这种时候如果能看到美丽的花，也许能让心情好一点，嘿嘿。", 1013350);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face2#那会让人在不知不觉间心情变得好起来。\r\n嘻嘻……我觉得你好像非常需要，所以给你采了一朵。来，给你。", 1013350);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Fever");
		qm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_flower/0", 0, 0, -20, 65, -1200000, 4, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#……", 1013358);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#哇，哇哇，完成了！", 1013351);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#古代罗盘完成了！", 1013351);
	} else if (status == i++) {
		qm.sendNextNoESC_Bottom("#face0#古代罗盘完成了！", 1013351);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face2#啊，高尔根好像启动了罗盘！\r\n快去看看吧。快点！快点！去启动罗盘吧～！", 1013350);
	} else if (status === i++) {
		qm.npc_LeaveField("oid=2819407");
		qm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		qm.OverlapScreenDetail19(0, 1000, 3000, 1);
		qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		qm.fieldEffect_RemoveOverlapScreenDetail(1000);
		qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		qm.setStandAloneMode(false);
		qm.setInGameDirectionMode(false, false, false);
		qm.askAcceptDecline_Bottom("#face0#再过一会儿，就是一天中阳光最强的时间。\r\n做好心理准备吧，嗯哼。", 1013351);
	} else if (status === i++) {
		qm.warp(910090310);
		qm.forceCompleteQuest();
		qm.gainExp(4000);//得到奖励经验
		qm.dispose();
	}
}
