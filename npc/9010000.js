


        /*
         冒险岛运营员
         */

        var status = -1;

function start() {
    status = -1;
    cm.askMenu("有什么可以帮助你的？\r\n\r\n#L0#我要删除角色\r\n#L1#我要领取在线奖励\r\n#L2#我要学习群宠技能\r\n#L3#我要进宠物化\r\n");
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if (selection == 0) {
            //cm.sendOk("在冒险岛生活还愉快吗？");
            //cm.dispose();
            cm.dispose();
            cm.openNpc(9010000, "Deletechr");
            return;
        } else if (selection == 1) {
            cm.dispose();
            cm.openNpc(9010000, "Onlinebonus");
            return;
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9010000, "MuiltPet");
            return;
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9102001, "PetEvolution");
            return;
        }

    }
    cm.dispose();
}
