function start() {
    var honor = im.nextInt(10000);
    im.getPlayer().gainHonorExp(honor, true);
    im.gainItem(2431174, -1);
    im.dispose();
}