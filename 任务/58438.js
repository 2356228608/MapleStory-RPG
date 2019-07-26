var status = -1;

function start(mode, type, selection) {
    switch (status) {
        case 1:
        case 2:
        case 3:
            status++;
            break;
        default:
            if (mode == 1) {
                status++;
            } else {
                status--;
            }
    }

    if (status == 0) {
        qm.sendNext_New("我来告诉你时空旅行的方法吧。 \r\n有看到那边的右侧的时空隙缝吗？可以从这隙缝移动至异世界。", 0x20, 1);
    } else if (status == 1) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.inGameDirectionEvent_PushMoveInfo(0, 1500, 520, 100);
    } else if (status == 2) {
        qm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 3) {
        qm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status == 4) {
        qm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.sendNextPrevNew("啊?好期待会是什麽样的地方！!", 0x38, 1);
    } else if (status == 5) {
        qm.sendNextPrevNew("啊啊…在这说明不如实际体验最快。\r\n不过有一个注意事项，就是在那世界无法使用#h0#在枫之谷所能使用的技能。因为时空不同，这应该这也不算什麽。", 0x20, 1);
    } else if (status == 6) {
        qm.sendNextPrevNew("什麽?!!!!!!!!!!!", 0x38, 1);
    } else if (status == 7) {
        qm.sendNextPrevNew("这是我给你的礼物! 时空之石。使用此石头就可以从异世界回到这里。", 0x20, 1);
    } else if (status == 8) {
        if (!qm.canHold(2433281)) {
            qm.topMsg("消耗栏位不足。请空出 1格以上的空位。");
            qm.dispose();
            return;
        }
        qm.gainItem(2433281, 1, 30);
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
