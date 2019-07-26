/*
 * 扎昆 - 简单
 * 地图：最后的任务 - 扎昆的祭台(280030100)
 */
function act() {
    //rm.fieldEffect_PlayBGM("Bgm06/FinalFight");
    rm.getMap().spawnSimpleZakum(-10, -215);
    rm.mapMessage("简单扎昆已经被召唤！");
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}