
/*
 *  起源之塔36F 探险家
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var names = ["花蘑菇", "蜗牛", "漂漂猪", "绿水灵"];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var em = cm.getEventManager("Map_TowerOfOz");
	var stage = parseInt(em.getProperty("stage36_stage"));
	if (stage == 0) {
		action0(mode, type, selection, em);
	} else if (stage <= 8) {
		action1(mode, type, selection, em, stage);
	} else {
		actionEnd(mode, type, selection, em, stage);
	}
}

function action0(mode, type, selection, em) {
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		cm.sendNext("你是要前往下一层的探险家吗？这一层需要密码才能通过！按照密码攻击下面的怪物的话，就能打开这一层的门了。");
	} else if (status === 1) {
		cm.sendNext("密码并不是一成不变的，所以每次的密码一定要记好了！");
	} else if (status === 2) {
		cm.sendOk("准备好了的话，就跟我说一声吧。");
	} else if (status === 3) {
		em.setProperty("stage36_stage", 3);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function action1(mode, type, selection, em, stage) {
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		em.setProperty("stage36_curBit", 1);
		cm.sendNext("我会把密码按顺序报出来。请记住我报出的密码，然后按顺序攻击下面的怪物。");
	} else if (status === 1) {
		cm.sendOk("如果不小心攻击错误的话，就得重新来过了。");
	} else if (status === 2) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === 3) {
		cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status > 3 && status <= 3 + stage) {
		var password = parseInt(em.getProperty("stage36_password_" + (status - 3)));
		cm.fieldEffect_ScreenMsg("Map/Effect2.img/aquaris/36F_" + password);
		cm.addPopupSay(2540003, 1000, names[password - 1]);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === 3 + stage + 1) {
		cm.sendOk("你每输入一个，我都会提示你是否输入正确了。");
	} else if (status === 3 + stage + 2) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.addPopupSay(2540003, 2000, "请按顺序攻击怪物，并输入密码。你每输入一个，我都会提示你正确与否。#b为了让我跟上你的速度，请慢慢输入。");
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function actionEnd(mode, type, selection, em) {
	cm.sendOk("你已经正确输入了所有密码！我已经帮你打开了通往下一层的大门，加油吧！");
	cm.dispose();
}
