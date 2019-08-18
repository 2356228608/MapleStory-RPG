var status = -1;

function action(mode, type, selection) {
    status++;

    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status == 1) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextSNoESC("长老们？");
    } else if (status == 2) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 3) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextSNoESC("孩子们也……");
    } else if (status == 4) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status == 5) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextSNoESC("大家仍然被冰封着……");
    }else if (status == 6) {
		ms.sendNextSNoESC("醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？");
    }else if (status == 7) {
		ms.sendNextSNoESC("……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？");
    }else if (status == 8) {
		ms.sendNextSNoESC("左手可以动...");
    }else if (status == 9) {
		ms.sendNextSNoESC("右手也没问题...");
    }else if (status == 10) {
		ms.sendNextSNoESC("伤全都好了。只是等级……呃呃呃……好想哭……");
    }else if (status == 11) {
		ms.sendNextSNoESC("虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！");
    }else if (status == 12) {
		ms.sendNextSNoESC("为了大家,我必须准备修炼.");
		ms.forceStartQuest(24093);
    }else if (status == 13) {
		ms.sendNextSNoESC("现在去修炼场击败树叶木偶10个.");
    }else if (status == 14) {
		ms.effect_NormalSpeechBalloon("\r\n#fs30#由于剧情问题\r\n请小退再进游戏或者更换一下频道\r\n要不然出现在当前地图无法更换装备.\r\n小退后可正常",1,1,0,4000,0,0);
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.dispose();
		//ms.openNpc(9300010,"刷新角色实例");
    
    }
}
