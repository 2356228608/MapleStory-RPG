/*
 * 尖兵剧情 - 12
 * 地图：秘密研究所 - 走廊 (931050970)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_ChangeController(2159381, -1700, 20, 0);
        ms.npc_SetSpecialAction(2159381, "summon");
        ms.npc_ChangeController(2159384, -1600, 20, 0);
        ms.npc_SetSpecialAction(2159384, "summon");
        ms.sendNextNoESC("通过这个走廊，就是机库。通过那里之后，就能到达外面了。但是一路上到处都是警卫机器人。", 2159381);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("我会想办法的。别担心。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("刚才这位朋友说会成为累赘。老实说，我刚才掉进陷阱的时候手臂受了伤，没办法帮你。真的没关系吗？", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("没关系。我会想办法的。");
    } else if (status === i++) {
        ms.npc_SetForceMove(2159381, 1, 2200, 100);
        ms.npc_SetForceMove(2159384, 1, 2200, 100);
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.spawnMob(9300682, -1000, 32);
        ms.spawnMob(9300682, -700, 32);
        ms.spawnMob(9300682, -400, 32);
        ms.spawnMob(9300682, -100, 32);
        ms.spawnMob(9300682, 200, 32);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
