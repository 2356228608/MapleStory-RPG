/*
 * 超能力者剧情 - 15
 * 地图：据点 - 总部 (331001000)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    if (ms.isQuestActive(22729)) {
        ms.setPartner(1, 1531003, 80001789, 0);
        ms.dispose();
    } else {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
            if (!ms.isQuestFinished(22715)) {
                ms.forceCompleteQuest(22715);
				ms.dispose();
                //ms.sendNext_Bottom("辛苦了，上二楼。", 1531001);
            } else {
                ms.dispose();
            }
        } else {
            ms.dispose();
        }
    }
}