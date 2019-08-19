/* RED 1st impact
 [Riena Strait] Get it Strait
 Lilin
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else
    if (status == 2) {
        qm.sendNext("你太忙了吗？");
        qm.dispose();
        status--;
    }
    if (status == 0) {
        qm.sendNext("被冰川覆盖的里恩地区的环境正在发生变化。看祥子是出了什么不寻常的事。");
    } else if (status == 1) {
        qm.sendNextPrev("...");
    } else if (status == 2) {
        qm.askAcceptDecline("接下来的话不是明摆着嘛，我想要将此次事件的解决交给你，你能不能现在来这里？\r\n\r\n#b#e（接受时自动前往里恩。）");
    } else if (status == 3) {
        qm.sendNext("我会在里恩等你。");
    } else if (status == 4) {
        qm.warp(140000000, 0);
        qm.forceStartQuest();
        qm.dispose();
    }
}