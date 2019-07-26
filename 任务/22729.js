/*
 * 超能力者任务 - 黑猫不吉利？(22729)
 * 地图：据点 - 总部 (331001000)
 * 任务：黑猫不吉利？(22729)
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
        qm.sendNextNoESC_Bottom("哎哟？这种地方居然有猫，喵喵啊，这里现在很危险的。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#喵！！", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("让我瞧瞧……你，还是小朋友啊。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face5#哈！！！", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("哎哟呵？你现在这是在发火吗？你这个小不点，你是没了妈妈吗？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face5#啊！！！！！！ ", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("哈哈，不过你看上去还挺有韧性的嘛，我看你也无处可去了，跟我走吧？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#……喵呜！", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("好吧，既然你是黑色的……内罗！内罗怎么样？", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#……", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#你说你特别喜欢？你也不想想这是谁起的，这是当然的咯。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#……喵……", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(带回去吧？)#k", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#b(赶紧回到杰那里。)#k", 1531000);
    } else if (status === i++) {
        qm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;E1=1;kinetuto2=1;E2=1;blackCat=2;E3=1");
        qm.forceStartQuest();
        //qm.sendTestPacket("EF 02 01 7B 5C 17 00 FD BA C4 04 00 00 00 00");
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        if (qm.isQuestActive(22729)) {
            qm.setPartner(1, 1531003, 80001789, 0);
            qm.dispose();
        }
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
        qm.sendNextNoESC_Bottom("赶紧过来……等等，你后面那是什么？", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#喵！", 1531001);
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy");
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("额！……猫……甚至还是只野猫。\r\n肯定浑身都是细菌和病毒……跳……！说不定还有跳蚤和虱子！\r\n你怎么会带了只野猫回来，多危险啊！赶紧给送回去。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("啊！冷静点，杰，你瞧瞧这个小不点的脚，它这么小一只，在那么危险的地方还能逃得出去吗？我要是送它回去它会死的。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face4#喵！", 1531003);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#你瞧瞧，这家伙也说是啊，你要摸摸它的脚掌嘛？软乎乎的呢！", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face5#额……啊，不要！\r\n总之我知道了，我知道了，不要离我太近。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face5#你为什么……为什么要把那么危险的生物带回来？\r\n我不是让你去带来可以分析怪物的资料嘛。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#啊，提起这个，在这里。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face6#……那是什么，灰尘？！\r\n这，天底下我最讨厌的就是灰尘了！", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face8#站住,就在那里,不要再靠近了。\r\n你要是靠过来，我就把这些资料全都初始化。", 1531001);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face2#来，我想让你再靠近一点看嘛。", 1531000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face7##fs30#凯内西斯！！！", 1531001);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500);
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000);
        qm.inGameDirectionEvent_AskAnswerTime(1400);
    } else if (status === i++) {
        qm.effect_Text("#fnNanum Gothic ExtraBold##fs26#第二天\r\n#fs14#-据点-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        qm.inGameDirectionEvent_AskAnswerTime(2500);
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.gainExp(750);
        qm.gainItem(4034602, -10);
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
    } else {
        qm.dispose();
    }
}
