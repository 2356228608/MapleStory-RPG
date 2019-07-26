var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 0) {
        cm.dispose();
        cm.sendNext("你还没准备好吗,准备好了再来找我吧!");
        status--;
    }
    if (status == 0) {
        cm.askYesNo("伟大的魔法师女皇交给你新手任务,是否接受？");
    } else if (status == 1) {
        if (cm.getBossLog("新手任务") == 0) {
            if (cm.getJob() == 3001) {//恶魔
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(931050310, 0);
            } else if (cm.getJob() == 0) {//新手
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(4000000, 0);
            } else if (cm.getJob() == 2002) {//双弩精灵
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(910150000, 0);
            } else if (cm.getJob() == 4001) {//剑豪
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(807100010, 0);
            } else if (cm.getJob() == 4002) {//阴阳师
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(807100110, 0);
            } else {
                cm.setBossLog("新手任务", 1);
                cm.dispose();
                cm.warp(50000, 0);
            }
        } else {
            cm.dispose();
            cm.sendOk("#e#r你已经领取去过新手奖励和完成任务了!");
        }
    }
}