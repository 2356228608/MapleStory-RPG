/*
 * 冒险家剧情 - 49
 * 地图：明珠港 - 明珠港 (104000000)
 */
function start() {
	if (ms.getMapId() == 104000000) {
		ms.fieldEffect_ScreenMsg("maplemap/enter/104000000");
		ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
	}
	ms.checkMedalQuest();
	if(ms.getMapId() == 101000000){
		if(ms.getJobId()==2300&&ms.getQuestStatus(24046)==1){
			cm.forceCompleteQuest(24046);
		}
	}
	if (ms.getMapId() == 120040000) {
		ms.effect_Text("#fn微软雅黑##fs24#◆ 主题副本 ◆\r\n#fn黑体##fs40#金海滩", 100, 2000, 4, 0, -150, 1, 4, 0, 0, 0);
	}
	ms.dispose();
}
