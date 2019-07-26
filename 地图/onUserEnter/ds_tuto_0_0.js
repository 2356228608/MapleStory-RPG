/*
 * 恶魔剧情 - 02
 * 地图：秘密地图 - 时间神殿回廊1 (927000000)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
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
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.teachSkill(30011109, 1, 1); //恶魔之翼
        ms.teachSkill(30010110, 1, 1); //恶魔跳跃
        ms.teachSkill(30010185, 1, 1); //恶魔之血
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_ChangeController(2159307, 1430, 69, 1);
        ms.npc_SetSpecialAction(2159307, "summon");
        ms.sendPyramidEnergy("mastema", "6471518");
        ms.fieldEffect_ScreenMsg("demonSlayer/back");
        ms.fieldEffect_ScreenMsg("demonSlayer/text0");
        ms.inGameDirectionEvent_AskAnswerTime(500);
        ms.spawnPortal();
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text1");
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text2");
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text3");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text4");
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text5");
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text6");
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg("demonSlayer/text7");
        ms.inGameDirectionEvent_AskAnswerTime(5500);
    } else if (status === i++) {
        ms.sendNextNoESC("军团长！这段时间联系都没有，你到哪儿去了？你也知道，#p2159309#老是喜欢挑我的毛病，经常为难我……", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("真让人气愤。你去时间神殿抓到了女神，他一定是在嫉妒你。哼！#p2159309#做的事情只不过是蒙蔽了女神的眼睛而已，而且还是利用原来的地位！", 2159307);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.sendNextNoESC("嗯？……平时的话，你应该会责备我，让我别说这种废话的啊……发生什么事了吗？我现在才发现，你的脸色好像非常不好……有什么地方不舒服吗？在之前的战斗中受伤了吗？！", 2159307);
    } else if (status === i++) {
        ms.sendNextSNoESC("……#p2151009#。你……在黑魔法师和我之中，你是谁的部下？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("嗯？干嘛突然问这种问题……？", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("请你回答。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("当……当然是效忠于那位伟大的人。但是自从你救了我之后，我就决定为你献出生命……！你不是知道吗？！为什么要问这个……？", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("……我想拜托你一件事。");
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("请帮我把这封信……交给他们，被称为#r英雄#k的人。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("嗯？为什么要把这个交给他们……光是你这段时间不在，可能就已经不太好了。如果和他们接触的事情被人知道，你一定会背上背叛黑魔法师的污名！一定会那样的！你在想什么啊，军团长！", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("……我已经不再是军团长了。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("难道……你背叛了黑魔法师？！原来比谁都忠诚的你？！占领时间神殿才刚刚不久！现在应该是领取奖励的时候……为什么……为什么？", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("……没时间了。如果你觉得太为难，就算了……我不想和你战斗。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("没什么为难的！我只是担心你……！", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("家人们你想怎么处理呢？！这样的话，家人们也许会受到危害……！", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("不要再说了！这件事就说到这里！");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("……为什么……难道……难道他们出了什么事……？", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("你又这样……不说话了……好吧，你本来就不喜欢说这些。", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("好的。我就是拼了命，也会把这封信交给他们。", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("对不起，#p2151009#……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("用不着道歉。我的生命是为你而存在的。你能把这件事交给我，我感到很高兴。", 2159307);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("既然接到了命令，我马上就走。希望你能实现自己的目标……", 2159307);
    } else if (status === i++) {
        ms.npc_SetSpecialAction(2159307, "teleportation");
        ms.inGameDirectionEvent_AskAnswerTime(720);
    } else if (status === i++) {
        ms.npc_LeaveField(2159307);
        ms.enableActions();
        ms.sendNextSNoESC("(真是谢谢你了，#p2151009#。)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.curNodeEventEnd(true);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.enableActions();
        ms.warp(927000080, 0);
        ms.enableActions();
        ms.dispose();
    } else {
        ms.dispose();
    }
}
