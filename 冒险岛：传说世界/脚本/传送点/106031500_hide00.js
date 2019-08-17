function enter(pi) {
	var info = pi.getInfoQuest(30067);
	if (info == null || !info.equals("clear")) {
		pi.openNpc(0, "蘑菇城_逃离飞船1");
	}
	return true;
}
