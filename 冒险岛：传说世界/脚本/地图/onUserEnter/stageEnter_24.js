/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "24";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";
var BGM = [["阿里安特", "Bgm14/Ariant"], ["明珠港", "Bgm02/AboveTheTreetops"], ["射手村", "Bgm00/FloralLife"], ["勇士部落", "Bgm00/Nightmare"], ["废弃都市", "Bgm01/BadGuys"], ["魔法密林", "Bgm02/WhenTheMorningComes"], ["林中之城", "Bgm00/SleepyWood"], ["埃欧雷", "Bgm25/WindAndFlower"], ["天空之城", "Bgm04/Shinin'Harbor"], ["冰封雪域", "Bgm03/SnowyVillage"], ["水下世界", "Bgm11/Aquarium"], ["玩具城", "Bgm06/FantasticThinking"], ["神木村", "Bgm13/Leafre"], ["圣地", "Bgm18/QueensGarden"], ["埃德尔斯坦", "Bgm22/EdelsteinCity"], ["玛加提亚", "Bgm12/Dispute"], ["武陵", "Bgm15/MureungHill"], ["里恩", "Bgm19/RienVillage"], ["尖耳狐狸村", "Bgm36/foxvillage"], ["万神殿", "Bgm27/Pantheon"], ["童话村", "Bgm11/DownTown"]];

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && (prop.equals("start") || prop.equals("clear"))) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		startMap(em);
		return;
	}

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#这是起源之塔的管理者桃乐丝所制作的关卡。\r\n\r\n连我的话都不想听是干嘛，非要在这么冷的地方设置这种关卡，真是很低俗的兴趣！\r\n\r\n要通过这地方的方法是仔细听背景音乐，要猜中是在冒险岛哪个村庄里听过的音乐才行。\r\n\r\n因为只会播放一次，要仔细听。", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		startMap(em);
	} else {
		ms.dispose();
	}
}

function startMap(em) {
	ms.dispose();
	em.setProperty("stage" + level, "start");
	ms.getMap().getWeatherEffectNotice("现在，你要认真倾听音乐，然后回答问题并通过这里。", 147, 60000, 1);
	var sound = parseInt(em.getProperty("stage" + level + "_bgm_1"));
	ms.fieldEffect_PlayBGM(BGM[sound][1]);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
