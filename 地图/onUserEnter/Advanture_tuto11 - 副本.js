//地图：4000011
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ShowScreenEffect("maplemap/enter/10000");
        ms.inGameDirectionEvent(1, 1000);
        //ms.curNodeEventEnd(true);
    } else if (status == 1) {
        ms.spawnNPCRequestController(10300, -280, 245, 220);
        ms.setNPCSpecialAction(10300, "summon");
        ms.getNPCDirectionEffect(10300, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120);
        ms.inGameDirectionEvent(1, 1800);
    } else if (status == 2) {
        ms.updateNPCSpecialAction(10300, 1, 1000, 100);
        ms.inGameDirectionEvent(0, 200, 200, 200);
    } else if (status == 3) {
        ms.inGameDirectionEvent(1, 4542); //延时(毫秒)
        ms.inGameDirectionEvent(1, 0, 0, 0);
    } else if (status == 4) {
        ms.inGameDirectionEvent(1, 0);    //延时(毫秒)
    } else if (status == 5) {
        ms.inGameDirectionEvent(1, 900);  //延时(毫秒)
    } else if (status == 6) {
        ms.sendSelfTalk("刚刚那女生是谁啊？为什么看到我就逃走？");
    } else if (status == 7) {
        ms.sendSelfTalk("我也先到那边看看吧。");
    } else if (status == 8) {
        ms.removeNPCRequestController(10300);
        ms.setInGameDirectionMode(false);  //屏蔽/解锁操作台 true = 锁 false = 解
        ms.dispose();
    } else {
        ms.dispose();
    }
}