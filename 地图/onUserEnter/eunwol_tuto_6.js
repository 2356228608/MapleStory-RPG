/*
 * 隐月剧情 - 10 12
 * 地图：隐藏地图 - 仪式对面 (940200000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    if (ms.getInfoQuest(38900).equals("4")) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/gofoxvillage");
            ms.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.dispose();
            ms.warp(940200010, 0);
        } else {
            ms.dispose();
        }
    } else {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);
            ms.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === i++) {
            ms.sendNextSNoESC("……");
        } else if (status === i++) {
            ms.sendNextSNoESC("我要……死了吗？");
        } else if (status === i++) {
            ms.sendNextSNoESC("……");
        } else if (status === i++) {
            ms.sendNextSNoESC("死后的世界是不存在的。估计没办法在黄泉中再见了。弗里德那个家伙，一定会很失望。");
        } else if (status === i++) {
            ms.sendNextSNoESC("……");
        } else if (status === i++) {
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/0", 3200, 300, -210);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/1", 2900, -300, -70);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/2", 2600, 300, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/3", 2300, -300, 70);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/4", 2000, 300, 210);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.sendNextSNoESC("怎么回事，这个声音？");
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/5", 3200, -300, -70);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/6", 2900, 300, -210);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/7", 2600, -300, 70);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/8", 2300, 300, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg1/9", 2000, 300, 210);
            ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
            ms.sendNextSNoESC("吵死了。是他们吗？看来现在还不是去黄泉的时候。");
        } else if (status === i++) {
            ms.fieldEffect_InsertCanvas(1, 250, 240, 240, 240, 3000, 0);
            ms.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === i++) {
            ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.fieldEffect_ScreenMsg("Map/Effect2.img/eunwol/meetfox");
            ms.inGameDirectionEvent_AskAnswerTime(3200);
        } else if (status === i++) {
            while (ms.getLevel() < 10) {
                ms.levelUp();
            }
            ms.inGameDirectionEvent_SetHideEffect(0);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.dispose();
            ms.warp(940200010, 0);
        } else {
            ms.dispose();
        }
    }
}