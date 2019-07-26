/*
 * 超能力者剧情 - 12
 * 超能力者任务 - 绝招(22714)
 * 地图：据点 - 训练室3 (331001130)
 * 任务：绝招(22714)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        qm.sendNextSNoESC_Bottom("现在都可以了吧？");
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#对了，还有件事忘了解释。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#收集超自然点数#g(PP)#k，就可以使用绝招技能，这是你能使用的最强大的技能。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#超自然点数要怎么收集啊？\r\n很简单，你平时使用念力的时候会自动累积。", 1531001);
    } else if (status === i++) {
        qm.topMsg("超能力者收集超自然点数就可以使用绝招技能. ");
        qm.effect_OnUserEff("UI/tutorial.img/kinesis/2");
        qm.effect_Voice("Voice3.img/Kinesis/guide_14");
        qm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#如果你还没有用过绝招技能，我就帮你装在#g[END]#k键上，出来之前试着自在地用一次吧。", 1531001);
    } else if (status === i++) {
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop");
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.mob_EnterField(2700300, 200, -238);
        qm.funckeySetByScript(1, 142001002, 0x4F);//end键
        qm.cameraSwitch_PushSwitchMoveInfo("pt_VP", 1000);
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#绝招：元素#g[END]#k技能不仅具有强大的伤害，而且还可以用于打击在高处的敌人。", 1531001);
    } else if (status === i++) {
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.dispose();
    } else {
        qm.dispose();
    }
}
