/*
 * 超能力者
 * 地图：私立英才学校 - 2-1教室 (331002500)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.setSpineObjectEffect(["class_flyObj"], [1, 0, 0]);
        ms.setSpineObjectEffect(["classroom", "night"], [2, 1]);
        ms.setSpineObjectEffect(["class_dayObj", "night"], [2, 1]);
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("谁在那里？", 1531000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("难道是我听错了吗……", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face0#呃……！！头……？", 1531000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(4);
        ms.emotion(7, 9000);
        ms.userSetFieldFloating(ms.getMapId(), 20, 20, 100);
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.setSpineObjectEffect(["class_flyObj"], [1, 255, 1000]);
        ms.setSpineObjectEffect(["class_dayObj"], [1, 0, 1000]);
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.userSetFieldFloating(ms.getMapId(), 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.setSpineObjectEffect(["class_flyObj"], [1, 0, 0]);
        ms.setSpineObjectEffect(["class_dayObj"], [1, 255, 0]);
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face0#呃……我的头！", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("怎么回事？我刚刚好像暂时失去了意识，\r\n虽然只是暂时的，但我有种完全没法控制自己力量的感觉。", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("……应该没什么问题吧，可能是最近有点累了，赶紧回去吧。", 1531000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;kinetuto2=1;E1=1;blackCat=1;E2=1;E3=1");
        ms.forceCompleteQuest(22728);
        ms.gainExp(1200);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
    } else {
        ms.dispose();
    }
}
