/*
 * 超能力者剧情 - 10
 * 地图：据点 - 训练室2 (331001120)
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
        cm.sendNextSNoESC_Bottom("杰~慢慢走实在是有些无聊，现在差不多可以动起来了吧？");
    } else if (status === i++) {
        cm.sendNextNoESC_Bottom("#face9#知道了，在最后阶段我会帮你进行数据升级，你就可以使用#b三段跳#k和#b攻击技能#k了。", 1531001);
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
        cm.fieldEffect_KinesisEXP(600);
        cm.gainExp(600);
        cm.effect_Voice("Voice3.img/Kinesis/guide_04");
        cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
        cm.warp(331001130, 0);
    } else {
        cm.dispose();
    }
}
