/*
 * 超能力者任务 - 杰的牢骚(22720)
 * 地图：据点 - 总部 (331001000)
 * 任务：杰的牢骚(22720)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("系统全都比较顺畅，这次也似乎并没有什么大的报错。\r\n这段时间累积数据会比较重要，等到数据增多后就行升级。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("那得赶紧准备下一个版本了吧？看你最近的活跃表现，总觉得很快就需要升级版本了吧？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("超.能.力.者.你倒是替我想想最近我的工作量有多大，昨天我就得在三个区的监控视频数据里将你的影子给去掉。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("算我求你了，就算你是想当英雄，能不能拜托你也遮遮你的脸啊？", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("你对遮着脸这件事，是怎么想的？\r\n#b#L1#为什么啊？多麻烦。#l\r\n#L2#实际状况之下我是没那个时间的。#l\r\n#L3#帅气的遮着脸可对这个世界不礼貌啊。#l", 1531001);
    } else if (status === i++) {
        qm.updateInfoQuest(22720, "done=1");
        qm.sendNextNoESC_Bottom("啊……你要这么回答我是吧，真不愧是你的作风。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("如果你真的想要，把你那个搞笑的眼罩借我怎么样？\r\n如果你想要的不是超能力者而是猫人，我倒是不妨戴上一天。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("不可以，就算你是我的朋友，也不许碰我的东西。会传染到外界的细菌的。", 1531001);
    } else if (status === i++) {
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use");
        qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaJay", 0, 500, 800, 0, 12, 5, 0);
        qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m");
        qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
        qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, 800, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("真是的，话说回来，你不在这段期间，愤怒的#b尤娜#k曾经来过，她让我把这个交给你。", 1531001);
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.sendNextNoESC_Bottom("额……这东西一看就知道很没意思啊？难不成是学生会的会议录……？", 1531000);
        qm.gainItem(4034601, 1);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("尤娜应该会在学校里等着，估计等的时间越久，尤娜的愤怒值就会越高的。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("你可不要告诉我，因为你太久没去学校，已经不记得学校的位置了，出去右拐就是。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(去外面找尤娜吧。)#k", 1531000);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC_Bottom("#b#h0##k！！你居然现在才来，真是令人难以置信，我让杰帮我传话都已经是两天前的事情了！！", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("我真的是刚刚才听到他跟我说这件事的，\r\n一听说你在等，我真的是以超新星爆炸的速度奔过来的。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#是……是嘛？", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#嗯。#b(瞧瞧脸色立马就恢复正常了，多可爱啊。)#k", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("嗯，那也没办法了，如果你一开始能够准点地出现在总学生会会议上，也就不会有这种事情了，会议录给我。", 1531002);
    } else if (status === i++) {
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use");
        qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaYuna", 0, 500, 800, 0, 12, 5, 0);
        qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === i++) {
        qm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m");
        qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
        qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, 800, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.forceCompleteQuest(22720);
        qm.gainExp(800);
        qm.gainItem(4034601, -1);
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}
