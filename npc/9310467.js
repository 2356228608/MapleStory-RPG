/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜
 */

var status = -1;
var selectedItem = -1;
var selectedCost = -1;
var NX1 = 700;
var NX2 = 1200;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
		cm.dispose();
		cm.openNpc(9900003, "boss_out");
    } 
}