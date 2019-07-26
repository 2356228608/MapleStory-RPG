/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜 
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
            cm.inGameDirectionEvent_Monologue("\r\n#fs50#欢迎来到[BMS]冒险岛\r\n同步更新150\r\n解卡命令@ea \r\n快速回程@fm \r\n打开万能NPC命令@wn", 1);
			//cm.effect_NormalSpeechBalloon("\r\n#fs50#欢迎来到[BMS]冒险岛\r\n同步更新150\r\n解卡命令@ea \r\n快速回程@fm \r\n打开万能NPC命令@wn");
			cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            cm.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            cm.inGameDirectionEvent_Monologue("\r\n#fs60#请和修嘉完成对话领取新手礼包哦.", 1);
        } else if (status === i++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        }else if (status === i++) {
            cm.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			cm.enableActions2();
            cm.dispose();
        } else {
            cm.dispose();
        }
}