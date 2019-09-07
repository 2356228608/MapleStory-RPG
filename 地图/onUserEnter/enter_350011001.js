/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011001)
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {

	status++;

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// cm.warp(350011001);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Text("#fs16##fn黑体#Director  #fnNanum Gothic#Hwang Sun Young", 100, 2200, 4, 0, 0, 1, 4, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		cm.inGameDirectionEvent_AskAnswerTime(400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/WorldmapOpen");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(2600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Text("#fs16##fn黑体#Writer  #fnNanum Gothic#Jun Sang Min", 100, 2200, 4, 0, 0, 1, 4, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/WorldmapOpen");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(2300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Text("#fs16##fn黑体#Cast  #fnNanum Gothic##h0#", 100, 2200, 4, 0, 0, 1, 4, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/WorldmapOpen");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuDown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_Voice("UI.img/MenuUp");
		cm.inGameDirectionEvent_AskAnswerTime(2300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_ScreenMsg("lightning/screenMsg/0"); //按Ctrl键打败敌人
		ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
