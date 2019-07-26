/*
 * 夜光剧情 - 08
 * 地图：927020071
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
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.teachSkill(20041222, 1, 1);
        ms.funckeySetByScript(1, 20041222, 0x2A);
        ms.spawnMob(9300535, 600, -298);
        ms.spawnMob(9300535, 150, -508);
        ms.spawnMob(9300535, -150, -508);
        ms.spawnMob(9300535, -600, -298);
        ms.npc_ChangeController(2159363, 600, -310, 1);
        ms.npc_SetSpecialAction(2159363, "summon");
        ms.npc_ChangeController(2159364, 150, -520, 1);
        ms.npc_SetSpecialAction(2159364, "summon");
        ms.npc_ChangeController(2159365, -150, -520, 1);
        ms.npc_SetSpecialAction(2159365, "summon");
        ms.npc_ChangeController(2159366, -600, -310, 1);
        ms.npc_SetSpecialAction(2159366, "summon");
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/4");
        ms.sendNextSNoESC("时间停住了。必须在黑魔法师发现之前，激活所有的封印。");
    } else if (status === i++) {
        ms.sendNextSNoESC("首先去找右边的光之踏板吧。去的时候最好按#r[SHIFT]#k键使用#b<光之传送>#k技能。");
    } else if (status === i++) {
        ms.dispose();
    }
}
