/*
 * 反抗者剧情 - 09
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：乌里卡
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23007).indexOf("exp2=1") != -1) {
        cm.sendNext("阿俊和阿班找到了吗？阿班不仔细找的话很难找到？你到所有可能的地方都去找找。");
        cm.dispose();
        return;
    }
    
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("咦？被发现了？嘿嘿嘿……是我躲的地方太容易找了吗？");
    } else if (status === i++) {
        cm.sendNext("阿俊和阿班找到了吗？阿班不仔细找的话很难找到？你到所有可能的地方都去找找。");
    } else if (status === i++) {
        cm.gainExp(5);
        if (cm.getInfoQuest(23007).equals("")) {
            cm.updateInfoQuest(23007, "exp2=1");
        } else {
            cm.updateInfoQuest(23007, cm.getInfoQuest(23007) + ";exp2=1");
        }
        cm.dispose();
    }
}