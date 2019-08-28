function enter(pi) {
	var next = 10;
	var pos = pi.getMap().getPortal(next).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY() - 10);
	return true;
}
