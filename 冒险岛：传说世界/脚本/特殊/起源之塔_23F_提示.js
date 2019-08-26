/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

var endX = [400, 1600, 2600];
var endY = [200, 150, 150];
var tabs = [[0, 11], [12, 18], [19, 29]];
// 主体
function action(mode, type, selection) {
	var id = cm.getNpc();
	if (id < 0 || id > 2) {
		cm.dispose();
		return;
	}
	var em = cm.getEventManager("副本_起源之塔");
	var map = em.getMapFactoryMap(cm.getMapId());
	var helped = parseInt(em.getProperty("stage23_help_" + id));
	if (helped >= 3) {
		cm.sendOk("这个地方的道路已经给你显示过3次了。为了留机会给其他人，这里我没法再帮你了。", 2540000);
		cm.dispose();
		return;
	}
	status++;
	var i = -1;
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === 1) {
		cm.sendNextNoESC("现在我会在很短的时间内为你显示被毁坏的道路，因为次数有限，一定要看仔细了！", 2540000);
	} else if (status === 2) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 600, endX[id], endY[id]);
	} else if (status === 3) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status >= 4 && status <= 4 + tabs[id][1] - tabs[id][0]) {
		var reactor = map.getReactorByName(tabs[id][0] + status - 4);
		reactor.forceHitReactor(cm.getPlayer(), 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === 5 + tabs[id][1] - tabs[id][0]) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === 6 + tabs[id][1] - tabs[id][0]) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === 7 + tabs[id][1] - tabs[id][0]) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === 8 + tabs[id][1] - tabs[id][0]) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
		var curLevelStage = parseInt(em.getProperty("stage23_stage"));
		em.setProperty("stage23_stage", Math.max(curLevelStage, id + 1));
		em.setProperty("stage23_help_" + id, helped + 1);
		//cm.warp(992019000, 1);
	} else {
		cm.dispose();
	}
}
