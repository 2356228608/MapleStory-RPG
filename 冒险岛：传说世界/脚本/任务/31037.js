var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.OnStartNavigation(211060800, 1, "2161002", 31037);
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.sendOk("你真的很强大呢……！你去对付玫瑰花园的怪物应该绰绰有余。\r\n#r(可以正式开始#e玫瑰花园#n的任务了。)\r\n#b - 连接每日任务&lt;挑战!兼职园艺师&gt;\r - 推荐等级：115级以上 ~ 140级以下");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
