function start() {
    var honor = im.nextInt(100);
    im.gainHonor(honor, true);
    im.gainItem(im.getItemId(), -1);
    im.dispose();
}