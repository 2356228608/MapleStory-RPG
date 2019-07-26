/*
 * 地图：阿叙隆：村庄外围(940202010)
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
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.fieldEffect_InsertCanvas11(1, 255, 0, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetFaceOff(1,300);//0x10
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 1000);//移动到角色位置
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
        ms.sendOkSNoESC_New("#face6#快看那！", 3001351);
    } else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(900,1500,900,-3200,120);
		ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextPrevNoESC_Illus("#face6#只在书本上见过的水晶门竟然就在眼前！呃……好紧张！", 3001351);
    } else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(600,2000,600,-500,120);
		ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(600,2000,600,-400,120);
		ms.inGameDirectionEvent_AskAnswerTime(600);
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh",0,10,0,1,0);
    } else if (status === i++) {
        //ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        //ms.updateInfoQuest(22700, "V01=0;V02=0");
        ms.dispose();
    } else {
        ms.dispose();
    }
}

