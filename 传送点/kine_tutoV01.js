/*
 * 超能力者剧情 - 03
 * 地图：据点 - 训练室1 (331001110)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.getInfoQuest(22700).equals("V01=0;V02=0")) {
        pi.updateInfoQuest(22700, "V01=1;V02=0");
        pi.topMsg("按下方向键和跳跃键就可以移动了。");
        pi.effect_Voice("Voice3.img/Kinesis/guide_02");
        return true;
    }
}