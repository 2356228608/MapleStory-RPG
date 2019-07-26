/*
 * 隐月剧情 - 14
 * 地图：尖耳狐狸村 - 通往狐狸村的路 (940200060)
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
        ms.npc_ChangeController(3002100, 10, 20, 0);
        ms.npc_SetSpecialAction(3002100, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_SetForceMove(3002100, 1, 250, 100);
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.npc_SetForceMove(3002100, -1, 70, 100);
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextNoESC("人类怎么走这么慢啊？是因为没有尾巴吗？", 3002100);
    } else if (status === i++) {
        ms.sendNextNoESC("呃呃，不行！我要先走了。村子就在眼前，现在不会再有危险了，你跟我来吧。沿着这条路简直走就行了。不可以走错哦！那我先走了！", 3002100);
    } else if (status === i++) {
        ms.npc_SetForceMove(3002100, 1, 510, 100);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.sendNextSNoESC("……自说自话。刚才还拉着我说要一起到村里去，现在又让我自己找过去。唉，最好先跟过去。不能在这里迷路。");
    } else if (status === i++) {
        ms.npc_LeaveField(3002100);
        ms.forceStartQuest(38000);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false);
		ms.dispose();
		ms.getEA();
    } else {
        ms.dispose();
    }
}