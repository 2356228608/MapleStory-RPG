/*
 * 尖兵剧情 - 09
 * 地图：秘密研究所 - 机库 (931050940)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(2159386, 350, 30, 1); //37 2E B6 05
        ms.npc_SetSpecialAction(2159386, "summon");
        ms.npc_ChangeController(2159382, 250, 30, 1); //38 2E B6 05
        ms.npc_SetSpecialAction(2159382, "summon");
        ms.npc_ChangeController(2159385, 480, 30, 1); //3A 2E B6 05
        ms.npc_SetSpecialAction(2159385, "summon");
        ms.npc_ChangeController(2159427, 50, 30, 0);  //3B 2E B6 05
        ms.npc_SetSpecialAction(2159427, "summon");
        ms.npc_ChangeController(2159427, 0, 30, 0);   //3D 2E B6 05
        ms.npc_SetSpecialAction(2159427, "summon");
        ms.inGameDirectionEvent_PushMoveInfo(0, 150, 200, 22);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159427, "die");
        ms.inGameDirectionEvent_AskAnswerTime(120);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159427, "die");
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.npc_LeaveField(2159427);
        ms.inGameDirectionEvent_AskAnswerTime(120);
    } else if (status === i++) {
        ms.npc_LeaveField(2159427);
        ms.sendNextNoESC("那些家伙，真是没完没了。", 2159386);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("接到报告说发现了秘密研究所，所以想潜入进来看看。看来这条鱼比想象的要大。", 2159382);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("这里的防御这么强，反倒让人很想看看里面到底藏着什么东西？我一定要让他们的狐狸尾巴露出来。", 2159385);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("贝尔，这都什么时候了，还说得这么轻松……", 2159382);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, 2159382, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.npc_LeaveField(2159382);
        ms.npc_ChangeController(2159382, 250, 30, 0); //91 36 B6 05
        ms.npc_SetSpecialAction(2159382, "summon");
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/12", 1200, 0, -120, 1, 0, 1, 2159382, 0, 0);
        ms.npc_SetSpecialAction(2159382, "catched");
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 1, 0, 1, 2159386, 0, 0);
        ms.npc_SetForceMove(2159386, 1, 30, 100);
        ms.inGameDirectionEvent_AskAnswerTime(2160);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159386, -1, 2, 100);
        ms.npc_LeaveField(2159382);
        ms.npc_ChangeController(2159383, 270, 30, 1);
        ms.npc_SetSpecialAction(2159383, "summon");
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120, 1, 0, 1, 2159385, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120, 1, 0, 1, 2159385, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.npc_ChangeController(2159377, -700, 30, 0);
        ms.npc_SetSpecialAction(2159377, "summon");
        ms.npc_ChangeController(2159378, -800, 30, 0);
        ms.npc_SetSpecialAction(2159378, "summon");
        ms.sendNextSNoESC("按照命令，攻击目标。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, 2159383, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextNoESC("离开吉格蒙特！", 2159385);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(4, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120);
        ms.fieldEffect_PlayBGM("Bgm30.img/thePhoto");
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextSNoESC("呃，头……头好痛。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/memory/0", 3900, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(3900);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 900, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextSNoESC("刚才那是什么？我想起了从没见过的场面。心里这种郁闷的感觉是什么……。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 900, 0, -120, 1, 0, 1, 2159383, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159377, 1, 650, 100);
        ms.inGameDirectionEvent_AskAnswerTime(150);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159378, 1, 650, 100);
        ms.inGameDirectionEvent_PushMoveInfo(0, 200, -450, 43);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(3251);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 80, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(6846);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯？你在干什么？快去抓住那个……不，先把剩下的家伙全部抓回来！", 2159377);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120, 1, 0, 1, 2159386, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(810);
    } else if (status === i++) {
        ms.sendNextNoESC("……贝尔！现在必须先逃走。", 2159386);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("吉格蒙特怎么办？", 2159385);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("光靠我们的力量不行！必须召集同伴们一起过来！哎呀！", 2159386);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smog", 3300, 550, 0, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg2/14", 1200, 120, -260, 1, 0, 1, 0, 0, 1);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_LeaveField(2159386);
        ms.npc_LeaveField(2159385);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 1500, 0, -120, 1, 0, 1, 2159377, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(840);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/smogEnd", 0, 550, 0, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1020);
    } else if (status === i++) {
        ms.sendNextNoESC("不能放过那些家伙！", 2159377);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("尖兵！抓住那个反抗者，别让他逃走！维丽尔！你和我去追那些家伙！", 2159377);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159377, 1, 600, 100);
        ms.npc_SetForceMove(2159378, 1, 600, 100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 900, 0, -120);
        ms.sendNextSNoESC("刚才那个，到底是什么呢……。");
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.npc_LeaveField(2159383);
        ms.npc_LeaveField(2159377);
        ms.npc_LeaveField(2159378);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(931050950, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
