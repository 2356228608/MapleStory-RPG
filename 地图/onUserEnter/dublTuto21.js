/*
 * 暗影双刀剧情 - 07
 * 地图：金银岛之路 - 锻炼室1 (103050510)
 * @author 狐狸糊涂
 */
function start() {
    ms.resetMap(ms.getMapId());
    ms.effect_NormalSpeechBalloon("只有那个箱子的把手\r\n感觉有点不太一样呢……？",3000,0);
    ms.spawnMob(9300522, 150, 152);
    ms.spawnMob(9300522, 0, 152);
    ms.spawnMob(9300521, -150, 152);
    ms.spawnMob(9300522, -300, 152);
    ms.spawnMob(9300522, -450, 152);
    ms.spawnMob(9300522, -600, 152);
    ms.dispose();
}
