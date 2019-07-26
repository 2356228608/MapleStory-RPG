/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜  敲敲乐第1-3阶段
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
		//NPC图片ID,时间(毫秒),"内容"  1540108
        cm.addPopupSay(1540108, 2500, "欢迎来到[" + cm.getServerName() + "],BMS 币获取途径,在线签到,或者是任务,或者活动 \r\n"
                    + "累计BMS 币到10000可换GM1 \r\n"
                    + "累计BMS 币到20000可换GM2 \r\n"
                    + "累计BMS 币到30000可换GM3 \r\n"
                    + "累计BMS 币到50000可换GM4");
    } 
}