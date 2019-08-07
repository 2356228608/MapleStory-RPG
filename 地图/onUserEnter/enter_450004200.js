/*
 * 露西德剧情
 * 地图：路西德第二阶段过场动画
 * Npc名称：
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
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            //ms.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			//ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);//创建一个遮布 0x15
            ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid5", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid4", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid3", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid2", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid1", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
			ms.inGameDirectionEvent_Effect("Map/Effect3.img/BossLucid/Lucid", 3100, 200, 0, 0, 0, 0, 0, 0, 0);
            ms.inGameDirectionEvent_AskAnswerTime(4000);
        } else if (status === i++) {
            //ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			//ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(500);
			ms.dispose();
			ms.warp(450004250);
			//ms.warp(0, 0);
        } else {
            ms.dispose();
        }
}