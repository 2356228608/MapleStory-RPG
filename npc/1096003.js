/*
 * 神炮王剧情 - 06
 * 地图：可可岛 - 浅海滩 (3000100)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        cm.sendNextNoESC("吱吱，吱吱！");
    } else if (status == 1) {
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
    }
}