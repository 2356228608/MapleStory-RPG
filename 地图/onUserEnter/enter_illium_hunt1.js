/*
 * 圣晶使徒 剧情 - 1
 * 地图：荒蛮终点站：垃圾场深处(940202013)
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);//角色站立方向信息
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);//地图场景效果 【Boss血条】等等
		ms.fieldEffect_PlayBGM("Bgm47/AsylumPiano");//地图场景效果 【Boss血条】等等
		ms.inGameDirectionEvent_AskAnswerTime(500);
		ms.inGameDirectionEvent_SetHideEffect(0);   //显示隐藏角色
        ms.curNodeEventEnd(true);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text0", "Effect/Direction14.img/illium/prologueText/0", 0, 1000, 0, -50, 13, 4, 1);//拥有格兰斯最高智慧和技术的翼族人
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text0", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text0", "Effect/Direction14.img/illium/prologueText/1", 0, 1000, 0, -50, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text1", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 19
		ms.fieldEffect_Unew150("Effect/Direction14.img/illium/prologue/0/skeleton", "animation", "prologue", 0, 1, 0, 0, 0);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text2", "Effect/Direction14.img/illium/prologueText/2", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text2", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text3", "Effect/Direction14.img/illium/prologueText/3", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text3", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text4", "Effect/Direction14.img/illium/prologueText/4", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text4", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text5", "Effect/Direction14.img/illium/prologueText/5", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text5", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text6", "Effect/Direction14.img/illium/prologueText/6", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text6", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text7", "Effect/Direction14.img/illium/prologueText/7", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text7", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text8", "Effect/Direction14.img/illium/prologueText/8", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text8", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("text8", "Effect/Direction14.img/illium/prologueText/9", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
		ms.fieldEffect_ProcessOnOffLayer("text9", "", 2, 1000, 0, 0, 0, 0, 0);//
		ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {//mode 12
		ms.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 150, 13, 4, 1);//
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
    } else {
        ms.dispose();
    }
	
	
	
	
}