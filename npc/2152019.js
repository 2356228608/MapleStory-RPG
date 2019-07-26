/*
 * 反抗者任务
 * 地图：黑色之翼领地 - 埃德尔斯坦 (310000000)
 * Npc名称：埃德尔斯坦公告牌
 * @author 狐狸糊涂
 */
function action(mode, type, selection) {
    if (cm.isQuestActive(23005) && cm.haveItem(4032783)) {
        cm.sendNext("公告栏上贴着传单。");
        cm.forceStartQuest(23006, "1");
        cm.gainItem(4032783, -1);
    } else {
        cm.sendOk("埃德尔斯坦自由市场的公告栏。好像可以张贴买卖广告……但是上面除了黑色之翼的广告，其他的什么都没有。");
    }
    cm.dispose();
}