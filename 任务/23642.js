/*  This source is made by BMS Team
 *  脚本功能：[新手任务]尖兵计划系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.forceStartQuest(25443, "1");
qm.forceStartQuest(11620, "0");
qm.updateInfoQuest(15710, "lasttime=19/09/21/18/40");
qm.forceCompleteQuest(23641);
qm.onScriptMessage(3, 0, 0, 0,  "做好离开的准备了吗？", 256, 0, 4, 0, 0, 2159405); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯，也没什么好准备的……接下去应该去哪里呢？", 257, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "要想隐藏一片树叶，就应该躲藏在森林里。为了争取时间，最好是躲在人多的地方。先到#b射手村#k去看看吧。", 257, 0, 4, 0, 0, 2159405); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "好的，我们到射手村去吧。#r(接受后立即移动。)#k", 0, 16, 16, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.forceStartQuest(23642, "");
qm.forceCompleteQuest(23642);
qm.forceStartQuest(11620, "0");
qm.warp(931060020,0);
qm.dispose();
qm.openNpc(0,"尖兵_离开埃德尔斯坦");
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.forceStartQuest(25443, "1");
qm.forceStartQuest(11620, "0");
qm.updateInfoQuest(15710, "lasttime=19/09/21/18/40");
qm.forceCompleteQuest(23641);
qm.onScriptMessage(3, 0, 0, 0,  "做好离开的准备了吗？", 256, 0, 4, 0, 0, 2159405); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "嗯，也没什么好准备的……接下去应该去哪里呢？", 257, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "要想隐藏一片树叶，就应该躲藏在森林里。为了争取时间，最好是躲在人多的地方。先到#b射手村#k去看看吧。", 257, 0, 4, 0, 0, 2159405); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "好的，我们到射手村去吧。#r(接受后立即移动。)#k", 0, 16, 16, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.forceStartQuest(23642, "");
qm.forceCompleteQuest(23642);
qm.forceStartQuest(11620, "0");
qm.warp(931060020,0);
qm.dispose();
	} else {
		qm.dispose();
	}
}
