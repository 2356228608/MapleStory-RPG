/*
 * 古迹猎人剧情2
 * 地图：//'勇士部落 : 废弃研究室' (910090301)
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
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
			ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
			//ms.onTeleport(3,7231529,-991,-668);
			//ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -378, -163);//22A 0x7 5个[int]画面移动
			//ms.inGameDirectionEvent_MoveAction(7);
			ms.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			ms.inGameDirectionEvent_ForcedFlip15(1, 255, 0, 0, 2);
			ms.inGameDirectionEvent_AskAnswerTime(1200);
		}  else if (status === i++) {
			ms.effect_Text("#fn???? ExtraBold##fs18#几天后，帕勒坦遗迹", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);//0x357 0x3D
			ms.inGameDirectionEvent_AskAnswerTime(5500);
		} 
		else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#帕勒坦遗迹……终于找到了。插图上画的地方应该就是这里。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#呵呵……规模比想象的还要雄伟嘛。感觉这里一定埋藏着了不起的东西。", 1013358);//6E 76 0F 00
		}  else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#“找到三把钥匙，插在考验祭坛之上。”书桌上的纸条，这样写道。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_key/0", 0, 500, -100, -1, 0, 4, 1);//22A 0x17
			ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/key");//22A 0x5 播放声音
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_key/1", 0, 500, -100, -1, 0, 4, 1);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("01", "", 2, 550, 0, 0, 0, 0, 0);//22A 0x17
			ms.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_key/2", 0, 500, -100, -1, 0, 4, 1);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 550, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#一把已经在研究室中得到了。另一把在来的路上找到了。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#从钥匙的反应来看……最后一把钥匙一定就在这个遗迹中。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/roar1");//22A 0x5 播放声音
			ms.userSetFieldFloating(910090301,10,10,50);//地图左右晃动
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		}  else if (status === i++) {
			ms.userSetFieldFloating(910090301,0,0,0);//地图左右晃动
			ms.inGameDirectionEvent_AskAnswerTime(300);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#怎么在震动？难道……要坍塌了吗？", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#但是煮熟的鸭子总不能就这样飞了吧。迅速把事情搞定，然后离开这里吧。", 1013358);//6E 76 0F 00
		}else if (status === i++) {
			//ms.OverlapScreenDetail19(0,1000,3000,1);
			//ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);//22A 0x7 5个[int]画面移动
			//ms.inGameDirectionEvent_PushMoveInfo(1,0,0,0);
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} 
		
		
		else if (status === i++) {
			ms.effect_OnUserEff("UI/tutorial.img/34");//0x357 0x1D 点击NPC接受任务的提示动画
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} 
		else if (status === i++) {
			ms.forceStartQuest(35947,"2=1");
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			ms.dispose();
			//ms.warp(910090301, 0);
        } else {
            ms.dispose();
        }
}