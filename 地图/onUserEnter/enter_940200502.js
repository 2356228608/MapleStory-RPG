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
		cm.Hidden_background("key", 0);
		cm.forceCompleteQuest(34600);
		cm.onTeleport(1, cm.getPlayer().getId(), -373, -47);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -374, 43);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 300);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -50, 43);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#今天城市里……也充斥了一股臭味。没办法，只能忍忍了。我到底在期待什么……\r\n", 3001270);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 350, 43);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 770, 43);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#呜哈哈，看到了吗？我这出神入化的身手！咻-咻-几下子就能把对手打趴下！\r\n", 3001260);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0#哈哈，你们这些家伙。跟我一伙是你们的光荣，知道吗？\r\n", 3001260);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 43);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#喂，那边之所以这么吵……是有人在打架吗？呃，该不会有什么高手吧？\r\n", 3001270);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
		cm.inGameDirectionEvent_ForcedFlip10(2, 420);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 420, 43);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.Hidden_background("key", 1);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.gainItem(1272026, 1);
		while (ms.getLevel() < 10) {
			ms.levelUp();
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
