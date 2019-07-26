/*
 * 暗影双刀剧情 - 04
 * 地图：金银岛之路 - 新手修炼场入口 (103050910)
 * 任务：基础教育3(2603)
 * @author 狐狸糊涂
 */
 var status = -1;
function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        qm.sendNext("唉唉…慢啦，太慢啦。不好意思啊，我看你是真没那个天赋，就算再怎么修炼也学不会双刀的。");
    } else if (status === i++) {
        qm.sendNextPrev("…我都说的这么过分了，你怎么还那么淡定啊？真是个有趣的家伙！喂，红雅！快出来，我碰到一个很有意思的家伙呢！");
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(50);
        qm.spawnNpcForPlayer(1057001, -920, 152);
        qm.dispose();
    } else {
        qm.dispose();
    }
}