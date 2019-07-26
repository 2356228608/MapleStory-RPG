/*
 * 超能力者任务 - 杰的牢骚(22720)
 * 地图：据点 - 总部 (331001000)
 * 任务：杰的牢骚(22720)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face6#也就是说，需要给守护遗迹的家伙带去祭品。\r\n然后放到刻着正确答案的柱子上就OK了。");
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#正确答案已经知道了。那就去寻找#r#o2300200##k，搜集#b5个#k#b#i4036523# #t4036523##k吧。\r\n在附近找找看，应该就能找到遗迹防御兵。", 1013358);
    } else if (status === i++) {
		qm.gainItem(2060016, 2000);//古代弓专用箭
        qm.gainItem(2000051, 200);
		qm.gainItem(2000052, 200);
		qm.gainItem(4036523, 5);
		qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		//qm.forceCompleteQuest();
		//qm.gainItem(4036523, -5);
        qm.dispose();
		qm.openNpc(9330065,"剧情任务35902");
    } else {
        qm.dispose();
    }
}
