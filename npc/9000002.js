function start() {
	cm.askYesNo("准备好领取奖励要出去了吗?");
}

function action(mode, type, selection) {
    if (mode == 1) {
		if (cm.getBossLog("林中之城跳跳") <= 0)
    {
        cm.gainItem(4310129, 30);
        cm.gainNX(500);
        cm.setBossLog("林中之城跳跳");
        cm.worldSpouseMessage(0x17, "[林中之城跳跳] : 【" + cm.getChar().getName() + "】成功通关，获得大量奖励！  ");
        cm.dispose();
		cm.sendOk("恭喜你获得了30个#v4310129##b#t4310129##k以及#r500#k点卷");
    } else {
        cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
        cm.dispose();
    }
	cm.warp(910000000, 0);
    }
    cm.dispose();
}

