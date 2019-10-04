/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 871100000
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
	} else {
		if (cm.getQuestStatus(64606) == 2) {
			// 显示管家
			// 1=1;2=1;3=1;type=1;entrance=0;4=1;5=1;6=1;7=1;managerXpos=100;managerYpos=100
			var map = cm.readQuestInfo(500767);
			var x = parseInt(map.getOrDefault("managerXpos", "100"));
			var y = parseInt(map.getOrDefault("managerYpos", "100"));
			var type = parseInt(map.getOrDefault("type", "1"));
			var fh = 2; // type = 1,4
			if (type == 2 || type == 6) {
				fh = 4;
			} else if (type == 3) {
				fh = 3;
			}
			cm.npc_ChangeController(9400930, "manager", x, y, fh, 50, 150, 1, false, false);
			cm.npc_SetSpecialAction("manager", "summon", 0, 0);
			// 改变两人位置，任务用
			if (cm.getQuestStatus(64610) != 2) {
				cm.hideNpc(9400920);
				cm.hideNpc(9400921);
				cm.npc_ChangeController(9400920, "oid=15216555", 200, 76, 1, true, false);
				cm.npc_ChangeController(9400921, "oid=15216556", -200, 106, 0, true, false);
			}
			// 对话
			// 	cm.updateInfoQuest(500773, "askR=0;manager=0;managerHide=0;s1=30;talkDate=19/09/28;s2=14;s3=3;bonusTalk=0;s4=2;s5=10;resetDate=19/09/28;affDown=19/09/28");
			var map = cm.readQuestInfo(500773);
			var manager = parseInt(map.getOrDefault("manager", "0"));
			if (manager == 0) {
				cm.onScriptMessage(3, 0, 0, 0, "#face0#你去哪里了啊！我一个人可无聊了呢！", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
			} else {
				cm.onScriptMessage(3, 0, 0, 0, "#face1#你喜欢外出吗？看来还是家里最棒了吧？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			}
		}
		ms.dispose();
	}
}

function getCurDate() {
	var date = new Date();
	var dateStr = (date.getYear() - 100) + "/" + (date.getMonth() + 1) + "/" + date.getDay();
	return dateStr;
}
