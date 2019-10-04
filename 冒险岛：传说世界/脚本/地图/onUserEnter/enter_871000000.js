/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 871000000
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
	if (cm.getQuestStatus(64595) == 1) {
		cm.warp(871000012, 1);
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.effect_Text("#fn微软雅黑##fs24#◆ 家园世界 ◆\r\n#fn黑体##fs40#凯兰西亚", 100, 2000, 4, 0, -150, 1, 4, 0, 0, 0);
		if (randomNum(1, 3) == 1 && cm.getQuestStatus(64600) != 1) {
			cm.setPartner(1, 9400926, 80011838, 0);
			cm.setPartner(1, 9400927, 80011839, 0);
			cm.addPopupSay(9400926, 3000, "#face1#勇者大人~~~！", "");
		} else {
			cm.npc_ChangeController(9400926, "oid=9552190", 500, 300, 1);
			cm.npc_SetSpecialAction("oid=9552190", "summon", 0, 0);
			cm.npc_ChangeController(9400927, "oid=9552191", 600, 300, 1);
			cm.npc_SetSpecialAction("oid=9552191", "summon", 0, 0);
		}
		if (cm.getQuestStatus(64596) == 2 && cm.getQuestStatus(64598) != 2) {
			cm.setPartner(1, 9400928, 80011836, 0);
		}
		if (cm.getQuestStatus(64605) == 1) {
			cm.OnStartNavigation(cm.getMapId(), 0, "goKenneth", 0);
		}
		ms.dispose();
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
