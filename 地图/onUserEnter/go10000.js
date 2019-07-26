/*
 * 地图：彩虹岛 - 枫树山丘 (10000)
 * @author 狐狸糊涂
 */
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
            ms.dispose();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Monologue("\r\n#fs60#请和修嘉完成对话领取新手礼包哦.", 1);
        } else if (status === i++) {
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        }else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			ms.enableActions2();
			ms.effect_NormalSpeechBalloon("\r\n#fs30#欢迎来到" + ms.getServerName() + "\r\n同步更新\r\n解卡命令@ea \r\n快速回程命令 @fm \r\n快速复活命令@fh \r\n打开万能NPC命令 @wn",5000,0);
            ms.dispose();
        } else {
            ms.dispose();
        }
}