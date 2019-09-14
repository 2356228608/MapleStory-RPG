/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：转职任务35903 
 *  @Author 娜娜 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0##b（和遗物接触后，古代之力进入了我的身体。\r\n……但同时也多了诅咒这个大问题。）#k", 1013358);
		} else if (status === i++) {
			cm.dispose();
        } else {
            cm.dispose();
        }
}
