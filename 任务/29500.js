
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
        qm.gainItem(1142006, 1);
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    qm.dispose();
}