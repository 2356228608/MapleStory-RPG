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
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.npc_ChangeController(1013350, -631, 60, 1);
		ms.npc_SetSpecialAction(1013350, "summon");
		ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -540, -400);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#帕勒坦遗迹", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -540, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#看来确实是遗迹的入口。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#呃啊……里面四通八达全都是路。好像是个非常复杂的地方。\r\n应该往哪边走呢？", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3##b（是个有很多条路的地方。之前过来的时候没有感觉。\r\n因为有祭坛钥匙的光指引方向。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（呼……解开诅咒的线索，是在发现遗物的那个地方吗？\r\n还是应该选择别的路呢？）#k", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#勇士，勇士……我听到了很轻的咚咚声。\r\n你不觉得跟废墟发出的声音很像吗？", 1013350);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Ambience.img/ruin")
		ms.sendNext_Bottom("#face6##b（集中精神听了一下。\r\n虽然非常微弱，但确实好像有什么东西在响。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0##b（过去看看，说不定会有什么发现。\r\n但是这么小的声音，怎么能……不，那个小孩也许可以……）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#你能找到这个声音的来源吗，小孩？", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#没问题。怪声我听得多了，\r\n就算是很小的声音，也会让人直起鸡皮疙瘩。", 1013350);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#你在前面带路。我跟在后面。", 1013358);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#啊，你是想去发出声音的地方进行调查吗？\r\n好可怕……不过我一定会坚持下去的。请跟我来。", 1013350);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -120, -48);
	} else if (status === i++) {
		ms.npc_SetForceMove(1013350, 1, 550, 180);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 300);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
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
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.forceCompleteQuest(35923);
		ms.npc_LeaveField(1013350);
		ms.warp(100051041);
		ms.gainExp(4000);//得到奖励经验
		ms.dispose();
	} else {
		ms.dispose();
	}
}
