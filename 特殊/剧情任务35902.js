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
            cm.dispose();
        } else if (status === i++) {
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            //cm.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			cm.fieldEffect_InsertCanvas(1, -1, 0, 0, 0, 250, 0);//创建一个遮布22A 0x15
			cm.inGameDirectionEvent_AskAnswerTime(250);
        } else if (status === i++) {
			cm.inGameDirectionEvent_ForcedFlip(-1);//强制调整角色面对方向
			cm.inGameDirectionEvent_AskAnswerTime(200);
		} else if (status === i++) {
			cm.inGameDirectionEvent_ForcedFlip(0);//强制调整角色面对方向
			cm.inGameDirectionEvent_AskAnswerTime(200);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, -1, 0, 0, 0, 0, 2);//创建一个遮布22A 0x15
			cm.inGameDirectionEvent_AskAnswerTime(100);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1000, 0);//创建一个遮布22A 0x15
			cm.inGameDirectionEvent_AskAnswerTime(100);
		}else if (status === i++) {
			var selStr="#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”’#k\r\n放到刻着这个谜题正确答案的柱子上吧。\r\n#b#L0# 云 #l　#L1# 火 #l　#L2# 月光#l";
			cm.askMenu_Bottom(selStr);
		}
		else if (status === i++) {
			switch (selection) {
			case 1:
				cm.sendNextNoESC_Bottom("#face0##b（随着咯嘚嘚的声音，箱子的底打开了。\r\n可以看到里面有个什么东西在闪闪发光。）#k", 1013358);
                break;
			default:
				Edispose();
				//cm.sendOk("#face3#没有发生任何事。\r\n……这个好像不是正确答案。"+selection);
				cm.sendNextNoESC_Bottom("#face3#没有发生任何事。\r\n……这个好像不是正确答案。", 1013358);
			}
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face3#这是……", 1013358);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/key");//22A 0x5 播放声音
			cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_key/0", 0, 500, 0, 0, 1, 4, 0);//22A 0x17
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 550, 0, 0, 0, 0, 0);//22A 0x17
			cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_key/1", 0, 500, 0, 0, 1, 4, 0);//22A 0x17
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_key/2", 0, 500, 0, 0, 1, 4, 0);//22A 0x17
			cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 550, 0, 0, 0, 0, 0);//22A 0x17
			cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 550, 0, 0, 0, 0, 0);//22A 0x17
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face1#啊哈，最后一把祭坛钥匙原来就在这里。\r\n呼……幸亏看了一眼谜题的内容。", 1013358);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face1#三把钥匙全部找到了。那接下来要做的事情……\r\n是的，就是把钥匙插在祭坛上。", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face3#钥匙又开始发光了。在光指向的地方一定有什么东西。\r\n一定没错。祭坛所在的地方就是那里。", 1013358);
		} else if (status === i++) {
			//cm.inGameDirectionEvent_ForcedFlip10(2, 200);
			cm.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, -1, 0, 0, 0, 0, 2);//创建一个遮布22A 0x15
			cm.inGameDirectionEvent_AskAnswerTime(1500);
		}  else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1000, 0);//创建一个遮布22A 0x15
			cm.inGameDirectionEvent_AskAnswerTime(100);
		}
		  else if (status === i++) {
			cm.effect_Text("#fn???? ExtraBold##fs18#片刻之后，帕勒坦遗迹某处", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);//357 0x3D
			cm.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face1#呵呵……发现了遗迹所在的地方。", 1013358);
		} else if (status === i++) {
			//cm.fieldEffect_PlayBGM("Bgm00.img/Silence");//22A 0x7
			cm.inGameDirectionEvent_AskAnswerTime(300);
		} else if (status === i++) {
			//cm.playVideoByScript("Pafa2.avi");//38B
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		}
		//else if (status === i++) {
		//	ms.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -378, -163);//22A 0x7 5个[int]画面移动
		//	cm.inGameDirectionEvent_AskAnswerTime(1000);
		//} 

		else if (status === i++) {
            cm.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			//cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			cm.inGameDirectionEvent_AskAnswerTime(1000);
			cm.warp(910090304, 0);
			cm.gainExp(100);
			cm.gainItem(4036523, -5);
			cm.dispose();
			cm.warp(910090304, 0);
        } else {
            cm.dispose();
        }
}

function Edispose(){
	cm.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			//cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			cm.inGameDirectionEvent_AskAnswerTime(1000);
			cm.dispose();
}
