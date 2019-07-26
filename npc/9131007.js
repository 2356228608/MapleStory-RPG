/*
 * 剑豪剧情 - 03 07
 * 地图：本能寺 - 本能寺东侧外墙 (807100001)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    switch (cm.getMapId()) {
        case 807100000: // 03
            cm.sendNextNoESC_Bottom("翻过本能寺外墙，打开东门。");
            cm.dispose();
            break;
        case 807100002: // 07
            if (!cm.isQuestActive(57101)) {
                var i = -1;
                if (status <= i++) {
                    cm.dispose();
                } else if (status === i++) {
                    cm.sendNextNoESC_Bottom("做得好。真是越来越想让你加入我的门下了。");
                } else if (status === i++) {
                    cm.sendNextSNoESC_Bottom("根本就没有什么难度。尤其是现在已经正式开战，就显得更加简单了。不过到底是怎么回事？难道是北侧的上杉军和南边的士兵们已经先一步冲进去了吗？");
                } else if (status === i++) {
                    cm.sendNextNoESC_Bottom("这一次的突入作战，必须是位于各个方向的士兵同一时间冲进去才行。除非是有人想要恶意破坏作战，否则应该不会有人先一步进去的。不过我倒是已经心里有数了，就是还不能确定是否真是这么回事。总之，现在说什么也是白搭。");
                } else if (status === i++) {
                    cm.sendNextNoESC_Bottom("本能寺内已经是一片混乱，我们也更容易冲进去了。就现状而言，对我们完全是有利无弊的。就等打倒信长之后再来研究这到底是怎么一回事吧。现在，先让我们趁势攻入本能寺的正殿吧。");
                } else if (status === i++) {
                    cm.sendOkSNoESC_Bottom("我明白了！那就上吧！！");
                } else {
                    cm.forceStartQuest(57101);
                    cm.fieldEffect_SetObjectState("guide1");
                    cm.fieldEffect_SetObjectState("guide2");
                    cm.fieldEffect_SetObjectState("guide3");
                    cm.dispose();
                }
            } else {
                var i = -1;
                if (status <= i++) {
                    cm.dispose();
                } else if (status === i++) {
                    cm.sendNextNoESC_Bottom("做得好。真是越来越想让你加入我的门下了。");
                } else {
                    cm.dispose();
                }
            }
            break;
        default:
            cm.dispose();
            break;
    }
}