/* RED 1st impact
 Maple Leaf
 Made by Daenerys
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNextS("这枫叶是什么? 这么看来在枫之岛上有巨大的枫树吧. 这枫叶是一路跟着我到这的吗?", 17);
    } else if (status == 1) {
        cm.sendNextPrevS("这个也算是纪念，我会好好保存的. 夹在#b 冒险之书#k中间就不会变皱了.", 17);
    } else if (status == 2) {
        cm.sendNextPrevS("点选键盘设定钮设定剧情书热键后,打开书柜确认#e#b'冒险之书'#k#n吧.", 17);
    } else if (status == 3) {
        cm.topMsg("获得了冒险之书.");
        cm.openUI(191);
        cm.dispose();
    }
}