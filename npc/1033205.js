var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestFinished(24002) && !cm.isQuestActive(24093)) {
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
            return;
        }
        if (status == 0) {
            cm.forceStartQuest(24093, "1");
            cm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status == 1) {
            cm.sendDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0");
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status == 2) {
            cm.sendDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1");
            cm.sendNextSNoESC("等下... 好像有些奇怪.. .. 我的等级是10级?!");
        } else {
            cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}