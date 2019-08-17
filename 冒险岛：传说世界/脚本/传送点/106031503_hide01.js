function enter(pi) {
	var info = pi.getInfoQuest(30067);
	if (info == null || !info.equals("clear3")) {
		pi.openNpc(0, "蘑菇城_逃离飞船3");
	}
	return true;
}
