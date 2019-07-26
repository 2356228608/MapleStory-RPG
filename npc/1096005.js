/*
 * 神炮王剧情 - 17
 * 地图：可可岛 - 火箭出发 (912060200)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendNextNoESC("好了，现在出发！");
    } else if (status == 1) {
        cm.npc_LeaveField(1096012);
        cm.fieldEffect_PlayFieldSound("cannonshooter/fire");
        cm.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/flying/0", 0, 0, 0);
        cm.inGameDirectionEvent_Effect("Effect/Direction4.img/effect/cannonshooter/flying1/0", 2000, 0, -100, 1, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status == 2) {
        cm.forceCompleteQuest(2572);
        cm.warp(912060300, 0);
        cm.dispose();
    }
}