/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011000)
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/blackHeaven/nexon", 0, 1500, 0, 0, 12, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 5000, -43, -825);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(277);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 200, -43, 25);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs18#作战开始5天前   #fs15##fnNanum Gothic#黑色之翼基地上空", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");
		cm.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1300, 0, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("01", "Map/Effect2.img/blackHeaven/mia", 0, 1500, 0, 0, 15, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(15000, 1000, 8000, 0, 0);
	} else if (status === i++) {
		cm.effect_Voice("Game.img/MonsterBattleDraw");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("那哥哥你先跳啊?", 1540503);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("不要. 我刚刚看见你晚出了, 德皮. ", 1540502);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("我什么时候?\r\n如果你不相信, 不如我们再来一次?", 1540503);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("重新来. ", 1540502);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("那好. 石头, 剪刀, 布!", 1540503);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 1500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.warp(350011010, 0);
	} else {
		ms.dispose();
	}
}
