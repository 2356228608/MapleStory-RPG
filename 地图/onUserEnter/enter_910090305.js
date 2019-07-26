/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
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
		if (ms.getQuestStatus(35902) != 1) {
			ms.dispose();
		}
		else if (status === i++) {
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_PlayBGM("Bgm51.img/ThePartemRuins");//22A 0x7
			ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			//ms.inGameDirectionEvent_PushScaleInfo(0,2000,0,-555,-350);//387 0x7
			ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs30##fn????#《遗物》",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\n那是蕴含着诅咒之力的遗物。",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\被古代遗物所吸引的冒险家，在探险的途中发现了那个遗物。",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#……之后便中了诅咒，徘徊在生死的边缘。",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\n好不容易捡回了一条命之后，他开始为了调查遗物而东奔西走……",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#他发现自己的身体出现了两种变化。",1);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			//ms.effect_Text("#fn???? ExtraBold##fs18#片刻后，大本营", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
			//0x357 0x3D
			ms.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/PF_two/0", 0, 300, 0, 0, 1, 4, 1);//22A 0x17
			//ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/down");//22A 0x5 播放声音
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction22.img/effect/PF_two/1", 0, 300, 0, 0, 1, 4, 1);//22A 0x17
			ms.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("01", "", 2, 2000, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(2500);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs30##fn????#《远古弓》",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\n\r\n\r\n被认为是普通刀具的遗物，原来是古代的弓",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#受遗物的影响，可以释放出古代的力量。",1);//387 0x0B
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("01", "", 2, 500, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction22.img/effect/PF_two/2", 0, 500, 0, -80, 1, 4, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		}  else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("02", "", 2, 300, 0, 0, 0, 0, 0);//22A 0x17
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs30##fn????#《诅咒烙印》",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\n\r\n\r\n印在手上的烙印虽然变小了，但并未消失。",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#感觉那个东西在不断消耗生命力。",0);//387 0x0B
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20##fn????#\r\n“必须尽快摆脱这个诅咒才行。“",1);//387 0x0B
		} else if (status === i++) {
			ms.fieldEffect_PlayBGM("Bgm00.img/Silence");//22A 0x7
			ms.inGameDirectionEvent_AskAnswerTime(1200);
		} 
		//else if (status === i++) {
			//ms.inGameDirectionEvent_PushScaleInfo(4000,1000,4000,169,-22);//387 0x7
			//ms.inGameDirectionEvent_AskAnswerTime(1200);
		//} 
		else if (status === i++) {
			ms.effect_Text("#fn???? ExtraBold##fs18#几天后，帕勒坦遗迹附近", 100, 1000, 6, -50, -50, 1, 4, 0, 0, 0);
			//0x357 0x3D
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.fieldEffect_PlayBGM("Bgm51/TheVillageOfKarupa");//22A 0x7
			ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			ms.inGameDirectionEvent_AskAnswerTime(3000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#……又到这里来了吗？", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face6##b（事件是在遗迹中发生的，里面也许能找到解开诅咒的线索。\r\n但是入口紧闭着，无法进入。）#", 1013358);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0##b（那现在能做的事情只有两样。\r\n寻找重新进入遗迹的方法，以及对周围进行调查。）#k", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face0#好的。在正式开始调查之前……\r\n要先准备一下吗？", 1013358);
		} else if (status === i++) {
			ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			
			ms.forceCompleteQuest(35902);
            ms.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家 
			ms.inGameDirectionEvent_AskAnswerTime(1000);
			if(ms.getLevel() < 11){
				for (var i = 0; i < (12-ms.getLevel()); i++) {
					ms.getPlayer().levelUp();
				}
			}
			ms.addPopupSay(9010000, 6000, "#b[向导] 1转#k\r\n已经达到10级，可以进行#b[1转]#k了！\r\n请点击头上灯泡完成#r[转职]#k任务，进行1转吧！\r\n");
			ms.dispose();
			//ms.forceCompleteQuest(35903);
			//ms.warp(910090305, 0);
        } else {
            ms.dispose();
        }
}