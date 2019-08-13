/* 列娜海峡
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

		ms.npc_ChangeController(1514000, -353, 125, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1514000, "summon");

		ms.npc_ChangeController(1514001, -183, 125, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1514001, "summon");
		ms.npc_ChangeController(2520020, -93, 125, 2); //D5 F8 86 01
		ms.npc_SetSpecialAction(2520020, "summon");
		ms.npc_ChangeController(2159437, -3, 125, 3); //D5 F8 86 01
		ms.npc_SetSpecialAction(2159437, "summon");

		ms.spawnNpcForPlayer(1514008, -720, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514008, -800, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514008, -880, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514008, -960, 125); //D5 F8 86 01

		ms.spawnNpcForPlayer(1514007, -1040, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514007, -1120, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514007, -1200, 125); //D5 F8 86 01
		ms.spawnNpcForPlayer(1514007, -1280, 125); //D5 F8 86 01

		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC("提督大人，捣乱者越来越靠近了。", 1514001);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("……", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("提督大人，你得快点做决定了。", 1514001);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("各位，你们有没有见过生命即将消逝那一瞬间的情景？", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("呃……？", 1514001);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我是见过无数遍了。我曾经见过许多战友在我的臂弯里死去。", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("在濒死的瞬间，人类和动物是一样的。在断气之前，他们的身体簌簌发抖，望着映入眼中的最后景象，仿佛要抓住最后一丝生命的希望。", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("可是最终，那恳切的眼神会逐渐黯去，曾经温曦的身体也会变得冰冷。讽刺的是，在临终的那一瞬间，却带有某种崇高的美感，即使在那之后，只剩下沉寂。", 1514000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("……看来是时候离开这里了。", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我们已经向敌人泄露了很多信息了。不能再让敌人打探到任何重要信息。航海士，我给你10分钟。你去把证物全部销毁，然后离开这里。听明白了吗？", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("是，提督大人！", 1514001);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我们已经获取了足够的资源。你去给那帮家伙留个深刻印象吧。", 1514000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("就交给我去办吧。那帮家伙会迎来#r盖奥勒克#k的。#r盖奥勒克#k能毀坏的东西可不只有冰川。", 1514000);
	} else if (status === i++) {
		ms.hideNpc(1514007);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.hideNpc(1514008);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.npc_LeaveField(1514001);
		ms.inGameDirectionEvent_AskAnswerTime(250);
	} else if (status === i++) {
		ms.npc_LeaveField(2520020);
		ms.inGameDirectionEvent_AskAnswerTime(250);
	} else if (status === i++) {
		ms.npc_LeaveField(2159437);
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("……一帮蠢货。他们再怎么顽抗也是没用的。他们的末日就要到了。", 1514000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 300, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(141050000, 0);
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
