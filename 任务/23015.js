/*
 * 反抗者转职
 * 地图：反抗者本部 - 秘密广场 (310010000)
 * 任务：驯养美洲豹(23015)
 * @author 狐狸糊涂
 */
var status = -1;

function end(mode, type, selection) {
    qm.sendNextPrev("If you want to capture a Jaguar, please talk to Black Jack.");
    qm.forceCompleteQuest();
    qm.safeDispose();
}

function start(mode, type, selection) {
    qm.sendNextPrev("If you want to capture a Jaguar, please talk to Black Jack.");
    qm.forceCompleteQuest();
    qm.safeDispose();
}