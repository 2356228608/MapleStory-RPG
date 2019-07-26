/*
 * 夜光剧情 - 12
 * 地图：927020071
 */
function enter(pi) {
    pi.fieldEffect_ScreenMsg("lightning/screenMsg/6");
    pi.updateInfoQuest(25673, "1");
    pi.spawnMonster(9300535, 0, -80);
    pi.npc_ChangeController(2159367, 150, -520, 1);
    pi.npc_SetSpecialAction(2159367, "summon");
    pi.topMsg("最后的封印在中央阶梯下方。去激活它吧。");
    return true;
}