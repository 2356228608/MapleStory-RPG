/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 特效，瞬移
        ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 0, 0);
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextSNoESC("这是什么地方……？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		// 镜头向右移动
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, 400, 400);		
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC("愚蠢的人！为什么要反抗#r\"那个人\"#k的意志！", 1064017);
	} else if (status === i++) {
		ms.sendNextSNoESC("你，你是谁？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 特效，贝伦出现
		ms.inGameDirectionEvent_Effect("Effect/Direction11.img/bellum/appearance", 0, 600, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1750);
	} else if (status === i++) {
		ms.npc_ChangeController(1064017, 900, 100, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064017, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 1000, 0, -110, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.sendNextNoESC("我是侍奉那位#r\"伟大的人\"#k的封印守护者#b贝伦#k。愚蠢的人，你为什么要到这里来，破坏#r\"那个人\"#k的心情？", 1064017);
	} else if (status === i++) {
		ms.sendNextSNoESC("封印守护者？将世界树封印起来的人是你吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("封印是#r\"那个人\"#k设下的。我只是按照#r\"那个人\"#k的命令，在这里守护着封印。", 1064017);
	} else if (status === i++) {
		ms.sendNextSNoESC("#r\"那个人\"#k是指一只眼睛戴着眼罩的那个魔族吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("闭嘴！那个人可不是你能随便挂在嘴上的！在那位#r\"伟大的人\"#k的力量面前，你就像是一粒渺小的灰尘。总有一天，你也会跪在#r\"那个人\"#k的面前！", 1064017);
	} else if (status === i++) {
		ms.sendNextSNoESC("我不想和他战斗。和他一样都是魔族的恶魔猎手现在也成了我们的同伴。所以你们也应该和我们……");
	} else if (status === i++) {
		ms.sendNextNoESC("肮脏的背叛者竟然敢怂恿我们背叛#r\"那个人\"#k，看来你是活得不耐烦了！", 1064017);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, -100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, 150, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, -100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, 200, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，落柱子
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/stone/0", 0, -100, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		ms.sendNextSNoESC("看来光说话行不通。那就只能打败你，然后再获取情报了！");
	} else if (status === i++) {
		ms.sendNextNoESC("就凭你也想打败我？那就试试看吧！", 1064017);
	} else if (status === i++) {
		// 特效，喷火球
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，喷火球
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, -50, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，喷火球
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, 50, 0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，喷火球
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, -20, -20);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，喷火球
        ms.inGameDirectionEvent_Effect("Effect/Direction11.img/effect/skill/fire/0", 0, 20, -20);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 特效，表情，痛苦
        ms.effect_Direction("Effect/Direction11.img/rootabyssQuest/Scene1");
		ms.sendNextSNoESC("拦……");
	} else if (status === i++) {
		ms.sendNextNoESC("这么点程度就不行了？现在你知道自己有多无能了吧？", 1064017);
	} else if (status === i++) {
		ms.sendNextNoESC("除了我之外，这里还有三个封印守护者。要想解开世界树的封印，必须把我们全部打倒才行。但是以你的力量，估计连一个都无法打倒。", 1064017);
	} else if (status === i++) {
		ms.sendNextNoESC("现在你知道你自己是多么可悲的存在了！？这次暂且饶过你这卑贱的生命，别再踏入此处半步，我的仁慈是有限度的。", 1064017);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 特效，传送
		ms.inGameDirectionEvent_SetHideEffect(1);
        ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾		
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(910700200, 0);
		ms.npc_LeaveField(1064017);
		ms.dispose();
	} else {
		ms.dispose();
	}
}