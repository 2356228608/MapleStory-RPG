/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
        } else if (status === i++) {
		// 初始化
ms.npc_ChangeController(2159309, "oid=12833447", 550, 50, 1);
ms.npc_SetSpecialAction("oid=12833447", "summon", 0, 0);
ms.forceCompleteQuest(23205);
var newStatus = ms.getQuestRecord(23205);newStatus.setStatus(0);
ms.getPlayer().updateQuest(newStatus, true);
ms.forceStartQuest(23204, "");
ms.forceCompleteQuest(23204);
var newStatus = ms.getQuestRecord(23204);newStatus.setStatus(0);
ms.getPlayer().updateQuest(newStatus, true);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.teachSkill(30010166, 1, 1);
ms.teachSkill(30011167, 1, 1);
ms.teachSkill(30011168, 1, 1);
ms.teachSkill(30011169, 1, 1);
ms.teachSkill(30011170, 1, 1);
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(6000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(300);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 2159308,  "这不是#h0#吗？外游怎么样啊？不惜违抗命令出去，应该很快乐吧？你的家人都还好吧？替我跟她们问声好啊！哈哈哈哈！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice.img/DemonSlayertutorial_B/0", 100);
ms.onScriptMessage(3, 0, 1, 2159308,  "…没时间和你拌嘴，让开，#r#p2159309##k!", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159308,  "擅离职守，违抗命令…还用这种充满杀气的眼神盯着我。还想见黑魔法师？那可不行。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice.img/DemonSlayertutorial_B/1", 100);
ms.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/14", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_OneTimeAction(332, 0);
ms.fieldEffect_PlayFieldSound("demonSlayer/31111003", 100);
ms.inGameDirectionEvent_Effect( "Skill/3111.img/skill/31111003/effect", 0, 0, 0, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.npc_SetSpecialAction("oid=12833447", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(570);
} else if (status === i++) {
ms.npc_LeaveField("oid=12833447");
ms.inGameDirectionEvent_AskAnswerTime(1200);
} else if (status === i++) {
ms.npc_ChangeController(2159309, "oid=12833696", 180, 50, 0);
ms.npc_SetSpecialAction("oid=12833696", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(360);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159308,  "哦哦~这可是赤裸裸的背叛啊。你还没抛弃人类的心吗？居然为了这种小事大张旗鼓，真是无聊！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice.img/DemonSlayertutorial_B/2", 100);
ms.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/15", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(370);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(570);
} else if (status === i++) {
ms.inGameDirectionEvent_OneTimeAction(371, 0);
ms.fieldEffect_PlayFieldSound("demonSlayer/31121001", 100);
ms.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121001/effect", 0, 309, 71, 1, 0, 1, 0, 1, 0);
ms.npc_SetSpecialAction("oid=12833696", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1570);
} else if (status === i++) {
ms.npc_LeaveField("oid=12833696");
ms.inGameDirectionEvent_AskAnswerTime(870);
} else if (status === i++) {
ms.npc_ChangeController(2159309, "oid=12833728", 500, 50, 1);
ms.npc_SetSpecialAction("oid=12833728", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 2159308,  "像你这种无法领悟那位伟大大人真正意图的家伙，我实在是失望致极啊。警卫兵，出来把这个叛逆者干掉！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.effect_Voice("Voice.img/DemonSlayertutorial_B/3", 100);
ms.setInGameDirectionMode(false, true, false);
ms.playerMessage(-1, "请打倒所有卫兵。");
ms.fieldEffect_PlayFieldSound("demonSlayer/summonGuard", 100);
ms.spawnMonster(9300455, 450, 71);
ms.spawnMonster(9300455, 400, 71);
ms.spawnMonster(9300455, 350, 71);
ms.forceStartQuest(23205, "");
ms.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene4", 0, 0, 0);
ms.dispose();
	}
}
