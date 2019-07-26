/*
 * 超能力者剧情 - 11
 * 地图：据点 - 训练室3 (331001130)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;


    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_ForcedFlip(-1);
        ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        ms.sendNextNoESC_Bottom("#face9#凯内西斯，现在是时候使用你所拥有的攻击技能了。", 1531001);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#我会把你的ESP限制器数据升级到#b1阶#k的。", 1531001);
    } else if (status === i++) {
        ms.changeJob(14200);
        ms.teachSkill(142001000, 1, 10);
        ms.teachSkill(142001001, 1, 20);
        ms.teachSkill(142001004, 1, 5);
        ms.teachSkill(142001002, 1, 10);
        ms.funckeySetByScript(1, 142001000, 0x2A);//shift键
        ms.funckeySetByScript(1, 142001001, 0x53);//delete键
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.sendNextNoESC_Bottom("#face9#超自然力量#g[SHIFT]#k技能是一种可以将怪物推向所想方向的技能。", 1531001);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#然后心灵爆震#g[DEL]#k技能是一种可以用你的念力将敌人弹飞到空中后再将其狠狠摔下的技能。", 1531001);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("用#gSHIFT#k推动，再用#gDEL#k攻击，是吧？", 1531000);
    } else if (status === i++) {
        ms.sendNextNoESC_Bottom("#face9#没错，而且连续按下跳跃键，可以移动更远的距离。", 1531001);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop");
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.mob_EnterField(2700300, -50, 63);
        ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink");
        ms.cameraSwitch_PushSwitchMoveInfo("go_ajit", 1000);
        ms.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=1;kinetuto2=0;E1=1;E2=1");
        if (ms.isQuestActive(22714)) {
            ms.forfeitQuest(22714);
        }
        ms.dispose();
    } else {
        ms.dispose();
    }
}