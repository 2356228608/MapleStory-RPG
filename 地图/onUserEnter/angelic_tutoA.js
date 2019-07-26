/*
 * 爆莉萌天使剧情 - 03
 * 地图：秘密地图 - 数 十 年 后 (940012010)
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
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.teachSkill(60011216, 1, 1);  //释世书
        ms.teachSkill(60011218, 1, 1);  //魔法裂隙
        ms.teachSkill(60011220, 1, 1);  //白日梦
        ms.teachSkill(60011221, 1, 1);  //协调
        ms.teachSkill(60011222, 1, 1);  //装扮
        ms.changeJob(6500);
        
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("kaiser/text0");
        ms.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011020, 0);
    } else {
        ms.dispose();
    }
}