/*
 * 超能力者剧情 - 04
 * 地图：据点 - 训练室1 (331001110)
 * @author 狐狸糊涂
 */
function enter(pi) {
    if (pi.getInfoQuest(22700).equals("V01=1;V02=0")) {
        pi.updateInfoQuest(22700, "V01=1;V02=1");
        pi.addPopupSay(1531000, 2000, "杰，超简单的嘛！");
        pi.addPopupSay(1531001, 2000, "#face9#你等着，到下一个房间，我会给你召唤怪物的。");
        return true;
    }
}