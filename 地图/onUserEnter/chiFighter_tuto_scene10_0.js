/*  This source is made by BMS Team
 *  脚本功能：[新手任务]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;
var selectionLog = new Array();

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
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_MoveAction(0);
ms.npc_ChangeController(9330205, "oid=7053954", 69, 3, 0);
ms.npc_SetSpecialAction("oid=7053954", "summon", 0, 0);
ms.npc_ChangeController(9330202, "oid=7053955", 389, 3, 1);
ms.npc_SetSpecialAction("oid=7053955", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/0", 2000, 550, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/1", 2000, 250, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/2", 2000, 250, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/3", 2000, 550, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/4", 2000, 550, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/9", 2000, 550, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/5", 2000, 250, -120, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/10", 2000, 550, -150, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053955", "attack0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/DaddysSkill0/0", 1000, 530, 0, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("chivalrousFighter/arkAttack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(240);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 250, 0, 0, undefined, 0, 0, 0, 0);
ms.npc_SetSpecialAction("oid=7053954", "hit1", 0, 1);
ms.npc_SetSpecialAction("oid=7053955", "hit0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 235, -10, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 259, -20, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "hit1", 0, 1);
ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack1", 100);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 235, -10, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 259, -20, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "attack1", 0, 1);
ms.npc_SetSpecialAction("oid=7053955", "attack0", 0, 1);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/DaddysSkill0/1", 1000, 550, 0, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("chivalrousFighter/arkAttack1", 100);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossSkill10-1/3", 320, 250, 30, 0, undefined, 0, 0, 0, 0);
ms.npc_SetSpecialAction("oid=7053955", "hit0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(290);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 530, -30, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack1", 100);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 510, -20, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 570, 0, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(50);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 540, 15, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(120);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "move", 0, 1);
ms.npc_SetForceMove("oid=7053954",1,40,100);
ms.inGameDirectionEvent_AskAnswerTime(800);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "attack1", 0, 1);
ms.npc_SetSpecialAction("oid=7053955", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=7053955");
ms.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/DaddysSkill0/2", 2000, 380, 0, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossSkill10-1/0", 3000, 510, 0, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillBlast", 100);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 290, -50, 0, undefined, 0, 0, 0, 0);
ms.npc_SetSpecialAction("oid=7053954", "hit1", 0, 1);
ms.npc_ChangeController(9330202, "oid=7054124", 350, 3, 1);
ms.npc_SetSpecialAction("oid=7054124", "summon", 0, 0);
ms.npc_SetSpecialAction("oid=7054124", "hit0", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossHit/0", 600, 550, 0, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330205,  "比想象中更强　!!!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330202,  "真的是皇帝的话，不会使用出这种邪恶的力量，你这假货!!!!", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/6", 2000, 0, -100, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/7", 2000, 450, -130, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg10/8", 2000, 200, -150, 0, undefined, 0, 0, 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "move", 0, 1);
ms.npc_SetForceMove("oid=7053954",-1,10,100);
ms.inGameDirectionEvent_AskAnswerTime(100);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 9330202,  "不行!!!!!!!!!!!", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7053954", "attack1", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/BossSkill10-1/4", 1600, 250, 30, 0, undefined, 0, 0, 0, 0);
ms.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
ms.inGameDirectionEvent_AskAnswerTime(180);
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=7054124", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=7054124");
ms.inGameDirectionEvent_AskAnswerTime(50);
} else if (status === i++) {
ms.setInGameDirectionMode(false, false, false);
ms.npc_LeaveField("oid=7053954");
ms.dispose();
ms.warp(743020300,0);
	} else {
		ms.dispose();
	}
}
