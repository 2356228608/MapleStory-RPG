/*
 * 剑豪剧情 - 14
 * 阴阳师剧情 - 12
 * 地图：枫叶山丘 - 陌生的山坡 (807040000)
 * @author 狐狸糊涂
 */
function action(mode, type, selection) {
    if (ms.getJob() == 4001) {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.unequip(1003567, true);
        ms.unequip(1052473, true);
        ms.unequip(1072678, true);
        ms.unequip(1082442, true);
        ms.unequip(1542044, true);
        ms.changeJob(4100);
        ms.dispose();
    } else {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.dispose();
    }
    if (ms.getJob() == 4002) {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.changeJob(4200);
        ms.dispose();
    } else {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.dispose();
    }
}