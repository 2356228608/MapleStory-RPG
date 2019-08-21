function action(mode, type, selection) {
	ms.fieldEffect_PlayBGM("BgmTW/MapleHighSchool");
	var mapId = ms.getMapId() - 744000000;
	if (mapId == 0) {
		ms.effect_Text("#fn微软雅黑##fs24#◆ 独立副本 ◆\r\n#fn黑体##fs40#枫之高校", 100, 2000, 4, 0, -150, 1, 4, 0, 0, 0);
		ms.dispose();
		return;
	}
	var em = ms.getEventManager("副本_枫之高校");
	var eim = em.getInstance("副本_枫之高校");
	var map = em.getMapFactoryMap(ms.getMapId());
	var state = parseInt(em.getProperty("state"));

	if (mapId == 16) {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/final");
	} else {
		ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/stage");
		if (state > 10) {
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_00/" + state % 10);
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + Math.floor(state / 10));
		} else {
			ms.fieldEffect_ScreenMsg("Map/Effect.img/MapleHighSchool/stageEff/number_0/" + state % 10);
		}
	}
	ms.dispose();
}
