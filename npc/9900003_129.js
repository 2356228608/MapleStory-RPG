/*
 完成时间：2013年7月21日 12:13:28
 脚本功能：活动丰收
 */


var selects;
var mode;
var EventList = Array(
		Array("#b击败200个喜悦艾尔达[可获得#v1712001#  #t1712001#]#k#l", 130),
		Array("#b击败200个愤怒艾尔达[可获得#v1712002#  #t1712002#]#k#l", 131),
		Array("#b击败200个悲伤艾尔达[可获得#v1712003#  #t1712003#]#k#l", 132),
		Array("#b击败200个快乐艾尔达[可获得#v1712004#  #t1712004#]#k#l", 133),
		Array("#b击败200个岩石艾尔达[可获得#v1712005#  #t1712005#]#k#l", 134),
		Array("#b击败200个火焰艾尔达[可获得#v1712006#  #t1712006#]#k#l", 135)

        );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.openNpc(9900003)
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var text = "目前" + cm.getServerName() + "已开始的活动有下列\r\n请按照您的喜好选择[每日任务]活动：\r\n#b"
        for (var i = 0; i < EventList.length; i++) {
            text += "#L" + i + "# " + EventList[i][0] + "\r\n"
        }
        cm.askMenu_Bottom(text)
    } else if (status == 1) {
        selects = selection;
        mode = EventList[selects][1];
        if (EventList[selects][1] >= 10000) {
            cm.openNpc(mode);
        } else {
            cm.dispose();
            cm.openNpc(9900003, mode);
            //cm.setNPC_Mode(0)
        }
    }
}