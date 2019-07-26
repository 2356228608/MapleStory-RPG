/* RED 1st impact
 Maple Tree Hill
 Made by Daenerys
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        //cm.sendNextS("刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？", 17);
        cm.sendNext("刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？");
    } else if (status == 1) {
        //cm.sendNextS("我也朝着那个方向过去看看吧。", 17);
        cm.sendNext("我也朝着那个方向过去看看吧。");
    } else if (status == 2) {
        status = -1;
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        cm.dispose();
    }
}