function enter(pi) {
	var pos = pi.getMap().getPortal(2).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	return true;
}