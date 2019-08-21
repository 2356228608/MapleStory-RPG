function enter(pi) {
	if (pi.isQuestActive(3164)) {
		pi.openNpc(0, "副本_狮子王城_危险的第一座塔楼");
	} else {
		pi.openNpc(0, "副本_狮子王城_第一座塔");
	}
	return true;
}
