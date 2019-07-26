/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜 
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.killAllMob();
        ms.spawnMonster(9300456, 1);
        ms.dispose();
    } else {
        ms.dispose();
    }
}