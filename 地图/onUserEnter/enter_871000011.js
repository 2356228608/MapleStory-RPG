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
			//ms.fieldEffect_PlayBGM("Bgm00.img/Silence");
			ms.inGameDirectionEvent_MoveAction(2); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(4000);
        } else if (status === i++) {
			ms.inGameDirectionEvent_MoveAction(0); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
			ms.sendNextS_Bottom("#b…?");
		} else if (status === i++) {
			ms.sendNextS_Bottom("#b难道是我走错了？");
		} else if (status === i++) {
			ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/whatl", 108, 0, 0,0,1);
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/whatl", 108, 0, 0,0,1);
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300,0);//创建一个遮布 0x10
			ms.inGameDirectionEvent_Monologue("非常#fs30#小巧#fs20#，有点#fs30#朴素#fs20#……", 1);
		} else if (status === i++) {
			ms.inGameDirectionEvent_Monologue("为了让#fs20#新的主人的用回忆填满这个地方，\r\n#fs30#家里已经留下了#fs20#一些~#fs30#~空闲的地方。", 1);
		} else if (status === i++) {
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/shade", 101, 0, 0,0,1);
			ms.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			ms.sendNextS_Bottom("#b……我的50万金币！！！");
		} else if (status === i++) {
			ms.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/crash");
			ms.sendNextS_Bottom("#b……");
		} else if (status === i++) {
			ms.inGameDirectionEvent_MoveAction(7); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
			ms.npc_ChangeController(9400921, 72, 120);
            ms.npc_SetSpecialAction(9400921, "summon");
			//ms.fieldEffect_PlayBGM("Bgm00/FloralLife");
            ms.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			ms.sendNextS_Bottom("#face3#吓死我了，你是谁啊？");
		} else if (status === i++) {
			ms.sendNext_Bottom("#b嗯……我是刚搬过来的人。",9400921);
		} else if (status === i++) {
			ms.sendNextS_Bottom("#face3#搬家？嗯……我还以为这房屋没有主人呢，看来不是啊。",9400921);
		} else if (status === i++) {
			ms.sendNext_Bottom("#face1#我是住在旁边的人，叫埃尔宾。相见就是缘分，既然我们成了邻居，那就好好相处吧。很高兴见到你！ ",9400921);
		} else if (status === i++) {
			ms.sendNextS_Bottom("#b我也很高兴……虽然不知道这个房屋能不能住人，但是以后也请多多指教了。");
		} else if (status === i++) {
			ms.sendNext_Bottom("#face2#嗯~~看起来很小巧，你一个人生活的话应该够了啊？只要整理一下就好了！我会帮忙的，你不用担心。 ",9400921);
		} else if (status === i++) {
			ms.sendNext_Bottom("#face1#首先把这个破椅子拿开吧。 ",9400921);
		} else if (status === i++) {
			ms.sendNextS_Bottom("#face1#这个我来收拾，你把床搬到日照充足的地方去吧？");
		} else if (status === i++) {
            ms.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2",0, 900, 0, -80, 12, 4, 0);//添加图层
            ms.inGameDirectionEvent_AskAnswerTime(300);
        } else if (status === i++) {
			ms.sendNext_Bottom("#face1#点击我的小屋菜单的#i3801392##t3801392#就能进入可以搬动家具的放置模式。",9400921);
		}  else if (status === i++) {
			ms.sendNext_Bottom("#face1#在放置模式状态中，点击床后再点击你想要放置的位置即可！",9400921);
		} else if (status === i++) {
			ms.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);//移除图层
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
			ms.sendNext_Bottom("#face2#你要不要试试？将床放到你想要放的地方后再和我对话吧。",9400921);
        } else if (status === i++) {
			ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			ms.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);//创建一个遮布 0x10
			//ms.forceCompleteQuest(500763);
            ms.dispose();
			//ms.warp(910000000, 0);
        } else {
            ms.dispose();
        }
}