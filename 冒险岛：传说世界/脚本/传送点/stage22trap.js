function enter(pi) {
	var pos = pi.getMap().getPortal(0).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	pi.getWeatherEffectNotice("唉……好危险啊。还好我的力量可以把你带到这里来。小心别坠落了。", 147, 60000, 1);
    return true;
}
