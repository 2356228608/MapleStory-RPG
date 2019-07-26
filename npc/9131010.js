/*
 * 阴阳师剧情 - 08
 * 地图：本能寺 - 本能寺小路 (807100102)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true);
        cm.fieldEffect_ScreenMsg("JPKanna/magicCircle2");
        cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status == 1) {
        cm.sendNextSNoESC_Bottom("看来相马他们的行动也已经成功了。结界正在逐渐消失。");
    } else if (status == 2) {
        cm.sendNextSNoESC_Bottom("我也要尽快赶往正殿地下，去阻止仪式的进行了。");
    } else {
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.teachSkill(40021183, -1, 0);
        cm.teachSkill(40021184, -1, 0);
        cm.teachSkill(40021185, -1, 0);
        cm.teachSkill(40021186, -1, 0);
        cm.dispose();
        cm.warp(807100103, 0);
    }
}