/* 红包 */

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
    if (status == 0 ) {
	var random = new java.util.Random();
	var mesos = (random.nextInt(8)+1) * 10000000;
	im.gainMeso(mesos);
	im.gainItem(2430210, -1);
	im.dispose();
    im.sendOk("恭喜你获得了 " + mesos + " 金币");
    }
	
}
