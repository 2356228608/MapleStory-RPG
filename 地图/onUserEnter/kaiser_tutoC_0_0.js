/*
 * 狂龙剧情 - 11
 * 地图：万神殿东部地区 - 东侧圣殿附近 (940001200)
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
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.npc_ChangeController(3000103, -1400, 0, 1);//00 0D 87 01
        ms.npc_SetSpecialAction(3000103, "summon");
        ms.npc_ChangeController(3000104, -1650, 0, 0);//01 0D 87 01
        ms.npc_SetSpecialAction(3000104, "summon");
        ms.sendNextNoESC("嗯，天气真好！", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("你也太清闲了。我和#h0#已经成为骑士团团员了，你打算什么时候加入骑士团？", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("嘿嘿，我嘛，没有魔力，就不提这些咯。说真的，也许将来我也会有魔力吧？", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("这话你都说了上百遍了额？", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("总之祝贺你们俩！骑士团团员~啊~我也好想当呢！", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("我觉得迪奥不一定非得成为骑士团团员啊？", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("这是什么话！我们结成赫里希安攻击队时，不是发誓要三个人一起成为骑士团团员的吗！", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("那时候没想到你会一直没有魔力啊。", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("哼，你又哪壶不开提哪壶！", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("好了好了，当我没说。我说，我们是不是该准备归队了？", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("呜呜，真心羡慕死你们了。", 3000103);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/0", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯？我忽然有种不好的预感。", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("胡说什么？快回去吧。再耽搁得迟了。", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("不是的……肯定有事。东侧圣殿好像出事了。", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("去看看吧！会是什么事呢？？", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("喂……迪奥。你要相信他胡诌的话吗？", 3000104);
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#的第六感不是很厉害嘛，而且我正好闲着无聊。", 3000103);
    } else if (status === i++) {
        ms.sendNextNoESC("总之我这队长说话就没人肯听的。好吧，一起去吧。", 3000104);
    } else if (status === i++) {
        ms.npc_SetForceMove(3000103, 1, 400, 100);
        ms.npc_SetForceMove(3000104, 1, 400, 100);
        ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/0", 1200, 0, -120, 1, 0, 1, 3000103, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000103);
        ms.npc_LeaveField(3000104);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001210, 0);
    } else {
        ms.dispose();
    }
}