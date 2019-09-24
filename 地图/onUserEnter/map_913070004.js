/*
 * 米哈尔剧情 - 10
 * 地图：秘密地图 - 林伯特家的杂货店 (913070004)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }
    
    if (!ms.isQuestActive(20034)) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
			ms.getEA();
        } else if (status === i++) {
            ms.curNodeEventEnd(true);
            ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            ms.topMsg("林伯特的杂货店");
            ms.topMsg("冒险岛历XXXX年3月11日");
            ms.inGameDirectionEvent_MoveAction(2);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_MoveAction(1);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/5", 2000, 0, -120, 1, -100, 0, 0, 0, 0);
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_MoveAction(2);
            ms.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === i++) {
            ms.inGameDirectionEvent_MoveAction(0);
            ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/6", 2000, 0, -120, 1, -100, 0, 0, 0, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/4", 2000, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/7", 2000, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === i++) {
            ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/8", 2000, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === i++) {
            ms.topMsg("后院好像有人，到后院去看看吧。");
            ms.forceStartQuest(20034);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
            ms.dispose();
        } else {
            ms.dispose();
        }
    }else{
		ms.dispose();
	}
}
