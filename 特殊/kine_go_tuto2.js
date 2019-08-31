/*
 * 超能力者剧情 - 06
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
        cm.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
        cm.fieldEffect_KinesisEXP(350);
        cm.updateInfoQuest(22700, "V01=1;V02=1;E1=1");
        cm.gainExp(350);
        cm.effect_Voice("Voice3.img/Kinesis/guide_04");//播放声音Voice.img开头的字符串
        cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
        cm.warp(331001120, 0);
    } else {
        cm.dispose();
    }
}
