/*
 * 狂龙剧情 - 10
 * 地图：秘密地图 - 数 十 年 后 (940002040)
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
        ms.teachSkill(60001229, -1, 0); //怒雷屠龙斩
        ms.teachSkill(60001216, 1, 1);  //模式转换：防御模式
        ms.teachSkill(60001217, 1, 1);  //模式转换：攻击模式
        ms.teachSkill(60001218, 1, 1);  //垂直连接
        ms.teachSkill(60000219, 1, 1);  //变身
        ms.teachSkill(60001225, 1, 1);  //命令
        ms.teachSkill(61001000, 1, 20); //飞龙斩
        ms.teachSkill(61001101, 1, 20); //烈火箭
        ms.funckeySetByScript(1, 60001225, 0x2A);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("kaiser/text0");
        ms.inGameDirectionEvent_AskAnswerTime(4200);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001200, 0);
    } else {
        ms.dispose();
    }
}