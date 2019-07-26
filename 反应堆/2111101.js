/*
 * 扎昆 - 进阶
 * 地图：最后任务 - 进阶扎昆的祭台(280030000)
 */
function act() {
    //rm.fieldEffect_PlayBGM("Bgm06/FinalFight");
    rm.getMap().spawnChaosZakum(-10, -215);
    rm.mapMessage("进阶扎昆已经被召唤！");
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}