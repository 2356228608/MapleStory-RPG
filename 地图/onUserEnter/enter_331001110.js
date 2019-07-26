/*
 * 超能力者剧情 - 02
 * 地图：据点 - 训练室1 (331001110)
 * @author 狐狸糊涂
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
        ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        ms.inGameDirectionEvent_ForcedFlip(-1);
        ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        ms.fieldEffect_PlayFieldSound("Sound/Ambience.img/flare_ready");
        ms.sendNextNoESC_Bottom("#face9#啊-啊-测试，测试，OK。\r\n通信系统启动顺畅，现在应该可以测量动向了。", 1531001);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("杰？我好像需要戴眼镜了！", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#你两只眼睛视力不都是2.5嘛，戴什么眼镜？", 1531001);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#超能力者的据点\r\n#fs14#-训练室-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("那这是怎么回事？\r\n要是我眼睛够好，那我的等级这里写的数字是#b10#k吧。", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("我好歹是个英雄，居然是#b10级#k。\r\n要是我眼睛没问题，那肯定是你犯了不小的失误啊。", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#……那是因为还没有数据。\r\n当你的行动和念力等被数据化后，积累越多数值之后，显示的数据也就会发生改变。", 1531001);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("好吧，如果你想看到的是等级一下子提升的奇迹。", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#来，先从测量身体开始吧。\r\n按照标记来移动就行。", 1531001);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink");
        ms.cameraSwitch_PushSwitchMoveInfo("go_tuto2", 1000);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("等一下！在此之前有个重大问题需要解决。", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face10#？测试准备工作很完美，难道有什么问题吗？", 1531001);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face3#你倒是开点欢快的音乐嘛，这不是一点兴致都没有嘛？", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#……", 1531001);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.fieldEffect_PlayBGM("Bgm42/TheBeast2");
        ms.sendNextNoESC_Bottom("#face2#是啊，这样才有进行的乐趣嘛！", 1531000);
    } else if (status === i++) {
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 1477, -68);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use");
        ms.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaKine", 0, 500, 800, 0, 12, 5, 1);
        ms.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m");
        ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
        ms.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, 800, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_OverlapScreenDetail(0, 1000, 3000, 1);
        ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.fieldEffect_RemoveOverlapScreenDetail(1000);
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.updateInfoQuest(22700, "V01=0;V02=0");
        ms.dispose();
    } else {
        ms.dispose();
    }
}