var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        ms.curNodeEventEnd(true);
        ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene0");
        ms.inGameDirectionEvent_AskAnswerTime(14000);
    } else {
        ms.warp(910150006, 0);
        ms.dispose();
    }
}
