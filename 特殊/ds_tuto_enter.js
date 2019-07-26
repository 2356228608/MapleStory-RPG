var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.forceCompleteQuest(23204);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        cm.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.inGameDirectionEvent_AskAnswerTime(10);
    } else if (status == 1) {
        cm.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.sendNextNoESC("这不是#h0#吗？外游怎么样啊？不惜违抗命令出去，应该很快乐吧？你的家人都还好吧？替我跟她们问声好啊！哈哈哈哈！", 2159308);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/0");
    } else if (status == 2) {
        cm.sendNextPrevSNoESC("……没时间和你拌嘴，让开，#r#p2159309##k！");
    } else if (status == 3) {
        cm.sendNextPrevNoESC("擅离职守，违抗命令……还用这种充满杀气的眼神盯着我。还想见黑魔法师？那可不行。", 2159308);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/1");
    } else if (status == 4) {
        cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/14", 2000, 0, -100);
        cm.inGameDirectionEvent_OneTimeAction(332, 0);
        cm.fieldEffect_PlayFieldSound("demonSlayer/31111003");
        cm.inGameDirectionEvent_Effect("Skill/3111.img/skill/31111003/effect", 0, 0, 0);
        cm.npc_SetSpecialAction(2159309, "teleportation", 1);
        cm.inGameDirectionEvent_AskAnswerTime(570);
    } else if (status == 5) {
        cm.npc_LeaveField(2159309);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status == 6) {
        cm.npc_ChangeController(2159309, 180, 50);
        cm.npc_SetSpecialAction(2159309, "summon");
        cm.inGameDirectionEvent_AskAnswerTime(360);
    } else if (status == 7) {
        cm.sendNextNoESC("哦哦~这可是赤裸裸的背叛啊。你还没抛弃人类的心吗？居然为了这种小事大张旗鼓，真是无聊！", 2159308);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/2");
    } else if (status == 8) {
        cm.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/balloonMsg1/15", 2000, 0, -100);
        cm.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        cm.inGameDirectionEvent_OneTimeAction(371, 0);
        cm.fieldEffect_PlayFieldSound("demonSlayer/31121001");
        cm.inGameDirectionEvent_Effect("Skill/3112.img/skill/31121001/effect", 0, 0, 0, 0, 0);
        cm.npc_SetSpecialAction(2159309, "teleportation", 1);
        cm.inGameDirectionEvent_AskAnswerTime(570);
    } else if (status == 9) {
        cm.npc_LeaveField(2159309);
        cm.inGameDirectionEvent_AskAnswerTime(870);
    } else if (status == 10) {
        cm.npc_ChangeController(2159309, 500, 50);
        cm.npc_SetSpecialAction(2159309, "summon");
        cm.sendNextNoESC("像你这种无法领悟那位伟大大人真正意图的家伙，我实在是失望致极啊。警卫兵，出来把这个叛逆者干掉！", 2159308);
        cm.effect_Voice("Voice.img/DemonSlayertutorial_B/3");
    } else {
        cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.topMsg("请击倒所有的警卫吧！");
        cm.enableActions();
        cm.fieldEffect_PlayFieldSound("demonSlayer/summonGuard");
        cm.spawnMonster(9300455, 450, 71);
        cm.spawnMonster(9300455, 400, 71);
        cm.spawnMonster(9300455, 350, 71);
        cm.forceStartQuest(23205);
        cm.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene4");
        cm.dispose();
    }
}