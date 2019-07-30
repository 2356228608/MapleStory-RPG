/* 鲁塔比斯 被封印的世界树
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextSNoESC("为了解开你的封印，必须先了解入侵者的身份。");
	} else if (status === i++) {
		qm.sendNextNoESC("但是他们已经全部走掉了。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？");
	} else if (status === i++) {
		// 特效，光圈
        qm.effect_Direction("Effect/Direction11.img/meet/Scene1");
		qm.sendNextNoESC("哇，你的身体发出了白光！", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("到底是怎么回事？嗯，嗯？身，身体被吸进去了！");
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 隐藏主角
		qm.inGameDirectionEvent_SetHideEffect(1);
		// 特效，瞬移
        qm.effect_Direction("Effect/Direction11.img/meet/Scene1");
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.sendNextNoESC("#k #！", 1064001);
	} else if (status === i++) {
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.warp(910700300, 0);
		qm.inGameDirectionEvent_SetHideEffect(0);
		// 收尾		
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 洞穴里 910700300
function start(mode, type, selection) {
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
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_SetHideEffect(0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextSNoESC("这是什么地方……？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status == i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status == i++) {
		// 镜头向右移动
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 10);		
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.sendNextNoESC("愚蠢的人！为什么要反抗#r\"那个人\"#k的意志！", 1064017);
	} else if (status === i++) {
		qm.sendNextSNoESC("你，你是谁？");
	} else if (status === i++) {
		// 特效，贝伦出现
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(8000);
	} else if (status === i++) {
		qm.sendNextNoESC("我是侍奉那位#r\"伟大的人\"#k的封印守护者#b贝伦#k。愚蠢的人，你为什么要到这里来，破坏#r\"那个人\"#k的心情？", 1064017);
	} else if (status === i++) {
		qm.sendNextSNoESC("封印守护者？将世界树封印起来的人是你吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("封印是#r\"那个人\"#k设下的。我只是按照#r\"那个人\"#k的命令，在这里守护着封印。", 1064017);
	} else if (status === i++) {
		qm.sendNextSNoESC("#r\"那个人\"#k是指一只眼睛戴着眼罩的那个魔族吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("闭嘴！那个人可不是你能随便挂在嘴上的！在那位#r\"伟大的人\"#k的力量面前，你就像是一粒渺小的灰尘。总有一天，你也会跪在#r\"那个人\"#k的面前！", 1064017);
	} else if (status === i++) {
		qm.sendNextSNoESC("我不想和他战斗。和他一样都是魔族的恶魔猎手现在也成了我们的同伴。所以你们也应该和我们……");
	} else if (status === i++) {
		qm.sendNextNoESC("肮脏的背叛者竟然敢怂恿我们背叛#r\"那个人\"#k，看来你是活得不耐烦了！", 1064017);
	} else if (status === i++) {
		// 特效，落柱子
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(8000);
	} else if (status === i++) {
		qm.sendNextSNoESC("看来光说话行不通。那就只能打败你，然后再获取情报了！");
	} else if (status === i++) {
		qm.sendNextNoESC("就凭你也想打败我？那就试试看吧！", 1064017);
	} else if (status === i++) {
		// 特效，喷火球
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(8000);
	} else if (status === i++) {
		// 动作，坐下来
		// 特效，表情，痛苦
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		qm.sendNextSNoESC("拦……");
	} else if (status === i++) {
		qm.sendNextNoESC("这么点程度就不行了？现在你知道自己有多无能了吧？", 1064017);
	} else if (status === i++) {
		qm.sendNextNoESC("除了我之外，这里还有三个封印守护者。要想解开世界树的封印，必须把我们全部打倒才行。但是以你的力量，估计连一个都无法打倒。", 1064017);
	} else if (status === i++) {
		qm.sendNextNoESC("现在你知道你自己是多么可悲的存在了！？这次暂且饶过你这卑贱的生命，别再踏入此处半步，我的仁慈是有限度的。", 1064017);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 特效，传送
        ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		qm.inGameDirectionEvent_SetHideEffect(1);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾		
		qm.warp(910700200, 0);
		// 设置任务完成状态
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
