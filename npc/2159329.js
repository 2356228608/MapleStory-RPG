/*
 * 恶魔剧情 - 09
 * 地图：秘密地图 - 恶魔猎手的老家 (924020000)
 * Npc名称：烧焦的残骸2
 * @author 狐狸糊涂
 */
function start() {
    cm.sendNextSNoESC("#b戴米安！！你在哪……活着的话，就回答我！！#k");
    cm.forceCompleteQuest(23201);
    cm.forceStartQuest(23202);
    cm.dispose();
}