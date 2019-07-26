/*
 * 恶魔剧情 - 19
 * 地图：秘密地图 - 能量提取场2 (931050020)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_ChangeController(2159340, 175, 0, 1);//B2 A7 B8 05
        ms.npc_SetSpecialAction(2159340, "summon");
        ms.npc_ChangeController(2159341, 300, 0, 1);//B3 A7 B8 05
        ms.npc_SetSpecialAction(2159341, "summon");
        ms.npc_ChangeController(2159342, 600, 0, 1);//B4 A7 B8 05
        ms.npc_SetSpecialAction(2159342, "summon");
        ms.npc_SetSpecialAction(2159340, "panic");
        ms.npc_SetSpecialAction(2159341, "panic");
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 0, 1, 2159340, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 0, 1, 2159341, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 0, 1, 2159342, 0, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg2/0", 1500, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
        ms.sendNextNoESC("怎……怎么回事？这是怎么回事？！", 2159340);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg2/1", 2000, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextSNoESC("(……到底是怎么回事？精气几乎全部消失了。旁边的东西……难道是这个东西吸走了我的力量……？！)");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("从……从来没听说过这种东西！", 2159341);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("你们在干什么！为什么要这么做？你们身上感觉到的那种力量……是黑魔法师的力量？！");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("必须消灭掉那些家伙，才能避免被追杀！！", 2159340);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/16", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(372, 0);
        ms.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121006/effect", 0, 0, 0);
        ms.fieldEffect_PlayFieldSound("demonSlayer/31121006");
        ms.inGameDirectionEvent_AskAnswerTime(900);
        ms.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene3");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/17", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.fieldEffect_PlayFieldSound("demonSlayer/31121006h");
        ms.forceStartQuest(23207);
        ms.npc_SetSpecialAction(2159340, "die");
        ms.npc_SetSpecialAction(2159341, "die");
        ms.inGameDirectionEvent_AskAnswerTime(990);
    } else if (status === i++) {
        ms.npc_LeaveField(2159340);
        ms.npc_LeaveField(2159341);
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/13", 2000, 0, -100);
        ms.sendNextPrevNoESC("(很厉害的技术……他们到底是什么人……？)", 2159342);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("(呃……好不容易除掉了他们，但是花费了太多的力量……这是哪里？肯定不是什么友好的地方。快点离开这里吧。)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(990);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/12", 2000, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/4", 2000, 0, -120, 1, 0, 1, 2159342, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159342, -1, 150, 100);
        ms.sendNextSNoESC("(不好。意识有点模糊……要是现在遭到攻击，那就危险了！)");
    } else if (status === i++) {
        ms.sendNextNoESC("等等，镇静。我不想和你战斗。你是谁？为什么会在这种地方……？", 2159342);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("(在那个人身上感觉不到黑魔法师的气息。)\r\n别过来……！");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你这样踉踉跄跄的，在说什么呢？你知道黑色之翼对你做了什么吗？旁边的机器是能量传送装置……黑色之翼在吸取你的力量。", 2159342);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("(能量传送装置……？是这个东西吗？黑色之翼是什么？搞不明白……到底是怎么回事？)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg0/13", 2000, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("你是谁？怎么会……咳咳，知道这种事情？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我是反抗者的工作员J，和黑色之翼是敌对关系。虽然不清楚具体的情况，但我不是坏人，不会和受伤的人战斗的。你的状态看上去很不好，需要我帮忙……", 2159342);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("怎么会这样……力量……现在……没有……");
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(379, 0);
        if (ms.getPlayer().getGender() == 0) {
            ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/fallMale", 0, 0, 0);
        } else {
            ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/fallFemale", 0, 0, 0);
        }
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/13", 2000, 0, -100, 1, 0, 1, 2159342, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
        ms.npc_LeaveField(2159342);
        ms.warp(931050030, 0);
        ms.dispose();
    }
}