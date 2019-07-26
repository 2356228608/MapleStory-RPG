/*
 * 夜光剧情 - 02
 * 地图：秘密地图 - 时间神殿前狼藉的空地 (927020000)
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
        ms.sendNextSNoESC("天空作美。今天天气很合适决战。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(120);
    } else if (status === i++) {
        ms.sendNextSNoESC("下雨天可怜兮兮的等人，可不是什么好习惯。");
    } else if (status === i++) {
        ms.npc_ChangeController(2159353, 1210, 10, 1);
        ms.npc_SetSpecialAction(2159353, "summon", 0);//39 13 FF 01 06 00 73 75 6D 6D 6F 6E 00 00 00 00 00
        ms.npc_SetSpecialAction(2159353, "summon", 1);//39 13 FF 01 06 00 73 75 6D 6D 6F 6E 00 00 00 00 01
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextSNoESC("你来晚了。即使是世界上最棒的怪盗，也无法偷取时间啊。");
    } else if (status === i++) {
        ms.sendNextNoESC("嗯，反正对方还没来，你这家伙算是来的早了。漫长的战斗今天就要结束了，有什么好着急的呢？怎么样。有信心吗？", 2159353);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("自信不是要获胜后才能感觉的嘛。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("这种时候还耍嘴皮子。就是因为这样，一开始才不喜欢你啊。", 2159353);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("你这狡猾的家伙，还真是不会说话。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("也是，反正我们之间唯一的共同点就是互相不顺眼了。话说回来，让我们来的弗里德那家伙究竟是怎么回事。他，是不是有什么不顺心的事啊？", 2159353);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("不过是头疼怎么才能让5个人配合的最好罢了。也有可能和每个人关系都太好了，希望所有人能够高兴。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("就算这样，弗里德不是还没分配好嘛。不过我觉得，弗里德没我想象的那么简单。", 2159353);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("也许吧。闲聊到此为止。空气凝结起来了。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("有趣的家伙。好吧，不扯闲话了。下次见的时候一起去问问弗里德吧。前提是不要在这里耽误太久。", 2159353);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159353, "teleportation");
        ms.inGameDirectionEvent_AskAnswerTime(840);
    } else if (status === i++) {
        ms.npc_LeaveField(2159353);
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextSNoESC("现在就剩最后一步了。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.npc_ChangeController(2159354, 128, 10, 0);
        ms.npc_SetSpecialAction(2159354, "summon");
        ms.sendNextNoESC("站住。这里是你我的战场。", 2159354);
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 450, -200, 18);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1938);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(3500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("你所具备的光之力量，对精灵来说就好像温暖的阳光一样。所以一想到我必须在这里干掉你，心里很不是滋味啊。", 2159354);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("这话可不像是你这种给黑魔法师冲锋陷阵，破坏世界的疯狂精灵说的。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("如果全心全意追求自己的梦想是疯了的话，那么我就是疯了。但是你，还有这世界上的一切，不是都疯了吗？", 2159354);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("不要狡辩了， #p2159354#！");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("真是对牛弹琴。那就拿出你的本事来吧。", 2159354);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159354, "special");
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Special1");
        ms.inGameDirectionEvent_AskAnswerTime(1600);
    } else if (status === i++) {
        ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Special2");
        ms.inGameDirectionEvent_AskAnswerTime(2280);
    } else if (status === i++) {
        ms.npc_ChangeController(2159355, 0, 10, 0);
        ms.npc_SetSpecialAction(2159355, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status === i++) {
        ms.npc_LeaveField(2159354);
        ms.sendNextNoESC("你，还得感谢你让事情变得简单了呢，谢谢啊。", 2159355);
    } else if (status === i++) {
        ms.sendNextSNoESC("#p2159355#！连同伴都要伤害吗？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(443, 540);
        ms.inGameDirectionEvent_Effect("Skill/2711.img/skill/27111100/prepare", 540, -40, -25);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Use");
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159355, "barrier");
        ms.inGameDirectionEvent_AskAnswerTime(450);
    } else if (status === i++) {
        ms.inGameDirectionEvent_OneTimeAction(444, 3000);
        ms.inGameDirectionEvent_Effect("Skill/2711.img/skill/27111100/keydown", 3000, -40, -25);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Loop");
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Loop");
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Loop");
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(270);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0, 1, 0, 1, 2159355, 0, 0);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/Hit");
        ms.inGameDirectionEvent_AskAnswerTime(540);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Skill/2711.img/skill/27111101/keyedownend", 0, -40, -25);
        ms.fieldEffect_PlayFieldSound("LuminousTuto/End");
        ms.inGameDirectionEvent_AskAnswerTime(600);
    } else if (status === i++) {
        ms.sendNextNoESC("这种程度算什么。不过时间到了。可惜啊，只能下次再解决你这家伙了。", 2159355);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("什么声音？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("没时间和你玩了。这世界上，已经没什么我要做的了，哈哈哈。", 2159355);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159355, "teleportation");
        ms.inGameDirectionEvent_AskAnswerTime(450);
    } else if (status === i++) {
        ms.npc_LeaveField(2159355);
        ms.sendNextSNoESC("吸收古瓦洛的力量后，离开战斗了……？还说什么#b'这世界'#k，一定有阴谋。不过多亏了你，我省的麻烦了。现在就集中解决黑魔法师吧。先出发的同伴们应该已经到时间神殿那头了吧。我们必须尽快与他们会合。");
    } else if (status === i++) {
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(927020010, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
