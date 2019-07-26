/*
 * 战神剧情 - 23
 * 地图：914090010
 * 地图：914090011
 * 地图：914090012
 * 地图：914090013
 * 地图：914090100
 * 地图：914090200
 */
function start() {
    ms.curNodeEventEnd(true);
    ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    switch (ms.getMapId()) {
        case 914090010:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/Scene0");
            break;
        case 914090011:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/Scene1" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090012:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/Scene2" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090013:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/Scene3");
            break;
        case 914090100:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/HandedPoleArm" + (ms.getPlayerStat("GENDER") == 0 ? "0" : "1"));
            break;
        case 914090200:
            ms.effect_Direction("Effect/Direction1.img/aranTutorial/Maha");
            break;
    }
    ms.dispose();
}