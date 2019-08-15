/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.removeAll(2270052);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("都搜集到了吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("这么多，应该就能把房子全部照亮了。");
	} else if (status === i++) {
		// 初始化
		qm.removeAll(2270052);
		qm.removeAll(4036500);
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		qm.gainExp(8296);
		qm.updateInfoQuest(37159, "10");
		qm.forceCompleteQuest();
		qm.sendNextNoESC("切……自己说要想唱好歌，就必须得到森林之光的映照……", 1501003);
	} else if (status === i++) {
		qm.sendNextNoESC("我听到了。");
	} else if (status === i++) {
		qm.sendNextSNoESC("……");
	} else if (status === i++) {
		qm.dispose();
	}
}
