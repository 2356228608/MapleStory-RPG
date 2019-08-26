function act() {
	var em = rm.getEventManager("副本_起源之塔");
	var stage = parseInt(em.getProperty("stage36_stage"));
	var curBit = parseInt(em.getProperty("stage36_curBit"));
	var password = parseInt(em.getProperty("stage36_password_" + curBit));
	var thisCode = rm.getReactor().getReactorId() - 9260007;

	if (thisCode == password) {
		if (curBit == stage) {
			em.setProperty("stage36_stage", stage + 1);
			em.setProperty("stage36_curBit", 1);
			if (stage == 8) {
				em.getMapFactoryMap(mapid).startSimpleMapEffect("很好！你已经正确输入了所有密码！和菜鸟探险家打声招呼，然后前往下一层吧。", 5120061);
				em.setProperty("stage36", "clear");
				rm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
			} else {
				rm.getMap().getWeatherEffectNotice("正确！目前还有密码，请再次和我说话，确认下一个密码。", 149, 60000, 1);
			}
		} else {
			em.setProperty("stage36_curBit", curBit + 1);
			rm.getMap().getWeatherEffectNotice("正确。请继续攻击怪物，然后再输入" + (stage - curBit) + "个密码。", 149, 60000, 1);
		}
	} else {
		em.setProperty("stage36_curBit", 1);
		rm.getMap().getWeatherEffectNotice("错误！你必须要从头开始再输入密码一遍。", 149, 60000, 1);
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
