var cashitem;
var status = -1;
var select = -1;


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.askYesNo("学习群宠技能必须付出一定的金币哟!大约需要:#r20000000");
    } else if (status == 1) {
        if (cm.getSkillLevel(8) == 0) {
            if (cm.getMeso() >= 20000000) {
                cm.gainMeso(-20000000);
                cm.teachSkill(8, 1);
                cm.sendOk("恭喜,你学习了群宠技能!");
            } else {
                cm.sendOk("您似乎没有那么多的金币哟！在去努力攒钱吧！");
            }
        } else {
            cm.sendOk("你已经学习了群宠技能了!!!");
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
