var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        //ms.setRemoveAdditionalEffect();//这里报错
        //ms.setVansheeMode(1);
        //FieldEffect 10 01 FF 00 00 00 00 00 00 00 00 00 00 00
        //ms.setCameraZoom(0, 2500, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(1500);   //延时(毫秒)
    } else if (status == 1) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);   //延时(毫秒)
    } else if (status == 2) {
        ms.sendNextNoESC("你能听到吗……听到了吗？", 1540940);
    } else if (status == 3) {
        ms.sendNextSNoESC("这个声音是……？");
    } else if (status == 4) {
        //ms.setCameraZoom(8000, 1000, 8000, 0, 0);
        //LP_FieldEffect 10 00 00 00 00 00 00 00 00 00 70 17 00 00
        ms.inGameDirectionEvent_AskAnswerTime(1000);   //延时(毫秒)
    } else if (status == 5) {
        //LP_FieldEffect  Sound/SoundEff.img/blackHeaven/toaird
        //05 24 00 53 6F 75 6E 64 2F 53 6F 75 6E 64 45 66 66 2E 69 6D 67 2F 62 6C 61 63 6B 48 65 61 76 65 6E 2F 74 6F 61 69 72 64 00 00 00
        ms.sendNextNoESC("啊，真是太好了。你能听到我们的声音啊。", 1540940);
    } else if (status == 6) {
        ms.sendNextNoESC("我们很害怕，#r门那边#k有双看不见的手正在牵引着我们……只有你才能解救我们。", 1540940);
    } else if (status == 7) {
        ms.askMenuNoESC("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L0# #b黑魔法师为什么要把你们带走？#l\r\n#L1# 所谓的艾尔达是？#l\r\n#L2# 为了得到你们的力量，我该怎么做呢？#l\r\n#L3# 我没有其他问题了。#l", 1540940);
    } else if (status == 8) {
        if (selection == 0) {
            status = 6;
            ms.sendNextNoESC("黑魔法师打算利用我们，创造#r新世界#k。不知道从何时开始，我们艾尔达就被未知的力量牵引，像江水一样流入更高的次元……如果继续这样下去，我们会逐渐消失，最终#b这个世界将会消亡#k。", 1540940);
        } else if (selection == 1) {
            status = 6;
            ms.sendNextNoESC("从远古时期开始，我们就是构成这个世界的最纯粹的能量…所有生命和物质都从艾尔达中诞生，并返回到艾尔达。如果没有我们，这个世界会逐渐变得面目全非。", 1540940);
        } else if (selection == 2) {
            status = 6;
            ms.sendNextNoESC("你已经足够强大，做好了接受我们力量的准备。现在你只要获得#b女神#k的一点帮助就行了。", 1540940);
        } else if (selection == 3) {
            ms.sendNextNoESC("我们现在又要分散，流入某个未知的地方了……那是我们的宿命。", 1540940);
        }
    } else if (status == 9) {
        ms.sendNextPrevNoESC("请记住，这个世界的命运就掌握在你的手中……", 1540940);
    } else if (status == 10) {
        //LP_FieldEffect  10 01 FF 00 00 00 00 00 00 00 F4 01 00 00
        ms.inGameDirectionEvent_AskAnswerTime(500);   //延时(毫秒)
    } else if (status == 11) {
        ms.sendNextSNoESC("刚刚我看到的究竟是什么呢？再次和#b旁观者#k对话吧。");
    } else if (status == 12) {
        ms.inGameDirectionEvent_AskAnswerTime(500);   //延时(毫秒)
    } else if (status == 13) {
        //ms.setVansheeMode(0);
        ms.setInGameDirectionMode(false);  //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(270010111);
        ms.setCustomData(1460, "1");
        ms.dispose();
    }
}