/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：转职任务35903 
 *  @Author 娜娜 
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
		qm.sendNextNoESC_Bottom("#face6#恭喜你等级到了10级,可以为你进行1转了。");
    } else if (status === i++) {
		//qm.forceCompleteQuest();
		qm.dispose();
		qm.openNpc(1013358,"转职任务35903");
    } else {
        qm.dispose();
    }
}
