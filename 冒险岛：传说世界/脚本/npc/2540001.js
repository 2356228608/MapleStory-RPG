/*
 *  起源之塔7F 冒险家
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var itemid = [4009237, 4009238];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var em = cm.getEventManager("Map_TowerOfOz");
	var count = parseInt(em.getProperty("stage7_count"));
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		if (count >= 8) {
			cm.sendOk("太，太谢谢你了。我感觉我已经恢复得差不多了。这就帮你打开通往下一层的大门。\r\n\r\n#b#e[恢复状况]#B" + (count * 100 / 8) + "#\r\n");
			em.setProperty("stage7", "clear");
			cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
			cm.dispose();
		} else {
			cm.sendOk("嗨，能、能帮我驱赶一下这里无穷无尽的猴子吗？一不留神被这些疯狂的猴子打伤了，我需要稍微休息一下……很快就好！\r\n\r\n你说大、大门？#b我知道怎么离开这一层！#k等我缓过来就帮你打开，我们一起离开这里。\r\n\r\n#b#e[恢复状况]#B" + (count * 100 / 8) + "#\r\n");
			scheduleNew("stage7_Fight", 15, em);
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}

// 循环调动事件
function scheduleNew(funcName, seconds, em) {
	var setupTask = em.scheduleAtTimestamp(funcName, java.lang.System.currentTimeMillis() + seconds * 1000);
	return setupTask;
}
