/*
 * 恶魔剧情 - 05
 * 地图：秘密地图 - 场面切换0 (924020010)
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
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(30);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text11");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
        ms.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene2");
        ms.dispose();
    }
}

