/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 871000100
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
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/construction", 100);
		if (cm.getQuestStatus(64606) == 2) {
			cm.addPopupSay(9400921, 5000, "#face0# 新的家是什么样子的呢？只要一想如何装扮新的家，1分钟很快就过去了呢！", "");
			ms.dispose();
		} else {
			cm.updateInfoQuest(64606, "item=0;chk=1");
			cm.onScriptMessage(3, 0, 0, 0, "#face3#啊！房屋不见了！？ ", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 0, 0, "#face1#冷静点，艾米。新的房屋正在建呢，不要担心。 ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b新的房屋……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face3#咻，真是吓我一跳！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1##h0#，建新的房屋差不多要花1分钟。你可以在这里等一会儿，也可以去广场或者冒险岛世界待会儿再回来，都随你！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#话说回来，你想要如何装饰新的家呢？\r\n#b#L0#我想装饰成温馨的家。#l\r\n#L1#我想装饰成高级又时尚的家。#l\r\n#L2#我想装饰成环保的家。#l", 0, 6, 37, 0, 1, 9400921); // [类型] 选择菜单
	} else if (status === i++) {
		selectionLog[666] = selection;
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#温馨的家！光是想想就觉得很好呢。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			cm.updateInfoQuest(64606, "item=1;chk=1");
		} else if (selectionLog[666] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#高级又时尚的家！光是想想就觉得很好呢。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			cm.updateInfoQuest(64606, "item=2;chk=1");
		} else if (selectionLog[666] == 2) {
			cm.onScriptMessage(3, 0, 0, 0, "#face2#环保的家！光是想想就觉得很好呢。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			cm.updateInfoQuest(64606, "item=3;chk=1");
		}
	} else if (status === i++) {
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#用原木和温暖的布艺家具布置的家里，通过可爱的花蘑菇玩偶来制造亮点！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else if (selectionLog[666] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#装饰有雕塑的复古家具和高级的大理石，再用能给人温暖感觉的皮质家具装饰客厅！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else if (selectionLog[666] == 2) { // TODO 需要确认
			cm.onScriptMessage(3, 0, 0, 0, "#face1#用原木家具布置家里，装饰客厅！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		}
	} else if (status === i++) {
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#肯定会很棒的！再加上散发着饭香的厨房，怎么样？", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		} else if (selectionLog[666] == 1) {
			cm.onScriptMessage(3, 0, 0, 0, "#face1#肯定会很棒的！一定也不能少了象征书香门第的书房吧？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		} else if (selectionLog[666] == 2) { // TODO 需要确认
			cm.onScriptMessage(3, 0, 0, 0, "#face1#肯定会很棒的！再加上散发着饭香的厨房，怎么样？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#好想法，艾米！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#b光是想象就觉得激动呢。 ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face1#现在没剩多少时间了。对了，之前家里的家具都自动放进了家具仓库，你可别忘记了。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64606);
		ms.dispose();
	}
}
