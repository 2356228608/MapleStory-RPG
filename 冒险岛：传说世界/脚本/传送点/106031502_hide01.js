function enter(pi) {
	var info = pi.getInfoQuest(30067);
	if (info == null || !info.equals("clear2")) {
		pi.openNpc(0, "蘑菇城_逃离飞船2");
	}
	return true;
}
