function start() {
    cm.sendNextSNoESC("It was like... a small shining light...");
}

function action(mode, type, selection) {
    cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
    cm.warp(913070002, 0);
    cm.dispose();
}