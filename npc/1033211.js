var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() == 2312) {
                cm.askYesNo("日子过得还好吗？");
            } else {
                cm.sendOk("生活啊每天都要开开心心。\r\n（需要转职的话输入@pm打开拍卖菜单自行转职。）");
		cm.forceCompleteQuest(24010);
                cm.dispose();
            }
        } else if (status == 1) {

            if (!cm.haveItem(1142340, 1) && cm.getPlayer().getSkillLevel(10001005) >= 1) {
                cm.gainItem(1142340, 1);//Medal
                cm.dispose();

            } else {
                if (cm.getPlayer().getSkillLevel(10001005) > 0) {
                    cm.sendOk("You already have this skill.");
                } else {
                    cm.gainItem(1142340, 1);//Medal
                    cm.teachSkill(10001005, 1, 1); // Echo of hero
                    cm.sendOk("Congratulations to you #r#h ##k");
                }
                cm.dispose();
            }
        }
    }
}