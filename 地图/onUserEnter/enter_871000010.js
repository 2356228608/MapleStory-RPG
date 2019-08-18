/**
 * 地图：我的小屋
 * @author 娜娜 871000010
 */
var status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日

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
            //ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            //ms.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			//ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300,0);//创建一个遮布 0x10
            ms.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
			ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
			ms.inGameDirectionEvent_MoveAction(2); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(800);
        } else if (status === i++) {
			ms.inGameDirectionEvent_MoveAction(0); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
			ms.npc_ChangeController(9400928, 3900, 115);
            ms.npc_SetSpecialAction(9400928, "summon");
			ms.fieldEffect_PlayBGM("Bgm00/FloralLife");
            ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#哎呀……你是看了宣传单后来的吗？真的？",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face2#哎呀呀！别站着了，快点坐在这里吧！ ",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face2#虽然你已经看过宣传单了，但你应该知道这不是什么华丽的大宅子哦。它非常小巧，有点朴素但是非常温馨~，真的是很舒适的家哦。",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#请想象一下在结束了疲惫的一天后，躺在床上休息的样子。远处的鸟叫声，从窗子外面吹来的微风。可以在其中舒舒服服地休息！这不就是幸福吗！",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#家是回忆的场所，为了能让新的主人用回忆填满这个地方，家里已经留下了一些~空闲的地方。这样的留白总是让人激动呢。 ",9400920);
		} else if (status === i++) {
			ms.askMenu_Bottom("#face2#这样的房屋只要50万金币！怎么样？现在就马上签合同吧？\r\n#b#L0#我要签合同。#l\r\n#L1#给我一点时间考虑一下。#l\r\n#L2#这个价格是不是太便宜了。#l\r\n#L3#你这话说的有点奇怪啊。#l",9400920);
		}  else if (status === i++) {
			switch(selection){
				case 0://签合同
					ms.sendNextNoESC_Bottom("#face3#嗯~现在想要签合同的人可都排起了长队呢，我可等不了太久。你应该知道这是个千载难逢的机会吧？",9400920);
					break;
				case 1:
					ms.sendNextNoESC_Bottom("#face3#嗯~现在想要签合同的人可都排起了长队呢，我可等不了太久。你应该知道这是个千载难逢的机会吧？",9400920);
					status-=2;
					break;
				case 2:
					ms.sendNextNoESC_Bottom("#face3#啊，啊？你是觉得太便宜了，所以在怀疑吗？…… \r\n虽然我觉得卖房不应该说这些……但是既然你在怀疑，那就没办法了。",9400920);
					status-=2;
					break;
				case 3:
					ms.sendNextNoESC_Bottom("#face3#我的父母都是冒险家。虽然不是像勇士大人这么有名的冒险家，但也是为了冒险岛世界的和平而奋不顾身的人。他们把我和哥哥丢在这里……（抽泣）,但是比起怨恨，我心中更多的是担心和思念。我们已经和他们失去联系很久了……（抽泣）所以我打算卖掉房子去寻找父母。你听说过[抛售]吗？抛！售！",9400920);
					status-=2;
					break;
			}
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face3#哎呀，你这人怎么这么多疑！难道你担心我是把这些话写好之后背下来的吗？！ ",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face2#好的！请在这个合同上签字吧！ ",9400920);
		} else if (status === i++) {
			ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300,0);//创建一个遮布 0x10
			ms.inGameDirectionEvent_AskAnswerTime(1600);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs30##e[蘑菇屋买卖合同]", 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs15#买卖双方就以下标记的不动产按照下述内容结成买卖契约。", 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20#所在地：冒险岛世界金银岛凯兰西亚村蘑菇路1-1", 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20#买卖金额：500,000 金币", 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs20#签约日期："+ year + "/" + month + "/" + day , 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs12#(绝对！绝对！禁止因为变心而退款！)" , 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs15#卖方：艾米" , 0);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("#fs15#买方：#h0#" , 1);
		} else if (status === i++) {
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			ms.inGameDirectionEvent_AskAnswerTime(300);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face1#啊，我本来打算给你能够马上前往家中的#i2630583:##t2630583#，但是背包里似乎没有空间了呢！",9400920);
		} else if (status === i++) {
			ms.sendNextNoESC_Bottom("#face2#请不要担心，即使没有#t2630583#，还有很多可以前往家中的方法！",9400920);
		} else if (status === i++) {
            ms.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/0",0, 900, 0, -80, 12, 4, 0);//添加图层
            ms.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
            ms.sendNextNoESC_Bottom("#face1#第一，点击角色快捷栏的[前往我的小屋]按键后移动。",9400920);
        } else if (status === i++) {
            ms.sendNextNoESC_Bottom("#face1#第二，在我的角色信息栏中点击[前往我的小屋]按键后移动。",9400920);
        } else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);//移动图层
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
            ms.sendNextNoESC_Bottom("#face1#我接下来还有事情，就不能和你一起去了……你应该能找到吧？",9400920);
        } else if (status === i++) {
            ms.sendNextNoESC_Bottom("#face3#那就请好好享受冒险岛生活吧！ 下次再见……#fs8#(别再见)……#fs12#了！",9400920);
        }  else if (status === i++) {
			ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			ms.forceCompleteQuest(500763);
			ms.updateInfoQuest(500763, "name="+ms.getPlayer().getName());
			ms.forceCompleteQuest(64612);
			ms.updateInfoQuest(64612, "housing=4");
			ms.updateInfoQuest(64612, "housing=4;furniture=2");
			ms.forceCompleteQuest(64590);
			ms.forceStartQuest(64591);
			ms.forceCompleteQuest(500767);
			ms.updateInfoQuest(500767, "7=1");
			ms.forceCompleteQuest(500773);
			ms.updateInfoQuest(500773, "askR=1;managerHide=1;bonusTalk=0;s5=0;resetDate=19/08/16;affDown=19/08/16");
            ms.dispose();
			ms.warp(910000000, 0);
        } else {
            ms.dispose();
        }
}