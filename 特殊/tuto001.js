var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
        cm.sendNextS("你有什么话要对我说?", 3);
    else if (chat == 1)
        cm.sendNextPrevS("你叫什么名字?", 1, 1106000);
    else if (chat == 2)
        cm.sendNextPrevS("我没有一个。就给我打电话# bkiddo #K.这就是老人给我打电话.", 3);
    else if (chat == 3)
        cm.sendNextPrevS("他是你的爷爷吗？你父母在哪里？", 1, 1106000);
    else if (chat == 4)
        cm.sendNextPrevS("我没有任何家庭。我只是在这里工作。\r\n # B（所有的问题吗？是什么）# K \ r \ nlook，我必须回到老人回来之前的工作…", 3);
    else if (chat == 5)
        cm.sendNextPrevS("你知道名字chromile？光之骑士？", 1, 1106000);
    else if (chat == 6)
        cm.sendNextPrevS("不，我从来没听说过这个家伙…\r\n #B（为什么那个名字听起来熟悉吗？)", 3);
    else if (chat == 7)
        cm.sendNextPrevS("#你小子！我告诉你要搬箱子，不要跟我的客户聊天！", 1, 0, 1106002);
    else if (chat == 8) {
        cm.sendNextPrevS("我正要把它清理干净…\ r \ n对不起，我必须按他说的去做…", 3);
    } else if (chat == 9) {
        cm.forceCompleteQuest(20030); //If you complete the quest, Neinheart dissapears
        cm.dispose();
        cm.mihileNeinheartDisappear();
    }
}