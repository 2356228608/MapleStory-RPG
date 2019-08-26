function enter(pi) {
	var pos = pi.getMap().getPortal(0).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	pi.getWeatherEffectNotice("该死！有陷阱。让我们绕过这里从别处走吧。", 147, 60000, 1);
    return true;
}
