/*
 * 超能力者剧情 - 08
 * 超能力者任务 - code K : 收集身体数据1(22711)
 * 地图：据点 - 训练室2 (331001120)
 * 任务：code K : 收集身体数据1(22711)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.forceStartQuest();
        qm.sendNextNoESC_Bottom("#face9#好的，测量毫无异常，那就正式开始吧。\r\n把左边的5个训练机器人B全都打倒。", 1531001);
    } else if (status == 1) {
        qm.mob_EnterField(2700300, 703, -150);
        qm.mob_EnterField(2700300, 703, -150);
        qm.mob_EnterField(2700300, 85, -179);
        qm.mob_EnterField(2700300, 85, -179);
        qm.mob_EnterField(2700300, 85, -179);
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop");
        qm.cameraSwitch_PushSwitchMoveInfo("pt_VP", 1000);
        qm.sendNextNoESC_Bottom("#face9#打倒后拾取剩下的材料时，按下Z键就可以了。\r\n结束之后利用左侧的传送口来我这里。", 1531001);
    } else if (status == 2) {
        qm.topMsg("按下Z键可以拾取道具。");
        qm.effect_Voice("Voice3.img/Kinesis/guide_12");
        qm.effect_OnUserEff("UI/tutorial.img/kinesis/1");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}