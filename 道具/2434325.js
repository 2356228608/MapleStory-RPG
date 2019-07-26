function start() {
    im.spawnMob(9020107, im.getPlayer().getPosition().x, im.getPlayer().getPosition().y);
    im.gainItem(im.getItemId(), -1);
	im.dispose();
}