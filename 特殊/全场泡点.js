/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  @Author 娜娜 
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 2 && mode == 0) {
            cm.sendNext("。。。");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.askYesNo("确定想拥有泡点神器吗?需要花费100000点卷哦.");
        } else if (status == 1) {
			if (cm.getPlayer().getCSPoints(1)  > 100000) {
                cm.gainNX(1, -100000);
                cm.gainItem(2430865, 1);
				cm.worldMessage("『泡点神器』 " + cm.getName() + " 玩家在服务中心购买道具全场泡点神器.");
                cm.dispose();
				cm.sendOk("购买成功了！");
            } else {
                cm.dispose();
				cm.sendOk("对不起，你没有足够的抵用卷。");
            }
        }
    }
}