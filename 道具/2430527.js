function start() {
    im.gainItem(2430527, -1);
    im.gainPlayerPoints(1000);
    im.playerMessage(-1, "『积分』： 获得了 1 点积分。当前已有 " + im.getPlayerPoints() + " 点积分。");
    im.dispose();
}