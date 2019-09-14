// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "二！二！！二重身！！", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(哎哟！和真的碰到了！)", 257, 0, 37, 0, 1, 1540891); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "#face2#你不会傻了吧？！！", 257, 0, 37, 0, 1, 1540878); // [类型] 普通对话
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/Game.img/MonsterBattleLose", 100);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "咳咳，咳咳，发生什么事情了？", 256, 0, 37, 0, 1, 1540865); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=482364391");
		cm.npc_LeaveField("oid=482364392");
		cm.npc_LeaveField("oid=482364393");
		// [2019/9/6 14:58:29] 当前所在地图: cm.warp(350130400) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350130300);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
