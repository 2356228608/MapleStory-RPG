/*
 * 龙神剧情 - 15
 * 地图：梦中 - 梦中的森林 (900010200)
 * Npc名称：龙
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
            cm.dispose();
        } else if (status === i++) {
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            cm.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            cm.inGameDirectionEvent_Monologue("\r\n亲爱的#h ##fs30#点击背包中的#v2430154#可以接受主线任务每日都有福利。#r群文件有各种攻略和解答加群网站：www.xintoo.cn:81", 1);
			
        } else if (status === i++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        }else if (status === i++) {
            cm.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            cm.dispose();
        } else {
            cm.dispose();
        }
}