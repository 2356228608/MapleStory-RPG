/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = Math.round((ms.getMapId() - 993001000) / 10);
	var data = getData(ms, 18838 + level, ["isClear", "br", "cs", "first"]);
	var first = parseInt(data[3][1]);
	if (first != 0) {
		startGame(level);
	} else if (level == 1) {
		action1(mode, type, selection, level, data);
	} else if (level == 2) {
		action2(mode, type, selection, level, data);
	} else if (level == 3) {
		action3(mode, type, selection, level, data);
	} else if (level == 4) {
		action4(mode, type, selection, level, data);
	} else if (level == 5) {
		action5(mode, type, selection, level, data);
	} else if (level == 6) {
		action6(mode, type, selection, level, data);
	} else {
		startGame(level);
	}
}

function action1(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("这是你在本性森林的第一次挑战呢！幸会！\r\n\r\n我是#b比光还要快的树懒#k，#g闪电箭#k！", 9070203);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这里类似于进入本性森林的走廊，你会学会有关#g冲锋#k的使用方法。", 9070203);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你问要怎么冲锋吗？#g连续朝你想要奔跑的方向按下两次方向键#k就可以了。", 9070203);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这里只要跑到右侧尽头就可以了，希望你能够尽情奔跑！当然你是赶不上我的速度的……呵呵。", 9070203);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action2(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("现在看上去好像已经熟悉冲锋了嘛？我是世界上跳得最高的熊，我叫#g美美熊#k，另外不要问我和那个#b有名的熊#k的关系，那是个人隐私。", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你是跟#g闪电#k学的冲锋？那冲锋过程中的跳跃也试过了吗？", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("虽然也许你已经试过了，不过在冲锋过程中跳跃可以跳得更高更远哦。", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("冲锋只要朝着想去的方向#g连续按两次方向键就好，在这个过程中进行跳跃#k，就能实现强有力的跳跃！简单吧？", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那你就朝右侧奔过去，试着轻松越过三个障碍物吧！加油！", 9070201);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action3(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("我已经看到你用冲锋跳身轻如燕地冲出了之前的地方，很不错嘛？", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("在这里得试着加强技能的应用进行跳跃，我会从现在开始说明，听好了。", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#b在跳跃过程中#g持续按住#k向上的方向键就可以跳得更高，就算普通的冲锋跳没法跳过的地方也能够跳过哦！", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("另外你也可以在按住向上的方向键的状态下跳跃，这个也很简单吧？", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那你就往右奔跑，越过三个高高的障碍物吧。", 9070201);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action4(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("嘿嘿，传闻我都已经听说了，听说你在本性森林通过修炼学习了各种技能啊？", 9070202);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("要不要告诉你个好玩的事情？这里所发生的事情有可能会违背你之前所知道的物理定律……", 9070202);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你所在的地方就是这样的地方，嘿嘿。在这里，空中所施展的力量更容易传递，这也算是这里特有的科学吧。", 9070202);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("换句话说，就算在空中不费什么力气，也能够像飞行一般轻松移动。", 9070202);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("来，你能看到下面的悬崖吧？不要害怕，先跳过去，在空中按下#b左右方向键#k，就可以轻松移动身体了。", 9070202);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哦……还有……我们就不要在意那些不知道为什么会掉下来的脏东西了……你一定能顺利避开的……加油！嘿嘿！", 9070202);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action5(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("你已经到这了啊？真厉害，真厉害~", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我教过你怎么跳得高了吧？和之前的方法差不太多。", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#g在冲锋跳过程中按住向上的方向键#k，就可以碰到上方的踏板。", 9070201);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("连续往上跳试试，既然你有天分，而且之前也已经试过这种跳跃了，应该可以轻松做到吧？", 9070201);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function action6(mode, type, selection, level, data) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.sendNextNoESC_Bottom("你果然如传闻一般是#g变成人的山羊#k啊，居然都已经到这里了。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("就算用人类的身体，你也能够到达神操作的境地的。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("从现在开始就是要灵活运用迄今为止所学过的基本动作的真正的本性森林了。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("既然你是这么传奇的山羊，应该能做好吧。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("最好是能用顶级操作，在所有森林都拿下三颗星。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这里是在第四个森林所经历过的，额……脏物，那种脏物会有点更麻烦……是涂上去的，恩恩。", 9070200);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("希望你不要弄脏自己，日后我要是在森林里遇到了动物，也会提出点建议的，祝你好运。", 9070200);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(ms, 18838 + level, data);
		startGame(level);
	} else {
		ms.dispose();
	}
}

function startGame(level) {
	ms.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start");
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	if (level - 1 < startInfo.length) {
		ms.getWeatherEffectNotice(startInfo[level - 1][1], startInfo[level - 1][0], 5000, 1);
		ms.addPopupSay(startInfo[level - 1][2], 2000, startInfo[level - 1][3]);
	}

	var em = ms.getEventManager("小游戏_控制之神");
	var eim = em.getInstance("小游戏_控制之神");
	eim.startEventTimer(10 * 60 * 1000);
	ms.dispose();
}

var startInfo = [[215, "用冲锋到终点！", 9070203, "冲锋就是朝着想去的方向连续！按两次！方向键……呵呵。"],
	[214, "在冲锋过程中跳跃，可以跳得又高又远！", 9070201, "前面的障碍物可以用冲锋中跳跃轻松越过！"],
	[214, "在跳跃过程中按照向上的方向键，就可以跳得更高！", 9070201, "在冲锋过程中先按下向上的方向键再跳会更简单！试着找到轻松的方法"],
	[213, "跳跃过程中按下左右方向键，可以控制在空中的姿势，嘿嘿。", 9070202, "跳跃过程中按下方向键，可以朝着想要的方向进行空中操控。"],
	[214, "试着在保持冲锋的状态下连续跳跃。", 9070201, "正如我之前所说的，在冲锋过程中可以先按下向上的方向键再跳"],
	[212, "在空中按下左右方向键，避开脏物。", 9070200, "恩……就算碰到了脏物，也不代表就会死……"]
];

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}
