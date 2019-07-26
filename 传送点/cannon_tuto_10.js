/*
 * 神炮王剧情 - 20
 * 地图：诺特勒斯 - 寝室 (912060500)
 * @author 狐狸糊涂
 */
function enter(pi) {
    pi.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
    pi.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
    if (pi.isQuestFinished(2568) && pi.getQuestStatus(2570) == 0) {
        pi.balloonMsg("我这是在哪里？头好疼啊", 150, 5);
    }
}