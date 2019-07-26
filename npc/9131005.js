/*
 * 剑豪剧情 - 12
 * 地图：本能寺 - 本能寺本堂前方 (807100004)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true);
        cm.sendNextSNoESC_Bottom("我无意对女性兵戎相向，速速退开吧。");
    } else if (status === i++) {
        cm.sendNextNoESC_Bottom("哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。", 9131005);
    } else if (status === i++) {
        cm.sendNextSNoESC_Bottom("不要让我再次重复这句话，我无意对女性兵戎相向，快点给我退开。");
    } else if (status === i++) {
        cm.sendNextNoESC_Bottom("你还挺狂妄的嘛，那就让我来试试看，你的本事是不是和你的态度一样拽上天！", 9131005);
    } else if (status === i++) {
        cm.npc_ChangeController(9131005, 187, 51);
        cm.npc_SetSpecialAction(9131005, "summon");
        cm.npc_SetSpecialAction(9131005, "step");
        cm.inGameDirectionEvent_AskAnswerTime(1080);
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14", 0, 0, -120, 1, 0, 1, 9131005, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15", 0, 0, -120, 1, 0, 1, 9131005, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16", 0, 0, -120, 1, 0, 1, 9131005, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17", 0, 0, -120);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        cm.inGameDirectionEvent_MoveAction(5); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        cm.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
        cm.warp(807100005, 0);
    }
}