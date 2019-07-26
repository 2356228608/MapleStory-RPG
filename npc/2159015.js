/*
 * 反抗者剧情 - 08
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：小伶俐
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23007).indexOf("exp3=1") != -1) {
        cm.sendNext("嘿嘿嘿……我会再躲得隐蔽一点的。");
        cm.dispose();
        return;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("哎呀，被发现了！哇……你好像很会找嘛。真厉害！");
    } else if (status === i++) {
        cm.gainExp(3);
        if (cm.getInfoQuest(23007).equals("")) {
            cm.updateInfoQuest(23007, "exp3=1");
        } else {
            cm.updateInfoQuest(23007, cm.getInfoQuest(23007) + ";exp3=1");
        }
        cm.dispose();
    }
}