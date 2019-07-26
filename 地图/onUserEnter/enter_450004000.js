/*
 * 露西德剧情
 * 地图：//'' (450004400)
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
			ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);//创建一个遮布 0x15
			ms.fieldEffect_Unew150("Map/Effect3.img/BossLucid/Lucid/lusi", "animation","intro", 0, 1, 0, 0, 0);
			ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/lucid_spine");
            ms.inGameDirectionEvent_AskAnswerTime(9000);
        } else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 0, 4, 1);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			ms.fieldEffect_Unew1501("intro",100);
			ms.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 2, 1000, 0, 0, 0, 0, 0);
            //ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			ms.dispose();
			//ms.warp(0, 0);
        } else {
            ms.dispose();
        }
}