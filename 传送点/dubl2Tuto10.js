function enter(pi) {
    pi.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    pi.mapMessage(5, "On a rainy day...");
    pi.mapMessage(5, "The Secret Garden Depths");
    pi.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
    pi.openNpc(1057000);
}
