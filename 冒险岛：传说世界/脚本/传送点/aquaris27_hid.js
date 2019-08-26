function enter(pi) {
	var pos = pi.getMap().getPortal(50).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	
	pi.getMap().getWeatherEffectNotice("很好。让我们前往下一层吧。", 147, 60000, 1);
	var em = pi.getEventManager("副本_起源之塔");
	em.setProperty("stage27", "clear");
	pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
	return true;
}
