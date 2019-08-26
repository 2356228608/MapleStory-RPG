/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "43";
var header = "#fn黑体##fs42#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		startMap(em);
		return;
	}

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#地下43层是神木村地域。想通过这个地方就要通过冒险家芙雷塔的考验才行。 \r\n\r\n虽然我说了你不需要……但因为从这里开始很危险，若是想要前进的人，不但得通过自己的考验，也要让别人来判断是否有通过的资格才行啊。 \r\n\r\n芙雷塔跟我都只是单纯想帮助你而已，不要带有不好的想法哦，就回应考验吧。对于一路突破到这里的你来说一定不是什么困难的考验。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		startMap(em);
	} else {
		ms.dispose();
	}
}

function startMap(em) {
	ms.dispose();
	em.setProperty("stage" + level, "start");
	var pos = ms.getMap().getPortal(1).getPosition();
	ms.onTeleport(1, ms.getPlayer().getId(), pos.getX(), pos.getY());
	ms.getMap().getWeatherEffectNotice("请一定要通过老练的冒险家的考验，这也是为了你好。", 147, 60000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
