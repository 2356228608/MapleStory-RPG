/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.npc_ChangeController(1302101, 288, 260, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302101, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("父亲，请快把药吃下去。这是勇士为你买来的蘑菇万能疗伤药。", 1302001);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("谢，谢谢，那么……咕嘟，咕嘟，咕嘟", 1302104);
	} else if (status === i++) {
		var newStatus = ms.getQuestRecord(30081);
		newStatus.setCustomData("1");
		newStatus.setStatus(1);
		ms.getPlayer().updateQuest(newStatus, true);
		ms.sendNextNoESC_Bottom("哦，力量……感觉充满了力量！啊哈哈哈哈哈哈哈！", 1302104);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你的白血病治好了吗？啊，太好了，真是太好了。勇士，真不知道该如何报答你……", 1302001);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("对了，我碧欧蕾塔愿意成为勇士的新娘。", 1302001);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("不，不，没关系。真的……真的没关系。");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不，勇士，你完全有资格做我碧欧蕾塔的新郎。好了，快过来吧。我现在是你的女人了。", 1302001);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("不行，这样下去的话，真的要娶这个难看的蘑菇做新娘了。那样的话……");
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("其实，我……喜欢黑大海盗！");
	} else if (status === i++) {
		// 全场！
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302100, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 1, 0, 2000, 1302101, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302104, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302108, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302113, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302114, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302115, 0);
		ms.effect_NormalSpeechBalloon("!", 1, 0, 0, 2000, 1302116, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("好了，再见！", 1, 0, 0, 2000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 200, 136, 382);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("呵呵，这样也好。我希望你能找个蘑菇做女婿，一起治理这个国家，你明白我的心意吗？", 1302000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("父王……呜呜……", 1302001);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你虽然不是我的亲生女儿，但你仍然是这个国家的公主。蘑菇大臣，请原谅过去那个无能的我。能成为碧欧蕾塔的父亲，我感到很幸福。", 1302000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("陛下，请别这么说！你把我女儿碧欧蕾塔养大成人！我愿章为蘑菇王国鞠躬尽瘁！", 1302104);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("谢谢你，蘑菇大臣。好了，博公主一笑大会重新开始！能够博公主一笑的人，可以成为这个国家的国王！", 1302000);
	} else if (status === i++) {
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302105, 0);
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302106, 0);
		ms.effect_NormalSpeechBalloon("国王陛下万岁！", 1, 0, 0, 2000, 1302107, 0);
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302108, 0);
		ms.effect_NormalSpeechBalloon("蘑菇王国！", 1, 0, 0, 2000, 1302113, 0);
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302114, 0);
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302115, 0);
		ms.effect_NormalSpeechBalloon("万岁！", 1, 0, 0, 2000, 1302116, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("（但是父王……父亲……我其实一直在笑。为什么没人看得出来呢……？）", 1302001);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(2000, 4000, 2000, 288, 300);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		//ms.npc_SetSpecialState(1302101, 2, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
		//ms.npc_SetSpecialState(1302101, 1, 0);
	} else if (status === i++) {
		// 片尾曲
		ms.fieldEffect_PlayBGM("Bgm38/FlowerVioleta");
		ms.fieldEffect_InsertCanvas(1, 75, 150, 50, 50, 2000, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 135, 210);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/ending");
		ms.inGameDirectionEvent_MonologueScroll("#fn黑体##fs26#总监		SY\r\n\r\n脚本		Syasya\r\n\r\n修复		Jessefjxm\r\n\r\n支持		BMS技术团队\r\n\r\n助理总监	Wonky\r\n\r\n艺术总监	林次长\r\n\r\n策划/开发	Jara Keutokki\r\n\r\n			MJ WW\r\n\r\n设计		Kkyuji Banilra\r\n\r\n			Shyegg洪 Komaboy\r\n\r\n			设计师Y\r\n\r\nQA			最强战士普通人\r\n\r\n			粗心姐姐 Kkangroki\r\n\r\n运营		Tina.P Annamese\r\n\r\n			海盗王船长\r\n\r\nCS			Ericsson金博士\r\n\r\n营销/网站	Sangbbang Keurom\r\n\r\n			Jejeking Cocoa\r\n\r\n			明月之家老幺\r\n\r\nGamma歌曲	DD\r\n\r\nOmega歌曲	Mini\r\n\r\n配音		金尚柏\r\n\r\n音响		STUDIO EIM\r\n\r\n标题影像	Todeffect\r\n\r\n制作		（株）NEXON Korea", 100, 0, 1, 3);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106030000, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
