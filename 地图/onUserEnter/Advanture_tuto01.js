/*
 * 冒险家剧情 - 03
 * 地图：陌生空间 - 漏出来的光芒 (4000001)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            ms.resetMap(ms.getMapId());
            ms.spawnReactorOnGroundBelow(1008010, 365, 216);
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true);  //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true);       //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_AskAnswerTime(3000); //延时(毫秒)
            break;
        case 1:
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/BalloonMsg0/3", 2100, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2100); //延时(毫秒)
            break;
        case 2:
            ms.topMsg("按[Ctrl]可进行一般攻击。");
            ms.forceStartQuest(32201);
            ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.dispose();
            break;
        default:
            ms.dispose();
            break;
    }
}