/*
 * 隐月剧情 - 05
 * 地图：隐藏地图 - 黑魔法师之房 (927030020)
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
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.npc_ChangeController(2159449, 215, -85, 0);
        ms.npc_SetSpecialAction(2159449, "summon");
        ms.inGameDirectionEvent_PushMoveInfo(0, 400, 215, -85);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1310);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n情况不妙。", 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n黑魔法师的力量要比想象中还要强大。", 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n看来光靠他们的力量根本无法铲除黑魔法师。", 1);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Monologue("\r\n现在，办法只有一个……", 1);
    } else if (status === i++) {
        ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextNoESC("(已经将5个封印全部启动了。现在要怎么做呢？)", 2159467);
    } else if (status === i++) {
        ms.sendNextNoESC("(现在剩下的事情，就是将时间的力量从黑魔法师身上抽出来。当然，必须满足一个小小的条件。)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(条件？什么条件？)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(要想启动时间封印，需要付出一个人的所有时间，也就是'#r#e存在#k#n`。坦白说，就相当于祭物或者代价。啊，你不用表现出那种表情，这事由我负责。)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(别废话！为什么由你去做？)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(是我制造的，当然应该我来。让我也当一次主人公吧。每次都跟在你们后面，我已经厌倦了。)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(在这种状况下还能开玩笑？绝对不可以。还不如我去。我已经没什么可失去的了。)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(夜光法师，我知道你的心意。但是，这……)", 2159445);
    } else if (status === i++) {
        ms.sendNextSNoESC("(还是我来吧。)");
    } else if (status === i++) {
        ms.sendNextNoESC("(哈，怎么连你都来掺和？这可是关系到冒险岛世界的命运的事情。不能感情用事。)", 2159445);
    } else if (status === i++) {
        ms.sendNextSNoESC("(所以才应该让我来。弗里德，以你现在的状态，估计很难承受住封印。这一点你应该最清楚。)");
    } else if (status === i++) {
        ms.sendNextNoESC("(……)", 2159445);
    } else if (status === i++) {
        ms.sendNextNoESC("(所以说我……)", 2159445);
    } else if (status === i++) {
        ms.sendNextSNoESC("(夜光法师，你还有更重要的事情要做。那就是启动封印。为了封印黑魔法师，需要你拥有的光的力量。这是只有你才能做到的事情。这你应该知道吧？)");
    } else if (status === i++) {
        ms.sendNextNoESC("(不过这毕竟要牺牲一个人呀！做祭物！这和去死有什么区别？！)", 2159445);
    } else if (status === i++) {
        ms.sendNextSNoESC("(如果必须有人去做的话，由我来做最合适。我没有需要守护的族人，也没有心爱的家人。虽然被称作祭品，感觉有点不太舒服。)");
    } else if (status === i++) {
        ms.sendNextSNoESC("(现在没时间去说什么伤感的话了。那个等以后在黄泉中再见之后再说吧。)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_SetForceMove(2159449, -1, 180, 100);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg0/0", 0, 410, -210, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg0/1", 0, 410, -180, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction15.img/effect/story/BalloonMsg0/2", 0, 0, -100, 1, 0, 1, 2159449, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/Teleport", 0, 0, 0, 1, 0, 1, 2159449, 0, 0);
        ms.npc_LeaveField(2159449);
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
        ms.effect_OnUserEff("Effect/BasicEff.img/Teleport");
    } else if (status === i++) {
        ms.sendNextNoESC("好的，开始吧？", 2159445);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.updateInfoQuest(38900, "2");
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(927030030, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}