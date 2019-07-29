var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().getJob() > 0 && qm.getPlayer().getJob() < 1000) {
        qm.forceStartQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
        qm.gainItem(1142107, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    qm.dispose();
	qm.sendOk("送给你的#v1142107#请妥善保管哦。");
}