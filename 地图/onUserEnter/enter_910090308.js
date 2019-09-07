// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	//(mode == 1) ? status++ : status--;
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_ForcedFlip(-1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1350, -100);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.onTeleport(1, ms.getPlayer().getId(), 1486, -94);
		//ms.updateAchievement(558, 0, "");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.effect_Text("#fn???? ExtraBold##fs18#高尔根家", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#高尔根的家就在这里。现在他应该还在睡觉……\r\n因为那家伙的日夜完全是颠倒的。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#高尔根，快起来。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#高尔根！高尔根！", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#高～尔～根～！", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#呼……呼……喊了半天都不出来。\r\n啊……对了，我想起来了。有个办法可以叫他出来。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#魔……魔，魔……", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#魔，魔神高尔根……", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#！？", 1013358);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.npc_ChangeController(1013351, 1372, -174, 1);
		ms.npc_SetSpecialAction(3059171, "summon");
		ms.npc_SetForceMove(3059171, -1, 40, 80);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#嗨，好久不见。但是……\r\n拜托不要用别的名字，要叫我魔神高尔根。", 1013351);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#唉……你也真是……不过你看上去很健康，太好了。\r\n你离开村子的时候，我还有点担心呢。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#我……很强。啊哦……但是那个黑乎乎的家伙又是谁？\r\n难道……你收了个小弟？", 1013351);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#呃啊，别，别胡说！那是村外来的勇士！\r\n因为有点事情，所以决定和我同行。还有……他非常非常强。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#呵呵……那就来吧……我的对手终于登场了吗？\r\n我要用地狱之火把你烧成灰……", 1013351);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#高尔根！别，别胡说八道！\r\n勇士和我是为重要的事情而来。", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（说自己正在对废墟进行调查。\r\n最近那里的怪声越来越严重，所以决定出来调查。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#来，你看看。关于这个东西，你知道些什么吗？", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#来，你看看。关于这个东西，你知道些什么吗？", 1013358);
		ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {}
	else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（把遗物给那个叫高尔根的家伙看了一下。\r\n他跟村里的其他人一样，脸色一下子变得惨白。）#k", 1013358);
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {}
	else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#哎呀……我……我错了。求你……把东西放回去。", 1013351);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#呼……呼啊……刚才那个东西散发出的气息，跟废墟一模一样。\r\n是不是有什么关联？有，而且还不少。", 1013351);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#我讨厌问东问西。听说你在观察废墟……是不是知道些什么？", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#那，那个……我只是喜欢可怕的东西。\r\n所以才会每天都在这里观察。其他的……不太清楚。", 1013351);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {}
	else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#……但，但是如果你想寻找什么，我倒是有办法。", 1013351);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.forceCompleteQuest(35913);
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
