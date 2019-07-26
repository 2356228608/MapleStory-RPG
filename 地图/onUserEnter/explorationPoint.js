/*
 * 冒险家剧情 - 49
 * 地图：明珠港 - 明珠港 (104000000)
 */
function start() {
    if (ms.getMapId() == 104000000) {
        ms.fieldEffect_ScreenMsg("maplemap/enter/104000000");
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
    }
    ms.checkMedalQuest();
    ms.dispose();
}