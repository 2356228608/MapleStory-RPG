/* 物品回收 */

        var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n(#r请看好物品哦.点了就回收啦!#k):\r\n#b#L0#140武器回收#l    #L1#140防具回收#l    #L2# 真红回收#l\r\n#b#L3#其他回收#l  ";  //     #L2#购买金币#l
        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310070, "70");
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9310070, "71");
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9310070, "72");
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9310070, "73");
                break;
            case 4:
                cm.dispose();
                cm.openNpc(9310470, "txjz");
                break;
            case 5:
                //cm.sendOk("请到鲁彪那去买吧，我这里都没货了~");
                cm.dispose();
                cm.openNpc(9310470, "0");
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9310555, "haohuasp");
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9900002, 100); //破攻石头
                break;
            case 8:
                cm.dispose();
                cm.openNpc(9900002, 1301); //一键潜能
                break;
        }
    }
}