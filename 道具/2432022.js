/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：拍卖
 *  @Author 娜娜 
 */
var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var typed = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
       im.dispose();
	   im.openNpc(9900004);
    } 
}