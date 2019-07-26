var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("这门直通到Ereve。这个地方一定会有骑士的。听起来像是我喜欢的地方。", 17);
    else if (status == 1) {
        cm.warp(915000300, 0);
        cm.dispose();
    }
}