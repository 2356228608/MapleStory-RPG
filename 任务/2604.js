/*
 * 暗影双刀剧情 - 05
 * 地图：金银岛之路 - 新手修炼场入口 (103050910)
 * 任务：特别的才能(2604)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        qm.sendNext("咔咔咔……这次来了个好玩的菜鸟嘛？西瓦这么欺负你，你居然连眼睛也不眨一下，难道你不会觉得伤心吗？其实啊，西瓦只是想考验你一下而已，你有足够的天赋踏上双刀之路。");
    } else if (status === i++) {
        qm.sendNextPrev("不仅是双刀方面的才能，我发现你还有其他方面的天赋……可不能让你接受平凡的修炼！#b拥有特殊才能的人，就给他安排特殊的任务#k！这就是暗影双刀的作风。");
    } else if (status === i++) {
        qm.sendNextPrev("你想知道这是什么任务？这个嘛……现在还不能告诉你。我要正式把你介绍给#b雪姬#k大人，如果雪姬喜欢你，就能接受到特殊任务，如果不是……那就只能接受平凡的修炼了。所以你努力让雪姬大人喜欢你就对了。");
    } else if (status === i++) {
        qm.askAcceptDecline("你接受了我就直接把你送到雪姬那里去。");
    } else if (status === i++) {
        qm.removeNpc(103050910, 1057001);
        qm.forceStartQuest();
        qm.dispose();
        qm.warp(103050101, 2);
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}