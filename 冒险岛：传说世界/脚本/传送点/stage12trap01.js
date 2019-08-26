/* 起源之塔
Made by Jessefjxm
 */
function enter(pi) {
	var pos = pi.getMap().getPortal(1).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	pi.getWeatherEffectNotice("当心！那有陷阱。这次你试着从别的方向通过吧。", 147, 60000, 1);
	return true;
}
