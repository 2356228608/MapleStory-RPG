/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090304)
 *  脚本功能：古迹猎人剧情4
 *  @Author 娜娜
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.sendNext_Bottom("#face4#呃……呃呃……", 1013358);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face4#差不多……到了……", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#片刻后，大本营", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/down");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_baseC/0", 0, 500, 0, -80, 1, 4, 0);
		ms.sendNext_Bottom("#face4#呼……呼……", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face5##b（感觉身体在燃烧，好痛苦。\r\n到底……我到底发生了什么事 ……那种不祥的气息到底是什么。）#k", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face5##b（因为触碰了遗物？\r\n……难道是古代遗物的诅咒？）#k", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
		ms.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_baseC/1", 0, 500, 0, -80, 1, 4, 0);
		ms.sendNext_Bottom("#face5##b（老师的忠告是对的。\r\n是的，好奇心往往会伴随着危险……）#k", 1013358);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_baseC/2", 0, 1500, 0, -80, 1, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 1000, 0, 0, 0, 0, 0);
		ms.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction22.img/effect/PF_baseC/3", 0, 2500, 0, -80, 1, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("祝贺你，#b#ho##k。现在你终于要离开我的怀抱，踏上自己的冒险之路了。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("相信你一定可以谱写出属于自己的传说。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("因为你是我见过好奇心最强、最勇敢的冒险家。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("但是……", 3003658);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这一点同时也让我有点担心。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好奇心可以成为照亮新道路的火把，\r\n但偶尔也会成为招致灾难的火种。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("冒险家，请你记住。\r\n好奇心的背后隐藏着危险。", 3003658);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("必须保持警惕，时刻提醒自己……", 3003658);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("03", "", 2, 1000, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("04", "Effect/Direction22.img/effect/PF_baseC/2", 0, 1500, 0, -80, 1, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("04", "", 2, 3000, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face5#但是……我……", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
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
		ms.dispose();
		ms.warp(910090305, 0);
	} else {
		ms.dispose();
	}
}
