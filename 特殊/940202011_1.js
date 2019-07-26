/*
 * 地图：阿叙隆：阿叙隆入口(940202011)
 * @author 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.inGameDirectionEvent_PushScaleInfo(900,1000,900,-3000,80);//0x07 画面移动
		cm.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetFaceOff(1,900);//0x10 隐藏角色
		cm.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
        cm.sendNextNoESC_Bottom("#face0#岂有此理！有人想离开平民翼人地区", 3001357);
    } else if (status === i++) {
        cm.sendNextNoESC_Bottom("#face0#站住！再逃我就认定你这是违法行为了！", 3001357);
    } else if (status === i++) {
        cm.sendNextNoESC_Bottom("#face3#呃……#fs28#真#fs25#是#fs22#对#fs19#不#fs16#起~~~~~~~~~！！", 3001357);
    } else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(1, 255, 0, 0, 0, 500);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
        //cm.fieldEffect_RemoveOverlapScreenDetail(1000);
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        //cm.updateInfoQuest(22700, "V01=0;V02=0");
        cm.dispose();
		cm.warp(940202012,0);
    } else {
        cm.dispose();
    }
}

