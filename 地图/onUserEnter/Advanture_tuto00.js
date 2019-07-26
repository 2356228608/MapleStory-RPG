/*
 * 冒险家剧情 - 01
 * 地图：陌生空间 - 黑暗 (4000000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            ms.curNodeEventEnd(true);//角色站立方向信息
            ms.setInGameDirectionMode(true, true);  //屏蔽/解锁操作台 true = 锁 false = 解
            ms.setStandAloneMode(true);       //屏蔽/解锁 剧情其他玩家
            ms.inGameDirectionEvent_MoveAction(0); //位置信息和头顶动画信息 0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(1000);   //延时(毫秒)
            break;
        case 1:
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/BalloonMsg0/0", 2100, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2100); //延时(毫秒)
            break;
        case 2:
            ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(420);  //延时(毫秒)
            break;
        case 3:
            ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(420);  //延时(毫秒)
            break;
        case 4:
            ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_AskAnswerTime(420);  //延时(毫秒)
            break;
        case 5:
            ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
            ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 2100, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2100); //延时(毫秒)
            break;
        case 6:
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/BalloonMsg0/1", 2100, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2100); //延时(毫秒)
            break;
        case 7:
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, -300, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 0, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 300, 0, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/key/1", 3000000, 540, 70, 1, 0, 1, 0, 1, 0);
            ms.inGameDirectionEvent_AskAnswerTime(1200); //延时(毫秒)
            break;
        case 8:
            ms.inGameDirectionEvent_Effect("Effect/Direction3.img/effect/tuto/BalloonMsg0/2", 2100, 0, -100);
            ms.inGameDirectionEvent_AskAnswerTime(2100); //延时(毫秒)
            break;
        case 9:
            ms.topMsg("按[←]、[→]键，可以进行移动。");
            ms.inGameDirectionEvent_AskAnswerTime(3000); //延时(毫秒)
            break;
        case 10:
            ms.topMsg("移动到有传送口的地点后按[↑]键，可以移动至下一地图。");
            ms.forceStartQuest(32200);
            ms.forceCompleteQuest(32200);
            ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
			ms.setStandAloneMode(false);       //屏蔽/解锁 剧情其他玩家
			ms.dispose();
			ms.getEA();
            break;
        default:
            ms.dispose();
            break;
    }
}
