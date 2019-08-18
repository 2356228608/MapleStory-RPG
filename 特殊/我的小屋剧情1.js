/**
 * 地图：我的小屋
 * @author 娜娜
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
            //cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            //cm.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300,0);//创建一个遮布 0x10
			cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/flyingPaper");
            cm.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHome/4", 0, 150, 200, -150, 12, 4, 0);
			cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 600, -200, 400, 0, 0, 0);//20E 0x17 添加效果图层
            cm.inGameDirectionEvent_AskAnswerTime(600);
        } else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("0", "", 1, 450, 150, 300, 0, 0, 0);//20E 0x17 添加效果图层
            cm.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 600, 0, 0, 0, 0, 0);//20E 0x17 添加效果图层
            cm.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
			cm.sendNextNoESC_Bottom("#b啊，吓死我了！这是什么？");
		} else if (status === i++) {
            cm.fieldEffect_ProcessOnOffLayer("1", "Effect/DirectionWz2.img/effect/myHome/3",0, 500, 0, 100, 12, 7, 0);//添加图层
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("1", "", 1, 1000, 0, -200, 0, 0, 0);//移动图层
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			cm.sendNextNoESC_Bottom("#b……在卖射手村的蘑菇屋？");
		} else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("1", "", 1, 1000, 0, -300, 0, 0, 0);//移动图层
            cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			cm.sendNextNoESC_Bottom("#b还只要50万金币？！");
		} else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1000, 0, 0, 0, 0, 0);//移除图层
            cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
			cm.askMenu_Bottom("#b这怎么可能……我在冒险岛世界也能有自己的房屋了吗？\r\n#L0#这是梦还是真的啊？必须抢在别人签约前赶紧去！#l\r\n#L1#现在很忙，有空再来吧。#l\r\n#r※ [我的小屋]每个世界内的账号只能进行1次教程任务，完成教程时，世界内的所有角色都能使用[我的小屋]。在进行剧情时无法变更角色，请慎重决定！\r\n#k※接受时将马上前往任务地区。");
		}  else if (status === i++) {
			switch(selection){
				case 0:
				cm.curNodeEventEnd(true);//角色站立方向信息
				cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
				cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
				cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
					cm.warp(871000010, 0);
					cm.dispose();
				break;
				case 1:
					cm.sendNextNoESC_Bottom("#想好了再来找我！");
				break;
			}
		} else if (status === i++) {
			cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            cm.dispose();
        } else {
            cm.dispose();
        }
}