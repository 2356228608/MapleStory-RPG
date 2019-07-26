/*
 * 反抗者剧情 - 11
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：小胖
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23007).indexOf("exp4=1") != -1) {
        cm.sendNext("反正被发现了，我要吃颗糖了。");
        cm.dispose();
        return;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("嗯？被发现了吗？我人这么小，你却这么快就找到了。真是厉害。");
    } else if (status === i++) {
        cm.gainExp(3);
        if (cm.getInfoQuest(23007).equals("")) {
            cm.updateInfoQuest(23007, "exp4=1");
        } else {
            cm.updateInfoQuest(23007, cm.getInfoQuest(23007) + ";exp4=1");
        }
        cm.dispose();
    }
}