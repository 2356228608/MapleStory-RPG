/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:帕勒坦：卡鲁帕丛林入口(100051010)
 *  脚本功能：古迹猎人剧情5 
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
            ms.dispose();
        } 
		if (ms.getQuestStatus(35903) != 1) {
			ms.dispose();
		}
		else if (status === i++) {
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
			ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();//0x387 0E
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			//ms.inGameDirectionEvent_PushScaleInfo(0,2000,0,220,120);//387 0x7
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#草丛中好像有什么东西在动。去确认一下吧。", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#呃……救，救救我。我的头……卡在地上了。", 1013358);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1##b（先把他弄出来吧。说不定能找到什么线索。）#k", 1013358);
		} 
		/*else if (status === i++) {
			ms.inGameDirectionEvent_PushScaleInfo(0,1000,2147483647,2147483647,2147483647);//387 0x7
			ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
			ms.inGameDirectionEvent_AskAnswerTime(300);
		} */
		
		else if (status === i++) {
			ms.forceCompleteQuest(35903);
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			ms.dispose();
			//ms.warp(910090305, 0);
        } else {
            ms.dispose();
        }
}