/*
 * 暗影双刀剧情 - 03
 * 地图：金银岛之路 - 新手修炼场入口 (103050910)
 * @author 狐狸糊涂
 */
function start() {
    if (ms.getQuestStatus(2603) == 2) {
        ms.spawnNpcForPlayer(1057001, -920, 152);
        ms.dispose();
    }
	ms.dispose();
}
