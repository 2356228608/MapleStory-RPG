/*
 * 反抗者剧情 - 10
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：阿俊
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23007).indexOf("exp1=1") != -1) {
        cm.sendNext("找到乌里卡和阿班了吗？特别是阿班，他很会躲，一定要仔细找找。");
        cm.dispose();
        return;
    }
    
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("啊！抓住了！切……");
    } else if (status === i++) {
        cm.sendNext("呃……我还想再往里躲一点的，那样的话头发就不会露出来了……");
    } else if (status === i++) {
        cm.sendNext("找到乌里卡和阿班了吗？特别是阿班，他很会躲，一定要仔细找找。");
    } else if (status === i++) {
        cm.gainExp(5);
        if (cm.getInfoQuest(23007).equals("")) {
            cm.updateInfoQuest(23007, "exp1=1");
        } else {
            cm.updateInfoQuest(23007, cm.getInfoQuest(23007) + ";exp1=1");
        }
        cm.dispose();
    }
}