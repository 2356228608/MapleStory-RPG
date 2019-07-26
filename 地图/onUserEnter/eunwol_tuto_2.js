/*
 * 隐月剧情 - 03
 * 地图：隐藏地图 - 时间神殿回廊2 (927030010)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.sendNextSNoESC("……啊，我就知道会这样。幻影和夜光法师只要一见面就要吵架。也是，他们的性格相差太大了，这也是没办法的事。");
    } else if (status === i++) {
        ms.sendNextSNoESC("在我看来，他们的性格还挺相配的。一个太吵，一个太无趣，刚好可以平衡一下。");
    } else if (status === i++) {
        ms.sendNextSNoESC("啊哈哈，那倒也是。不过估计他们本人听了之后一定不会高兴。啊，他们来了。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 200, 1100, 66);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1364);
    } else if (status === i++) {
        ms.npc_ChangeController(2159442, 770, 50, 0);//14 32 1A 02
        ms.npc_SetSpecialAction(2159442, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.npc_ChangeController(2159443, 970, 50, 0);//4C 32 1A 02
        ms.npc_SetSpecialAction(2159443, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.npc_ChangeController(2159444, 1170, 50, 0);//8D 32 1A 02
        ms.npc_SetSpecialAction(2159444, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 200, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1364);
    } else if (status === i++) {
        ms.sendNextSNoESC("等等，我来处理。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_PushMoveInfo(0, 180, 1100, 66);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(412, 900);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121007/effect", 900, -40, -25);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121007/effect0", 810, -40, -25);
        ms.fieldEffect_PlayFieldSound("eunwolTuto/Use");
        ms.npc_SetSpecialAction(2159442, "hit");
        ms.npc_SetSpecialAction(2159443, "hit");
        ms.npc_SetSpecialAction(2159444, "hit");
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121007/hit/0", 0, -5, -50, 1, 0, 1, 2159442, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121007/hit/0", 0, -5, -50, 1, 0, 1, 2159443, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121007/hit/0", 0, -5, -50, 1, 0, 1, 2159444, 0, 0);
        ms.fieldEffect_PlayFieldSound("eunwolTuto/Hit");
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121020/effect", 900, -40, -25);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121020/effect0", 810, -40, -25);
        ms.fieldEffect_PlayFieldSound("eunwolTuto/Use");
        ms.npc_SetSpecialAction(2159442, "hit");
        ms.npc_SetSpecialAction(2159443, "hit");
        ms.npc_SetSpecialAction(2159444, "hit");
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121020/hit/0", 0, -5, -50, 1, 0, 1, 2159442, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121020/hit/0", 0, -5, -50, 1, 0, 1, 2159443, 0, 0);
        ms.inGameDirectionEvent_Effect("Skill/512.img/skill/5121020/hit/0", 0, -5, -50, 1, 0, 1, 2159444, 0, 0);
        ms.fieldEffect_PlayFieldSound("eunwolTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159442, "die");
        ms.npc_SetSpecialAction(2159443, "die");
        ms.npc_SetSpecialAction(2159444, "die");
        ms.inGameDirectionEvent_AskAnswerTime(2100);
    } else if (status === i++) {
        ms.npc_LeaveField(2159442);
        ms.npc_LeaveField(2159443);
        ms.npc_LeaveField(2159444);
        ms.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.sendNextSNoESC("你打算一直待在这里吗？");
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯，必须有人守着这个路口。反正现在的状态也不是黑魔法师的对手。");
    } else if (status === i++) {
        ms.sendNextSNoESC("那就先进去吧。……让我看看。");
    } else if (status === i++) {
        ms.sendNextSNoESC("嗯！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_AskAnswerTime(100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n战神从他的背影中感到一种不祥之兆。", 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n就好似再也看不到了一样......#fs35#一种预感#fs20#或者#fs35#直觉。", 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.forceStartQuest(38900, "1");
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(927030020, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}