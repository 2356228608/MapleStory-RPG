/*
 * 反抗者转职
 * 地图：反抗者本部 - 秘密广场 (310010000)
 * 任务：豹弩游侠之路(23012)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("请慎重选择。慎重一点不是什么坏事。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    
    if (status == 0) {
        qm.askYesNo("谢谢你这么爽快地接受……你真的经过深思熟虑了吗？豹弩游侠虽然很强，但也很难操作。在操作骑宠的同时，还必须进行攻击，因此在操控方面要求很高。你能做到吗？希望你仔细考虑清楚之后再回答我。");
    } else if (status == 1) {
        qm.sendNext("I have just molded your body to make it perfect for a Wild Hunter. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
        if (qm.getJob() == 3000) {
            qm.gainItem(1462092, 1);
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(3300);
            qm.teachSkill(30001061, 1, 0);
            qm.teachSkill(30001062, 1, 0);
            qm.getPlayer().fakeRelog();
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Resistance to carry.");
    } else if (status == 3) {
        qm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
        qm.safeDispose();
    }
}