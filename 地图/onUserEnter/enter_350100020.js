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
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_Unew150("", "Map/Effect2.img/Blizzard/skeleton", "normal", 1, 1, 1, 0, 0);
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		cm.setAmbience("Ambience.img/blizzard_soft",100,60);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(9000, 1000, 9000, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/8");
		cm.fieldEffect_ProcessOnOffLayer("8", "Map/Effect2.img/HofM/ACT1_text/8", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(7500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("8", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/9");
		cm.fieldEffect_ProcessOnOffLayer("9", "Map/Effect2.img/HofM/ACT1_text/9", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("9", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face1#弗里德，为了恢复伤口，我得在这座岛上长眠。", 1540820);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/1");
		cm.sendNextNoESC_Bottom("#face2#如果连你都长眠了，那现在真的就只剩下我一个人了。", 1540836);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/2");
		cm.sendNextNoESC_Bottom("#face1#不要伤心，我们的缘分并没有止步于此。", 1540820);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/3");
		cm.sendNextNoESC_Bottom("#face2#对，我们的缘分不会止步于此。", 1540836);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/4");
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("whiteback", "Map/Effect2.img/HofM/ACT1_bye/whiteback", 0, 2500, 0, 0, 10, 4, 0);
		cm.fieldEffect_ProcessOnOffLayer("base", "Map/Effect2.img/HofM/ACT1_bye/base", 0, 2500, 0, 0, 12, 4, 0);
		cm.fieldEffect_ProcessOnOffLayer("mark", "Map/Effect2.img/HofM/ACT1_bye/mark", 0, 2500, 0, 0, 16, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#在遥远的将来，我的子孙后代会相见，不过到了那个时候，我也早已不是这个世界上的人了。", 1540836);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/5");
		cm.sendNextNoESC_Bottom("#face2#你能替我将消息传递给他们吗？", 1540836);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/6");
		cm.sendNextNoESC_Bottom("#face1#我们可是发誓要永远保住这份友情的，我们的约定会一直坚守下去的。", 1540820);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/7");
		cm.sendNextNoESC_Bottom("#face2#谢谢，阿弗利埃，我的人生中能够有你作伴，我很开心。", 1540836);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/BYE/8");
		cm.fieldEffect_ProcessOnOffLayer("whiteback", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("mark", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("base", "", 2, 1000, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/10");
		cm.fieldEffect_ProcessOnOffLayer("10", "Map/Effect2.img/HofM/ACT1_text/10", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(7500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("10", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/11");
		cm.fieldEffect_ProcessOnOffLayer("11", "Map/Effect2.img/HofM/ACT1_text/11", 0, 2500, 0, -70, 12, 7, 1);
		cm.inGameDirectionEvent_AskAnswerTime(6500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("11", "", 2, 500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		ms.dispose();
		cm.warp(350110000);
	} else {
		ms.dispose();
	}
}
