/*
 * 超能力者任务 - 副会长尤娜的唠叨(22721)
 * 地图：私立英才学校 - 1层走廊 (331002000)
 * 任务：副会长尤娜的唠叨(22721)
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
        qm.sendNext_Bottom("#face3##b#h0##k，你知道最近新闻、社交网站、搜索网站上到处都是你的ID，已经引发热点问题了吗？", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("你这么小声嘀咕做什么？大声点说。", 1531000);
    } else if (status === i++) {
        qm.sendNext_Bottom("#face4#要是被别人听到了怎么办！\r\n一般的英雄都会隐瞒自己的真实身份，自己惴惴不安的，怎么你就搞得周围人跟着受累呢？", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("#face9##fs12#没错。", 1531001);
    } else if (status === i++) {
        qm.sendNext_Bottom("你冷静点，目前也就只有我们三个知道我的真实身份。", 1531000);
    } else if (status === i++) {
        qm.sendNext_Bottom("你也真是的……反正你有件事要帮我去做。\r\n为了体育室维修工程，我需要我们学校100名学生的签名。", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("#face2#当然我们副会长都会做好的吧？", 1531000);
    } else if (status === i++) {
        qm.askMenu_Bottom("我已经拿到了97名学生的签名，剩下3个人的签名你去要吧，#b#h0##k。\r\n#b#L1#知道了，这点事情就帮你做好了。#l\r\n#L2#什么？好麻烦！#l", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("什么状况，你居然也有这么亲切的时候。", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("去学校里帮我要三个学生的签名吧，这点事还是可以做的吧？", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("我会在这里等着的。", 1531002);
    } else if (status === i++) {
        qm.sendNext_Bottom("#b(去学校里找三个学生)#k", 1531000);
    } else if (status === i++) {
        qm.forceStartQuest();
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
        qm.sendNextNoESC_Bottom("签名已经都要回来了吗？辛苦你了。", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face3#那个，#b#h0##k。\r\n现在可不可以不要再继续扮那个危险的英雄了？", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face3#虽说帮助他人真的是很不错的事情，但你的本分是个学生，你是学生会长啊。放下手头该做的事情不做，到处在其他地方闯祸，你觉得在网上看到你的这些情况，我的心情会怎么样？", 1531002);
    } else if (status === i++) {
        qm.askMenuNoESC_Bottom("#face3#你怎么想，#b#h0##k？\r\n#b#L1#安抚尤娜#l\r\n#L2#转移话题#l", 1531002);
    } else if (status === i++) {
        qm.updateInfoQuest(22721, "done1=1");
        qm.sendNextNoESC_Bottom("#face2#哎哟，我们尤娜生气了啊？要是你一直这么生气，你这漂亮的小脸蛋可是会长皱纹的哦。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#哼……", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#这种话你还是说给那些喜欢跟在你屁股后面转的女孩子听吧？", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("那种女孩子好像现在就在我面前啊？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#什么……\r\n我什么时候跟在你屁股后面转了！", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#我记得没错的话，应该是从十岁开始吧？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#那还不是因为你整天闯祸……！", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#嗯……总之，特意去事故现场实在是太危险的举动，\r\n每次看到你的新闻，我就惴惴不安的。", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#你是担心我受伤吗？还是说担心我的粉丝越来越多？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#那当然是！！！\r\n啊，真是的，每次和你对话，总觉得只有我变得越来越奇怪了。", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face10##fs12#没错。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face1#这个你拿去吧！还有至少来学校签到这种事情你得按时按点做吧！就因为你，我这个副会长也跟着遭殃了啊。", 1531002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2##b(我……总有种不安的感觉。)#k", 1531002);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#凯内西斯，你要是每次都这么调戏尤娜，小心日后会后悔哦？", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#这么有趣，你叫我怎么办。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("话说回来，你怎么每次都来插话？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#反正又不是一两回了，\r\n我可是支援你的，远程插话这件事你也得习惯起来了啊。", 1531001);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300);
        qm.inGameDirectionEvent_AskAnswerTime(1600);
//    } else if (status === i++) {
//        qm.inGameDirectionEvent_Monologue("#fs20#\r\n\r\n#fEffect/BasicEff.img/QuestAlert/Default/0#\r\n按下界面左侧的电灯泡，\r\n就可以查看远处抵达的任务。", 1);
//        qm.effect_Voice("Voice3.img/Kinesis/guide_10");
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300);
        qm.inGameDirectionEvent_AskAnswerTime(1600);
    } else if (status === i++) {
        qm.gainItem(2000040, 30);
        qm.forceCompleteQuest();
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}
