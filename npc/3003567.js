var status = -1;
var select = -1;
function start() {
    cm.askMenu("你想去哪里？\r\n#b#L0#月桥#l\r\n#b#L1#痛苦迷宫#l#k\r\n#b#L2#世界尽头#l\r\n#b#L3#埃斯佩拉#l\r\n#b#L4#射手村#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            if (select == 0) {
                cm.sendNext("如果你想离开了，再来找我！");
            } else if (select == 1) {
                cm.sendNext("如果你想离开了，再来找我！");
            } else if (select == 2) {
                cm.sendNext("如果你想离开了，再来找我！");
            } else if (select == 3) {
                cm.sendNext("如果你想离开了，再来找我！");
            } else if (select == 4) {
                cm.sendNext("如果你想离开了，再来找我！");
            }
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (select == -1)
            select = selection;
        if (select == 0) {
            cm.askYesNo("确定要去#b月桥#k吗？");
        } else if (select == 1) {
            cm.askYesNo("确定要去#b痛苦迷宫#k吗？");
        } else if (select == 2) {
            cm.askYesNo("确定要去#b世界尽头#k吗？");
        } else if (select == 3) {
            cm.askYesNo("确定要去#b埃斯佩拉#k吗？");
        } else if (select == 4) {
            cm.askYesNo("确定要去#b射手村#k吗？");
        }
    } else if (status == 1) {
        if (select == 0) {
            cm.warp(450009100, 0);
        } else if (select == 1) {
            cm.warp(450011120, 0);
        } else if (select == 2) {
            cm.warp(450012000, 0);
        } else if (select == 3) {
            cm.warp(450007160, 0);
        } else if (select == 4) {
            cm.warp(100000000, 0);
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}