// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	if (!ms.getQuestStatus(35919)==1) {
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
		ms.onTeleport(1, ms.getPlayer().getId(), -359, 11);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 100, -200);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(4500, 1500, 4500, -280, 45);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#哇哇峡谷", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#咦，奇怪。森林虫之地就到这里为止……\r\n但是没发现罗盘碎片，到底藏在哪里了呢……", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#是高尔根看错了吗……\r\n勇士，最后一个罗盘碎片到底在哪儿呢？", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -150, 45);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 190);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（溪边好像有什么东西在发光，于是走过去查看。\r\n隐约可以看到罗盘碎片。好像沉在了峡谷的底下。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1#最后一块碎片沉在那里了。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#！？", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#嘿嘿，真的耶。花纹跟之前的碎片一样。", 1013350);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#但是……该怎么把它拿出来呢？\r\n水流速度好像很快，看上去很危险。", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（把手放进水里试了试，感觉到了强劲的水流。\r\n直接下来捞上来好像会很危险。）#k", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#要是能让峡谷的水暂停就好了……", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(1, 1);
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#让水停下来？", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#啊，我又在说傻话了……\r\n哎呀……勇士，我不想给你添乱的……", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6##b（如果只是停一下下，我倒是有办法。\r\n让大石头掉下来，就能暂时堵住水流。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face6##b（那样需要用到炸药…… 但是手上刚好没有。\r\n只能用周围可以找到的材料来做了。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#喂，小孩。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#抽泣……是，勇士……", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#周围有可以用来制作炸药的材料吗？", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#你要炸药干嘛……知，知道了！你是想到什么办法了吗！？\r\n炸药……炸药……", 1013350);
	} else if (status === i++) {
		ms.OverlapScreenDetail19(0, 1000, 3000, 1);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.fieldEffect_RemoveOverlapScreenDetail(1000);
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.dispose();
		ms.getEA();
	} else {
		ms.dispose();
	}
}
