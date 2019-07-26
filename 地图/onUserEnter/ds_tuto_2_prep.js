/*
 * 恶魔剧情 - 12
 * 地图：秘密地图 - 黑魔法师房间前方回廊1 (927000020)
 * @author 狐狸糊涂
 */
function action(mode, type, selection) {
    ms.npc_ChangeController(2159309, 550, 50, 1);
    ms.npc_SetSpecialAction(2159309, "summon");
    ms.teachSkill(30010166, 1, 1);
    ms.teachSkill(30011167, 1, 1);
    ms.teachSkill(30011168, 1, 1);
    ms.teachSkill(30011169, 1, 1);
    ms.teachSkill(30011170, 1, 1);
    ms.forceStartQuest(23204);
    ms.dispose();
}


