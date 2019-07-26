function act() {
    rm.fieldEffect_PlayBGM("Bgm14/HonTale");
    rm.spawnMonster(8810215, 71, 260);
    rm.mapMessage("一声巨响，黑龙闪亮登场。");
    //rm.scheduleWarp(43200, 240000000);
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}