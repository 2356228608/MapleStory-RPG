/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体

function action(mode, type, selection) {
	cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
	cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/victory");
	if (!cm.isQuestFinished(30069)) {
		cm.npc_ChangeController(1302019, -88, 289, 1); //D5 F8 86 01
		cm.npc_SetSpecialAction(1302019, "summon");
	}
	cm.dispose();
}
