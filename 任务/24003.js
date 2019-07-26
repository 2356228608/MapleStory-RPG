/*
 * 双弩剧情 - 06
 * 地图：冰冻的妖精森林 - 埃欧雷 (910150001)
 */
var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.sendNext("(启动音乐盒，让音乐响起来吧。)");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.sendNext("(想起了和村里冰冷的气息不相称的和平的音乐。希望孩子们能做个好梦……)");
        qm.effect_PlayMusic("Game/QueenOfElf");
		qm.getEA();
    } else if (status == 2) {
        qm.topMsg("点击头上有书本图标的NPC就能完成任务。");
    }
}
