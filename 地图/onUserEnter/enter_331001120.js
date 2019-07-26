/*
 * 超能力者剧情 - 07
 * 地图：据点 - 训练室2 (331001120)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.mob_EnterField(2700302, 705, 63);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_ForcedFlip(-1);
        ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        ms.sendNextNoESC_Bottom("#face9#首先在正式测量战斗力之前，为了进行基本的设置，你先把眼前的训练机器人A打倒。", 1531001);
    } else if (status === i++) {
        ms.topMsg("使用基本攻击和技能就可以打败敌人了。");
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=0;E1=1");
        ms.effect_OnUserEff("UI/tutorial.img/kinesis/0");
        ms.effect_Voice("Voice3.img/Kinesis/guide_06");
        ms.dispose();
    } else {
        ms.dispose();
    }
}