/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  功能：触发开始冒险剧情
 *  @Author 娜娜 
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode === 0 && status !== 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.warp(0, 0);
    } else {
        ms.dispose();
    }
}