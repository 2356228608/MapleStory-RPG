/*
 * 米哈尔剧情 - 12
 * 米哈尔转职
 * 地图：秘密地图 - 杂货店后院 (913070050)
 * 任务：[转职]光之骑士……(20036)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextNoESC("看，南哈特。他继承了光之骑士的血，证明了自己的资格。");
    } else if (status === i++) {
        qm.dispose();
		qm.forceCompleteQuest();
		ms.forceStartQuest(200346);
    } else {
        qm.dispose();
    }
}