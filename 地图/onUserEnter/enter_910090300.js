/*
 * 古迹猎人剧情1
 * 地图：//'勇士部落 : 废弃研究室' (910090300)
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
			ms.fieldEffect_PlayBGM("Bgm51.img/Pathfinder");//22A 0x7
			ms.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === i++) {
			ms.effect_Text("#fn???? ExtraBold##fs18#勇士部落的某个偏僻角落", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0);
			//0x357 0x3D
			ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_lab/0", 0, 100, -80, 0, 0, 4, 1);//22A 0x17
			ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/door");//22A 0x5 播放声音
			ms.inGameDirectionEvent_AskAnswerTime(5500);
		}
		//else if (status === i++) {
			//ms.fieldEffect_InsertCanvas(1, 255, 240, 240, 1300, 2);//22A 0x15 底图变黄色
			//ms.inGameDirectionEvent_AskAnswerTime(100);
		//} 
		else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} 
		//else if (status === i++) {
			//ms.fieldEffect_InsertCanvas(1, 255, 240, 240, 0, 2);//22A 0x15 底图变黄色
			//ms.inGameDirectionEvent_AskAnswerTime(120);
		//} 
		else if (status === i++) {
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 1000, 0, 0);//22A 0x15
			ms.inGameDirectionEvent_AskAnswerTime(1400);
		} else if (status === i++) {
			ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3");//22A 0x5 播放声音
			ms.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_lab/1", 0, 500, -80, 1, 0, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(2000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_lab/2", 0, 500, -80, -12, 0, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(2000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#没想到荒山中竟然有这种路。", 1013358);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#到底通往什么地方呢？真是越来越让人好奇了。", 1013358);
		}else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction22.img/effect/PF_lab/4", 0, 500, -80, 1, 0, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#看来已经很久没人来了。至少有几百年，甚至更久远。", 1013358);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#是什么人隐藏起来的秘密通道吗？或者只是过了很长时间而被人遗忘的场所？", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#哦……看到尽头了。", 1013358);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("03", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.fieldEffect_ProcessOnOffLayer("04", "Effect/Direction22.img/effect/PF_lab/4", 0, 500, -80, 1, 0, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#这个地方过去好像是什么人的研究室。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#研究的古代文献和遗物，年代好像都非常久远。", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face6#确实都是古代的东西。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#呵呵……竟然还有人对古代遗物感兴趣。跟我估计很谈得来。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#但是那幅插图……", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("04", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.fieldEffect_ProcessOnOffLayer("05", "Effect/Direction22.img/effect/PF_lab/5", 0, 500, -80, 1, 0, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#画的好像是古代的遗迹。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face2#很久以前的研究室，以及比它更久远的遗物和资料……给人一种危险的感觉。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#呵呵……真想快点确认一下。", 1013358);//6E 76 0F 00
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#那里还会有什么有趣的遗物在等待着我呢？", 1013358);//6E 76 0F 00
		}  else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} 
		else if (status === i++) {
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			ms.dispose();
			ms.warp(910090301, 0);
        } else {
            ms.dispose();
        }
}