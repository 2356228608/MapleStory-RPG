/*
 * 暗影双刀剧情 - 01
 * 地图：金银岛之路 - 起点 (103050900)
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
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.effect_Lightness(false);
        ms.effect_Lightness(true);
        ms.inGameDirectionEvent_Monologue("\r\n飞花院深处", 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n某个下雨天", 1);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(8000);
    } else if (status === i++) {
        ms.topMsg("点击头上有电灯泡图标的NPC就可以开始任务。");
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.effect_Lightness(false);
        ms.dispose();
    }
}
