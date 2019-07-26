var status = 0;

function complete(mode, type, selection) {
    status++;
    switch (status) {
        case 1:
            qm.forceCompleteQuest();
            qm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
            qm.sendNextS("The ship should be beyond the portal. That's our ticket out of here... if we can get in.", 9);
            break;
        case 2:
            qm.sendNextPrevS("The lockdown protocols are going to be impossible to get by without the #rMaster Key#k...", 9);
            break;
        case 3:
            qm.sendNextPrevS("Master Key?!", 3);
            break;
        case 4:
            qm.sendNextPrevS("The #bKey Keeper#k should have it. Hurry and get the #rMaster Key#k before the guards come!", 9);
            break;
        case 5:
            qm.topMsg("Follow the arrows to the Key Keeper's Room.");
            qm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            qm.dispose();
            break;
    }
}