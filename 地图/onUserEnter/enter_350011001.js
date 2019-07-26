/*
 * 黑色天堂剧情 - 1
 * 地图：黑色天堂的事先定义(350011001)
 * @author 娜娜
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
        ms.inGameDirectionEvent_AskAnswerTime(500);//延时(毫秒)
    } else if (status === i++) {
        //ms.effect_Text("##fs16##fnNanum Gothic ExtraBold#Writer  #fnNanum Gothic#Jun Sang Mind", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);//334 0x3D
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");//20E 0x5 播放声音
		ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);//20E 0x15 创建一个遮布
		ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/blackHeaven/nexon", 0, 1500, 0, 0, 12, 4, 0);//20E 0x17 添加效果图层
		ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 5000, -43, -825);//364 0x5 画面移动
		ms.inGameDirectionEvent_AskAnswerTime(277);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0);//20E 0x15 取消遮布
		ms.inGameDirectionEvent_AskAnswerTime(200);
    } else if (status === i++) {
        ms.fieldEffect_ProcessOnOffLayer("2", "", 2, 1500, 0, 0, 0, 0, 0);//20E 0x17 添加效果图层
		ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 200, -43, 25);//364 0x5 画面移动
		ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");//20E 0x5 播放声音
		ms.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status === i++) {
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs18#作战开始5天前   #fs15##fnNanum Gothic#黑色之翼基地上空", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);//334 0x3D
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text");//20E 0x5 播放声音
		ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 500, 0, 0);//20E 0x15 创建一个遮布
		ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/blackHeaven/mia", 0, 1500, 0, 0, 15, 4, 0);//20E 0x17 添加效果图层
		ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 1300, 0, 0);//364 0x5 画面移动
		ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/blackHeaven/mia", 0, 1500, 0, 0, 15, 4, 0);//20E 0x17 添加效果图层
		ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(15000, 1000, 8000, 0, 0);//364 0x7 画面移动
		ms.effect_Voice("Game.img/MonsterBattleDraw");//334 0x22
		ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("那哥哥你先跳啊23333。。。", 1540503);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("不要. 我刚刚看见你晚出了, 德皮. ", 1540502);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("什么时候?如果你不相信, 不如我们再来一次?", 1540503);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("新来. ", 1540502);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("好. 石头, 剪刀, 布! ", 1540503);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 500, 0, 0);//20E 0x15 创建一个遮布
		ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_ProcessOnOffLayer("2", "", 2, 1500, 0, 0, 0, 0, 0);//20E 0x17 添加效果图层
		ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");//按Ctrl键打败敌人
        ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
    } else {
        ms.dispose();
    }
}












