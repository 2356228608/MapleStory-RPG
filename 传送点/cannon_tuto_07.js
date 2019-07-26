/*
 * 神炮王剧情 - 15
 * 地图：可可岛 - 火箭出发 (912060200)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (!pi.isQuestFinished(2568)) {
        pi.curNodeEventEnd(true);
        pi.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        pi.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        pi.npc_ChangeController(1096012, -51, -97, 1);
        pi.npc_SetSpecialAction(1096012, "summon");
        pi.inGameDirectionEvent_MoveAction(0);
        pi.inGameDirectionEvent_MoveAction(2);
        pi.forceStartQuest(2568);
    }
}