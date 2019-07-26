/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011010)
 * @author 娜娜
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
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 50, 210);//364 0x7 画面移动
		ms.inGameDirectionEvent_AskAnswerTime(277);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/blackHeaven/mia", 0, 1500, 0, 0, 15, 4, 0);//20E 0x17 添加效果图层
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushScaleInfo(15000, 1000, 8000, 0, 0);//364 0x7 画面移动
		ms.inGameDirectionEvent_AskAnswerTime(277);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.warp(910000000, 0);
		ms.addPopupSay(1540108, 3000, "剧情未完善.已被遣送回来");
    } else {
        ms.dispose();
    }
}
