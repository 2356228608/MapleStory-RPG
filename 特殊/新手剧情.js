var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.askMenuNoESC("是否体验新手剧情？\r\n#L0##b告诉我村庄的故事#l \r\n#L1#我想前往村庄#k#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.askMenu("0");
        }
        if (selection == 1) {
            cm.askMenu("1");
        }
    } else {
        ms.dispose();
    }
}