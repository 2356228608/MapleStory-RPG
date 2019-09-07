/*
 * 古迹猎人剧情2
 * 地图：//'勇士部落 : 废弃研究室' (910090301)
 * Npc名称：
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
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.onTeleport(1, ms.getPlayer().getId(), -991, -668);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -378, -163);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.inGameDirectionEvent_MoveAction(7);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.effect_Text("#fn黑体##fs18#几天后，帕勒坦遗迹", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_ForcedFlip10(4, 250);
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -650, -300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(6);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip10(2, 180);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#帕勒坦遗迹……终于找到了。\r\n插图上画的地方应该就是这里。", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1#呵呵……规模比想象的还要雄伟嘛。\r\n感觉这里一定埋藏着了不起的东西。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#“找到三把钥匙，插在考验祭坛之上。”\r\n书桌上的纸条，这样写道。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -650, -400);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_key/0", 0, 500, 0, -100, -1, 4, 0);
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/key");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("00", "", 2, 550, 0, 0, 0, 0, 0);
		ms.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_key/1", 0, 300, 0, -100, -1, 4, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_key/2", 0, 500, 0, -100, -1, 4, 0);
		ms.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 550, 0, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -650, -300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face1#一把已经在研究室中得到了。\r\n另一把在来的路上找到了。", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#从钥匙的反应来看……\r\n最后一把钥匙一定就在这个遗迹中。", 1013358);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1");
		ms.userSetFieldFloating(910090301, 10, 10, 50);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.userSetFieldFloating(910090301, 0, 0, 0);
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -700, -300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face3#怎么在震动？难道……要坍塌了吗？", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#但是煮熟的鸭子总不能就这样飞了吧。\r\n迅速把事情搞定，然后离开这里吧。", 1013358);
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
		ms.setStandAloneMode(false);
		ms.setInGameDirectionMode(false, false, false);
		ms.updateInfoQuest(35947, "2=1");
		ms.effect_OnUserEff("UI/tutorial.img/34");
		ms.sendNext_Bottom("#face0#好的，要到祭坛钥匙指向的地方去看看吗？\r\n刚好就在这附近。快去看看吧。", 1013358);
	} else if (status === i++) {
		ms.sendNext_Bottom("#face0#与钥匙产生共鸣的地方……在那边。", 1013358);
	} else if (status === i++) {
		//ms.forceStartQuest(35900);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
