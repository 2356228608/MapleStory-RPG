/*
 * 超能力者剧情 - 14
 * 地图：据点 - 训练室3 (331001130)
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
        cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
        cm.fieldEffect_KinesisEXP(600);
        cm.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=1;kinetuto2=1;E1=1;E2=1");
        cm.gainExp(600);
        cm.effect_Voice("Voice3.img/Kinesis/guide_08");
        cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        cm.forceCompleteQuest(22711);
        cm.forceCompleteQuest(22714);
        cm.forceStartQuest(22715);
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
        cm.warp(331001000, 2);
    } else {
        cm.dispose();
    }
}
