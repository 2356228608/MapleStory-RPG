/*
 * 米哈尔剧情 - 11
 * 地图：秘密地图 - 杂货店后院 (913070050)
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
        ms.resetMap(ms.getMapId());
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.topMsg("杂货店后院");
        ms.inGameDirectionEvent_Effect("Effect/Direction7.img/effect/tuto/step0/4", 2000, 0, -120, 1, -100, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.emotion(6, 10000);
        ms.sendNextSNoESC("呃！真的有人。那个少年是谁？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("你是谁？迷路了吗？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我找了你好久,终于找到了。拥有光之命运的人。", 1106001);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("你说什么？光之命运？");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("要有礼貌，少年！这位大人是很高贵的！", 1106003);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("啊！你是不久前到店里来的……对了！我想起来了。你问过我认不认识库洛姆，对吧？不久前我在商店的阁楼里发现了他寄来的信。虽然不知道是不是那个人……但林伯特也许认识那个人。等林伯特回来之后……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("库洛姆……他和林伯特没什么关系，倒是和你有关。他就是你的父亲……", 1106001);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("嗯？你说什么？……你说什么？我不记得我父亲是谁。在我很小的时候，他就离开了……");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("他并不是抛弃了你。你的父亲，光之骑士库洛姆因为失去了心爱的妻子而陷入了黑暗。光明和黑暗的差异其实只在一线之间。在黑暗波及到你之前，他把你送到了这里。最终他没能战胜黑暗，最后死去了……", 1106001);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("他救了我？不对，我的人生充满了黑暗。我一直都不知道自己的名字，被关在这个小店里，在心中默默地等待着永远不会回来的父亲。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("光明是从黑暗中诞生的。就像剑的双刃一样……因为一直在黑暗中，现在你才能变成光。跟我走吧。到属于你的地方去。", 1106001);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("等等，女皇陛下。我还不能完全信任这个少年。必须确认一下他是否有成为光之骑士的资格。", 1106003);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("南哈特，你还在怀疑吗……好吧。我同意你的方法，但是不能让他受伤。", 1106001);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("等等！你想干什么？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.spawnMob(9001050, 200, 50);
        ms.forceCompleteQuest(20034);
        ms.forceStartQuest(20035);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
    } else {
        ms.dispose();
    }
}