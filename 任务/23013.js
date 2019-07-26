/*
 * 反抗者转职
 * 地图：反抗者本部 - 秘密广场 (310010000)
 * 任务：机械师之路(23013)
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
        qm.askYesNo("你决心成为机械师了吗？现在还有重新选择的机会。只要停止对话，放弃任务，然后和其他人对话就行。请你好好考虑一下。你真的要选择机械师吗？你认为这个职业适合你的反抗者之路吗？");
    } else if (status == 1) {
        qm.sendNext("I have just molded your body to make it perfect for a Mechanic. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
        if (qm.getJob() == 3000) {
            qm.gainItem(1492014, 1); //1492065 desert eagle
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(3500);
            //30001061 = capture, 30001062 = call, 30001068 = mech dash
            qm.teachSkill(30001068, 1, 0);
        }
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Resistance to carry.");
    } else if (status == 3) {
        qm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
        qm.safeDispose();
    }
}