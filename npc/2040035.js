function action(mode, type, selection) {
    cm.removeAll(4001022);
    cm.removeAll(4001023);
    cm.addTrait("will", 35);
    cm.addTrait("charisma", 10);
    cm.getPlayer().endPartyQuest(1202);//might be a bad implentation.. incase they dc or something
    if (cm.getEventCount("LudiPQ") < 10) {
        cm.setEventCount("LudiPQ");
        cm.gainNX(2000);
        cm.gainItem(5062002, 1);
        cm.gainItem(5062000, 1);
        cm.gainItem(5062009, 1);
        cm.gainItem(5062500, 1);
        cm.gainItem(2430384, 1);
        cm.worldSpouseMessage(0x20, "『玩具任务』" + " : " + "玩家 " + cm.getChar().getName() + " 通关完成，获得了冒险岛7周年箱、魔方及1000点卷！");
    }
    cm.warp(922010000);
    cm.dispose();
}