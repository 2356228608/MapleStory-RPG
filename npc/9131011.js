/*
 * 阴阳师剧情 - 04
 * 地图：807100010
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.fieldEffect_ScreenMsg("JPKanna/magicCircle1");
        cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === i++) {
        cm.sendNextSNoESC_Bottom("看来是成功了啊。结界已经被削弱了不少。");
    } else if (status === i++) {
        cm.sendNextSNoESC_Bottom("接下来要做的，就是破坏位于正殿地下的祭坛，彻底阻止仪式的进行……最好还是加快速度吧。");
    } else {
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.dispose();
        cm.warp(807100112, 0);
    }
}