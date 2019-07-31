/* 鲁塔比斯 消灭西侧的封印守护者
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 收尾		
		qm.updateInfoQuest(30010,"");
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 打爆BOSS就好了？不需要脚本干活？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
