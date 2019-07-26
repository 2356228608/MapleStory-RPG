/*
 * 超能力者任务 - 杰的呼叫(22725)
 * 地图：据点 - 总部 (331001000)
 * 任务：杰的呼叫(22725)
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
        qm.sendNextNoESC_Bottom("#face9#凯内西斯，如果你的事情结束了，希望能再回来一趟，我好像发现了一件更有趣的事情。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("到底发现了什么？能让杰感兴趣的事，应该是大楼一楼有了著名面包房这种事情。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#是有关之前怪物的事情。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#……说说看，你找到什么线索了吗？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#嗯，这个事你亲自过来听一听应该会更快。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face9#来的时候帮我带个甜瓜冰淇淋……开玩笑的，今天我已经摄取了足够多的糖了。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(回到据点，去找杰对话)#k", 1531000);
    } else if (status === i++) {
        qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;kinetuto=1;E1=1;kinetuto2=1;E2=1;E3=1");
        qm.forceStartQuest(22725);
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
        qm.sendNextNoESC_Bottom("凯内西斯, 你的手应该洗干净了吧？\r\n听说光是认真洗手, 就已经能够预防大部分的传染病了。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("别再跟我提这些公益广告的内容了，倒是说说你究竟发现什么了吧。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face3#嗯，事情变得越来越有趣了呢。", 1531001);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.fieldEffect_PlayBGM("Bgm43.img/Unknown Part Of City");
        qm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300);
        qm.inGameDirectionEvent_AskAnswerTime(1600);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("你还记得用W.M.这个ID的人吗？那个在网上周期性地发出加密信息的ID。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("一开始大家都觉得他没什么了不起的，但是随着时间的推移……", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("人们发现那个信息发出来的时间，和城市里发生事件或事故的时间越来越重合，也就是说W.M.一旦发出信息，过不了多久城市里就会出现奇怪的怪物。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("有许多黑客都说W.M.是个预言家，但是……", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("这不可能的啊。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("是啊，从常识的角度来看，与其说这是预言，倒不如说这更接近于是一种犯罪预告。这就是我们共同的意见。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("难道你已经解读了W.M.的信息了吗，杰？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("嗯，没想到还是蛮简单的。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("之所以其他国家的黑客未能破解是有原因的，只有将这个信息和相同时刻我们国家的电视台信号相结合才能得出答案，暗号本身只是莫斯码的一种变形，想要解开并不难。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("……就好像有种故意等待某人解开暗号的感觉呢。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("警察都知道了吗？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("应该还不知道吧，警察的网络调查网中并没有相应信息。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("暗号的内容呢？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("怪物出现的时间和地点，可是那个地点……好像就是#b凯内西斯你所上的学校#k。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#……你说是#b学校#k？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#怎么样，很奇怪吧？", 1531001);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300);
        qm.inGameDirectionEvent_AskAnswerTime(1600);
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(800);
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}
