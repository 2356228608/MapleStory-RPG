/*
 * 反抗者剧情 - 03
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：阿俊
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendNext("哦……你来啦？捉迷藏还没开始……我们现在回去不好吗？大人们不是让我们不要到矿山这边来玩吗？");
    } else if (status === i++) {
        cm.sendOk("哎呀，胆小鬼。都已经来了，怎么能就这样回去呢？总得做点什么吧？", 2159002);
        cm.dispose();
    } else {
        cm.dispose();
    }
}