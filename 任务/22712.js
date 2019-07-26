/*
 * 超能力者任务 - code I : 收集身体数据2(22712)
 * 地图：据点 - 总部 (331001000)
 * 任务：code I : 收集身体数据2(22712)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        if (status === 1) {
            qm.sendOk_Bottom("我准备的可是你之前一直喜欢喝的饮料，这段时间难道你的喜好变了？", 1531001);
            qm.dispose();
            return;
        }
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext_Bottom("所有一切都好像顺利启动了。");
    } else if (status === i++) {
        qm.askYesNo_Bottom("今天的测试做到这个地步应该可以了，最后我准备了爽口的运动饮料，一边喝一边休息一会吧，我会记录你体内身体疲劳物质正常化的过程的。");
    } else if (status === i++) {
        qm.sendNext_Bottom("饮料已经放在你的背包里了，就像装备道具一样，喝饮料的时候也是双击就好，等你的身体指数全部正常之后，我们再说吧。");
    } else if (status === i++) {
        qm.forceStartQuest();
        qm.gainItem(2000040, 1);
        qm.effect_OnUserEff("UI/tutorial.img/kinesis/3");
        qm.effect_Voice("Voice3.img/Kinesis/guide_07");
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext_Bottom("好吧，那最后再检查一下身体状态。");
    } else {
        if (qm.getPlayerStat("RAP") > 0) {
            rap(mode, type, selection);
        } else if (qm.getPlayerStat("RSP") > 0) {
            rsp(mode, type, selection);
        } else {
            qm.gainExp(600);
            qm.forceCompleteQuest(22712);
            qm.forceCompleteQuest(22715);
            qm.sendNext_Bottom("只是休息了片刻，这么快就恢复了，你的体力可真够好的啊。");
            qm.dispose();
        }
    }
}

function rap(mode, type, selection) {
    var i = 0;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext_Bottom("#face3#不过凯内西斯，\r\n你好像还有没提升的能力啊？");
    } else if (status === i++) {
        qm.sendNext_Bottom("#face2#升级后#g基本能力值#k和#g技能等级#k都可以提升，有机会最好就立刻提升。");
    } else if (status === i++) {
        qm.sendNext_Bottom("#face2#因为你使用念力，所以最好是在#g智力(INT)#k上进行投资，如果你觉得麻烦，也可以使用自动分配。");
    } else if (status === i++) {
        qm.sendNext_Bottom("哎，好麻烦，想要变得再聪明也不容易。\r\n\r\n#b(使用所有AP提升能力后再来对话。)#k");
    } else if (status === i++) {
        qm.topMsg("升级后就可以提升能力值和技能等级了。");
        qm.effect_OnUserEff("UI/tutorial.img/kinesis/5");
        qm.effect_Voice("Voice3.img/Kinesis/guide_03");
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function rsp(mode, type, selection) {
    var i = 0;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNext_Bottom("#face3#话说回来凯内西，你好像忘了件事，这倒不像是你的风格。\r\n你并没有将#b技能等级#k全都提升啊？");
    } else if (status === i++) {
        qm.sendNext_Bottom("#face2#你可以按照自己的喜好将技能添加到快捷栏中，这点你也知道的吧？");
    } else if (status === i++) {
        qm.sendNext_Bottom("#face2#是，那就按你说的办。\r\n\r\n#b(使用所有SP提升技能等级后再来对话。)#k");
    } else if (status === i++) {
        qm.openUIWithOption(0x03, 142001001);
        qm.topMsg("升级后就可以提升能力值和技能等级了。");
        qm.effect_OnUserEff("UI/tutorial.img/kinesis/5");
        qm.effect_Voice("Voice3.img/Kinesis/guide_03");
        qm.dispose();
    } else {
        qm.dispose();
    }
}
