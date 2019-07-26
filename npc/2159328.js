/*
 * 恶魔剧情 - 08
 * 地图：秘密地图 - 恶魔猎手的老家 (924020000)
 * Npc名称：烧焦的残骸1
 * @author 狐狸糊涂
 */
function start() {
    cm.sendNextSNoESC("#b妈妈！！你在哪里！！#k");
    cm.forceCompleteQuest(23200);
    cm.forceStartQuest(23201);
    cm.dispose();
}