/* global ms */
        var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }
    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.inGameDirectionEvent(7, 1000, 4000, 800, 360, 270);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        cm.sendNextS("这个……是逃走的蘑菇大臣的通缉传单,还没抓到吗？");
    } else if (status === i++) {
        //cm.inGameDirectionEvent(7, 0, 1000, 0x7FFFFFFF, 0x7FFFFFFF, 0x7FFFFFFF);
        //cm.inGameDirectionEvent(5, 1, 0);
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
    } else {
        cm.dispose();
    }
}