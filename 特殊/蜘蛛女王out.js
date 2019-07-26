/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜 
 */

function start() {
            status = -1;
            action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.sendNext("请想好了再来");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.askYesNo("确定退出副本吗?");
        } else if (status == 1) {
            cm.warp(240093200);
            cm.dispose();
        }
        //cm.dispose();
    }
}