function enter(pi) {
	pi.warp(pi.getMapId(), 50);
	pi.addPopupSay(2540000, 5000, "很好。让我们前往下一层吧。");
	var em = pi.getEventManager("Map_TowerOfOz");
	em.setProperty("stage27", "clear");
	pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
	return true;
}
