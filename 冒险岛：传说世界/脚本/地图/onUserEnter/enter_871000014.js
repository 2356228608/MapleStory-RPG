/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 871000014
地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// [2019/9/28 8:28:32] 切换地图: 从 cm.warp(871000000) -> 至: cm.warp(871000014)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.npc_ChangeController(9400928, "oid=11112859", -200, 250, 0);
		cm.npc_SetSpecialAction("oid=11112859", "summon", 0, 0);
		cm.npc_ChangeController(9400929, "oid=11112860", -300, 250, 0);
		cm.npc_SetSpecialAction("oid=11112860", "summon", 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.sendNewEffects(17, 0, 1000, 2000, -150, 80);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs20#建筑家凯尼斯家", 50, 2000, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.sendNewEffects(13, 3000, 350, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b哇……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNewEffects(12, 0, 250, 300, 0, 0);
	} else if (status === i++) {
		cm.sendNewEffects(13, 3000, -350, 0, 0, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 180);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.onScriptMessage(3, 0, 1, 0, "#b太厉害了！这是什么？扎昆……桌子？！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.npc_SetForceMove("oid=11112859", 1, 20, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#哇！你怎么知道的？！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b这一看就是扎昆的手啊？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11112860", 1, 80, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这样啊……我们没见过扎昆，所以不知道呢。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#据说这是凯尼斯在当冒险家的时候，抓住扎昆后得到的东西。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#没错，我听那个故事大概有50遍了吧。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b抓住扎昆做成了桌子？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#虽然我也不是亲眼所见，但是据说如果消灭冒险岛世界的BOSS怪物，就能得到特殊的家具。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.npc_ChangeController(9400931, "oid=11112905", 270, 260, 1);
		cm.npc_SetSpecialAction("oid=11112905", "summon", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#至今我听说过的，有#t2672045:#、#t2672046:#、#t2672013:#？还有吗，艾米？ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#好像还有#t2672052:#！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11112905", -1, 170, 100);
		cm.sendNewEffects(13, 3000, 100, 0, 0, 0);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#除此之外好像还有很多。只不过我们没见过罢了，如果是你，应该能得到很多吧。 ", 256, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.onScriptMessage(3, 0, 1, 0, "#b凯尼斯！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#你来的还真快啊，呵呵 ", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b那个……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face0#你觉得之前的家有点小吧？那个房屋其实也是我建的。那是我学习建筑后建的第二个房屋，第一个是这间房屋。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#虽然我很喜欢那个房屋，但是我知道它又小又旧，住起来有点不方便。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#请稍等一下。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=11112905", "special", 3000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face0#来，看看，这个怎么样？", 256, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHome/1", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b把这个房屋给我……？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#太帅气了！看看这蘑菇屋顶的曲线！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#呵呵，你啊，如果能答应我几件事，我就把这个房屋的图纸给你，怎么样？ ", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b什么事……？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#没多难的。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#第一，这房屋完全是为了你而创造的空间，所以它是给你的。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b当然了！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#第二，在辛苦的狩猎和战斗后，回到家好好休息，家是恢复活力的空间。 ", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b这也是当然的！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#最后，你要和我们凯兰西亚的居民们一直好好相处下去。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b当然，这都是理所当然的事情，不用这么强调也行啊？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#呵呵，忙起来了之后，很容易就会忘记理所当然的事情哦。\r\n#b#L0#我答应你，凯尼斯。#l\r\n#L1#我不能答应你，凯尼斯。#l", 0, 6, 37, 0, 1, 9400922); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 0) {
			cm.onScriptMessage(3, 0, 1, 0, "#face0#谢谢你能答应我，那以后就好好相处吧！", 256, 0, 37, 0, 1, 9400922); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 1, 0, "#face0#呵呵，没想到你会这么回答，不过我相信你能做好的。你身边的这些好友也都会帮助你的……", 256, 0, 37, 0, 1, 9400922); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.updateInfoQuest(64605, "chk=1;give=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#[#i2630598:##t2630598#]\r\n来，拿着吧！这就是你的建筑图纸。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.gainItem(2630598, 1);
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#双击背包消耗栏的图纸，就能激活你的建筑列表。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(64605, "chk=1;dir=1;give=1");
		cm.fieldEffect_ProcessOnOffLayer("1", "Effect/DirectionWz2.img/effect/myHomeTuto/5", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face0#前往我的小屋，点击我的小屋菜单的#i3801390#按键，选择射手村2层房屋后，选择你喜欢的屋顶、外墙和窗户，然后就能进行建造了。", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#如果有什么问题，你可以随时来找我。等你建成了美丽的新家，记得邀请我去参观啊，哈哈哈", 257, 0, 37, 0, 1, 9400922); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b谢谢你，凯尼斯！ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face2#要是家变大了，就能有更多可以装饰的地方了吧？真是让人激动呢！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#什么啊，真是羡慕呢~！别傻站着了，赶快去我的小屋，开始建造吧。我要第一个参观你的新家！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64605);
		cm.updateInfoQuest(500767, "1=1;2=1;3=1;4=1;entrance=0;7=1;managerXpos=100;managerYpos=100");
		cm.sendNewEffects(19, 0, 0, 0, 0, 0);
	} else if (status === i++) {
		cm.updateInfoQuest(18418, "B=61306");
		cm.setInGameDirectionMode(false, true, false);
		cm.npc_LeaveField("oid=11112859");
		cm.npc_LeaveField("oid=11112860");
		cm.npc_LeaveField("oid=11112905");
		// [2019/9/28 8:29:23] 即将切换地图: cm.warp(871000014) -> cm.warp(871000001)
		cm.warp(871000001, 0);
		cm.dispose();
	}
}
