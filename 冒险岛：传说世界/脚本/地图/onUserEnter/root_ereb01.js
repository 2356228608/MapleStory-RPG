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
		// 召唤南哈特
		ms.npc_ChangeController(1064026, 150, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064026, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC("你把世界树带来了吗？", 1064026);
	} else if (status === i++) {
		ms.sendNextSNoESC("现在正在和冒险骑士团一起过来呢。啊，他们来了。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 300, 400, 200);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 召唤阿丽莎，而且多走一段时间，走到南哈特右边
		ms.npc_ChangeController(1064024, 300, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1064024, "summon");
		ms.npc_SetForceMove(1064024, 0, 0, 100);
		ms.inGameDirectionEvent_AskAnswerTime(500); // 不加这类方法无法进入到下一阶段
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("我正在等你，世界树！", 1064026);
	} else if (status === i++) {
		ms.sendNextNoESC("欢迎你。我一直在等待见到你的这一天。", 1101000);
	} else if (status === i++) {
		ms.sendNextNoESC("这里就是圣地啊……真漂亮。温暖又安静，真好。终于可以放心睡觉了", 1064024);
	} else if (status === i++) {
		ms.sendNextNoESC("——#b#h #！真的非常感谢。没有你的话，我就无法从鲁塔比斯逃出来。", 1064024);
	} else if (status === i++) {
		ms.sendNextSNoESC("没什么。你好好睡吧。以后我们再见。");
	} else if (status === i++) {
		ms.sendNextNoESC("（点头点头）", 1064024);
	} else if (status === i++) {
		// 特效，阿丽莎消失
        //ms.effect_Direction("Effect/Direction11.img/meet/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// NPC离场
		ms.npc_LeaveField(1064024);
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.sendNextNoESC("希望你能在女皇和神兽的庇护下，做个幸福的梦……", 1064026);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// 传送回真正的圣地？
		ms.warp(130000000, 0);
		// NPC离场
		ms.npc_LeaveField(1064026);
		// 修改30013任务状态
		ms.updateInfoQuest(30013,"restart=1");
		ms.forceCompleteQuest(30013);
	} else {
		ms.dispose();
	}
}
