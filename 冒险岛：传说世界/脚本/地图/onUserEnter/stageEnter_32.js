/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "32";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";
var pos = [[-1800, -200], [-1000, -200], [-200, -200]];

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("Map_TowerOfOz");
	var eim = em.getInstance("Map_TowerOfOz");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
			return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "消灭区域内所有怪物，移动至下一层吧。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		//ms.warp(992019000, 1);
		// 刷怪
		var map = em.getMapFactoryMap(ms.getMapId());
		for (var k = 0; k < pos.length; k++) {
			for (var i = 0; i < 15; i++) {
				var mob = em.getMonster(9309037);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(pos[k][0] + randomNum(-100, 100), pos[k][1]));
			}
		}
		ms.dispose();
		return;
	}

	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#这个地方跟刚刚离开的31楼区域感觉很像吧？\r\n\r\n但是这个地方里除了最下方踏板外，上方的踏板是无法站上去的。\r\n\r\n踩过棘草消灭上方全部的蓝色古代绿水灵吧！", 30000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.addPopupSay(2540000, 6000, "消灭区域内所有怪物，移动至下一层吧。");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		//ms.warp(992019000, 1);
		// 刷怪
		var map = em.getMapFactoryMap(ms.getMapId());
		for (var k = 0; k < pos.length; k++) {
			for (var i = 0; i < 15; i++) {
				var mob = em.getMonster(9309037);
				eim.registerMonster(mob);
				map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(pos[k][0] + randomNum(-100, 100), pos[k][1]));
			}
		}
	} else {
		ms.dispose();
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
