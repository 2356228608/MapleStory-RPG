
/*
 *  起源之塔49F 桃乐丝
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var mobList = [[9309020, "猿公"], [9309046, "古代蓝色水灵"], [9309047, "古代紫色水灵"], [9309050, "花蘑菇"], [9309051, "绿水灵"], [9309053, "火野猪"], [9309054, "黑鳄鱼"], [9309055, "鳄鱼"], [9309056, "青螃蟹"], [9309057, "红螃蟹"], [9309058, "乌龟"], [9309059, "蓝独角狮"], [9309060, "黄独角狮"], [9309061, "红独角狮"], [9309062, "野狼"], [9309063, "白狼"], [9309064, "沙漠蛇先生"], [9309065, "壁虎"], [9309066, "丁满"], [9309067, "秃鹫先生"], [9309068, "沙漠土拨鼠"], [9309069, "沙漠毒蝎"], [9309070, "豪猪"], [9309071, "棕熊"], [9309072, "柔道猫熊"], [9309073, "橡木甲虫"], [9309074, "金属甲虫"], [9309075, "哈维"], [9309076, "血腥哈维"], [9309077, "小蜥蜴"], [9309078, "泥人妖"], [9309082, "火独眼兽"], [9309083, "怪猫"], [9309084, "红色沙漠矮人"], [9309085, "橙色古代水灵"], [9309087, "蓝色古代水灵"], [9309088, "黄色卷毛牛"], [9309089, "紫色卷毛牛"], [9309090, "蓝色食虫水灵"], [9309091, "黄色食虫水灵"], [9309092, "古代蓝龟"], [9309093, "古代橙龟"], [9309094, "蓝色火山虫"], [9309095, "褐色火山虫"], [9309096, "巨大橙色水灵"], [9309097, "巨大紫色水灵"], [9309098, "蓝色花牛"], [9309099, "绿色花牛"], [9309104, "白刺熊"], [9309105, "褐刺熊"], [9309108, "花石头人"], [9309109, "黑花石头人"], [9309110, "古代金龟子"], [9309111, "橙色古代金龟子"], [9309114, "红色食虫花妖精"], [9309115, "蓝色食虫花妖精"], [9309118, "黄色蘑菇蝙蝠"], [9309119, "红色蘑菇蝙蝠"], [9309125, "猴子"], [9309126, "火山怪"], [9309129, "蝴蝶精"]];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	selectionLog[status] = selection;
	var em = cm.getEventManager("Map_TowerOfOz");
	var stage = parseInt(em.getProperty("stage49_stage"));
	var correct = parseInt(em.getProperty("stage49_correct"));
	if (stage == 0) { // 刷怪
		action0(mode, type, selection, em, correct);
	} else if (stage == 1) { // 回答
		action1(mode, type, selection, em, correct);
	} else { // 结束
		actionEnd(mode, type, selection, em);
	}
}

function action0(mode, type, selection, em, correct) {
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		if (correct == 0) {
			var text = "在起源之塔到处乱闯的孩子，原来是你啊。让我来确认一下你有没有向我挑战的资格。如果你能答对#r#e5个问题#k#n，我就给你挑战的机会。";
		} else if (correct == 1) {
			var text = "第二个问题！这次也要发挥出你的实力哦。";
		} else if (correct == 2) {
			var text = "第三个问题是什么呢？来看看吧！噔！";
		} else if (correct == 3) {
			var text = "第四个问题一定要深思熟虑呀。";
		} else if (correct == 4) {
			var text = "好了~接下去是第五个问题，也是最后一个问题！你也该打起精神来了。（小声嘟哝）要是这个问题也答对了，就麻烦了……";
		}
		cm.sendNext(text);
	} else if (status === 1) {
		generateMob(em);
		cm.sendOk("我在右侧创造了一个怪物的幻影。你只要根据幻象，说出怪物的名字就行。做好回答的准备之后，就重新和我说话。");
	} else if (status === 2) {
		em.setProperty("stage49_stage", 1);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function action1(mode, type, selection, em, correct) {
	var resetCount = parseInt(em.getProperty("stage49_reset"));
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		var text = "怎么样？你知道右侧怪物的名字吗？\r\n\r\n";
		if (resetCount == 0) {
			text += "#L1##b不知道……换个问题吧。（没有剩余机会了）#l\r\n";
		} else {
			text += "#L1##b不知道……换个问题吧。（剩余机会：" + resetCount + "次）#l\r\n";
		}
		text += "#L2##b嗯，我好像知道了。正确答案是……#l\r\n";
		text += "#L3##b我再想想。#l\r\n";
		text += "#L4##b喂！这种东西让我怎么猜啊！#l\r\n";
		cm.askMenu(text);
	} else if (status === 1) {
		if (selectionLog[1] == 1) {
			if (resetCount == 0) {
				cm.sendOk("没有机会了，笨蛋！好好想想吧！");
			} else {
				cm.sendOk("嗯……真是可怜，我就帮你换一个问题吧。反正你的机会也是有限的。");
				em.setProperty("stage49_stage", 0);
				em.setProperty("stage49_reset", resetCount - 1);
				clearMob(em);
			}
			cm.dispose();
		} else if (selectionLog[1] == 2) {
			cm.askText("哦吼……那么答案是什么呢？记住，就连中间的空格也不能够错哦。");
		} else if (selectionLog[1] == 4) {
			cm.sendOk("哦嚯嚯，连这种问题都回答不出来的人是没有挑战我的资格的！没点本事的话就早点回去吧！");
		} else {
			cm.dispose();
		}
	} else if (status === 2) {
		if (selectionLog[1] == 2) {
			var curMob = parseInt(em.getProperty("stage49_curMob"));
			var answer = cm.getText();
			if (answer.equals(mobList[curMob][1])) {
				if (correct == 0) {
					var text = "答对了！你有本事来到这里，这种问题应该难不倒你。";
					text += "做好回答下一个问题的准备之后，再重新找我。";
				} else if (correct == 1) {
					var text = "哇~不错嘛？你只要再答对三个问题就行。当然是在你不犯错的情况下。";
					text += "做好回答下一个问题的准备之后，再重新找我。";
				} else if (correct == 2) {
					var text = "你比我想象的厉害。没想到能答对这么多问题。这次我得挑个难一点的问题。";
					text += "做好回答下一个问题的准备之后，再重新找我。";
				} else if (correct == 3) {
					var text = "哎呀……又答对了。看来我也要认真一点了。";
					text += "做好回答下一个问题的准备之后，再重新找我。";
				} else {
					var text = "真没想到居然还有人能通过这里……哼，好吧。我知道你很聪明。希望你也具有和你知识相符的力量……";
				}
				cm.sendNext(text);
			} else {
				var eim = em.getInstance("Map_TowerOfOz");
				eim.restartEventTimer(eim.getTimeLeft() - 5 * 60 * 1000);
				cm.addPopupSay(2540000, 4000, "糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！下次回答前一定要想清楚啊！");
				cm.sendOk("答错了，你个笨蛋！不聪明的人会受到桃乐丝的惩罚！", 2540010);
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	} else if (status === 3) {
		if (selectionLog[1] == 2) {
			clearMob(em);
			em.setProperty("stage49_correct", correct + 1);
			var resetCount = parseInt(em.getProperty("stage49_reset"));
			em.setProperty("stage49_reset", resetCount + 1);
			if (correct == 4) {
				var map = em.getMapFactoryMap(cm.getMapId());
				map.hideNpc(2540010);
				em.getMapFactoryMap(cm.getMapId()).startSimpleMapEffect("哇！真是太棒了！终于见到桃乐丝了。请到下一层将桃乐丝消灭吧。", 5120061);
				cm.fieldEffect_ScreenMsg("UI/UIWindowPL.cmg/HiddenCatch/StageImg/clear");
				em.setProperty("stage49", "clear");
				em.setProperty("stage49_stage", 2);
			} else {
				em.setProperty("stage49_stage", 0);
			}
			cm.dispose();
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}

function actionEnd(mode, type, selection, em) {
	cm.sendOk("我已经有了挑战我的资格。我在楼上等你。");
	cm.dispose();
}

function generateMob(em) {
	var eim = em.getInstance("Map_TowerOfOz");
	var map = em.getMapFactoryMap(cm.getMapId());
	curMob = randomNum(0, mobList.length - 1);
	em.setProperty("stage49_curMob", curMob);
	cm.playerMessage(5, mobList[curMob][0] + " - " + mobList[curMob][1]);
	var mob = em.getMonster(mobList[curMob][0]);
	mob.getStats().setInvincible(true);
	mob.getStats().setChange(true);
	eim.registerMonster(mob);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(600, 185));
}

function clearMob(em) {
	var eim = em.getInstance("Map_TowerOfOz");
	cm.killAllMob();
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
