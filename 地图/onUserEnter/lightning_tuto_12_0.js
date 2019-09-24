/*
 * 夜光剧情 - 20
 * 地图：秘密地图 - 拉尼娅的家前院 (910141020)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/1");
        ms.npc_ChangeController(1032201, 340, 0, 1);
        ms.npc_SetSpecialAction(1032201, "summon");
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("天气很好呢，这种天气应该带上盒饭去野餐才对。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("那我买点做盒饭的材料吧？");
    } else if (status === i++) {
        ms.sendNextNoESC("好，买适合煮着吃的蔬菜和热乎乎的面包就行。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("(真想快点回来，吃着拉尼娅做的盒饭，好好休息啊。那样心里莫名的憋闷会不会好一点呢？)");
    } else if (status === i++) {
        ms.npc_SetForceMove(1032201, -1, 400, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("早点回来。我们在家等你。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯，我去去就回，等我哦。");
    } else if (status === i++) {
        ms.sendNextSNoESC("(如果能一直和拉尼娅这样幸福的生活下去……嗯？突然更疼了。怎么回事？！)");
    } else if (status === i++) {
        ms.sendNextNoESC("……夜光法师？", 1032201);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(4, 6000);
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/floodEffect/0", 6000, 0, 0, 1, -5, 0, 0, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg1/1", 1500, 0, -100);
        ms.npc_SetForceMove(1032201, -1, 50, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
        ms.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2");
        ms.effect_PlayMusic("Bgm26.img/Flood");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg1/2", 2000, 0, -120, 1, 0, 1, 1032201, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/BalloonMsg1/3", 2000, 0, -170);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetFaceOff(20071);
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/floodEffect/1", 0, 0, 0, 1, -5, 0, 0, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/floodEffect/2", 0, 0, 0, 1, -6, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_LeaveField(1032201);
        ms.warp(910141060, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
