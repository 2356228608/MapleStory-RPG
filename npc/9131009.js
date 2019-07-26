/*
 * 剑豪剧情 - 06
 * 地图：本能寺 - 本能寺东侧外墙 (807100001)
 * @author 狐狸糊涂
 */
function start() {
    if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        cm.dispelBuff(40011186);
        cm.teachSkill(40011183, -1, 0);
        cm.teachSkill(40011184, -1, 0);
        cm.teachSkill(40011185, -1, 0);
        cm.teachSkill(40011186, -1, 0);
        cm.warp(807100002, 1);
    } else {
        cm.sendOkS("打败所有的敌人，打开东门吧！");
    }
    cm.dispose();
}