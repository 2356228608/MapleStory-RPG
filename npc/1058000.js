/*
 * 暗影双刀剧情 - 08
 * 地图：金银岛之路 - 锻炼室2 (103050520)
 * Npc名称：秀丽
 * @author 狐狸糊涂
 */
function start() {
    if (cm.isQuestActive(2607) && cm.itemQuantity(4033178) < 1) {
        cm.gainItem(4033178, 1);
        cm.sendNext("(猫头鹰很冷漠地丢过来一个证书，就挥了挥翅膀，好像是让我离开……)");
    }else {
        cm.systemMessage("猫头鹰没东西再给你了。");
    }
    cm.dispose();
}
