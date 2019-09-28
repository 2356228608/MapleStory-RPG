/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

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
// [2019/9/24 1:07:43] 之前所在地图: ms.warp(866129000) - 当前进入地图: ms.warp(866130000)
ms.npc_ChangeController(9390304, "oid=114811", -888, -464, 0);
ms.npc_ChangeController(9390305, "oid=114812", -936, -463, 0);
ms.npc_ChangeController(9390307, "oid=114813", -780, -464, 0);
ms.npc_ChangeController(9390308, "oid=114814", -837, -466, 0);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.setStandAloneMode(true);
ms.npc_ChangeController(9390383, "oid=20213511", -622, -529, 0);
ms.npc_SetSpecialAction("oid=20213511", "summon", 0, 0);
ms.npc_ChangeController(9390382, "oid=20213512", -652, -529, 0);
ms.npc_SetSpecialAction("oid=20213512", "summon", 0, 0);
ms.npc_ChangeController(9390306, "oid=20213513", -661, -526, 0);
ms.npc_SetSpecialAction("oid=20213513", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 9390383,  "现在该怎么办?\r\n不能一直这么下去啊。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "现在再怎么消灭下边的怪物,或许还会像刚才一样,出现什么其他怪物呢,老大。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "我觉得,我觉得,堵住进入村庄的门不行吗?", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "但是想要关闭门的话,需得爬到那个岗楼上转动控制杆才行。\r\n不过下边的怪物太多,因此想要靠近那里则非常危险。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "我也不知道该怎么过去,能爬到岗楼的梯子也被毁了,所以现在进退两难。", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "这个时候要是能飞上天就好了……", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390305,  "布兰,在这里捣乱很危险,会掉下去的!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390306,  "没关系,这棵树我每天都在爬。呃…… 啊……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/21", 800, -470, -50, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/23", 800, -320, -50, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg1/5", 800, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(900);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20213513", "falling", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.npc_LeaveField("oid=20213513");
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/ChapterA/18", 2600, -189, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_PushMoveInfo(0, 1000, -604, -250);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(400);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(400);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_PlayBGM("BgmBT.img/FightingPinkBeenHawk", 0, 0);
ms.npc_ChangeController(9390306, "oid=20213689", -690, -526, 0);
ms.npc_SetSpecialAction("oid=20213689", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.npc_ChangeController(9390384, "oid=20213690", -330, -529, 1);
ms.npc_SetSpecialAction("oid=20213690", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "哇!伊卡来啦!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "哼,在这里干什么呢?你们这些笨蛋。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "你来啦,姐姐! \r\n 我正等着你呢。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/22", 800, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "嘿嘿?拉伊的态度变了哦。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "拉伊,波波。阿尔所说的那个孩子在哪里?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "就在前边啊,姐姐。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20213690", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "(啊……好吓人的眼光……)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "那么,在哪里呢?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "被,被否定啦!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390382,  "我觉得,我觉得,他就是阿尔所说的小孩。\r\n刚才还和波波结下守护契约一起战斗呢,应该挺厉害的。嘿嘿嘿。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "什么啊?已经签订契约啦?\r\n拉伊你也是吗?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "呃!那,那个姐姐啊……看那样,还蛮勇敢的……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "真烦人!一号大笨蛋! \r\n 我们寻找我们潜在的主人都已经100年了呢! \r\n 结果你居然和那种小鬼签订契约?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "美丽的小姐。不要再教训拉伊和波波了。虽然不知道是什么原因,不过要是因为我的话,我替他们道歉好了。\r\n 当务之急是先拯救我们的村落才是。\r\n 求你帮帮我们吧。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "看,你看,姐姐! \r\n 这就是不仅心灵美,而且又敏锐的最强的老大。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "真烦人!!! \r\n 总之,现在当务之急的是像那个孩子说的那样,先救这里的人们再说。\r\n 拉伊,那么该做什么呢?", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "姐姐要是和老大签订契约并提供力量的话……\r\n就可以飞到那岗楼上,继而就可以关闭进入村庄的门。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=20213690", "attack1", 0, 1);
ms.fieldEffect_PlayFieldSound("ShamanBTTuto/Eka1", 100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390383,  "#b(啊……这次又打拉伊的主意呢……)#k", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction14.img/effect/ShamanBT/balloonMsg/22", 800, -80, -150, 1, 0, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "叫#b#h0##k没错吧？\r\n反正,那些二货们已经签订了契约,而且又没什么时间,那我就和你签契约好了。\r\n不过你可别误会,这并不意味着我已经完全接受你了？\r\n方法你都已经知道了吧？", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9390384,  "看来得从这里飞走,或者使用技能飞走了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.updateInfoQuest(59021, "fly=0");
ms.npc_LeaveField("oid=20213511");
ms.npc_LeaveField("oid=20213512");
ms.npc_LeaveField("oid=20213689");
ms.npc_LeaveField("oid=20213690");
ms.setInGameDirectionMode(false, true, false);
ms.setStandAloneMode(false);
ms.dispose();
ms.warp(866131000);

	} else {
		ms.dispose();
	}
}
