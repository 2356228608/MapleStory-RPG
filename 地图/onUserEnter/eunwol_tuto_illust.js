/*
 * 隐月剧情 - 01 04 06 08
 * 地图：隐藏地图 - 时间神殿 (927030050)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    if (ms.getInfoQuest(38900).equals("1")) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/enter");
            ms.inGameDirectionEvent_AskAnswerTime(3500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.warp(927030020, 0);
            ms.dispose();
        }
    } else if (ms.getInfoQuest(38900).equals("2")) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.effect_Direction("Effect/Direction15.img/eunwolTutorial/Scene0");
            ms.inGameDirectionEvent_AskAnswerTime(4000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.warp(927030030, 0);
            ms.dispose();
        }
    } else if (ms.getInfoQuest(38900).equals("3")) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.effect_Direction("Effect/Direction15.img/eunwolTutorial/Scene1");
            ms.inGameDirectionEvent_AskAnswerTime(16000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.dispose();
            ms.warp(927030040, 0);
        }
    } else {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n冒险岛世界已经被一股沉沉的黑暗所笼罩。", 0);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n突然出现的黑魔法师想用他那强大的黑暗力量支配冒险岛世界", 0);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n所有的人都惧怕黑魔法师, 所以无人敢与他对抗。", 1);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n冒险岛世界只剩下无尽的绝望。", 0);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n还有……", 0);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n终于愿意将冒险岛从黑魔法师的魔爪中救出的人出现了。", 1);
        } else if (status === i++) {
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_AskAnswerTime(3300);
            ms.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene0");
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.warp(927030000, 0);
            ms.dispose();
        } else {
            ms.dispose();
        }
    }
}