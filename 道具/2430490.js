/* GM奖励 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
		im.gainItem(2430490, -1);
        im.gainNX(10000);
		im.worldSpouseMessage(0x24, "『GM测试奖励』：【" + im.getChar().getName() + "】 帮助测试,恭喜获得GM奖励点卷1万");
		im.dispose();
		im.sendOk("恭喜奖励点卷1万.");
    }
}