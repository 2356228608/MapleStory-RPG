/*
 * 神炮王剧情 - 05
 * 地图：可可岛 - 浅海滩 (3000100)
 * @author 狐狸糊涂
 */
function enter(pi) {
    pi.setStandAloneMode(0);
    pi.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
    pi.openNpc(1096003);
}