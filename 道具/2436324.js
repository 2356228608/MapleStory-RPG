var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        im.teachSkill(400004030, 1, 1);// 终极枪矛强化
        im.teachSkill(400004031, 1, 1);// 贯穿刺透强化
        im.teachSkill(400004037, 20, 1);// 贯穿刺透强化
        im.dispose();
    }
}