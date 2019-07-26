/*
 * 新手入场剧情
 * 地图：//'隐藏地图 : 别人家' (921170016)
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
            ms.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			
			ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, -300, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 0, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 300, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n#fs50#亲爱的#h #点击背包中的#v2430154#可以接受主线任务每日都有福利\r\n", 1);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n#fs50#欢迎来到" + ms.getServerName() + "\r\n同步更新\r\n解卡命令@ea \r\n快速回程@fm \r\n打开万能NPC命令@wn", 1);
			
        } else if (status === i++) {
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
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